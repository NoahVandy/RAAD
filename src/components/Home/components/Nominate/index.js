import React, { useState } from 'react';
import NominateView from './view';
import axios from 'axios';

export default function Nominate({ currentUser }) {

  const [from, setFrom] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = () => {
    const emailPayload = {
      emailPayload: {
        from: from,
        text: text
      }
    }

    console.log(emailPayload)

    axios.post('https://raad-api.herokuapp.com/admin/nominate', emailPayload)
    .then((res) => {
      if(res.status === 200) {
        console.log(res.data);
        setFrom('');
        setText('');
      }
    })
  }

  return (
    <NominateView 
      from={from}
      setFrom={setFrom}
      text={text}
      setText={setText}
      handleSubmit={handleSubmit}
    />
  )
}
