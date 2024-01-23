import { Outlet } from 'react-router-dom';
import classes from './App.module.css';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className={classes.content}>
        <div className={classes.centerText}>THEMERN</div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
