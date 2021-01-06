import { getRepository } from 'typeorm';
import { Tweet } from '../entity/tweet';
import { User } from '../entity/User';

export const uRepo = async () => {
    const userRepo = getRepository(User);
    const user = userRepo.create( {firstName: 'Fabio', lastName: 'Ramirez', age: 29});
    await userRepo.save(user).catch((error) => {
        console.log('Error: ', error);
    });
    console.log('New user created', user);

    const tweetRepo = getRepository(Tweet);
    const tweet = new Tweet();
    tweet.title = 'Working now';
    tweet.content= 'I am working as developer';
    tweet.user= user;

    await tweetRepo.save(tweet).catch((error) => {
        console.log('Error: ', error);
    });    

}