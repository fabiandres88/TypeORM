import { Request, response, Response } from 'express';
import { validate } from 'class-validator';
import { userServices } from '../services/user';
import { tweetServices } from '../services/tweets';
import { Delete, Get, JsonController, Post, Put , Req, Res } from 'routing-controllers';

@JsonController()
export class TweetController {

    @Get('/')
    static async getTweets (@Req() req: Request, @Res() res: Response): Promise<Response> {
        try {
            const tweets = await userServices.getTweetService();
            return res.status(200).json(tweets);
        }
        catch (error) {
            console.log('Error: ', error.message);
            res.status(400).send();
        };
    };
    
    @Get('/')
    static async getTweet (@Req() req: Request, @Res() res: Response): Promise<Response> {
        try {
            const tweet = await tweetServices.getTweetByService(req.params.id);
            return res.status(200).json(tweet);
        }
        catch (error) {
            console.log('Error: ', error.message);
            res.status(400).send();
        };
    };
    
    @Post('/')
    static async postTweet (@Req() req: Request, @Res() res: Response): Promise<Response> {
        try {
            const tweet = tweetServices.createTweetservice(req.body);
            const validations = await validate(tweet);
            if (validations.length === 0) {
                const response = await tweetServices.saveTweetservice(tweet);
                return res.status(201).json(response);
            }
            return res.status(400).json(validations);
        }
        catch (error) {
            console.log('Error: ', error.message);
            res.status(400).send();
        };
    };
    
    @Put('/')
    static async updateTweet (@Req() req: Request, @Res() res: Response): Promise<Response> {
        try {
            const tweet = await tweetServices.getTweetByService(req.params.id);
            if (tweet) {
                tweetServices.updateTweetservice(tweet, req.body);
                const validations = await validate(tweet);
                if (validations.length === 0) {
                    const response = await tweetServices.saveTweetservice(tweet);
                    return res.status(200).json(response);
                }
                return res.status(400).json(validations);
            }
            return res.status(404).json({ message: "Tweet does not exit." });
        }
        catch (error) {
            console.log('Error: ', error.message);
            res.status(400).send();
        };
    };
    
    @Delete('/')
    static async deleteTweet(@Req() req: Request, @Res() res: Response): Promise<Response> {
        try {
            const result = tweetServices.deleteTweetservice(req.params.id);
            return res.status(200).json({ message: "Tweet deleted." });
        }
        catch (error) {
            console.log('Error: ', error.message);
            res.status(400).send();
        };
    };
}