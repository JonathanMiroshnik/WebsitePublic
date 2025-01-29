import React from 'react';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import Home from './pages/Home/Home';
import About from './pages/About/About';

import { Helmet } from 'react-helmet';

import { Layout } from './components/Layout'
import BlogList from "./pages/BlogList/BlogList";
import BlogPost from "./components/BlogPost";
import Projects from "./pages/Projects/Projects";

import './App.css';

function App() {
    return (
        <>
            {/* Helmet is used for the site favicon and description */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sensor? Censor!</title>
                {/* <link rel="canonical" href="https://www.sensorcensor.xyz" /> */}
                <link rel="icon" type="image/png" href="/favicon.ico" sizes="32x32" />
                <meta name="description" content="My description" />
            </Helmet>
            <Router>
                <Routes>
                    <Route element={ <Layout/> }>
                        <Route path="/" element={ <Home/> } />
                        {/* <Route path="/blog" element={ <Blog/> } /> */}
                        {/* <Route path="/about" element={ <About/> } /> */}
                        <Route path="/blog" element={<BlogList />} />
                        <Route path="/blog/:id" element={<BlogPost />} />
                        <Route path="/projects" element={ <Projects/> } />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}


export default App;
