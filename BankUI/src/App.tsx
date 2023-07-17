import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './SignUp';
import Dashboard from './components/Dashboard/Dashboard';
import Transfer from './components/Transfer/Transfer';
import History from './components/History/History';
import CreateAccount from './components/NewAccount/CreateAccount';
import ListAccounts from './components/ListAccounts/ListAccounts';
import NewAccount from './components/NewAccount/NewAccount';
import HomePage from './components/Landing Page/HomePage';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/transfer' element={<Transfer />}/>
        <Route path='/history' element={<History />}/>
        <Route path='/createAccount' element={<CreateAccount />}/>
        <Route path='/listAccounts' element={<ListAccounts />}/>
      </Routes>
    </Router>
  );
}

export default App;
