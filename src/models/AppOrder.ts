import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm"; 
import AppUser from "./AppUser"; 
@Entity() 
export class AppOrder{  

   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Column() 
   start_date: string;
   @Column()
   end_date: string;
   @Column()
   price: number;
   @Column()
   score_caregiver: string;
   @Column()
   score_client: string;
   @Column()
   comment: string;
   @Column()
   description: string;
   
//    @ManyToOne(type => AppUser, user => user.order) user: AppUser; 
}