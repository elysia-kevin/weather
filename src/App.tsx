import './App.css';
import { BrowserRouter } from "react-router-dom";
import Layout from './components/layout';
import Router from './routes/routes';
import { JSX } from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App(): JSX.Element {

  const queryClient = new QueryClient({
    defaultOptions:{
      queries:{
        staleTime: 5*60*1000,
        gcTime: 10*60*1000,
        retry: false,
        refetchOnWindowFocus: false,
      }
    }
  });

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Layout>
      <Router />
      </Layout>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </>
  )
}

export default App
