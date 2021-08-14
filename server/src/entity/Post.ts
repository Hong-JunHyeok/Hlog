import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
  UpdateDateColumn,
} from "typeorm";
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

  @ManyToOne((type) => User, (user) => user.user_id, {
    onDelete: "CASCADE",
    primary: true,
  })
  @JoinColumn({ name: "fk_user_id" })
  user: User;

  @RelationId((post: Post) => post.user)
  userId: string;
}
