import React, { useState } from 'react';
import { Avatar, Button } from '@material-ui/core';
import './tweetBox.css';
import db from '../../Firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] =
        useState("");

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Suramya',
            username: 'suramyaa_s',
            verified: 'true',
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://images-na.ssl-images-amazon.com/images/I/51cOAMON90L.jpg"
        });
        setTweetMessage(""); 
        setTweetImage("");

    };


    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://images-na.ssl-images-amazon.com/images/I/51cOAMON90L.jpg" />
                    <input onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage} placeholder="whats happin " type="text" />

                </div>
                <input onChange={(e) => setTweetImage(e.target.value)}
                    type="text"
                    value={tweetImage}

                    className="tweetBox_imageInput" placeholder=" Enter imageUrl" />

                <Button type="submit" onClick={sendTweet} className="tweetBox__tweetBoxButton"> Tweet</Button>
            </form>


        </div>
    );
}

export default TweetBox;
