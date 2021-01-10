import {Entity, ObjectIdColumn, ObjectID, Column} from 'typeorm';
import {Length} from 'class-validator';

@Entity( {name: 'tweets'} )
export class Tweet {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    @Length(2, 50, {message: `Title must be at least 2 but not longer than 50 characters.`})
    title: string;

    @Column()
    @Length(2, 100, {message: `Title must be at least 2 but not longer than 100 characters.`})
    content: string;

    @Column()
    user: string    
};