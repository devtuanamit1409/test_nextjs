"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ENDPOINT } from "@/enums/endpoint";
const Page = () => {
  const { slug } = useParams();
  const [data, setData] = useState([]);
  const token = process.env.TOKEN_DEV;
  const url = process.env.URL_API;
  console.log(token, url);

  const fetchData = async () => {
    const response = await fetch(
      `${ENDPOINT.GET_BAI_VIET}?filters[slug][$eq]=${slug}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    setData(result?.data);
  };
  useEffect(() => {
    fetchData();
  }, [slug]);

  console.log(data);

  return (
    <div>
      <h1>Chi tiết sản phẩm {data[0]?.attributes?.title}</h1>
    </div>
  );
};

export default Page;
