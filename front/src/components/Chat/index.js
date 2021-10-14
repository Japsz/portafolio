import React, { useState } from 'react';
import ChatJoin from './Join';
import ChatRoom from './Room';
import {getUser} from './FirebaseWrapper/auth';
const Chat = () => {
    const [credential, setCredentials] = useState(() => getUser)
    const [connected, setConnected] = useState(false)
    return (
        <div className="container p-5">
            {!connected ? <ChatJoin setConnected={setConnected} credential={credential} setCredentials={setCredentials}/> : <ChatRoom/>}
        </div>
    );
};

export default Chat;