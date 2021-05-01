import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"; 
import {AppOrder} from "./AppOrder";
@Entity()
export default class AppUser {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  description!: string;

  @Column()
  address!: string;

  @Column()
  imageURL: string;

  @Column()
  isCaregiver!: boolean;

  @Column({ type: 'double precision' })
  note!: number;
}
