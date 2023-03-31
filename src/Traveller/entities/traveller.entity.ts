import { OneToMany } from 'typeorm';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Booking } from 'src/booking/entity/booking.entity';

@Entity()
export class Traveller {
   @PrimaryGeneratedColumn('uuid')
   TravellerId:string
   @Column()   
   FirstName:string
   @Column()
   LastName:string
   @Column()
   DOB:string
   @Column()
   Email: string
   @Column()
   Gender:string
   @Column()
   PassportNumber:string
   @Column()
   PassportExpireDate:string
   @Column()
   PassportCopyURL:string
   @CreateDateColumn()
   CreatedAt:Date
   @UpdateDateColumn()
   UpdatedAt:Date
   @OneToMany(()=>Booking,(booking)=>booking.travelers, {eager:true})
   bookings:Booking;
}