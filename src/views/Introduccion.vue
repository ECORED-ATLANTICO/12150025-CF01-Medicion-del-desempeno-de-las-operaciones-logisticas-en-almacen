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
      .col-10.col-sm-7.col-lg-4
        figure
          img(data-aos="fade-in")(src="../assets/curso/intro/img01.png" alt="Imagen decorativa")
      .col-lg-8
        p El componente formativo en almacenamiento aborda los fundamentos esenciales para una gestión eficiente de inventarios y recursos logísticos. En este contexto, se exploran conceptos clave como el almacén, sus características, tipos y funciones, así como las operaciones que garantizan su correcto funcionamiento. Además, se analizan las herramientas tecnológicas y los registros necesarios para optimizar procesos, asegurando trazabilidad y control. La gestión de información confidencial y los métodos de captura de datos también son aspectos centrales, ya que permiten mantener la integridad y disponibilidad de los datos en un entorno logístico.
        .px-4.py-3.bg-color-secundario-p10.rounded-3.align-items-center.justify-content-center
            p.mb-0 Este componente formativo busca proporcionar los conocimientos y habilidades necesarias para evaluar el comportamiento de las redes sociales mediante herramientas de analítica web, permitiendo la implementación de acciones de mejora. A lo largo de este componente, se explorarán conceptos fundamentales, métricas clave, estándares de analítica y herramientas utilizadas por los profesionales del marketing digital.
        

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
