import { Outlet } from 'react-router-dom'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()


export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1>Hello World</h1>
        <Outlet />
      </QueryClientProvider>
    </>
  )
}

