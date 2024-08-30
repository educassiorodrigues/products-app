import { Outlet } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Menu } from './ui/components/root/Menu'
import { Container } from 'react-bootstrap'
import { OverlayProvider } from './core/contexts/UserContext'

const queryClient = new QueryClient()

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <OverlayProvider>
          <div className='flex flex-col justify-center items-center vh-100 vw-100'>
            <Menu />
            <Container >
              <Outlet />
            </Container>
          </div>
        </OverlayProvider>
      </QueryClientProvider>
    </>
  )
}

