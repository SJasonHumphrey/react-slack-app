import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { db } from '../firebase';
import firebase from 'firebase';

function ChatInput({channelName, channelId}) {
    const [input, setInput] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();
        if(channelId){
            return false;
        }
        db.collection('rooms').doc(channelId).collection
        ('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    };
    const ChatInputContainer = styled.div`
    border-radius: 20px;
    > form {
      position: relative;
      display: flex;
      justify-content: center;
    }
    > form > input {
      position: fixed;
      bottom: 30px;
      width: 60%;
      border: 1px solid gray;
      border-radius: 3px;
      padding: 20px;
      outline: none;
    }
    > form > button {
      display: none;
    }
  `;
  return (
    <ChatInputContainer>
        <form>
            <input          
            placeholder={`Message #${channelName}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}/>
            <Button hidden type="submit" onClick={sendMessage}>
                SEND
            </Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput