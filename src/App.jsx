import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {Header} from "./Components/Header";
import {Footer} from "./Components/Footer";

import {Home} from "./Pages/Home";
import {About} from "./Pages/About";
import {Contact} from "./Pages/Contact";
import {NotFound} from "./Pages/NotFound";
import {Category} from "./Components/Category";
import {Recipe} from "./Pages/Recipe";


function App() {
    return <>
        <Router>
            <Header/>
            <main className='container content'>
                <Routes>
                    <Route path="/" element={<Home  />} />
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacts" element={<Contact/>}/>
                    <Route path="/category/:name" element={<Category/>}/>
                    <Route path="/meal/:id" element={<Recipe/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </main>
            <Footer/>
        </Router>
    </>
}

export default App;
