import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    // Connect to Socket.io server
    socketRef.current = io('http://localhost:3001'); // Make sure to use your server's URL
    
    // Listen for incoming messages
    socketRef.current.on('new message', (incomingMessage) => {
      setMessages((prevMessages) => [...prevMessages, { id: uuidv4(), text: incomingMessage }]);
    });

    // Clean up on component unmount
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = () => {
    const trimmedMessage = message.trim();
    if (trimmedMessage) {
      const newMessage = { id: uuidv4(), text: trimmedMessage };
      socketRef.current.emit('send message', trimmedMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg) => (
          <p key={msg.id}>{msg.text}</p>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
