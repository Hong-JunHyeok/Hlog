import { Comment } from "../../../types/Comment";
import List from "../../Common/List";
import CommentItem from "../CommentItem";

import RecommentInput from "../RecommentInput";
import { RecommentListContainer } from "./styles";

interface IRecommentProps {
  recomments: Comment[];
}

const RecommentList = () => {
  return (
    <RecommentListContainer>
      <div className="recomment-wrapper">
        <List
          items={[
            {
              comment_id: "12hsiabdijqwjebqwe",
              author: "홍준혁",
              content: "답글11111111",
              created_at: "2021-08-19",
            },
          ]}
          renderItems={(commentData: Comment) => (
            <CommentItem
              key={commentData.comment_id}
              commentData={commentData}
              mode="recomment"
            />
          )}
        />
        <RecommentInput />
      </div>
    </RecommentListContainer>
  );
};

export default RecommentList;
