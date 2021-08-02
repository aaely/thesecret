import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil'
import Loader from './Components/Loader'
import 'bootstrap/dist/css/bootstrap.min.css';

//localStorage.clear()

ReactDOM.render(
  
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={<Loader type={'circles'} />}>
      <App />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();