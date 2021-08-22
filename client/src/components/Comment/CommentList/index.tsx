import { CommentListContainer } from "./styles";
import { Comment } from "../../../types/Comment";
import List from "../../Common/List";
import CommentItem from "../CommentItem";
import { useEffect, VFC } from "react";
import { useRecommentState } from "../../../hooks/states/useRecommentState";
import { useRecommentDispatch } from "../../../hooks/dispatches/useRecommentDispatch";

interface IProps {
  commentsData: Comment[];
}

const CommentList: VFC<IProps> = ({ commentsData }) => {
  return (
    <CommentListContainer>
      <List
        items={commentsData}
        renderItems={(commentData: Comment) => {
          return (
            <CommentItem
              key={commentData.comment_id}
              commentData={commentData}
              mode="comment"
            />
          );
        }}
      />
    </CommentListContainer>
  );
};

export default CommentList;
