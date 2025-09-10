<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.bg01.bg-full-width.py-5
      .col-12.col-sm-7.col-lg-4
        figure
          img(data-aos="fade-in")(src="../assets/curso/intro/img01.png" alt="Imagen decorativa").mb-4.mb-lg-0
      .col-lg-8
        p El componente formativo en almacenamiento aborda los fundamentos esenciales para una gestión eficiente de inventarios y recursos logísticos. En este contexto, se exploran conceptos clave como el almacén, sus características, tipos y funciones, así como las operaciones que garantizan su correcto funcionamiento. Además, se analizan las herramientas tecnológicas y los registros necesarios para optimizar procesos, asegurando trazabilidad y control. La gestión de información confidencial y los métodos de captura de datos también son aspectos centrales, ya que permiten mantener la integridad y disponibilidad de los datos en un entorno logístico.
        .px-4.py-3.bg-color-secundario-p10.rounded-3.align-items-center.justify-content-center
            p.mb-0 Por otro lado, se profundiza en la elaboración de formularios para la recolección de información y las técnicas que facilitan su diseño. El monitoreo del almacén, mediante procedimientos específicos y tipos de control, asegura la identificación oportuna de desviaciones y la mejora continua. Este componente busca brindar las competencias necesarias para gestionar un almacén de manera efectiva, combinando conocimientos teóricos y prácticos que respondan a las demandas del sector logístico y de cadena de suministro.
        

    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/JjPV3D5FpuU?si=gRyQeJjkd69-L9Tbnpm" title="Análisis estratégico del mercado internacional" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
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
