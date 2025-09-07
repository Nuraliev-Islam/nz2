import './app.scss'
import { 
  Header,
  Footer 
} from "./widgets"
import {
  HomePage
} from './pages'

function App() {

  return (
    <>
      <div className='container'>
        <Header />
        <HomePage />
        <Footer />
      </div>
    </>
  )
}

export default App
