import './App.css'
import { Toaster } from './components/ui/sonner'
import Routes from './routes/Routes'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

function App() {

  return (
     <QueryClientProvider client={queryClient}>
      <Toaster expand richColors/>
        <Routes />
        
    </QueryClientProvider>
  )
}

export default App
