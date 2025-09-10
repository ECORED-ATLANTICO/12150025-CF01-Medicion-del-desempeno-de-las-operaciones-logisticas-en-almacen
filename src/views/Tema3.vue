<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión de información 


    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema3/img01.png', alt='imagen decorativa')
      .col-lg-8
          p Haisan Abdel Malak (2022) define la gestión de la información como el proceso de gestión del ciclo de vida completo de la información, desde su identificación y recopilación hasta su eliminación mediante el archivo o la eliminación. engloba todos los datos físicos y electrónicos recopilados por una empresa de sus clientes, empleados y proveedores. 
          .bg-color-secundario-p10.p-3.mb-3.tarjeta
            .row.align-items-center.justify-content-center
              .col-12.col-lg-10
                p.mb-3.mb-lg-0 Imaginemos que la información es como un tesoro. Pero, ¿de qué sirve tener un montón de tesoros si no sabes cuáles son valiosos, cómo encontrarlos o cómo usarlos? Ahí es donde entra la gestión de la información, que es como tener un mapa y una brújula para navegar por ese tesoro. 
              .col-7.col-md-4.col-lg-2
                figure
                  img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema3/img02.svg', alt='imagen decorativa').mx-auto
          p Así, la gestión de la información se convierte en un activo valioso para las empresas, una herramienta que permite tomar decisiones acertadas, anticiparse a los cambios y aprovechar las oportunidades. No es solo un medio para alcanzar el conocimiento, sino un camino en sí mismo hacia el éxito. 

    .row
      .col-12.col-lg-8.mx-auto
        .titulo-sexto.mb-4
          h5 Figura 5. 
          span Aspectos importantes en la gestión de información  
        figure.mb-4
          figure.mb-3
            img(src='@/assets/curso/temas/tema3/img03.svg', alt='Imagen Decorativa').mx-auto.d-none.d-sm-block
            img(src='@/assets/curso/temas/tema3/img03m.svg', alt='Imagen Decorativa').mx-auto.d-block.d-sm-none

          figcaption 
            b Fuente: 
            | tomado y adaptado de Introducción a la gestión de la información y del conocimiento en la empresa, por Universitat Politecnica de Valencia, 2022.

    separador

    //titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_3_1 3.1 Principios de manejo confidencial de información


    .bloque-texto-g.bg-color-primario-p5.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img04.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Preservar la confidencialidad de la información es esencial para empresas de cualquier tamaño. Una protección adecuada de los datos sensibles no solo ayuda a evitar posibles sanciones y multas, sino que también fortalece la confianza de clientes, empleados y otros actores clave en la organización. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Esto implica que la información personal, los secretos y otros datos empresariales privados están resguardados contra accesos indebidos, divulgaciones no autorizadas y posibles robos. 
        p Con el aumento en la frecuencia y sofisticación de las brechas de seguridad, las compañías deben adoptar estrategias de protección robustas para asegurarse de que la información que debe mantenerse privada realmente permanezca segura. 
        .bg-color-secundario-p10.p-3.mb-3.tarjeta
          .row.align-items-center.justify-content-center
            .col-7.col-md-4.col-lg-2
              figure
                img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema3/img06.svg', alt='imagen decorativa').mx-auto
            .col-12.col-lg-10
              p.mb-0 Los principios para el manejo de información confidencial son esenciales para asegurar la seguridad, precisión y privacidad de los datos sensibles dentro de cualquier organización. A continuación, se destacan los principios clave: 
      .col-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema3/img05.png', alt='imagen decorativa')

    .row.mb-5
      .col-12.col-lg-10.mx-auto
        .titulo-sexto.mb-4
          h5 Figura 6. 
          span Principios para el manejo confidencial de información  
        figure.mb-4
          figure.mb-3
            img(src='@/assets/curso/temas/tema3/img09.svg', alt='Imagen Decorativa').mx-auto.d-none.d-sm-block
            img(src='@/assets/curso/temas/tema3/img09m.svg', alt='Imagen Decorativa').mx-auto.d-block.d-sm-none

          figcaption 
            b Fuente: 
            | Sena (2025)

        //cajon
        .cajon.color-acento-contenido.p-4.mb-3
          p.mb-0 La confidencialidad en el manejo de la información es esencial cuando se trata de proteger datos personales y corporativos. Su propósito es asegurar que la información sensible solo pueda ser vista o utilizada por personas y sistemas con la autorización adecuada. Es clave en distintos ámbitos, desde el cumplimiento de normativas legales hasta la seguridad dentro de las organizaciones y el uso de tecnología para resguardar datos. Mantener la confidencialidad no solo protege la privacidad, sino que también fortalece la confianza en el manejo responsable de la información. 
    
    separador 

    // titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_3_2 3.2 Métodos de captura de datos 


    // banner con tarjeta
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in")
      .col-lg-12.mb-4
        div.tarjeta-horz.mb-3
          img(src='@/assets/curso/temas/tema3/img16.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-gray-gradient
            .px-4
              p.mb-0 La recopilación de información consiste en obtener, filtrar y estructurar datos provenientes de diferentes fuentes, con el objetivo de utilizarlos para análisis, investigaciones o toma de decisiones específicas. 
    
   
    .row.mb-3.titulo-icono
      .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.position-relative.bg-color-secundario Características principales de la captura de datos
            img(src='@/assets/curso/temas/tema1/img05.png', alt='imagen decorativa')  
    .bg-full-width.bg04
      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-5
          figure
            img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema3/img17.png', alt='imagen decorativa')
        .col-12.col-lg-7
          // Linea de tiempo
          LineaTiempoD.color-secundario
            .row(numero="1" titulo="Recolección de datos ")
                p.text-small Se obtiene información de fuentes como encuestas, entrevistas, bases de datos, documentos, internet, sensores, etc. 
            .row(numero="2" titulo="Selección y filtrado ")
                p.text-small No toda la información es útil, por lo que se elige la más relevante según los objetivos 
            .row(numero="3" titulo="Organización ")
                p.text-small los datos se estructuran para facilitar su análisis (por ejemplo, en tablas, informes o sistemas digitales). 
            .row(numero="3" titulo="Verificación  ")
                p.text-small Se valida la calidad y precisión de la información recopilada. 

      p.mb-5 A continuación, se presentan los principales métodos utilizadas en la captura de datos: 

      .row
        .col-12.mx-auto
          .titulo-sexto.mb-4
            h5 Tabla 3. 
            span Principales métodos para la captura de datos
          .tabla-a.color-acento-botones
            table.bg-white
              caption 
                b Fuente: 
                | Sena (2025)
              thead
                tr
                  th Metodología 
                  th Descripción  
                  th Implementación 
              tbody
                tr
                  td Encuestas y cuestionarios  
                  td Es un mecanismo de recolección popular que permite obtener datos directamente de los sujetos de interés. Para garantizar de forma correcta su diseño es necesario tener en cuenta las variables requeridas y formular preguntas que permitan cumplir los objetivos.
                  td Formularios digitales (Google y Microsoft Forms, Typeform) o físicos. 
                tr
                  td Entrevistas  
                  td Son un tipo de herramienta que se realiza de manera individual, y consiste en la aplicación de un cuestionario que puede ser estructurado o no. Antes de aplicarse se debe definir las variables a identificar para obtener los datos adecuados. 
                  td Entrevista 
                tr
                  td Observación  
                  td Es una técnica simple que pretende reconocer el comportamiento del objeto de estudio de manera directa, y su aplicación no requiere gran disponibilidad de recursos. 
                  td Recolección de datos en tiempo real. 
                tr
                  td Grupos focales  
                  td Consiste en desarrollar una entrevista colectiva que permite contrastar las respuestas de los participantes y fomentar la discusión sobre el tema tratado, de esta manera es posible enriquecer los datos y ver las diversas perspectivas sobre una problemática.
                  td Entrevista grupal 
                tr
                  td Minería de datos  
                  td Es el proceso de descubrir patrones, correlaciones y tendencias ocultas en grandes conjuntos de datos mediante técnicas estadísticas 
                  td Uso de IA y 
                     i machine learning. 
                tr
                  td 
                    i Web scraping  
                  td Técnica para extraer información automatizada de sitios web mediante bots o scripts, convirtiendo datos no estructurados en estructurados. 
                  td Automatización de recolección de datos desde páginas web. 
                tr
                  td Sensores y IOT  
                  td Es la captura automática de datos mediante dispositivos físicos conectados a internet (sensores, 
                    i wearables, 
                    | cámaras inteligentes), que transmiten información en tiempo real. 
                  td ---

              


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
