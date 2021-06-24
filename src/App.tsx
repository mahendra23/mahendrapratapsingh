import React from 'react';
import logo from './images/Mahen.jpg';
import './App.css';
import { GitReposListContainer } from './container/GitRepos/GitReposListContainer';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a aria-current="page" href="/">
          <img src={logo} className="mahen-logo" alt="logo" />
          <span className="mahen-head">Mahen</span>
        </a>
      </header>
      <QueryClientProvider client={queryClient}>
        <GitReposListContainer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
