import './Notices.css'


const listaAvisos = [

  { id: 1, imagen: '/imgs/advises/ad1.jpg', link: null },
  { id: 2, imagen: '/imgs/advises/ad2.png', link: 'https://drive.google.com/file/d/1rUMfsMkW843WD9ttt-Y0ceBnGGbHEF1J/view' },
  { id: 3, imagen: '/imgs/advises/ad3.png', link: 'https://drive.google.com/file/d/1Qrjbyux_mwpAbd4eD1wuEygNfXh2Jnlt/view' },
  { id: 4, imagen: '/imgs/advises/ad4.jpg', link: 'http://www.encuestadiversidades.cl/' },
  { id: 5, imagen: '/imgs/advises/ad5.png', link: 'https://cholcholpagos.insico.cl/PermisoCirculacion' }
]


function Notices() {

  return (

    <section  className="noticesSection"  id="avisos">

      <div className="contenedorAvisos">
        <h2 className="noticesTitle">Avisos</h2>
        <div  className="gridAvisos">

          {listaAvisos.map((aviso) => (

            <article  key={aviso.id}  className="noticeCard">

              <div className="cajaImagenAviso">

                <img
                  src={aviso.imagen}
                  alt={`Aviso ${aviso.id}`}
                  className="imagenAviso"
                  loading="lazy"
                />

              </div>


              {aviso.link && (

                <a
                  className="noticeButton"
                  href={aviso.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver más
                </a>

              )}

            </article>

          ))}

        </div>

      </div>

    </section>

  )

}


export default Notices
