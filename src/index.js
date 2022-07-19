import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Nopage from "./pages/Nopage";


export default function App()
{
    return(

    <BrowserRouter>
        <Routes>
            <Route path="/" element= {<Layout />}>
                <Route index element={<Home />} />
                <Route path="blog" element={<Blog />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<Nopage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);





