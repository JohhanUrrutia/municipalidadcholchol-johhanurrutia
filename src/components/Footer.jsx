import './Footer.css'


function Footer() {

  return (

    <footer  className="footer"  id="contacto">

      <div className="footerContainer">


        <div  className="marcaPie">

          <img
            src="/imgs/icons/logo-footer.png"
            alt="Municipalidad de Cholchol"
            className="footerLogo"
          />

        </div>


        <div className="infoContacto">

          <h3 className="footerTitle">Contáctanos</h3>


          <ul className="contactList">

            <li className="itemContacto">
              <span className="etiquetaContacto">Dirección:</span>
              <span>José Joaquín Pérez 449, Cholchol</span>
            </li>


            <li className="itemContacto">
              <span className="etiquetaContacto">Correo:</span>
              <a href="mailto:oficinadepartes@municholchol.cl">
                oficinadepartes@municholchol.cl
              </a>
            </li>


            <li className="itemContacto">
              <span className="etiquetaContacto">Teléfono:</span>
              <a href="tel:452734200">452 734200</a>
            </li>

          </ul>

        </div>


        <div  className="extraLinks">

          <h3 className="footerTitle">Más</h3>


          <ul className="extraList">

            <li>
              <a
                href="https://www.youtube.com/@MunicipalidaddeCholcholOficial/streams"
                target="_blank"
                rel="noopener noreferrer"
              >
                Transmisiones de consejos municipales
              </a>
            </li>

          </ul>

        </div>

      </div>


      <div className="footerBottom">

        <p>
          &copy; {new Date().getFullYear()} Desarrollado por Johhan Urrutia.
        </p>

      </div>

    </footer>

  )

}


export default Footer
