import React, { Component } from "react";
import Avatar from "./Avatar";
import { Link } from 'react-router-dom';

class ChatListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userReceiver: "",
      otherUser: this.props.mail, 
      receiverName: this.props.name,
      receiverAvatar: this.props.image,
      lastMessage: this.props.lastMessage,
    };
    console.log(this.state.lastMessage);
  }

  // componentDidMount() {
  //     if(this.props?.match?.params){
  //       const {otherUser} = this.props?.match?.params;    
  //     if(otherUser){
  //       this.setState({userReceiver: otherUser},() => {
  //         console.log(this.state.userReceiver, "admin");
  //       })
  //     }
  //   }
  // }

  

  render() {
    return (
        <Link to={`/${this.state.otherUser}`} style={{ textDecoration: 'none' }}>
          <div
            key={this.state.otherUser}
            style={{ animationDelay: `0.${this.props.animationDelay}s` }}
            
            className={`chatlist__item ${
              this.props.active ? this.props.active : ""
            } `}
          >
            <Avatar
              image={
                this.props.image ? this.props.image : "http://placehold.it/80x80"
              }
              isOnline={this.props.isOnline}
            />

            <div className="container__name_msg">
              <div className="userMeta">
                <p>{this.props.name}</p>
                <span className="message">{this.props.lastMessage}</span>
              </div>
              <div className="userMeta1">
                <p>3:42 PM</p>
                <span>1</span>
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

export default ChatListItems;
