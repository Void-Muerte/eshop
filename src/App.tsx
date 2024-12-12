import './App.css'
import Checkout from './components/checkout';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './components/index.layout';
import { BasketContextProvider } from './context/BasketContext';
import Login from './components/login';

function App() {
  return (
    <div>
      <Router>
        <BasketContextProvider>
        <RootLayout>
        <Routes>
          <Route path='/checkout' element={<Checkout />} />
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        </RootLayout>
        </BasketContextProvider>
      </Router>
    </div>
  );
}

export default App;
