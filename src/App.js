
import './App.css';

import Home from './Pages/Home'
import EV from './Pages/EV'
import Mobile from './Pages/Mobile'
import Energy from './Pages/Energy'
import PC from './Pages/PC'
import UpcomingEvents from './Pages/UpcomingEvents'
import How from './Pages/How'
import G from './Pages/G'


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />}> */}
        <Route index element={<Home />} />
        <Route path="EV" element={<EV />}/>
          <Route path="Mobile" element={<Mobile />} />
          <Route path="Energy" element={<Energy />} />
          <Route path="PC" element={<PC />} />
          <Route path="UpcomingEvents" element={<UpcomingEvents />} />
          <Route path="How" element={<How />} />
          <Route path="G" element={<G />} />
     


     
    </Routes>
  </BrowserRouter>,



    </div>
  );
}

export default App;
