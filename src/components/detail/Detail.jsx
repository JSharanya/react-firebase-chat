import React from "react";
import "./detail.css";
import { auth } from "../../lib/firebase";

const detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
           
          <div className="photoItem">
              <div className="photoDetail">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIz4qZKTOplGKCIt860B8HP3mTBMZGACNFg&s" alt="" />
              <span>photo_2024_2.png</span></div>
            
            <img src="./download.png" alt=""  className="icon" />
          </div>
          <div className="photoItem">
              <div className="photoDetail">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIz4qZKTOplGKCIt860B8HP3mTBMZGACNFg&s" alt="" />
              <span>photo_2024_2.png</span></div>
            
            <img src="./download.png" alt=""  className="icon"/>
          </div>
          <div className="photoItem">
              <div className="photoDetail">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIz4qZKTOplGKCIt860B8HP3mTBMZGACNFg&s" alt="" />
              <span>photo_2024_2.png</span>
              </div>
            
            <img src="./download.png" alt="" className="icon" />
          </div>
          </div>
        </div>


        <div className="option">
          <div className="title">
            <span>Shard Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
          <button>Block User</button>
          <button className="logout" onClick={()=>auth.signOut()}>LogOut</button>
      
      </div>
    </div>
  );
};

export default detail;
