import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";
import { allUsersRoute, host } from "../utils/APIRoutes";
import ChatContainer from "../components/ChatContainer";
import Contacts from "../components/Contacts";
import Welcome from "../components/Welcome";
import Page1 from "./page1"
import Page2 from "./page2"
import Page3 from "./page3"
export default function Chat() {const navigate = useNavigate();const socket = useRef();const [contacts, setContacts] = useState([]);const [currentChat, setCurrentChat] = useState(undefined);const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(async () => {if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {navigate("/login");}
   else {setCurrentUser(await JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));}}, []);
  useEffect(() => {if (currentUser) {socket.current = io(host);socket.current.emit("add-user", currentUser._id);}}, [currentUser]);
  useEffect(async () => {if (currentUser) {
    if (currentUser.isAvatarImageSet) {const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);setContacts(data.data);}
    else {navigate("/setAvatar");}}}, [currentUser]);
  const handleChatChange = (chat) => {setCurrentChat(chat);};
  const [currentPage, setCurrentPage] = useState(null);
  const nextPage = (page) => {switch (page) {
      case 1:setCurrentPage('/Page1');break;
      case 2:setCurrentPage('/Page2');break;
      case 3:setCurrentPage('/Page3');break;
      default:break;}};
  useEffect(() => { if (currentPage) {window.location.href = currentPage;}}, [currentPage]);
  return (
    <>
      <Container>
      <div style={{ color: 'White' }} display="flex"><div><h1>Welcome to Realtime Price Streamer</h1></div>
      <Container1>
      <div className="button-container"><div style={{height:"100px",width:"100px"}} className="button" onClick={() => nextPage(1)}><span>Petrol Price</span></div>
      <div style={{height:"100px",width:"100px"}} className="button" onClick={() => nextPage(2)}><span>Diesel Price</span></div>
      <div style={{height:"100px",width:"100px"}} className="button" onClick={() => nextPage(3)}><span>Oil Price</span></div></div>
      </Container1></div>
      </Container>
    </>
  );
}
const Container = styled.div`height: 100vh;width: 100vw;display: flex;flex-direction: column;justify-content: center;gap: 1rem;align-items: center;background-color: #131324;`;
const Container1 = styled.div`height: 90vh;width: 100vw;display: flex;flex-direction: row;justify-content: center;gap: 1rem;align-items: center;background-color: #131324;color: white;`;
