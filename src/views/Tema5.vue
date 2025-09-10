<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Monitoreo del almacén 


    .bloque-texto-g.bg-color-primario-p5.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El seguimiento y monitoreo del almacén son procesos fundamentales para lograr una gestión de inventarios eficiente, garantizar la seguridad de los bienes y optimizar los recursos logísticos. A continuación, se desarrollan los aspectos clave de estos procesos. 
    

    separador


    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_5_1 5.1 Concepto
    p.mb-5 El monitoreo del almacén se refiere al conjunto de actividades y sistemas implementados para supervisar, controlar y registrar las operaciones relacionadas con el almacenamiento de bienes. Su objetivo principal es asegurar que los bienes sean gestionados adecuadamente, minimizando errores, pérdidas y retrasos. 
    
    .bg-full-width.bg04
      .row.align-items-stretch.justify-content-center.mb-5.tarjetas-hover
        .col-12.col-md-6.col-lg-4.col-xl-2.d-flex.mb-3
          .tarjeta.bg-color-secundario-p20.p-3.text-center.h-100.w-100
            figure
              img.mb-4.w-auto.mx-auto(src='@/assets/curso/temas/tema5/img02.svg', alt='imagen decorativa')
            p
              b Control de inventario
            p Evitar faltantes o excesos de 
              i Stock

        .col-12.col-md-6.col-lg-4.col-xl-2.d-flex.mb-3
          .tarjeta.bg-color-secundario-p20.p-3.text-center.h-100.w-100
            figure
              img.mb-4.w-auto.mx-auto(src='@/assets/curso/temas/tema5/img03.svg', alt='imagen decorativa')
            p
              b Optimización de espacios
            p Asegurar un uso eficiente del área de almacenamiento

        .col-12.col-md-6.col-lg-4.col-xl-2.d-flex.mb-3
          .tarjeta.bg-color-secundario-p20.p-3.text-center.h-100.w-100
            figure
              img.mb-4.w-auto.mx-auto(src='@/assets/curso/temas/tema5/img04.svg', alt='imagen decorativa')
            p
              b Seguridad
            p Prevenir robos o daños o deterioros de bienes

        .col-12.col-md-6.col-lg-4.col-xl-2.d-flex.mb-3
          .tarjeta.bg-color-secundario-p20.p-3.text-center.h-100.w-100
            figure
              img.mb-4.w-auto.mx-auto(src='@/assets/curso/temas/tema5/img05.svg', alt='imagen decorativa')
            p
              b Trazabilidad
            p Registrar el movimiento de bienes desde su entrada hasta su salida.

        .col-12.col-md-6.col-lg-4.col-xl-2.d-flex.mb-3
          .tarjeta.bg-color-secundario-p20.p-3.text-center.h-100.w-100
            figure
              img.mb-4.w-auto.mx-auto(src='@/assets/curso/temas/tema5/img06.svg', alt='imagen decorativa')
            p
              b Cumplimiento Normativo
            p Garantizar que las operaciones sigan regulaciones internas y externas.

      separador

      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_5_2 5.2 Tipos
      p.mb-5 El monitoreo en almacenes puede clasificarse según diferentes enfoques tecnológicos y operativos:
    
      // Subtitulo
      .row.mb-3.titulo-icono
        .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
          .div.mb-3(data-aos="fade-right")
            h3.position-relative.bg-color-secundario Tipos de monitoreo del almacén 
              img(src='@/assets/curso/temas/tema1/img05.png', alt='imagen decorativa')  

    // Slider
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema5/img07.png', alt='imagen decorativa')
      .col-lg-8
        .tarjeta.fondo_1_2.p-lg-5.bg05.p-3
          SlyderA(tipo="b").tarjeta--blanca.p-3.rounded
            .tarjeta.p-4
              h4.mb-4.mb-lg-2 Manual 
              .row.align-items-center.justify-content-center
                .col-12.col-lg-10.order-2.order-lg-1
                  p.mb-0 Se realiza mediante registros físicos (libros, hojas de cálculo). <br>Requiere mayor esfuerzo humano y es propenso a errores. <br>Usado en almacenes pequeños con bajo volumen de operaciones. 
                .col-6.col-lg-2.order-1.order-lg-2.mb-4.mb-lg-0
                  img(src='@/assets/curso/temas/tema5/img08.svg', alt='imagen decorativa')  
            .tarjeta.p-4
              h4.mb-4.mb-lg-2 Automatizado
              .row.align-items-center.justify-content-center
                .col-12.col-lg-10.order-2.order-lg-1
                  p Utiliza tecnologías como: códigos de barras para escaneo rápido de productos; RFID (Identificación por radiofrecuencia) para rastreo en tiempo real sin línea de visión; sistemas de gestión de almacenes (WMS para control de inventario. <br>Reduce errores y mejora la eficiencia operativa. 
                .col-6.col-lg-2.order-1.order-lg-2.mb-4.mb-lg-0
                  img(src='@/assets/curso/temas/tema5/img09.svg', alt='imagen decorativa')  
            .tarjeta.p-4
              h4.mb-4.mb-lg-2 En tiempo real 
              .row.align-items-center.justify-content-center
                .col-12.col-lg-10.order-2.order-lg-1
                  p.mb-0 Monitoreo constante mediante sensores y sistemas IoT (Internet de las Cosas). 
                  p Proporciona alertas inmediatas ante irregularidades (ej. variaciones de temperatura en almacenes frigoríficos). 
                .col-6.col-lg-2.order-1.order-lg-2.mb-4.mb-lg-0
                  img(src='@/assets/curso/temas/tema5/img10.svg', alt='imagen decorativa')  

    //cajon
    .cajon.color-acento-contenido.p-4
      p.mb-0 En conclusión, la elección del tipo de seguimiento adecuado impacta directamente en la eficiencia, seguridad y competitividad de la gestión de almacenes, siendo recomendable avanzar hacia soluciones tecnológicas que permitan un control integral y ágil de las operaciones.
        
    separador

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_5_3 5.3 Procedimiento

    
    // banner con tarjeta
    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-lg-12.mb-4
        div.tarjeta-horz.mb-3
          img(src='@/assets/curso/temas/tema5/img11.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-gray-gradient
            .px-4
              p.mb-0 El procedimiento de monitoreo del almacén se refiere al conjunto de pasos estandarizados y metodológicos que se implementan para ejecutar de manera sistemática la supervisión y control de las operaciones, inventarios y condiciones físicas del almacén. 
    
    .bg-full-width.bg02.bg-size-auto.bg-bottom
      .row.mb-5
        .titulo-sexto.mb-4
          h5 Tabla  5. 
          span Técnicas de elaboración
        .tabla-a.color-acento-botones 
          table.bg-white
            caption 
              b Fuente: 
              | Sena, (2025)
            thead
              tr
                th Fase 
                th Elementos 
                th Descripción 
            tbody
              tr
                td(rowspan="4").text-center
                  b Planificación
              tr.bg-gray
                td Definición de objetivos. 
                td Establecer metas claras (ej.: "Reducir un 20 % los errores de inventario en 3 meses"). 
              tr
                td Selección de indicadores. 
                td Métricas como exactitud de inventario, tiempo promedio de 
                  i picking 
                  | o niveles de 
                  i stock 
                  | crítico
              tr.bg-gray
                td Asignación de recursos. 
                td Determinar herramientas (sensores, 
                  i software
                  | ), personal responsable y frecuencia (ej.: monitoreo continuo vs. muestreos diarios). 
              tr
                td(rowspan="3").text-center.bg-gray
                  b Ejecución  
              tr
                td Recolección de datos. 
                td 
                  b Automatizada: 
                  | uso de tecnologías como sensores IoT (temperatura, humedad), sistemas WMS/ERP (movimientos de inventario).
                  br
                  b Manual: 
                  i Checklists 
                  | para inspecciones físicas o auditorías puntuales.
              tr.bg-gray
                td Técnicas aplicadas. 
                td Muestreo aleatorio para validar inventarios. <br>Rastreo en tiempo real de órdenes de trabajo. 
              tr
                td(rowspan="3").text-center
                  b Análisis de resultados  
              tr
                td Comparación con estándares
                td Contrastar datos recolectados con los indicadores definidos (ej.: "¿El tiempo de despacho cumple con el estándar de 30 minutos?"
              tr.bg-gray
                td Identificación de anomalías. 
                td Usar herramientas como: alertas automáticas (ej.: 
                  i stock 
                  | por debajo del mínimo), gráficos de tendencias (ej.: aumento de mermas en cierta zona). 
              tr.bg-gray
                td(rowspan="3").text-center
                  b Toma de acciones correctivas  
              tr
                td Inmediatas 
                td Resolver problemas detectados (ej.: reabastecer 
                   i stock 
                   | urgente, corregir ubicaciones erróneas). 
              tr.bg-gray
                td Preventivas 
                td Implementar mejoras para evitar recurrencia (ej.: capacitación en manejo de productos perecederos, redistribución de espacios). 
              tr
                td(rowspan="3").text-center
                  b Documentación y mejora continua  
              tr
                td Registros 
                td Resolver problemas detectados (ej.: reabastecer 
                  i stock 
                  | urgente, corregir ubicaciones erróneas). 
              tr.bg-gray
                td Optimización 
                td Ajustar procedimientos basados en datos históricos (ej.: modificar rutas de 
                  i picking 
                  | si hay cuellos de botella). 
      
      
      p.mb-5 Un ejemplo práctico en un almacén de distribución que sigue este procedimiento para monitorear su inventario: 

      .row.justify-content-center.align-items-center.mb-5
        .col-10.col-lg-4
          figure
            img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema5/img12.png', alt='imagen decorativa')
        .col-lg-8
          SlyderF(columnas="col-12 col-lg-6 ")
            .tarjeta.bg-white.p-4.py-5.border.text-center
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/tema5/img13.svg' alt='Imagen Decorativa').w-auto.mx-auto
              h4.text-center.bg-color-secundario-p10.px-5.py-1.d-inline-block.mb-3 Planifica 
              p.text-center Objetivo = reducir un 15 % las discrepancias de inventario. 

            .tarjeta.bg-white.p-4.py-5.border.text-center
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/tema5/img14.svg' alt='Imagen Decorativa').w-auto.mx-auto
              h4.text-center.bg-color-secundario-p10.px-5.py-1.d-inline-block.mb-3  Ejecuta  
              p.text-center Escanea productos con RFID diariamente y realiza conteos cíclicos 

            .tarjeta.bg-white.p-4.py-5.border.text-center
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/tema5/img15.svg' alt='Imagen Decorativa').w-auto.mx-auto
              h4.text-center.bg-color-secundario-p10.px-5.py-1.d-inline-block.mb-3  Analiza  
              p.text-center El sistema detecta que el área de electrónicos tiene un 5 % de errores. 

            .tarjeta.bg-white.p-4.py-5.border.text-center
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/tema5/img16.svg' alt='Imagen Decorativa').w-auto.mx-auto
              h4.text-center.bg-color-secundario-p10.px-5.py-1.d-inline-block.mb-3  Actúa   
              p.text-center Reentrena al personal y mejora el etiquetado en esa zona. 

            .tarjeta.bg-white.p-4.py-5.border.text-center
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/tema5/img17.svg' alt='Imagen Decorativa').w-auto.mx-auto
              h4.text-center.bg-color-secundario-p10.px-5.py-1.d-inline-block.mb-3  Documenta   
              p.text-center Reporta los resultados mensuales al gerente. 

    .row
      .col-12.col-lg-10.mx-auto
        //cajon
        .cajon.color-acento-contenido.p-4
          p.mb-0 En esencia, el procedimiento es el "cómo" del monitoreo: la estructura que asegura que la supervisión no sea aleatoria, sino repetible, medible y mejorable. 


</template>

<script>
export default {
  name: 'Tema5',
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
