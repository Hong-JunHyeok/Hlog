import {
  Column,
  Entity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  RelationId,
} from "typeorm";
import Post from "./Post";

@Entity("comment")
export default class Comment extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  comment_id: string;

  @Column({
    length: 255,
    nullable: false,
  })
  user_id: string;

  @Column({
    length: 255,
    nullable: false,
  })
  author: string;

  @Column("text", {
    nullable: false,
  })
  content: string;

  @Column("timestampz")
  @CreateDateColumn()
  created_at: Date;

  @ManyToOne((type) => Post, (post) => post.post_id, {
    onDelete: "CASCADE",
    primary: true,
  })
  @JoinColumn({ name: "post_id" })
  post: Post;

  @RelationId((comment: Comment) => comment.post)
  post_id: string;
}
