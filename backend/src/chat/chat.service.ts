import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserDTO } from './user/user.dto';
import { User } from './user/user.interface';
import * as admin from 'firebase-admin'
@Injectable()
export class ChatService {
    async createUser(input: UserDTO): Promise<User> {
        try {
            const usersRef = admin.database().ref('/users')
            const joinedAt = new Date()
            const createdUser = await usersRef.push({
                ...input,
                joinedAt: joinedAt.getTime()
            })
            return {
                ...input,
                id: createdUser.key,
                joinedAt
            }
        } catch (error) {
            throw new HttpException('Error Getting Thing', HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }
}
