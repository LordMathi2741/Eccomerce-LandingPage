
import './App.css';

import Navbar from './components/nav-bar.jsx';
import Hero from './components/hero.jsx';
import Cards from './components/Cards.jsx';
import Users from './components/Users.jsx';
import Contact from './pages/Contact.jsx';
function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Cards/>
        <div class='bg-emerald-600 py-20'>
          <strong class='text-center  text-2xl text-sky-100 lg:text-4xl'>  <h1> ¿Que dicen nuestros clientes? </h1> </strong>
           <Users/>
        </div>
        <h1 class='text-center my-10 text-4xl font-bold text-emerald-600'> Dejanos tu consulta a continuacion</h1>
        <div class='flex justify-center items-center'>
          <Contact/>
        </div>
        <footer class="text-center py-24 bg-black text-sky-100 font-bold text-xs lg:text-base">
            Copyright LordMathi2741. All Rights Reserved
          </footer>
    </div>
  );
}

export default App;
