import { IsEmail, IsInt, Length, Max, Min } from 'class-validator';
import { Entity, ObjectIdColumn, ObjectID, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    @Length(3, 50)
    firstName: string;
    
    @Column()
    @Length(3, 50)
    lastName: string;

    @Column()
    @IsInt()
    @Min(0)
    @Max(99)
    age: number;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    tweets: Array<any>;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
};