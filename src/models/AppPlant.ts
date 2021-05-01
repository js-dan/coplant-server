import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class AppPlant {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  imageURL!: string;

  @Column()
  qtd!: number;
}
