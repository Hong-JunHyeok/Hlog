import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import FormLayout from "../../Layout/FormLayout";
import { LoginFormContainer } from "./styles";

const LoginForm = () => {
  return (
    <FormLayout formTitle="로그인">
      <LoginFormContainer autoComplete="off">
        <input
          type="text"
          className="login-input"
          placeholder="아이디를 입력해주세요."
        />
        <input
          type="password"
          className="login-input"
          placeholder="비밀번호를 입력해주세요."
        />
        <button type="submit" className="login-button">
          로그인
        </button>
        <span className="login-goto_join">
          회원이 아니신가요? <Link href="/auth/join">회원가입</Link>
        </span>
      </LoginFormContainer>
    </FormLayout>
  );
};

export default LoginForm;
