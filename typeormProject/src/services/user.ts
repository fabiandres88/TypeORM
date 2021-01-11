import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import { Tweet } from '../entity/tweets';

export const getUsersService = async () => {
    try {
        const users = await getRepository(User).find();
        return (users);
    }
    catch (error) {
        throw Error('Error while paginating users.')
    };
};

export const getUserService = async (query: any) => {
    try {
        const user = await getRepository(User).findOne(query);        
        return user;        
    }
    catch (error) {
        throw Error('Error while paginating user.')
    };
};

//Get all tweets
export const getTweetService = async () => {
    try {
        const tweetsResult = await getRepository(Tweet).find();        
        return tweetsResult;        
    }
    catch (error) {
        throw Error('Error while paginating user.')
    };
};

//Create array of tweets for a user got by id
export const createArrayTweetService = (query:any, user : any, tweetsResult: any) => {
    try {
        var result: Array<any> = [];
        result.push(user);
        user.tweets= [];        
        if (tweetsResult) {
            for (let i = 0; i < tweetsResult.length; i++) {
                if (tweetsResult[i].user === query) {
                    result[0].tweets.push(tweetsResult[i])
                }
            }
        }
        return result;        
    }
    catch (error) {
        throw Error('Error while paginating user.')
    };
};