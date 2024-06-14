import React from "react";
import { BrowserRouter, Routes, Route , Link, Switch } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
        <Route path="/page1"  element={<Page1 />} />
        <Route path="/page2"  element={<Page2 />} />
        <Route path="/page3"  element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  );
}
