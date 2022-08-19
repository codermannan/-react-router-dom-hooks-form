import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import { ProfileForm } from './Form'
import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'
import { MainNavbar } from './MainNavbar'
import { Company } from './Company'
import { Founder } from './Founder'
import { NotFound } from './NotFound'

function App() {
  return (
    
      <BrowserRouter>
        <MainNavbar />
        <div className='container text-center'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />}>
            <Route path='company/:name' element={<Company />} />
            <Route path='founder' element={<Founder />} />
          </Route>
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
        </div>
      </BrowserRouter>
      
  );
}

export default App;
