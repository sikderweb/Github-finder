import{ BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import NavBar from './componets/layout/NavBar';
import Footer from './componets/layout/Footer';
import {GithubProvider} from'./context/github/GithubContext';
function App() {
  return( 
   <GithubProvider>
      <Router>
      <div className='flex flex-col justify-between h-screen'>
        <NavBar />
        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
   </GithubProvider>
  )
}
export default App;
