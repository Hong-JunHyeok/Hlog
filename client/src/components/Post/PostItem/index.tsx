import { VFC } from "react";
import { Post } from "../../../types/Post";
import { getArrayLength } from "../../../utils/getArrayLength";
import { StyledPost } from "./styles";

const PostItem: VFC<Post> = (post) => {
  return (
    <StyledPost>
      <h1>{post.title}</h1>
      <div className="meta">
        <div>
          <span className="author">{post.author}</span>
          <span className="createdAt">{post.createdAt}</span>
        </div>
        <div>
          <span className="likers">{getArrayLength(post.likes)}</span>
          <span className="comments">{getArrayLength(post.comments)}</span>
        </div>
      </div>
    </StyledPost>
  );
};

export default PostItem;
