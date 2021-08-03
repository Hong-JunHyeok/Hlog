import Head from "next/head";
import { ButtonComponent } from "../../components/Common/Button";
import { useUserDispatch } from "../../hooks/dispatches/useUserDispatch";

const LoginPage = () => {
  const { dispatchLogIn } = useUserDispatch();

  return (
    <>
      <Head>
        <title>HLOG | 로그인</title>
      </Head>
      로그인 페이지
      <ButtonComponent handleFunc={dispatchLogIn}>로그인하기</ButtonComponent>
    </>
  );
};

export default LoginPage;
