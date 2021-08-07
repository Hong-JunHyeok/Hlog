import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { useUserDispatch } from "../../../hooks/dispatches/useUserDispatch";
import { useUserState } from "../../../hooks/states/useUserState";
import useInput from "../../../hooks/useInput";
import { useLink } from "../../../hooks/useLink";
import loginValidation from "../../../utils/validation/loginValidation";
import FormLayout from "../../Layout/FormLayout";
import { LoginFormContainer } from "./styles";

const LoginForm = () => {
  const { handlePushLink: pushHome } = useLink("/");
  const { loginDone, loginLoading, loginError } = useUserState();
  const { dispatchLogIn } = useUserDispatch();

  const [id, onChangeId] = useInput("");
  const [pw, onChangePw] = useInput("");

  const handleLogin = useCallback(
    (e: React.FormEvent<HTMLElement>) => {
      e.preventDefault();
      if (loginValidation({ id, pw })) {
        dispatchLogIn({
          id,
          pw,
        });
      } else {
        // TODO 로그인 Validation 실패 시, Toastr
        alert("ID, PW는 필수입니다.");
      }
    },
    [id, pw],
  );

  useEffect(() => {
    if (loginDone) {
      pushHome();
    }
  }, [loginDone]);

  useEffect(() => {
    if (loginError) {
      alert(loginError.message);
    }
  }, [loginError]);

  return (
    <FormLayout formTitle="로그인">
      <LoginFormContainer autoComplete="off">
        <input
          type="text"
          className="login-input"
          placeholder="아이디를 입력해주세요."
          value={id}
          onChange={onChangeId}
        />
        <input
          type="password"
          className="login-input"
          placeholder="비밀번호를 입력해주세요."
          value={pw}
          onChange={onChangePw}
        />
        <button type="submit" className="login-button" onClick={handleLogin}>
          {loginLoading ? "로딩 중..." : "로그인"}
        </button>
        <span className="login-goto_join">
          회원이 아니신가요? <Link href="/auth/join">회원가입</Link>
        </span>
      </LoginFormContainer>
    </FormLayout>
  );
};

export default LoginForm;
