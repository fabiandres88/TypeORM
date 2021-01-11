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
        throw Error('Error while paginating tweets.')
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
        throw Error('Error while creating array of tweets.');
    };
};

export const createUserservice = (query: any) => {
    try {
        const user = getRepository(User).create(query);
        return user;    
    }
    catch (error) {
        throw Error('Error while creating user.');
    };    
};

export const saveUserservice = (query: any) => {
    try {
        const response = getRepository(User).save(query);
        return response;
    }
    catch (error) {
        throw Error('Error while saving user.');
    };    
};

export const updateUserservice = (user:any, query: any) => {
    try {
        const response = getRepository(User).merge(user, query);
        return response;
    }
    catch (error) {
        throw Error('Error while merging user.');
    };    
};

export const deleteUserservice = (query: any) => {
    try {
        const response = getRepository(User).delete(query);
        return response;
    }
    catch (error) {
        throw Error('Error while merging user.');
    };    
};