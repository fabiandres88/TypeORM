import { Request, Response } from 'express';
import { validate } from 'class-validator';
import { getTweetService } from '../services/user';
import { getTweetByService, createTweetservice, saveTweetservice,
    updateTweetservice, deleteTweetservice
} from '../services/tweets';

export const getTweets = async (req: Request, res: Response): Promise<Response> => {
    try {
        const tweets = await getTweetService();
        return res.status(200).json(tweets);
    }
    catch (error) {
        console.log('Error: ', error.message);
        res.status(400).send();
    };
};

export const getTweet = async (req: Request, res: Response): Promise<Response> => {
    try {
        const tweet = await getTweetByService(req.params.id);
        return res.status(200).json(tweet);
    }
    catch (error) {
        console.log('Error: ', error.message);
        res.status(400).send();
    };
};

export const postTweet = async (req: Request, res: Response): Promise<Response> => {
    try {
        const tweet = createTweetservice(req.body);
        const validations = await validate(tweet);
        if (validations.length === 0) {
            const response = await saveTweetservice(tweet);
            return res.status(200).json(response);
        }
        return res.status(400).json(validations);
    }
    catch (error) {
        console.log('Error: ', error.message);
        res.status(400).send();
    };
};

export const updateTweet = async (req: Request, res: Response): Promise<Response> => {
    try {
        const tweet = await getTweetByService(req.params.id);
        if (tweet) {
            updateTweetservice(tweet, req.body);
            const validations = await validate(tweet);
            if (validations.length === 0) {
                const response = await saveTweetservice(tweet);
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

export const deleteTweet = async (req: Request, res: Response): Promise<Response> => {
    try {
        const result = deleteTweetservice(req.params.id);
        return res.status(200).json({ message: "Tweet deleted." });
    }
    catch (error) {
        console.log('Error: ', error.message);
        res.status(400).send();
    };
};