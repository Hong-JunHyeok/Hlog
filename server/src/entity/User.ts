import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import Post from "./Post";

@Entity("user")
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  user_id: string;

  @Column({
    length: 30,
    nullable: false,
  })
  id: string;

  @Column({
    length: 30,
    nullable: false,
  })
  pw: string;

  @Column({
    length: 30,
    nullable: false,
  })
  name: string;

  @Column({ length: 255, nullable: true })
  desc: string;

  @Column({
    nullable: false,
  })
  isAdmin: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany((type) => Post, (post) => post.post_id)
  post!: Post[];
}
