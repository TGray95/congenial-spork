import React from 'react';
import './styles/App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Header from './components/Header';
import Home from './Pages/Home';
import ActiveGroups from './Pages/ActiveGroups';
import CreateGroup from './Pages/CreateGroup';
import Profile from './Pages/Profile';
import Login from './Pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const client = new ApolloClient({
  connectToDevTools: true,
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/active-groups' element={<ActiveGroups/>}/>
        <Route path='/create-group' element={<CreateGroup/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>


    </div>
    </ApolloProvider>
  );
}

export default App;
