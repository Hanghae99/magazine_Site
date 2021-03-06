import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { actionCreators as imageActions } from "../../redux/modules/image";
import { useSelector } from "react-redux";

const ContentCard = (props) => {
  const img = useSelector((state) => state.image);
  console.log(img);
  const history = useHistory();
  return (
    <>
      <Section
        onClick={() => {
          history.push("/review");
        }}
      >
        <Contents>
          <Profile>
            <Image />
            <Nickname>{props.user_info.user_name || ""}</Nickname>
          </Profile>
          <Title>{props.contents}</Title>
          <Img src={props.img_url} alt="이미지" />
          <TotalCom>
            <Comment>댓글 2개</Comment>
            <Comment>좋아요 99개</Comment>
            <Heart>
              <i className="fa-solid fa-heart"></i>
            </Heart>
          </TotalCom>
        </Contents>
      </Section>
    </>
  );
};
export default ContentCard;

const TotalCom = styled.div`
  display: flex;
`;

const Contents = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
`;

const Heart = styled.p`
  display: flex;
  margin-left: 700px;
  color: white;
`;

const Profile = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const Nickname = styled.h3`
  display: flex;
  margin-left: 10px;
`;

const Image = styled.div`
  background-color: white;
  border-radius: 50px;
  width: 45px;
  height: 45px;
`;

const Title = styled.h4`
  display: flex;
  font-weight: 400;
`;

const Img = styled.img``;

const Section = styled.section`
  background-color: #f2f2f2;
  border-radius: 20px;
  width: 50%;
  display: block;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin: 80px;
  margin-left: 400px;
`;

const Comment = styled.h5`
  display: flex;
  color: black;
  font-weight: 500;
  margin: 3px;
`;
