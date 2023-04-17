import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from './home';
import Search from './search';
import Profile from './profile';
import Login from './login';
import Register from './login/register';
import Details from './details';
import store from './redux/store';
import { Provider } from "react-redux";

import CurrentUserContext from "./redux/current-user-context";

function App() {
  return (      
  <div className="container">

      <Provider store={store}>
        <CurrentUserContext>
        <BrowserRouter>
        <Routes>
          <Route index
                 element={<Home/>}/>
          <Route path='search'
                 element={<Search/>}/>
          <Route path='profile/*'
                 element={<Profile/>}/>
          <Route path='login'
                 element={<Login/>}/>   
          <Route path='register'
                 element={<Register/>}/>
          <Route path='details/:teamId'
                 element={<Details/>}/>   
          <Route
                path="search/:searchTerm"
                element={<Search/>}
              />
        </Routes>
      </BrowserRouter>
    </CurrentUserContext>
      </Provider>
      </div>

  );
}

export default App;
