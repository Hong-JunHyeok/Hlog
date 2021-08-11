import { VFC } from "react";
import Image from "next/image";
import { Post } from "../../../types/Post";
import { getArrayLength } from "../../../utils/getArrayLength";
import { StyledPost } from "./styles";
import { sizesModule } from "../../../styles/sizes";
import { useLink } from "../../../hooks/useLink";
import getDistanceToNow from "../../../utils/getDistanceToNow";

const PostItem: VFC<Post> = (post) => {
  const { handlePushLink } = useLink(`/post/${post.post_id}`);

  return (
    <StyledPost onClick={handlePushLink}>
      <div className="thumnail">
        {post.thumnail && (
          <Image
            src={`http://localhost:8080/${post.thumnail}`}
            alt=""
            width={sizesModule.pageMaxWidth}
            height={500}
            blurDataURL={post.thumnail}
            placeholder="blur"
          />
        )}
      </div>
      <h1>{post.title}</h1>
      <div className="meta">
        <div>
          <span className="author">{post.author}</span>
          <span className="createdAt">{getDistanceToNow(post.createdAt)}</span>
        </div>
        <div>
          <span className="likers">{getArrayLength([1, 2, 3])}</span>
          <span className="comments">{getArrayLength([1, 2, 3])}</span>
        </div>
      </div>
    </StyledPost>
  );
};

export default PostItem;
