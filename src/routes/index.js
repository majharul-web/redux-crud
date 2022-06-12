import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
import AddBook from "../features/books/AddBook";
import EditeBook from "../features/books/EditeBook";

function Index(props) {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='home' element={<Home/>}/>
                <Route path='add-book' element={<AddBook/>}/>
                <Route path='edite-books' element={<EditeBook/>}/>
                <Route path='*' element={<Notfound/>}/>
            </Routes>
        </Router>
    );
}

export default Index;