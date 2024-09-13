"use client";
import React from "react";
import { useState } from "react";
const Home = ({ data }) => {
  console.log(data);

  return (
    <>
      <h1>{data?.attributes?.title}</h1>
    </>
  );
};

export default Home;
