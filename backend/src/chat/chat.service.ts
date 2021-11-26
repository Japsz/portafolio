import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserDTO } from './user/user.dto';
import { User } from './user/user.interface';
import * as admin from 'firebase-admin'
import { messageDTO } from './message/message.dto';
import { Message } from './message/message.interface';
@Injectable()
export class ChatService {
    async createUser(input: UserDTO): Promise<User> {
        console.log('Starting to create user')
        try {
            const usersRef = admin.database().ref('/users')
            console.log('gathered ref')
            const joinedAt = new Date()
            const createdUser = await usersRef.push({
                ...input,
                joinedAt: joinedAt.getTime()
            })
            console.log('created user')
            return {
                ...input,
                id: createdUser.key,
                joinedAt
            }
        } catch (error) {
            console.error(error)
            throw new HttpException('Error Getting Thing', HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }
    // Controller method to create a message
    async createMessage(input: messageDTO): Promise<Message> {
        console.log('Starting to create message')
        try {
            // get user info from senderId
            const userRef = admin.database().ref(`/users/${input.senderId}`)
            const user = await userRef.once('value')
            console.log('got user')
            // add message to messages
            const createdAt = new Date().getTime()
            const newMessageRef = admin.database().ref(`/messages/${createdAt}`)
            const message = new Message(input.message, user.val(), createdAt)
            // create message
            await newMessageRef.set(message)
            console.log('created message')
            return message
        } catch (error) {
            console.error(error)
            throw new HttpException('Error Getting Thing', HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }
    // Controller method to get all messages
    async getMessages(): Promise<Message[]> {
        console.log('Starting to get messages')
        try {
            const messagesRef = admin.database().ref('/messages')
            console.log('gathered ref')
            const messages = await messagesRef.once('value')
            console.log('got messages')
            return messages.val()
        } catch (error) {
            console.error(error)
            throw new HttpException('Error Getting Thing', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
