import List from "../../Common/List";

import RecommentInput from "../RecommentInput";
import { RecommentListContainer } from "./styles";

const RecommentList = () => {
  return (
    <RecommentListContainer>
      <div className="recomment-wrapper">
        <List items={[]} renderItems={() => <></>} />
        <RecommentInput />
      </div>
    </RecommentListContainer>
  );
};

export default RecommentList;
