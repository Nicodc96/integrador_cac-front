import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Footer, Header } from './components';

function App() {
  return (
    <>
    <Header />
    <main>      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/oradores" element={ "oradores" } />
        <Route path="/formulario-orador" element={ "form orador" } />
        <Route path="/tickets" element={ "tickets" } />
      </Routes>
      </BrowserRouter>
    </main>
    <Footer />
    </>
  )
}

export default App;
