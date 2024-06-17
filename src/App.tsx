import { Outlet } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1 className='text-3xl bold underline text-yellow-500'>Hello World</h1>
        <Outlet />
      </QueryClientProvider>
    </>
  )
}

