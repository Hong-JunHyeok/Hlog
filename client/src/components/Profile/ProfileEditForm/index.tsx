import { useUserState } from "../../../hooks/states/useUserState";
import useInput from "../../../hooks/useInput";
import { ButtonComponent } from "../../Common/Button";
import { StyledProfileEditForm } from "./styles";

export const ProfileEditForm = () => {
  const { me } = useUserState();

  const [editName, onChangeEditName] = useInput(me?.name);
  const [editDesc, onChangeEditDesc] = useInput(me?.desc);

  return (
    <StyledProfileEditForm>
      <section className="edit name require ">
        <h1>이름</h1>
        <input
          type="text"
          placeholder="이름을 입력해주세요.(필수)"
          value={editName}
          onChange={onChangeEditName}
        />
      </section>
      <section className="edit desc">
        <h1>자기소개</h1>
        <textarea
          placeholder="자기소개를 입력해주세요."
          value={editDesc}
          onChange={onChangeEditDesc}
        />
      </section>
      <section className="edit password">
        <h1>비밀번호</h1>
        <ButtonComponent>비밀번호 수정</ButtonComponent>
      </section>
    </StyledProfileEditForm>
  );
};

export default ProfileEditForm;
