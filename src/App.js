import React,{useState} from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import "./App.css";
import { Home } from "./components/Home";
import { Login } from "./components/Login";

const App = () => {
  const [isLogin, setIsLogin] = useState(false)
  return(
  <>
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/">Login</Link>
    </nav>

    <main>
      <Routes>
        <Route path="/" element={<Login setIsLogin={setIsLogin}/>} />
        <Route path="/home" element={<ProtectedRoute isLogin={isLogin}> <Home /> </ProtectedRoute> } />
      </Routes>
    </main>
  </>
)};


function ProtectedRoute({isLogin,children}){
  return isLogin ? children : <Navigate to="/"/>
  /* if(isLogin){
    return children
  }else{
    return <Navigate to="/" />
  } */
}


export default App;


