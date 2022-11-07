
import  Navbar  from './component/Navbar';
import './App.css';
import { BrowserRouter } from 'react-router-dom/dist';
import RouterApp from './component/RouterApp';
import LoginProvider from './context/LoginProvider';
import Footer from './component/Footer';


function App() {
  return (
    <div className="app-wrapper">
    <LoginProvider>
    <BrowserRouter>
    <Navbar />
    <RouterApp />
    <Footer/>
    </BrowserRouter>
 </LoginProvider>
 </div>
  );
}

export default App;
