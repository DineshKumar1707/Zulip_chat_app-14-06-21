import React, { Component } from "react";
import Avatar1 from "./Avatar1";
import { Link } from 'react-router-dom';

class NewChatListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otherUser: this.props.mail, 
      receiverName: this.props.name,
      receiverAvatar: this.props.image,
    };
    console.log(this.state.otherUser);
  }

  render() {
    return (
        <Link to={`/ChatList/${this.state.otherUser}`} style={{ textDecoration: 'none' }}>
        <div
          key={this.state.otherUser}
          style={{ animationDelay: `0.${this.props.animationDelay}s` }}
          
          className={`newconvo_chatlist__item ${
            this.props.active ? this.props.active : ""
          } `}
        >
          <div className="avatar1_image">
          <Avatar1
            image={
              this.props.image ? this.props.image : "http://placehold.it/80x80"
            }
            isOnline={this.props.isOnline}
          />
          </div>

          <div className="container___name">
            <div className="user_Meta">
              <p>{this.props.name}</p>
            </div>
          </div>

          {/* <div className="userMeta">
            <span className="message">Last Message Shown Here</span>
            <span className="activeTime">32 mins ago</span>
          </div> */}
        </div>
      </Link>
    );
  }
}

export default NewChatListItems;
