import { Body, Controller, Post } from "@nestjs/common";
import { ChatService } from "./chat.service";
import { UserDTO } from "./user/user.dto";
import { User } from "./user/user.interface";

@Controller('chat')
export class ChatController {
    constructor(private chatService: ChatService){}
    @Post('/join')
    async joinChat(@Body() input: UserDTO): Promise<User>{
        return this.chatService.createUser(input)
    }
}