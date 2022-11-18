import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import TestPage from './pages/Test';
import './styles/globals.css';

// import { data } from './data';
// import Pano from './components/Pano';
export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            {/* <div className="aaa">
                <Pano data={data} />
            </div> */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about">
                    <Route index element={<AboutPage />} />
                    <Route path=":number" element={<AboutPage />} />
                </Route>
                <Route path="test" element={<TestPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Application;
