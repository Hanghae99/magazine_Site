import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { actionCreators as postActions } from "../../redux/modules/post";
import { actionCreators as imageActions } from "../../redux/modules/image";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../utils/firebase";

const ReviewDetail = (props) => {
  const ImgRef = React.useRef();

  const dispatch = useDispatch();
  const history = useHistory();
  const is_login = useSelector((state) => state.user.isLogin);
  const is_uploading = useSelector((state) => state.image.uploading);
  const preview = useSelector((state) => state.image.preview);

  const [contents, setContents] = useState("");

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const addPost = () => {
    dispatch(postActions.addPostFB(contents));
  };

  if (!is_login) {
    return (
      <>
        <h1>앗 잠깐! 로그인이 필요한 서비스입니다</h1>
        <button
          onClick={() => {
            history.replace("/");
          }}
        >
          로그인하러 가기
        </button>
      </>
    );
  }

  const selectFile = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.files[0]);

    console.log(ImgRef.current.files[0]);

    const reader = new FileReader();
    const file = ImgRef.current.files[0];

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      console.log(reader.result);
      dispatch(imageActions.preview(reader.result));
    };
  };

  const uploadFB = () => {
    let image = ImgRef.current.files[0];

    const storageRef = ref(storage, `imgs/${image.name}`);
    uploadBytes(storageRef, image).then((snapshot) => {
      console.log(snapshot);
      getDownloadURL(ref(storage, `imgs/${image.name}`)).then((url) => {
        console.log(url);
      });
    });
  };

  return (
    <>
      <Wrapper>
        <div>
          <Title>게시글작성🖌</Title>
          <Input
            type="file"
            onChange={selectFile}
            ref={ImgRef}
            disabled={is_uploading}
          />
          <button onClick={uploadFB}>파일 업로드</button>
        </div>

        <Img
          src={
            preview
              ? preview
              : "http://image.kyobobook.co.kr/newimages/giftshop_new/goods/400/1005/hot1558260386696.jpg"
          }
          alt="이미지"
        />

        <div>
          <Textarea
            onChange={changeContents}
            cols="90"
            rows="20"
            placeholder="게시글 내용"
          ></Textarea>
        </div>

        <Button onClick={addPost}>작성완료</Button>
      </Wrapper>
    </>
  );
};

export default ReviewDetail;

const Img = styled.img`
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 500px;
`;

const Title = styled.h1`
  display: flex;
  justify-content: left;
  margin-left: 500px;
  color: #515931;
  margin-top: 100px;
  font-size: 900;
`;

const Input = styled.input`
  margin: 20px;
  margin-left: 500px;
`;

const Button = styled.button`
  border-style: none;
  background-color: #f29e6d;
  padding: 10px;
  color: white;
  font-weight: 500;
  font-size: larger;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 820px;
`;

const Textarea = styled.textarea`
  margin: 20px;
  margin-left: 500px;
  outline: none;
`;

const Wrapper = styled.div`
  margin-top: 120px;
`;
