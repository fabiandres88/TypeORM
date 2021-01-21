import { IsEmail, IsInt, Length, Max, Min } from 'class-validator';
import { Entity, ObjectIdColumn, ObjectID, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate } from 'typeorm';

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
    @Length(4, 10)
    dni: string;

    @Column()
    @IsInt()
    @Min(1)
    @Max(99)
    age: number;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    @Length(12, 15)
    password: string;

    @Column()
    tweets: Array<any>;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
};