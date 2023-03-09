import React from "react";
import "./styles/App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Header from "./components/Header";
import Home from "./Pages/Home";
import ActiveGroups from "./Pages/ActiveGroups";
import CreateGroup from "./Pages/CreateGroup";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const uriString = process.env.URI_STRING || "http://localhost:3001/graphql";

const httpLink = createHttpLink({
  uri: uriString,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/active-groups" element={<ActiveGroups />} />
          <Route path="/create-group" element={<CreateGroup />} />
          <Route path="/me" element={<Profile />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;
