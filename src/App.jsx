import './App.css'

import VentanaEmergente from './components/VentanaEmergente'
import Menu from './components/Menu'
import Portada from './components/Portada'
import Notices from './components/Notices'
import Noticias from './components/Noticias'
import Transito from './components/Transito'
import Formulario from './components/Formulario'
import Footer from './components/Footer'


function App() {

  return (

    <div className="aplicacion">

      <VentanaEmergente />

      <Menu />


      <main  className="principal">

        <Portada />

        <Notices />

        <Noticias />

        <Transito />

        <Formulario />

      </main>


      <Footer />

    </div>

  )

}


export default App
