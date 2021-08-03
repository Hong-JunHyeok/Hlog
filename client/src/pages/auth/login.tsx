import Head from "next/head";
import LoginForm from "../../components/Auth/LoginForm";
import { ButtonComponent } from "../../components/Common/Button";
import AuthLayout from "../../components/Layout/AuthLayout";
import { useUserDispatch } from "../../hooks/dispatches/useUserDispatch";

const LoginPage = () => {
  const { dispatchLogIn } = useUserDispatch();

  return (
    <AuthLayout>
      <Head>
        <title>HLOG | 로그인</title>
      </Head>

      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
