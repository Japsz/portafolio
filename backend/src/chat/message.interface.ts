import { MessageUser } from "./user/user.interface";

export class Message {
    text: string;
    user: MessageUser;
    createdAt: number;
}

