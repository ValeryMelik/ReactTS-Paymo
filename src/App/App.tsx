import './App.scss';
import { FC } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../API';

import Base from '../sections/Base';
import TransactionError from '../sections/TransactionError';

const App: FC = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Base />} />
          <Route path="/transaction-error" element={<TransactionError />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
