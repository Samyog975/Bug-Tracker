import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from "./pages/Signin";
import SignUp from './pages/Signup';
import Dashboard from './pages/Dashboard';
import BugList from './pages/BugList';
import Header from './components/Header';


export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/buglist" element={<BugList />} />

      </Routes>
    
    </BrowserRouter>
  )
}
