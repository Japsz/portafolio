import React, { useState } from 'react';
import ChatJoin from './Join';
import ChatRoom from './Room';
import {getUser, isLoggedIn} from './FirebaseWrapper/auth';
const Chat = () => {
    const [credential, setCredentials] = useState(() => { return getUser()})
    return (
        <div className="container p-5">
            {!isLoggedIn() ? <ChatJoin credential={credential} setCredentials={setCredentials}/> : <ChatRoom/>}
        </div>
    );
};

export default Chat;