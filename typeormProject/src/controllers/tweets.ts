import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Tweet } from '../entity/tweets';
import { validate } from 'class-validator';

export const getTweets = async (req: Request, res: Response): Promise<Response> => {
    try {
        const tweets = await getRepository(Tweet).find();
        return res.status(200).json(tweets);
    }
    catch (error) {
        console.log('Error: ', error.message);
        res.status(400).send();
    };
};

export const getTweet = async (req: Request, res: Response): Promise<Response> => {
    try {
        const tweet = await getRepository(Tweet).findOne(req.params.id);
        return res.status(200).json(tweet);
    }
    catch (error) {
        console.log('Error: ', error.message);
        res.status(400).send();
    };
};

export const postTweet = async (req: Request, res: Response): Promise<Response> => {
    try {
        const tweet = getRepository(Tweet).create(req.body);
        const validations = await validate(tweet);
        if (validations.length === 0) {
            const response = await getRepository(Tweet).save(tweet);
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
        const tweet = await getRepository(Tweet).findOne(req.params.id);
        if (tweet) {
            getRepository(Tweet).merge(tweet, req.body);
            const validations = await validate(tweet);
            if (validations.length === 0) {
                const response = await getRepository(Tweet).save(tweet);
                return res.status(200).json(response);
            }
            return res.status(400).json(validations);
        }
        return res.status(404).json({ message: "User does not exit." });
    }
    catch (error) {
        console.log('Error: ', error.message);
        res.status(400).send();
    };
};

export const deleteTweet = async (req: Request, res: Response): Promise<Response> => {
    try {
        const result = getRepository(Tweet).delete(req.params.id);
        return res.status(200).json({ message: "User deleted." });
    }
    catch (error) {
        console.log('Error: ', error.message);
        res.status(400).send();
    };
};