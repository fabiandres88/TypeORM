import { Request, Response } from 'express';
import { Any, getRepository } from 'typeorm';
import { User } from '../entity/User';
import { validate } from 'class-validator';
import { getUsersService, getUserService, getTweetService, createArrayTweetService } from '../services/user';

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const users = await getUsersService();
        return res.status(200).json({status: 200, data: users, message: 'Successfully users retrieved.'});
    }
    catch (error) {
        console.log('Error: ', error.message);
        return res.status(400).json({status: 400, message: error.message});
    };
};

export const getUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const user = await getUserService(req.params.id);      
        const tweetsResult = await getTweetService();
        const result= createArrayTweetService(req.params.id, user, tweetsResult);        
        return res.status(200).json(result);
    }
    catch (error) {
        console.log('Error: ', error.message);
        return res.status(400).send();
    };
};

export const postUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const user = getRepository(User).create(req.body);
        const validations = await validate(user);

        if (validations.length === 0) {
            const response = await getRepository(User).save(user);
            return res.status(201).json(response);
        }
        res.status(400).json(validations);
    }
    catch (error) {
        console.log('Error: ', error.message);
        return res.status(400).send();
    };
};

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const user = await getRepository(User).findOne(req.params.id);
        if (user) {
            getRepository(User).merge(user, req.body);
            const validations = await validate(user);

            if (validations.length === 0) {
                const response = await getRepository(User).save(user);
                return res.status(200).json(response);
            }
            res.status(400).json(validations);
        }
        return res.status(404).json({ message: "User does not exit." });
    }
    catch (error) {
        console.log('Error: ', error.message);
        return res.status(400).send();
    };
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const result = getRepository(User).delete(req.params.id);
        return res.status(200).json({ message: "User deleted." });
    }
    catch (error) {
        console.log('Error: ', error.message);
        return res.status(400).send();
    };
};