import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useUserDispatch } from "../../../hooks/dispatches/useUserDispatch";
import { useUserState } from "../../../hooks/states/useUserState";
import useInput from "../../../hooks/useInput";
import { useLink } from "../../../hooks/useLink";
import FormLayout from "../../Layout/FormLayout";
import { JoinFormContainer } from "./styles";

const JoinForm = () => {
  const { handlePushLink: handlePushLogin } = useLink("/auth/login");

  const [id, onChangeId] = useInput("");
  const [pw, onChangePw] = useInput("");
  const [checkPw, onChangeCheckPw] = useInput("");
  const [name, onChangeName] = useInput("");
  const [desc, onChangeDesc] = useInput("");

  const [notSamePasswordError, setNotSamePasswordError] = useState(false);

  const { joinDone, joinLoading, joinError } = useUserState();
  const { dispatchJoin } = useUserDispatch();

  const handleJoin = useCallback(
    (e: React.FormEvent<HTMLElement>) => {
      e.preventDefault();
      if (pw !== checkPw) {
        toast.error("비밀번호가 같지 않습니다.");
        setNotSamePasswordError(true);
        return;
      }

      dispatchJoin({ id, pw, name, desc });
    },
    [id, pw, checkPw, name, desc, notSamePasswordError],
  );

  useEffect(() => {
    if (joinDone) {
      toast.success("유저 등록에 성공했습니다.");
      handlePushLogin();
    }
  }, [joinDone]);

  useEffect(() => {
    if (joinError) {
      toast.error(joinError.message);
    }
  }, [joinError]);

  useEffect(() => {
    if (pw === checkPw) {
      setNotSamePasswordError(false);
    }
  }, [pw, checkPw, notSamePasswordError]);

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
          <h1 className={notSamePasswordError && "error"}>비밀번호</h1>
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
          <h1>이름 (닉네임)</h1>
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
          {joinLoading ? "로딩 중..." : "회원가입"}
        </button>
        <span className="join-goto_join">
          <Link href="/auth/login">로그인</Link> 하러 가기
        </span>
      </JoinFormContainer>
    </FormLayout>
  );
};

export default JoinForm;
