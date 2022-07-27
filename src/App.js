import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import AboutMe from './components/pages/AboutMe';
import SideBar from './components/pages/SideBar';

function App() {

  const [open, setOpen] = useState(true)
  /*  
   const [dark, setDark] = useState('light')
   useEffect(() => {
     document.body.className = dark
   }, [dark])
 
   const setHandle = () => {
     if (dark === 'light') {
       setDark('dark')
     } else {
       setDark('light')
     }
     localStorage.setItem('theme', JSON.stringify({theme:dark}))
   } */
  return (
    <div className="App dark:bg-slate-800 relative">
      <button onClick={() => setOpen(!open)}>Toggle</button>
      <div className='flex justify-between items-center'>
        <div className='px-5 w-full'>
          <AboutMe />
        </div>
        <SideBar
          open={open}
        />
      </div>
    </div>
  );
}

export default App;
