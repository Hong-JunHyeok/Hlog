import Link from "next/link";
import FormLayout from "../../Layout/FormLayout";
import { JoinFormContainer } from "./styles";

const JoinForm = () => {
  return (
    <FormLayout formTitle="회원가입">
      <JoinFormContainer autoComplete="off">
        <section className="join-section">
          <h1>아이디</h1>
          <input
            type="text"
            className="join-input"
            placeholder="아이디를 입력해주세요."
          />
        </section>
        <section className="join-section">
          <h1>비밀번호</h1>
          <input
            type="password"
            className="join-input"
            placeholder="비밀번호를 입력해주세요."
          />
          <input
            type="password"
            className="join-input"
            placeholder="비밀번호를 다시 입력해주요."
          />
        </section>
        <section className="join-section">
          <h1>이메일</h1>
          <input
            type="email"
            className="join-input"
            placeholder="유저 인증 정보가 전달되기 위해서 필요합니다."
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
          로그인
        </button>
        <span className="join-goto_join">
          <Link href="/auth/login">로그인</Link> 하러 가기
        </span>
      </JoinFormContainer>
    </FormLayout>
  );
};

export default JoinForm;
