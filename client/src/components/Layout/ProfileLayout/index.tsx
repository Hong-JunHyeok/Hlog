import { FC } from "react";
import { useUserState } from "../../../hooks/states/useUserState";
import { StyledProfileLayout } from "./styles";

const ProfileLayout: FC = ({ children }) => {
  const { me } = useUserState();

  return (
    <StyledProfileLayout>
      <h1>{me?.name}님의 프로필</h1>
      {children}
    </StyledProfileLayout>
  );
};

export default ProfileLayout;
