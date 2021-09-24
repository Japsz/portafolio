import React, { useState } from 'react';
import ChatJoin from './Join';
import ChatRoom from './Room';

const Chat = () => {
    const [credential, setCredentials] = useState(() => localStorage.getItem('chatJWT'))
    const [connected, setConnected] = useState(false)
    return (
        <div className="container p-5">
            {!connected ? <ChatJoin setConnected={setConnected} credential={credential} setCredentials={setCredentials}/> : <ChatRoom/>}
        </div>
    );
};

export default Chat;