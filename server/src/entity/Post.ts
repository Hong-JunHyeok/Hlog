import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
  UpdateDateColumn,
} from "typeorm";
import Comment from "./Comment";
import User from "./User";

@Entity("post")
export default class Post extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  post_id: string;

  @Column({
    length: 255,
    nullable: false,
  })
  title: string;

  @Column({
    nullable: true,
  })
  thumnail: string;

  @Column({
    nullable: false,
    type: "text",
  })
  content: string;

  @Column({
    nullable: false,
  })
  author: string;

  @Column("timestampz")
  @CreateDateColumn()
  createdAt: Date;

  @Column("timestampz")
  @UpdateDateColumn({
    nullable: true,
  })
  updatedAt: Date;

  @OneToMany((type) => Comment, (comment) => comment.comment_id)
  comment: Comment[];

  @ManyToOne((type) => User, (user) => user.user_id, {
    onDelete: "CASCADE",
    primary: true,
  })
  @JoinColumn({ name: "fk_user_id" })
  user: User;

  @RelationId((post: Post) => post.user)
  userId: string;
}
