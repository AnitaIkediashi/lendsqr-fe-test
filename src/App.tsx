import Login from './pages/login/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import User from './pages/user/User'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path=':userId' element={<User />} />
        </Route>
        <Route path='login' index element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
