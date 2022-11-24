import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/Header'
import Banner from './components/Banner'
import ComputerVision from './components/ComputerVision'
import './index.css'
import { computerVision } from './components/ComputerVision/azure-cognitiveservices-computervision';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Header />
        <Banner
          videoTitle={"Meu Video"}
          url={"https://www.youtube.com/watch?v=3BhkeY974Rg"}
          videoDescription={"IFSULDEMINAS"}
          />

        <ComputerVision />

    </div>
);


