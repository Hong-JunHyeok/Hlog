import Head from "next/head";
import JoinForm from "../../components/Auth/JoinForm";
import AuthLayout from "../../components/Layout/AuthLayout";

const JoinPage = () => {
  return (
    <AuthLayout>
      <Head>
        <title>HLOG | 회원가입</title>
      </Head>
      <JoinForm />
    </AuthLayout>
  );
};

export default JoinPage;
