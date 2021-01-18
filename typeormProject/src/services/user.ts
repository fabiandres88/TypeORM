import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import { Tweet } from '../entity/tweets';
import { Param, Body } from 'routing-controllers';

export class userServices {

    static async getUsersService() {
        try {
            const users = await getRepository(User).find();
            return (users);
        }
        catch (error) {
            throw Error('Error while paginating users.')
        };
    };

    static async getUserService(@Param('id') id: any) {
        try {
            const user = await getRepository(User).findOne(id);
            return user;
        }
        catch (error) {
            throw Error('Error while paginating user.')
        };
    };

    //Get all tweets
    static async getTweetService() {
        try {
            const tweetsResult = await getRepository(Tweet).find();
            return tweetsResult;
        }
        catch (error) {
            throw Error('Error while paginating tweets.')
        };
    };

    //Create array of tweets for a user got by id
    static createArrayTweetService(@Param('id') id: any, user: any, tweetsResult: any) {
        try {
            var result: Array<any> = [];
            result.push(user);
            user.tweets = [];
            if (tweetsResult) {
                for (let i = 0; i < tweetsResult.length; i++) {
                    if (tweetsResult[i].user === id) {
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

    static createUserservice(@Body() body: any) {
        try {
            const user = getRepository(User).create(body);
            return user;
        }
        catch (error) {
            throw Error('Error while creating user.');
        };
    };

    static async saveUserservice(query: any) {
        try {
            const response = getRepository(User).save(query);
            return response;
        }
        catch (error) {
            throw Error('Error while saving user.');
        };
    };

    static updateUserservice(user: any, @Body() body: any) {
        try {
            const response = getRepository(User).merge(user, body);
            return response;
        }
        catch (error) {
            throw Error('Error while merging user.');
        };
    };

    static async deleteUserservice(@Param('id') id: any) {
        try {
            const response = getRepository(User).delete(id);
            return response;
        }
        catch (error) {
            throw Error('Error while deleting user.');
        };
    };
}