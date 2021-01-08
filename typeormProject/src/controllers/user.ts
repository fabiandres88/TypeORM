import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';

export const getUsers = async (req: Request, res: Response): Promise<Response> =>{
    const users = await getRepository(User).find();
    return res.status(200).json(users);
};

export const getUser = async (req: Request, res: Response): Promise<Response> =>{
    const user = await getRepository(User).findOne(req.params.id);
    return res.status(200).json(user);
};

export const postUser = async (req: Request, res: Response): Promise<Response> =>{
    const user = getRepository(User).create(req.body);
    const response = await getRepository(User).save(user);
    return res.status(200).json(response);
};

export const updateUser = async (req: Request, res: Response): Promise<Response> =>{
    const user = await getRepository(User).findOne(req.params.id);
    if (user) {
        getRepository(User).merge(user, req.body);
        const response = await getRepository(User).save(user);
        return res.status(200).json(response);
    }
    return res.status(404).json({message: "User does not exit."});    
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> =>{
    const result = getRepository(User).delete(req.params.id);
    return res.status(200).json({message: "User deleted."});
};