import React from 'react'
import "./widgets.css"
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search'
function Widgets() {
    return (
    <div className="widgets">
          <div className="widgets__input">
              <SearchIcon className= "widgets__searchIcon" /> 
              <input placeholder="Search Twitter" type="text" /> 
          </div>
          <div className="widgets__widgetContainer">
              <h2> Whats's happening</h2>
                <TwitterTweetEmbed tweetId={"1325285369609416706"}/>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="nature"
                    options={{ height: 400 }}  />
                <TwitterShareButton
                    url={'https://facebook.com/nature'}
                    options={{ text: '#reactjs is awesome', 
                    via: 'smade' }}  />

          </div>
        </div>
    )
}

export default Widgets;
