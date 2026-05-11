import './Noticias.css'

const imagenesNoticia = [
  '/imgs/notice/notice1.jpeg',
  '/imgs/notice/notice2.jpeg',
  '/imgs/notice/notice3.jpeg',
  '/imgs/notice/notice4.jpeg',
  '/imgs/notice/notice5.jpeg',
  '/imgs/notice/notice6.jpeg',
  '/imgs/notice/notice7.jpeg'
]

function Noticias() {
  return (
    <section className="seccionNoticias" id="noticias">
      <div className="contenedorNoticias">
        <h2 className="tituloSeccionNoticias">Noticias</h2>

        <article className="noticia">
          <div className="textoNoticia">
            <h3 className="tituloNoticia">
              MUNICIPIO RECONOCE A DIRIGENTES SOCIALES QUE LUCHARON PARA QUE
              CHOLCHOL SEA COMUNA
            </h3>
            <div className="cuerpoNoticia">
              <p>
                Por primera vez en la historia de la comuna el municipio,
                liderado por el alcalde, Álvaro Labraña, rindió homenaje a los
                vecinos que trabajaron durante años para lograr que Cholchol
                fuera un territorio autónomo y se independizara de Nueva
                Imperial en el año 2004.
              </p>
              <p>
                En una emotiva ceremonia el municipio de Cholchol, encabezado
                por el alcalde, Álvaro Labraña, rindió homenaje a los vecinos
                y dirigentes sociales, que, con su compromiso y esfuerzo,
                formaron parte fundamental del proceso que permitió la
                creación de la comuna hace más de dos décadas.
              </p>
              <p>
                El significativo evento que se llevó a cabo en dependencias
                del edificio municipal reunió a diversas autoridades, entre
                ellas, los senadores, José García Ruminot y Jaime Quintana,
                la directora del Fosis, Tamara Torres, los concejales,
                Bernardita Viscarra, Ismel Cayul, Andrés Navarrete y Gonzalo
                Troppa, además de los representantes de organizaciones
                sociales y vecinos, quienes reconocieron, el legado de
                aquellos líderes que formaron parte del Comité
                “Pro-Restitución de la Comuna de Cholchol” quienes lucharon
                por la autonomía administrativa de la zona.
              </p>
              <p>
                Durante la ceremonia de reconocimiento, el alcalde Labraña,
                entregó distinciones a quienes lideraron históricas gestiones
                y movilizaciones para lograr que Cholchol se independizara de
                Nueva Imperial y fuera oficialmente reconocida como comuna el
                12 de abril del año 2004. Además, durante la jornada, se
                realizó un reconocimiento póstumo a lideres que ya no están
                presentes físicamente y que fueron actores claves para lograr
                el anhelado sueño de convertir a cholchol en comuna.
              </p>
              <p>
                La máxima autoridad comunal, Álvaro Labraña, destacó en su
                discurso la importancia de honrar a quienes "con visión,
                perseverancia y amor por esta tierra, marcaron un antes y un
                después en la historia de Cholchol". Asimismo, invitó a las
                nuevas generaciones a inspirarse en el legado de los
                dirigentes sociales para seguir construyendo un futuro de
                progreso y unidad.
              </p>
              <p>
                “Como municipio estamos pagando una deuda histórica con
                nuestros vecinos. Hoy es un día donde marcamos un hito, donde
                reconocimos a quienes hicieron posible que Cholchol se
                transformara en una comuna y como alcalde estoy muy
                contento, agradecido de poder haber podido generar esta
                instancia, la que, para nosotros, es un acto de justicia qué
                llega luego de 21 años, donde nunca ante se reconoció su
                tremenda labor. Mi compromiso es mantener el legado de estos
                hombres y mujeres que lucharon para que Cholchol se
                convirtiera en lo que es hoy, una comuna con identidad,
                historia y esperanza”, precisó el jefe comunal.
              </p>
              <p>
                Por su parte, María Ignacia Manríquez, dirigente social que
                formó parte del comité Procomuna de Cholchol, agradeció el
                reconocimiento y dijo que, “altamente agradecida, muy
                agradecida porque eso motiva a los dirigentes, a las personas
                a soñar y a pensar que, se puede contar con el apoyo de la
                autoridad y con eso, se pueden lograr muchas cosas. Este
                reconocimiento nos llega tanta tarde, pero a la vez nos
                sorprende gratamente porque siento que esto nos va a motivar
                aún más a seguir luchando por nuestro Cholchol”.
              </p>
              <p>
                Mientras que para, Elisa Manríquez, miembro del comité de
                adelanto que permitió convertir a cholchol en comuna, dijo
                que, “estoy muy sorprendida, como muchos de los que estamos
                aquí. Estoy muy emocionada, porque esto se pude haber hecho
                muchos años atrás y se valora. Esto fue es un acto muy
                significativo, con mucha emoción lo recibimos con
                agradecimiento, también porque muchos ya partieron de
                nuestros amigos, nuestros colegas que trabajaron con
                nosotros. Feliz de que se haga justicia y que nos reconozcan
                en vida”.
              </p>
              <p>
                Cabe señalar que la ceremonia finalizó en el frontis de la
                municipalidad, donde se instaló una escultura a gran escala
                de una trapelacucha, figura representativa del pueblo
                mapuche, la que, además, consideró una placa conmemorativa en
                honor al Comité Procomuna agradeciendo su aporte al
                desarrollo de Cholchol.
              </p>
            </div>
          </div>

          <div className="galeriaNoticia">
            {imagenesNoticia.map((src, i) => (
              <div key={i} className="cajaImagenNoticia">
                <img
                  src={src}
                  alt={`Noticia foto ${i + 1}`}
                  className="imagenNoticia"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Noticias
