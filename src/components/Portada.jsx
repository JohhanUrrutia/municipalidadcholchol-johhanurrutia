import './Portada.css'

function Portada() {
  return (
    <section className="portada" id="inicio">
      <div className="capaOscura"></div>
      <div className="contenidoPortada">
        <h1 className="tituloPortada">Paga tu permiso de circulación</h1>
        <a
          className="botonPagar"
          href="https://cholcholpagos.insico.cl/PermisoCirculacion"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir al portal de pagos
        </a>
      </div>
    </section>
  )
}

export default Portada
