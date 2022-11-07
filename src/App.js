
import  Navbar  from './component/Navbar';
import './App.css';
import { BrowserRouter } from 'react-router-dom/dist';
import RouterApp from './component/RouterApp';
import LoginProvider from './context/LoginProvider';


function App() {
  return (
    <div className="app-wrapper">
    <LoginProvider>
    <BrowserRouter>
    <Navbar />
    <RouterApp />
    </BrowserRouter>
 </LoginProvider>
 </div>
  );
}

export default App;
