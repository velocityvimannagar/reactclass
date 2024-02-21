import { useState } from "react";
import "./App.css";
import UseEffectHookDemo from "./UseEffectHook/UseEffectHookDemo";
import UserProfile from "./UserProfile";
import CommunicationDemo from "./communication/CommunicationDemo";
import Counter from "./counter/Counter";
import FormExample from "./forms-example/FormExample";
import LoopingExample from "./looping-example/LoopingExample";
import ObjectExample from "./object-example/ObjectExample";
import RandomCounter from "./randomcounter/RandomCounter";
import TicTacToe from "./tic-tac-toe/TicTacToe";
import TodoList from "./todo-list/TodoList";
import UserCrud from "./user-crud/UserCrud";
import ImageCarasoul from "./image-carasoul/ImageCarasoul";
import CountryList from "./countries-list/CountryList";
import PostsCrud from "./posts-crud/PostsCrud";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { UserDetails } from "./user-crud/UserDetails";
import AuthenticatedComponent, { HocDemo } from "./hoc/LogHoc";
import { StatusBar } from "./custom-hooks/StatusBar";
import { CounterClass } from "./counter/CounterClass";
import { CountryListClass } from "./countries-list/CountryListClass";
import { ContextExample } from "./context/ContextExample";
import CounterRedux from "./store-example/counter-redux";

function App() {
  const navigate = useNavigate();
  const showUserDetaiils = (id) => {
    navigate("/users/1");
  };
  const token = localStorage.setItem("token", "dfg");
  return (
    <div className="root-div">
      <header>
        My Application
        <br></br>
        <Link to={"/"}>Home</Link>
        <br></br>
        <Link to={"/users"}>Users</Link>
        <br></br>
        <Link to={"/posts"}>Posts</Link>
        <br></br>
        <br></br>
        <Link to={"/online"}>User Online Status</Link>
        <br></br>
        <button onClick={showUserDetaiils}>Login</button>
      </header>

      {/* <div>
        <Routes>
          <Route path="/" element={<div>This is a routing demo</div>}></Route>
          <Route path="/users/*" element={<UserCrud></UserCrud>}></Route>
          <Route path="/posts" element={<PostsCrud></PostsCrud>}></Route>
          <Route path="/online" Component={StatusBar}></Route>
          <Route path="*" element={<div>This url is not mapped</div>}></Route>
        </Routes>
      </div> */}
      {/* <CounterClass></CounterClass>

      <CountryListClass></CountryListClass>

      <ContextExample></ContextExample> */}
      <CounterRedux></CounterRedux>

      {/* <AuthenticatedComponent name={"John"}></AuthenticatedComponent> */}

      {/* http://localhost:3000/users/list */}

      {/* http://localhost:3000/users/details/1 */}
      {/* http://localhost:3000/users/create */}

      {/* <UserCrud> </UserCrud>
      <PostsCrud></PostsCrud> */}
    </div>
  );
}
export default App;
