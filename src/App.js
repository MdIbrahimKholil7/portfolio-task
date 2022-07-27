import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/home/Home';
function App() {

  
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
    <div className="App dark:bg-slate-800 dark:text-white relative">
     <Routes>
        <Route path='/' element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;
