import { MessageUser, User } from "../user/user.interface";

export class Message {
    id: string;
    text: string;
    user: MessageUser;
    createdAt: number;
    constructor(text: string, user: User, createdAt: number) {
        this.text = text;
        this.user = {
            id: user.id,
            username: user.username,
            icon: user.icon
        };
        this.createdAt = createdAt;
    }
}

