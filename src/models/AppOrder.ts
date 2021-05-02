import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, Double} from "typeorm"; 
import AppUser from "./AppUser"; 
@Entity() 
export class AppOrder{  

   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Column() 
   id_client: string;

   @Column() 
   id_caregiver: string;

   @Column() 
   start_date: string;

   @Column()
   end_date: string;

   @Column()
   price: number;

   @Column()
   score_caregiver: number;

   @Column()
   score_client: number;

   @Column()
   comment: string;

   @Column()
   description: string;

   @Column()
   order_status: string;
   
   // @ManyToOne(type => AppUser, user => user.order) user: AppUser; 
}