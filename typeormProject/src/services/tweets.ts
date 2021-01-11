import { getRepository } from 'typeorm';
import { Tweet } from '../entity/tweets';

export const getTweetByService = async (query: any) => {
    try {
        const tweet = await getRepository(Tweet).findOne(query);        
        return tweet;        
    }
    catch (error) {
        throw Error('Error while paginating tweet.')
    };
};

export const createTweetservice = (query: any) => {
    try {
        const tweet = getRepository(Tweet).create(query);
        return tweet;    
    }
    catch (error) {
        throw Error('Error while creating tweet.');
    };    
};

export const saveTweetservice = (query: any) => {
    try {
        const response = getRepository(Tweet).save(query);
        return response;
    }
    catch (error) {
        throw Error('Error while saving tweet.');
    };    
};

export const updateTweetservice = (tweet:any, query: any) => {
    try {
        const response = getRepository(Tweet).merge(tweet, query);
        return response;
    }
    catch (error) {
        throw Error('Error while merging tweet.');
    };    
};

export const deleteTweetservice = (query: any) => {
    try {
        const response = getRepository(Tweet).delete(query);
        return response;
    }
    catch (error) {
        throw Error('Error while deleting tweet.');
    };    
};