import Link from "next/link";
import { useCallback } from "react";
import { useUserDispatch } from "../../../hooks/dispatches/useUserDispatch";
import useInput from "../../../hooks/useInput";
import FormLayout from "../../Layout/FormLayout";
import { JoinFormContainer } from "./styles";

const JoinForm = () => {
  const [id, onChangeId] = useInput("");
  const [pw, onChangePw] = useInput("");
  const [checkPw, onChangeCheckPw] = useInput("");
  const [name, onChangeName] = useInput("");
  const [desc, onChangeDesc] = useInput("");

  const { dispatchJoin } = useUserDispatch();

  const handleJoin = useCallback(
    (e: React.FormEvent<HTMLElement>) => {
      e.preventDefault();
      dispatchJoin({ id, pw, name, desc });
    },
    [id, pw, checkPw, name, desc],
  );

  return (
    <FormLayout formTitle="회원가입" handleSubmit={handleJoin}>
      <JoinFormContainer autoComplete="off">
        <section className="join-section">
          <h1>아이디</h1>
          <input
            type="text"
            className="join-input"
            placeholder="아이디를 입력해주세요."
            value={id}
            onChange={onChangeId}
          />
        </section>
        <section className="join-section">
          <h1>비밀번호</h1>
          <input
            type="password"
            className="join-input"
            placeholder="비밀번호를 입력해주세요."
            value={pw}
            onChange={onChangePw}
          />
          <input
            type="password"
            className="join-input"
            placeholder="비밀번호를 다시 입력해주요."
            value={checkPw}
            onChange={onChangeCheckPw}
          />
        </section>
        <section className="join-section">
          <h1>이름</h1>
          <input
            type="text"
            className="join-input"
            placeholder="이름을 입력해주세요."
            value={name}
            onChange={onChangeName}
          />
        </section>
        <section className="join-section">
          <h1>자기소개</h1>
          <textarea
            className="join-desc"
            placeholder="자기소개를 입력해주세요."
            value={desc}
            onChange={onChangeDesc}
          />
        </section>
        <section className="join-section conditions">
          <h1>약관동의</h1>
          <label htmlFor="pri">
            <input type="checkbox" id="pri" />
            개인정보 수집 이용동의(필수)
          </label>
          <label htmlFor="age">
            <input type="checkbox" id="age" />만 14세 미만 가입 제한(필수)
          </label>
        </section>
        <button type="submit" className="join-button">
          회원가입
        </button>
        <span className="join-goto_join">
          <Link href="/auth/login">로그인</Link> 하러 가기
        </span>
      </JoinFormContainer>
    </FormLayout>
  );
};

export default JoinForm;
