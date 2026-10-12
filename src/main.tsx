const pending=sessionStorage.getItem('redirect');if(pending){sessionStorage.removeItem('redirect');history.replaceState(null,'',pending);}
import React from 'react';import ReactDOM from 'react-dom/client';import App from './app/App';
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
