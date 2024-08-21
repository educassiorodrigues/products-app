import { Outlet } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Menu } from './ui/components/root/Menu'

const queryClient = new QueryClient()

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className='flex flex-col justify-center items-center'>
          <Menu />
          <Outlet />
        </div>

      </QueryClientProvider>
    </>
  )
}

