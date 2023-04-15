import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from './home';
import Search from './search';
import Profile from './profile';
import Login from './login';
import Register from './login/register';
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route index
                 element={<Home/>}/>
          <Route path='search'
                 element={<Search/>}/>
          <Route path='profile/*'
                 element={<Profile/>}/>
          <Route path='login'
                 element={<Login/>}/>   
          <Route path='Register'
                 element={<Register/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
