import { useCallback, VFC } from "react";
import Image from "next/image";
import { Post } from "../../../types/Post";
import { StyledPost } from "./styles";
import { sizesModule } from "../../../styles/sizes";
import { useLink } from "../../../hooks/useLink";
import getDistanceToNow from "../../../utils/getDistanceToNow";
import { backUrl } from "../../../config/config";

const PostItem: VFC<Post> = (post) => {
  const { handlePushLink: handlePushPostPage } = useLink(
    `/post/${post.post_id}`,
  );
  const { handlePushLink: handlePushUserPage } = useLink(
    `/profile/${post.userId}`,
  );

  const handleClickAuthor = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    handlePushUserPage();
  }, []);

  return (
    <StyledPost onClick={handlePushPostPage}>
      <div className="thumnail">
        {post.thumnail && (
          <Image
            src={`${backUrl}/${post.thumnail}`}
            alt={post.thumnail}
            width={sizesModule.pageMaxWidth}
            height={800}
            blurDataURL={`${backUrl}/${post.thumnail}`}
            placeholder="blur"
          />
        )}
      </div>
      <div className="meta">
        <h1>{post.title}</h1>
        <div>
          <span className="author" onClick={handleClickAuthor}>
            {post.author}
          </span>
          <span className="createdAt">{getDistanceToNow(post.createdAt)}</span>
        </div>
        <div>
          {/* <span className="likers">{getArrayLength([1, 2, 3])}</span>
          <span className="comments">{getArrayLength([1, 2, 3])}</span> */}
        </div>
      </div>
    </StyledPost>
  );
};

export default PostItem;
