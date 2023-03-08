import './App.css';
import Home from './components/home';
import PostForm from './components/postform';
import { Route, Routes } from 'react-router-dom';
import PutForm from './components/updateform';
function App() {
  return (
    <div className="App">
      <div className="head">
        <h1>F1 WALL OF FAME</h1>
      </div>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<PostForm/>}/>
        <Route path="/upd/:id" element={<PutForm/>}/>
        </Routes>
    </div>
  );
}

export default App;
