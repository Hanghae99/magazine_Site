axios // 로그인 요청
  .post("http://3.37.36.119/api/login", {
    username: username,
    password: password,
  })
  .then((response) => {
    axios
      .get("/api/isLogin")
      .then((reponse) => {
        // 로그인 여부 확인
        dispatch(setUser({ username: username, is_login: true }));
        console.log("로그인 성공");
      })
      .catch((err) => {
        console.log("로그인 여부 실패", err);
      });
  })
  .catch((err) => {
    console.log("로그인 요청 실패", err);
  });
