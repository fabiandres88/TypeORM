import { getRepository } from 'typeorm';
import { User } from '../entity/User';

export const uRepo = async () => {
    const userRepo = getRepository(User);
    const user = userRepo.create( {firstName: 'Carolina', lastName: 'Jaimes', age: 29});
    await userRepo.save(user).catch((error) => {
        console.log('Error: ', error);
    });
    console.log('New user created', user);
}