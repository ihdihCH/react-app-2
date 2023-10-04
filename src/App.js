import React from "react";
import { Route, Routes } from "react-router-dom";
import './app.css'
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Services";
import Contact from "./routes/Contact";
const App = () =>{
    return(
        <div className="App">
            <Routes basename={'/react-app-2'}>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    )
}
export default App