import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class AppUser {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column('text',{nullable:true})
  name!: string;

  @Column('text',{nullable:true})
  email!: string;

  @Column('text',{nullable:true})
  password!: string;

  @Column('text',{nullable:true})
  description!: string;

  @Column('text',{nullable:true})
  address!: string;

  @Column('text',{nullable:true})
  imageURL: string;

  @Column('bool',{nullable:true})
  isCaregiver!: boolean;

  @Column({ type: 'double precision' })
  note!: number;
}
