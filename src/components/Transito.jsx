import './Transito.css'


const direccionTransito = "Av. Lastarria 127, 504 0000, Cholchol, Chile"

const urlMapa = `https://www.google.com/maps?q=${encodeURIComponent(direccionTransito)}&output=embed`


function Transito() {

  return (

    <section  className="seccionTransito"  id="transito">

      <div className="contenedorTransito">

        <h2 className="trafficTitle">Nueva Dirección de Tránsito</h2>

        <p className="textoDireccion">{direccionTransito}</p>


        <div  className="cajaTransito">

          <div className="leftSide">

            <img
              src="/imgs/unidadTransito.jpg"
              alt="Nueva Unidad de Tránsito"
              className="fotoTransito"
              loading="lazy"
            />

          </div>


          <div className="rightSide">

            <iframe
              title="Ubicación Unidad de Tránsito"
              className="mapaTransito"
              src={urlMapa}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>

          </div>

        </div>

      </div>

    </section>

  )

}


export default Transito
