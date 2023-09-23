import Layout from "./components/Layout";
import React from 'react';
import './App.css';


import { Route , Routes} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from "./components/Navbar";


export default function App() {
  return(
    <Layout className="App">
    <Navbar/>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route path="/About" Component={About}/>
        <Route path="/Contact" Component={Contact}/>
      </Routes>
    
    </Layout>
  )
  
}