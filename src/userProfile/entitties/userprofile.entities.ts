import { IsEmail, IsNotEmpty } from 'class-validator';
import { Column, CreateDateColumn, Entity, Generated, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Userprofile {
   @PrimaryColumn({type:"uuid"})
   @Generated("uuid")
   Id:string
   @IsNotEmpty()
   @Column()
   NameTitle:string
   @IsNotEmpty()
   @Column()   
   FirstName:string
   @IsNotEmpty()
   @Column()
   LastName:string
   @IsEmail()
   @IsNotEmpty()
   @Column()
   Email:string
   @IsNotEmpty()
   @IsNotEmpty()
   @Column()
   DOB:string
   @IsNotEmpty()
   @Column()
   Gender:string
   @IsNotEmpty()
   @Column()
   Profession:string
   @IsNotEmpty()
   @Column()
   Nationality:string
   @IsNotEmpty()
   @Column()
   NID:string
   @Column()
   Address:string
   @IsNotEmpty()
   @Column()
   Mobile:string
   @IsNotEmpty()
   @Column()
   PassportNumber:string
   @IsNotEmpty()
   @Column()
   PassportExpireDate:string
   @IsNotEmpty()
   @Column()
   PassportCopy:string
   @IsNotEmpty()
   @Column()
   PassportSizePhoto: string
   @IsNotEmpty()
   @Column()
   FaceBookId:string
   @IsNotEmpty()
   @Column()
   whatsApp:string
   @IsNotEmpty()
   @Column()
   LinkedIn:string
   @CreateDateColumn()
   CreatedAt:Date
   @UpdateDateColumn()
   UpdatedAt:Date
}
