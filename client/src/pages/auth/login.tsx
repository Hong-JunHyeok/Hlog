import Head from "next/head";
import LoginForm from "../../components/Auth/LoginForm";
import { ButtonComponent } from "../../components/Common/Button";
import ModalComponent from "../../components/Common/Modal";
import AuthLayout from "../../components/Layout/AuthLayout";
import { useUserDispatch } from "../../hooks/dispatches/useUserDispatch";

const LoginPage = () => {
  const { dispatchLogIn } = useUserDispatch();

  return (
    <AuthLayout>
      {/* <ModalComponent title="로그인 오류" content="등록되지 않은 회원입니다." /> */}
      <Head>
        <title>HLOG | 로그인</title>
      </Head>

      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
