import {Home} from './page/Home'
import {Rooms} from './page/Rooms'
import {SingleRoom} from './page/SingleRoom'
import {Error} from './page/Error'
import { Navbar } from './components/Navbar'
import {Route, Switch}  from "react-router-dom";

import "./App.css";

function App() {
  return (
   <>
   <Navbar />
   <Switch>
   <Route exact path='/'  component={Home} />
   <Route exact path='/rooms/'  component={Rooms} />
   <Route exact path='/rooms/:roomtype'  component={SingleRoom} />
    <Route component={Error} />
   </Switch>
   </>
  );
}

export default App;
