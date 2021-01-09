import {Entity, ObjectIdColumn, ObjectID, Column, ManyToOne} from 'typeorm';
import { User } from './User';

@Entity( {name: 'tweets'} )
export class Tweet {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    user: string    
}
