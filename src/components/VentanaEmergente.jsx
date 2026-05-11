import { useState } from 'react'
import './VentanaEmergente.css'

function VentanaEmergente() {
  const [visible, setVisible] = useState(true)

  const cerrar = () => setVisible(false)

  if (!visible) return null

  return (
    <div className="overlayVentana" onClick={cerrar}>
      <div className="cajaVentana" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="botonCerrar"
          aria-label="Cerrar"
          onClick={cerrar}
        >
          ×
        </button>

        <h3 className="tituloVentana">Horario de atención</h3>
        <p className="textoVentana">
          La Municipalidad de Cholchol está abierta de 08:30 a 14:00 hrs.
        </p>
      </div>
    </div>
  )
}

export default VentanaEmergente
