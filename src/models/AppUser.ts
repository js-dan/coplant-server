import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"; 
import {AppOrder} from "./AppOrder";
@Entity()
export default class AppUser {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  phone!: string;

  @Column({ type: 'double precision' })
  latitude!: number;

  @Column({ type: 'double precision' })
  longitude!: number;

  // @OneToMany(type => AppOrder, order => order.user) order: AppOrder[];  
}
