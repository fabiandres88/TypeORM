import {Entity, ObjectIdColumn, ObjectID, Column, OneToMany} from 'typeorm';
import { Tweet } from './tweet';

@Entity( {name: 'users'} )
export class User {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @OneToMany(type => Tweet, (tweet) => tweet.user)
    tweets: Tweet[];
}
