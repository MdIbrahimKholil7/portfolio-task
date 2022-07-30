import React, {Suspense } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
// import Home from './components/home/Home';
import loader from './assets/829.gif'
import NotFound from './components/pages/NotFound';
function App() {
  const Home = React.lazy(() => import('./components/home/Home'));

  return (
    <div className="App dark:bg-slate-800 dark:text-white relative">
      <Routes>
        <Route path='/' element={
          <Suspense
          fallback={<div
          className='flex justify-center items-center
          h-[100vh]
          '
          >
            <img className='w-[100px]' src={loader} alt='loader'/>
          </div>}
          >
            <Home />
          </Suspense>} />
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
