import React from 'react';
import "./App.css";
import "./chatBody.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ChatList from './components/ChatList';
import ChatContent from './components/ChatContent';
import UserProfile from './components/UserProfile';
import ChatListItems from './components/ChatListItems';




function App() {
  return (
    <div className="__main">

          <div className="main__chatbody">
            
            <Router>
              <ChatList />
              <Switch>
                <Route path="/:otherUser" component= {ChatContent}></Route>
              </Switch>
              {/* <UserProfile /> */}
            </Router>  
            
          </div>
      
    </div>
  );
}

export default App;
