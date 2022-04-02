import React from "react";
import ContentCard from "../components/contentCard/ContentCard";
import Header from "../components/header/Header";
import ReviewBox from "../components/review/ReviewBox";

const ReviewPage = (props) => {
  return (
    <>
      <Header />
      <ContentCard />
      <ReviewBox />
    </>
  );
};

export default ReviewPage;
