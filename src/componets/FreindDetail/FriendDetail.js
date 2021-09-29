import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const { friendid } = useParams()
    const [friend , setfriend] = useState({})
   const history = useHistory()

    const url = `https://jsonplaceholder.typicode.com/users/${friendid}`
    fetch(url)
    .then(res => res.json())
    .then(data => setfriend(data))

    const handleClick = ()=>{
        history.push(`/friend/${id}`)
    }

    return (
        <div>
            <h2>friend total of:  {friendid}</h2>
            <h1>{friend.name}</h1>
            <h2>{friend.phone}</h2>
            <h4>{friend.website}</h4>
            <p>wark at : {friend.company?.name}</p>
           <button onClick={handleClick}>see all friend</button>
        </div>
    );
};

export default FriendDetail;