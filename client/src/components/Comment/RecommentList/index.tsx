import { VFC } from "react";
import { Comment } from "../../../types/Comment";
import List from "../../Common/List";
import CommentItem from "../CommentItem";

import RecommentInput from "../RecommentInput";
import { RecommentListContainer } from "./styles";

interface IRecommentProps {
  comment_id: string;
  recomments: Comment[];
}

const RecommentList: VFC<IRecommentProps> = ({ comment_id, recomments }) => {
  return (
    <RecommentListContainer>
      <div className="recomment-wrapper">
        <List
          items={recomments}
          renderItems={(commentData: Comment) => (
            <CommentItem
              key={commentData.comment_id}
              commentData={commentData}
              mode="recomment"
            />
          )}
        />
        <RecommentInput comment_id={comment_id} />
      </div>
    </RecommentListContainer>
  );
};

export default RecommentList;
