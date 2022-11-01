
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from "./Pages/Homepage"
import Editorpage from "./Pages/Editorpage"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/editor/:id" element={<Editorpage/>}> </Route>
     
      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
