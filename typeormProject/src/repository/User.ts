import { stringify } from 'querystring';
import { getRepository } from 'typeorm';
import { Tweet } from '../entity/tweet';
import { User } from '../entity/User';

export const uRepo = async () => {
    const userRepo = getRepository(User);
    const user = userRepo.create( {firstName: 'Sandra', lastName: 'Aristizabal', age: 1});
    await userRepo.save(user).catch((error) => {
        console.log('Error: ', error);
    });
    console.log('New user created', user);

    const tweetRepo = getRepository(Tweet);
    const tweet = new Tweet();
    tweet.title = 'Studying now';
    tweet.content= 'I am studying in Medellin';
    tweet.user= (user);

    await tweetRepo.save(tweet).catch((error) => {
        console.log('Error: ', error);
    });    
};

export const find = async () => {
    const userRepo = getRepository(User);
    const user= await userRepo.findOne({ firstName: 'Juan'})
    .catch((error) => {
        console.log(error)
    });

    const tweetRepo = getRepository(Tweet);
    const tweets= await tweetRepo.find({})
        .catch((error) => {
        console.log(error)
    });
    var tweet: object;
    if(tweets) {
        for(let i= 0; i < tweets.length; i++) {
            if(tweets[i].user.firstName ==='Juan') {
               tweet=(tweets[i])
            }
        }                
    }

    if(user)
    console.log('User: ', user, 'Tweets: ', tweet)
}