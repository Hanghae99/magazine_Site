import React from "react";
import ContentCard from "./ContentCard";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../../redux/modules/post";

const MainContent = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  React.useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB());
    }
  }, []);
  return (
    <>
      {post_list.map((post, idx) => {
        return <ContentCard key={post.id} {...post} />;
      })}
    </>
  );
};

export default MainContent;
