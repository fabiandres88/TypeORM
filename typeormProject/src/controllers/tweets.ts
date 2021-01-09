import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Tweet } from '../entity/tweets';

export const getTweets = async (req: Request, res: Response): Promise<Response> =>{
    const tweets = await getRepository(Tweet).find();
    return res.status(200).json(tweets);
};

export const getTweet = async (req: Request, res: Response): Promise<Response> =>{
    const tweet = await getRepository(Tweet).findOne(req.params.id);
    return res.status(200).json(tweet);
};

export const postTweet = async (req: Request, res: Response): Promise<Response> =>{
    const tweet = getRepository(Tweet).create(req.body);
    const response = await getRepository(Tweet).save(tweet);
    return res.status(200).json(response);
};

export const updateTweet = async (req: Request, res: Response): Promise<Response> =>{
    const tweet = await getRepository(Tweet).findOne(req.params.id);
    if (tweet) {
        getRepository(Tweet).merge(tweet, req.body);
        const response = await getRepository(Tweet).save(tweet);
        return res.status(200).json(response);
    }
    return res.status(404).json({message: "User does not exit."});    
};

export const deleteTweet = async (req: Request, res: Response): Promise<Response> =>{
    const result = getRepository(Tweet).delete(req.params.id);
    return res.status(200).json({message: "User deleted."});
};