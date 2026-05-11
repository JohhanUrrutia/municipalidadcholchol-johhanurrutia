import { useState } from 'react'
import './Formulario.css'

function Formulario() {
  const [datos, setDatos] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  })
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  const cambio = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value })
    setEnviado(false)
  }

  const validarCorreo = (correo) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)
  }

  const enviar = (e) => {
    e.preventDefault()
    const nuevosErrores = {}

    if (!datos.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio'
    }

    if (!datos.correo.trim()) {
      nuevosErrores.correo = 'El correo es obligatorio'
    } else if (!validarCorreo(datos.correo)) {
      nuevosErrores.correo = 'Ingresa un correo válido'
    }

    if (!datos.mensaje.trim()) {
      nuevosErrores.mensaje = 'El mensaje es obligatorio'
    }

    setErrores(nuevosErrores)

    if (Object.keys(nuevosErrores).length === 0) {
      setEnviado(true)
      setDatos({ nombre: '', correo: '', mensaje: '' })
    }
  }

  return (
    <section className="seccionFormulario" id="formulario">
      <div className="contenedorFormulario">
        <h2 className="tituloFormulario">Contáctanos</h2>
        <p className="subtituloFormulario">
          Escríbenos y te responderemos a la brevedad
        </p>

        <form className="formulario" onSubmit={enviar} noValidate>
          <div className="campoFormulario">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={datos.nombre}
              onChange={cambio}
              className={errores.nombre ? 'inputError' : ''}
            />
            {errores.nombre && (
              <span className="errorCampo">{errores.nombre}</span>
            )}
          </div>

          <div className="campoFormulario">
            <label htmlFor="correo">Correo electrónico</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={datos.correo}
              onChange={cambio}
              className={errores.correo ? 'inputError' : ''}
            />
            {errores.correo && (
              <span className="errorCampo">{errores.correo}</span>
            )}
          </div>

          <div className="campoFormulario">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              value={datos.mensaje}
              onChange={cambio}
              className={errores.mensaje ? 'inputError' : ''}
            />
            {errores.mensaje && (
              <span className="errorCampo">{errores.mensaje}</span>
            )}
          </div>

          <button type="submit" className="botonFormulario">
            Enviar mensaje
          </button>

          {enviado && (
            <p className="mensajeExito">
              Mensaje enviado correctamente. ¡Gracias por contactarnos!
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Formulario
