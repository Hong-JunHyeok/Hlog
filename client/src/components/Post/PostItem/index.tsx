import { VFC } from "react";
import Image from "next/image";
import { Post } from "../../../types/Post";
import { getArrayLength } from "../../../utils/getArrayLength";
import { StyledPost } from "./styles";
import { sizesModule } from "../../../styles/sizes";
import { useLink } from "../../../hooks/useLink";

const PostItem: VFC<Post> = (post) => {
  const { handlePushLink } = useLink(`/post/${post.id}`);

  return (
    <StyledPost onClick={handlePushLink}>
      <Image
        src={post.thumnail}
        alt=""
        width={sizesModule.pageMaxWidth}
        height={500}
        blurDataURL={post.thumnail}
        placeholder="blur"
        className="thumnail"
      />
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
