import { Request, Response } from 'express';
import { JsonController, Get, Post, Put, Delete, Req, Res } from 'routing-controllers';
import { userServices } from '../services/user';
import { validate } from 'class-validator';

@JsonController()
export class UserControllers {

    @Get('/')
    static async getUsers(@Req() req: Request, @Res() res: Response): Promise<Response> {
        try {
            const users = await userServices.getUsersService();
            return res.status(200).json({ status: 200, data: users, message: 'Successfully users retrieved.' });
        }
        catch (error) {
            console.log('Error: ', error.message);
            return res.status(400).json({ status: 400, message: error.message });
        };
    }

    @Get('/')
    static async getUser(@Req() req: Request, @Res() res: Response): Promise<Response> {
        try {
            const user = await userServices.getUserService(req.params.id);
            const tweetsResult = await userServices.getTweetService();
            const result = userServices.createArrayTweetService(req.params.id, user, tweetsResult);
            return res.status(200).json(result);
        }
        catch (error) {
            console.log('Error: ', error.message);
            return res.status(400).send();
        };
    };

    @Post('/')
    static async postUser(@Req() req: Request, @Res() res: Response): Promise<Response> {
        try {
            const user = userServices.createUserservice(req.body);
            const validations = await validate(user);
            if (validations.length === 0) {
                const response = await userServices.saveUserservice(user);
                return res.status(201).json(response);
            }
            res.status(400).json(validations);
        }
        catch (error) {
            console.log('Error: ', error.message);
            return res.status(400).send();
        };
    };

    @Put('/')
    static async updateUser(@Req() req: Request, @Res() res: Response): Promise<Response> {
        try {
            const user = await userServices.getUserService(req.params.id);
            if (user) {
                userServices.updateUserservice(user, req.body);
                const validations = await validate(user);
                if (validations.length === 0) {
                    const response = await userServices.saveUserservice(user);
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

    @Delete('/')
    static async deleteUser(@Req() req: Request, @Res()res: Response): Promise<Response> {
        try {
            const result = userServices.deleteUserservice(req.params.id);
            return res.status(200).json({ message: "User deleted." });
        }
        catch (error) {
            console.log('Error: ', error.message);
            return res.status(400).send();
        };
    };
};