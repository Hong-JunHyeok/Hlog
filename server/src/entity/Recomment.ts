import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
} from "typeorm";

export default class Recomment extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  recomment_id: string;
}
