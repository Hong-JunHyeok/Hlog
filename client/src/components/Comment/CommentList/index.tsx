import { CommentListContainer } from "./styles";
import { Comment } from "../../../types/Comment";
import List from "../../Common/List";
import CommentItem from "../CommentItem";
import { useCallback, useEffect, useState, VFC } from "react";

interface IProps {
  commentsData: Comment[];
}

const CommentList: VFC<IProps> = ({ commentsData }) => {
  const [toggleList, setToggleList] = useState<Array<boolean>>(
    Array(commentsData.length).fill(false),
  );

  const changeToggleListByIndex = useCallback(
    (index: number) => {
      const copyToggleList = [...toggleList];

      copyToggleList[index] = !copyToggleList[index];

      setToggleList(copyToggleList);
    },
    [toggleList],
  );

  return (
    <CommentListContainer>
      <List
        items={commentsData}
        renderItems={(commentData: Comment, index: number) => {
          const toggleState = toggleList[index];

          return (
            <CommentItem
              key={commentData.comment_id}
              changeToggleListByIndex={() => changeToggleListByIndex(index)}
              commentData={commentData}
              mode="comment"
              toggleState={toggleState}
            />
          );
        }}
      />
    </CommentListContainer>
  );
};

export default CommentList;
