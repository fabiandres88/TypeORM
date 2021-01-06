import {Entity, ObjectIdColumn, ObjectID, Column} from 'typeorm';
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
}
