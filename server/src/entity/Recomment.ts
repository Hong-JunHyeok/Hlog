import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  RelationId,
} from "typeorm";
import Comment from "./Comment";

@Entity("recomment")
export default class Recomment extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  recomment_id: string;

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

  @Column("text")
  content: string;

  @Column("timestampz")
  @CreateDateColumn()
  created_at: Date;

  @ManyToOne((type) => Comment, (comment) => comment.comment_id, {
    onDelete: "CASCADE",
    primary: true,
  })
  @JoinColumn({ name: "comment_id" })
  comment: Comment;

  @RelationId((recomment: Recomment) => recomment.comment)
  commentId: string;
}
