import { getRepository } from 'typeorm';
import { Tweet } from '../entity/tweets';
import { Param, Body } from 'routing-controllers';

export class tweetServices {

    static async getTweetByService (@Param('id') id: any) {
        try {
            const tweet = await getRepository(Tweet).findOne(id);        
            return tweet;        
        }
        catch (error) {
            throw Error('Error while paginating tweet.')
        };
    };
    
    static createTweetservice (@Body() body: any) {
        try {
            const tweet = getRepository(Tweet).create(body);
            return tweet;    
        }
        catch (error) {
            throw Error('Error while creating tweet.');
        };    
    };
    
    static saveTweetservice (query: any) {
        try {
            const response = getRepository(Tweet).save(query);
            return response;
        }
        catch (error) {
            throw Error('Error while saving tweet.');
        };    
    };
    
    static updateTweetservice (tweet:any, @Body() body: any) {
        try {
            const response = getRepository(Tweet).merge(tweet, body);
            return response;
        }
        catch (error) {
            throw Error('Error while merging tweet.');
        };    
    };
    
    static async deleteTweetservice (@Param('id') id: any) {
        try {
            const response = getRepository(Tweet).delete(id);
            return response;
        }
        catch (error) {
            throw Error('Error while deleting tweet.');
        };    
    };
}