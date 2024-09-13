"use server";

import { ENDPOINT } from "@/enums/endpoint";
import Home from "@/components/Home";

const getHome = async () => {
  const searchData = {
    populate: ["seo.avatar", "list_partner.img_partner.image"].toString(),
  };
  const searchParams = new URLSearchParams(searchData).toString();
  const res = await fetch(`${ENDPOINT.GET_HOME}?${searchParams}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.TOKEN_DEV}`,
    },
  });

  const { data } = await res.json();

  return data;
};
export async function generateMetadata() {
  const dataHome = await getHome();
  const seo = dataHome?.attributes?.seo || {};

  console.log(seo);

  const baseUrl = process.env.URL_API;

  return {
    metadataBase: new URL(baseUrl || ""),
    title: seo.title || "Trang chủ - Công ty TNHH Kỹ thuật NTS",
    description:
      seo.description ||
      "Công ty TNHH Kỹ thuật NTS cung cấp các giải pháp kỹ thuật công trình hàng đầu.",
    keywords:
      seo.keywords ||
      "kỹ thuật, công trình, tư vấn cơ điện, xử lý nước, tái sử dụng nước",
    authors: [{ name: seo.author || "Công ty TNHH Kỹ thuật NTS" }],
    openGraph: {
      title:
        seo.ogTitle || seo.title || "Trang chủ - Công ty TNHH Kỹ thuật NTS",
      description:
        seo.ogDescription ||
        seo.description ||
        "Công ty TNHH Kỹ thuật NTS cung cấp các giải pháp kỹ thuật công trình hàng đầu.",
      url: `${baseUrl}/home`,
      images: [
        {
          url: seo.thumbnail?.data?.attributes?.url
            ? `${baseUrl}${seo.thumbnail.data.attributes.url}`
            : "/path/to/default-image.jpg",
          width: 800,
          height: 600,
          alt: "Image description",
        },
      ],
    },
    twitter: {
      title:
        seo.twitterTitle ||
        seo.title ||
        "Trang chủ - Công ty TNHH Kỹ thuật NTS",
      description:
        seo.twitterDescription ||
        seo.description ||
        "Công ty TNHH Kỹ thuật NTS cung cấp các giải pháp kỹ thuật công trình hàng đầu.",
      images: [
        seo.twitterImage
          ? `${baseUrl}${seo.twitterImage}`
          : "/path/to/default-image.jpg",
      ],
      card: "summary_large_image",
    },
  };
}

export default async function PageHome() {
  const data = await getHome();

  return (
    <>
      <Home data={data} />;
    </>
  );
}
