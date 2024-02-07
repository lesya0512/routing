import './App.css';
import Footer from './components/footer/footer';
import MainPage from './components/mainPage/main';
import ProfilePage from './components/profilePage/profile';
import AboutPage from './components/aboutPage/about';
import Header from './components/header/header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

    <Header />

    <Routes>
      <Route path='/' Component={MainPage} />
      <Route path='/profile' Component={ProfilePage} />
      <Route path='/about' Component={AboutPage} />
    </Routes>

    {/* <MainPage /> */}



    <Footer />

    </div>
  );
}

export default App;
