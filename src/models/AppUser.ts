import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
