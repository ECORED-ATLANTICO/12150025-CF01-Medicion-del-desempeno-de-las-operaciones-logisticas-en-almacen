<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Formularios de recolección de datos 

    // banner con tarjeta
    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-lg-12.mb-4
        div.tarjeta-horz.mb-3
          img(src='@/assets/curso/temas/tema4/img01.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-gray-gradient
            .px-4
              p.mb-0 Los formularios de recolección de datos son instrumentos fundamentales en la gestión de almacenes, ya que permiten registrar información de manera estructurada y eficiente. Estos documentos facilitan el control de inventarios, el seguimiento de entradas y salidas de mercancías, y la generación de reportes confiables. Su diseño debe ser claro, conciso y adaptado a las necesidades específicas del almacén, garantizando precisión en la captura de datos y minimizando errores. 

    separador

     //titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_3_1 4.1 Tipos


    .bloque-texto-g.bg-color-primario-p5.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los formularios constituyen instrumentos esenciales para captar, almacenar y gestionar datos. Su configuración y formato dependen del propósito específico, el canal utilizado para aplicarlos y el grado de participación requerido por parte de los usuarios. 
    
    p.mb-5 A continuación, se amplía la clasificación de los formularios con ejemplos y características relevantes. 

    .row.mb-5
      .titulo-sexto.mb-4
          h5 Tabla  4. 
          span Tipos de formularios
      .tabla-a.color-acento-botones 
        table
          caption 
            b Fuente: 
            | Sena (2025)
          thead
            tr
              th Clasificación 
              th Tipos de formularios  
              th Características 
          tbody
            tr
              td(rowspan="5").text-center
                b Por medio de implementación  
            tr
              td Físicos 
              td 
                ul.mb-0
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Requieren llenado manual (escrito a mano o a máquina). 
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Pueden incluir campos para firma autógrafa o sellos institucionales. 
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Necesitan digitalización posterior (escaneo o transcripción).
            tr
              td Digitales 
              td 
                ul.mb-0
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Se completan en dispositivos electrónicos (computadoras, tablets, smartphones).
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Pueden incluir validaciones automáticas (ej.: formato de correo, campos obligatorios).
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Permiten integración con bases de datos y sistemas de gestión.
            tr
              td Digitales 
              td 
                ul.mb-0
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Capturar datos básicos de usuarios, clientes o empleados. 
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Ejemplos: registro de nuevos usuarios en una plataforma, alta de empleados en sistemas de RR.HH.s
            tr
              td De encuesta o evaluación. 
              td                 
                ul.mb-0
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Recolectar opiniones, percepciones o datos estadísticos. 
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Ejemplos: encuestas de satisfacción al cliente, evaluaciones de desempeño laboral.
            tr
              td(rowspan="5").text-center
                b Por propósito o función.  
            tr
              td De solicitud 
              td 
                ul.mb-0
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Gestionar peticiones o trámites formales. 
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Ejemplos: solicitud de vacaciones en una empresa, petición de soporte técnico (tickets).
            tr
              td De control o auditoría. 
              td 
                ul.mb-0
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Documentar procesos, inspecciones o verificaciones. 
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Ejemplos: informes de auditoría financiera, registros de calidad en producción.
            tr
              td Transaccionales 
              td 
                ul.mb-0
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Facilitar transacciones comerciales o financieras. 
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Ejemplos: formularios de checkout en e-commerce, solicitudes de crédito o facturación.
            tr
              td Estructurados (cerrados) 
              td 
                ul.mb-0
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Campos predefinidos (opciones fijas: selección múltiple, casillas de verificación). 
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Fáciles de procesar automáticamente (bases de datos, hojas de cálculo).
            tr
              td(rowspan="4").text-center
                b Por estructura y flexibilidad.  
            tr
              td Semi-Estructurados 
              td 
                ul.mb-0
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Combinan campos cerrados con secciones de texto abierto. Ej. encuestas con preguntas mixtas (selección + comentarios). 
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Permiten mayor detalle sin perder estructura. Ej. reportes de incidencias (datos fijos + descripción del problema).
            tr
              td No estructurados (abiertos) 
              td 
                ul.mb-0
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Dominados por campos de texto libre (ej. ensayos, descripciones extensas). 
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Requieren análisis cualitativo (ej.entrevistas cualitativas). 
            tr
              td Estáticos 
              td 
                ul.mb-0
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Solo permiten llenado secuencial sin cambios dinámicos. 
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Ejemplo: formularios PDF sin lógica condicional.
            tr
              td.text-center
                b Por nivel de interactividad.  
              td Dinámicos 
              td 
                ul.mb-0
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    |  Adaptan campos según respuestas previas (lógica condicional). 
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Ejemplo: si el usuario selecciona "Soy extranjero", aparece un campo adicional para documento migratorio.

    separador

    //titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_3_1 4.2. Técnicas de elaboración  

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-6.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema4/img03.png', alt='imagen decorativa')
      .col-lg-7
          p Conocer las técnicas de elaboración de formularios es crucial para garantizar la captura precisa y eficiente de datos en el almacén. Un diseño adecuado optimiza procesos, reduce errores, ahorra tiempo y facilita el análisis de información, mejorando la toma de decisiones y la productividad operativa. 
          p La creación efectiva de formularios requiere un enfoque metodológico que garantice claridad, usabilidad y precisión en la captura de información. A continuación, se presentan las técnicas fundamentales: 
   

    .row.mb-5
      .titulo-sexto.mb-4
          h5 Tabla  5. 
          span Técnicas de elaboración
      .tabla-a.color-acento-botones 
        table
          caption 
            b Fuente: 
            | Sena (2025)
          thead
            tr
              th Técnicas  
              th Objetivo  
              th Características  
          tbody
             tr
              td.text-center
                b Claridad y sencillez. 
              td Garantizar que cualquier usuario pueda completar el formulario sin ambigüedades.  
              td 
                p.mb-0
                  b Lenguaje claro: 
                  | utilizar términos técnicos solo cuando sean indispensables (ej. "SKU" en lugar de "código del producto"). Evitar jerga administrativa compleja (ej. "fecha de emisión" "fecha de registro"). 
                p.mb-0
                  b Diseño minimalista: 
                  | limitar el uso de colores (máximo 3) para evitar distracciones. Emplear iconos universales (ej. para fechas). 
              tr
                td.text-center
                  b Estructura lógica. 
                td Guiar al usuario mediante un flujo intuitivo que refleje el proceso físico. 
                td 
                  p.mb-0
                    b Agrupación por funciones: <br>
                    | Bloque 1. Datos básicos (fecha, operador, número de documento). <br>Bloque 2. Detalles de la operación (productos, cantidades, ubicaciones). <br>Bloque 3. Verificación (firmas, sellos, observaciones). 
                  p.mb-0
                    b Técnicas avanzadas:  
                    | limitar el uso de colores (máximo 3) para evitar distracciones. Emplear iconos universales (ej. para fechas). 
              tr
                td.text-center
                  b Validación de datos. 
                td Minimizar errores mediante restricciones inteligentes. 
                td 
                  p.mb-0 Validación en tiempo real (ej. alerta si la cantidad supera el stock máximo). <br>Consulta a bases de datos (ej.: autocompletar nombres de productos). <br>Ejemplos críticos: campo "fecha", bloquear fechas futuras en registros de entrada. Campo "cantidad", Solo permitir números enteros positivos. 
              tr
                td.text-center
                  b Diseño adaptable. 
                td Permitir modificaciones sin rediseñar todo el formulario. 
                td
                  p.mb-0
                    b En formularios físicos: <br>
                    | Espacios en blanco para anotaciones imprevistas. <br>Secciones modulares (ej.: hojas adicionales para productos extra). 

                  p.mb-0
                    b En formularios digitales: <br> 
                    | Uso de plataformas con arrastrar/soltar (ej.: Microsoft PowerApps). <br>Campos condicionales (ej.: mostrar "Motivo de devolución" solo si se selecciona "Producto defectuoso"). 
              tr
                td.text-center
                  b Pruebas piloto.   
                td Identificar fallos con usuarios reales antes del lanzamiento. 
                td
                  p.mb-0
                    b Selección de usuarios: 
                    | Incluir perfiles diversos (nuevos, experimentados, supervisores). 
                  p.mb-0
                    b Escenarios de prueba: 
                    | casos normales (ej.: registro estándar). Casos límite (ej. ingresar 50 productos a la vez). 
                  p.mb-0
                    b Métricas a evaluar: 
                    | tiempo de completado, número de errores cometidos, feedback cualitativo (entrevistas post-prueba).
    .row-mx-auto.mb-5
      .col-12.col-lg-6.mx-auto
        .row.bg-color-secundario-p10.align-items-center.justify-content-center.curva-derecha.position-relative
          .col-3.d-none.d-md-block
            figure
              img(data-aos="fade-left")(src='@/assets/curso/temas/tema4/img05.png', alt='imagen decorativa')
          .col-9.col-lg-8.p-4
            p
              b La aplicación rigurosa de estas técnicas puede lograr: 
            ul.mb-0
              li.d-flex.align-items-start.mb-1
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                | Reducción del 30% en errores de registro. 
              li.d-flex.align-items-start.mb-1 
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                | Ahorro de 15-20 minutos diarios por operario.
              li.d-flex.align-items-start.mb-1
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                | Mejor trazabilidad para auditorías. 
          .col-1
            figure
              img.mb-4.mb-lg-0.w-auto(data-aos="fade-left")(src='@/assets/curso/temas/tema4/img06.png', alt='imagen decorativa').floated-image-right


    //titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_3_1 4.3. Herramientas tecnológicas


    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-6.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema4/img07.png', alt='imagen decorativa')
      .col-lg-7
          p Registrar información de forma eficiente va de la mano con el uso de herramientas tecnológicas que simplifican y mejoran cada etapa del proceso. Estas soluciones ayudan no solo a capturar la información de manera rápida y precisa, sino también a almacenarla de forma segura y gestionarla para que esté siempre disponible y organizada. La tecnología, bien aplicada, es clave para transformar datos en recursos útiles y confiables. 
          .bg-color-acento-contenido.px-5.py-3.mb-3.curvas-izq-der
                p.mb-0 A continuación, se relacionan las principales herramientas tecnológicas para el diligenciamiento de formularios: 


    // Slider
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .tarjeta.fondo_1_2.p-5.bg02
          SlyderA(tipo="b").tarjeta--blanca.p-3.rounded
            .tarjeta.p-4
                h3.mb-2 Sistemas de gestión de bases de datos 
                ul.mb-0
                  li.d-flex.align-items-start.mb-1
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Bases de datos relacionales
                  li.d-flex.align-items-start.mb-1
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Bases de datos no relacionales
            .tarjeta.p-4
              h3.mb-2 Plataformas de formularios digitales 
              ul.mb-0
                li.d-flex.align-items-start.mb-1
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                  | Google Forms. 
                li.d-flex.align-items-start.mb-1
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                  | Microsoft Form 
                li.d-flex.align-items-start.mb-1
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                  | Jot Forms 
            .tarjeta.p-4
              h3.mb-2 Software ERP y CRM 
              ul.mb-0
                li.d-flex.align-items-start.mb-1
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                  | SAP
                li.d-flex.align-items-start.mb-1
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                  | Salesforce 
                li.d-flex.align-items-start.mb-1
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                  | Odoo 
            .tarjeta.p-4
              h3.mb-2 Aplicaciones móviles de recolección 
              ul.mb-0
                li.d-flex.align-items-start.mb-1
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                  | KoboToolbox 
                li.d-flex.align-items-start.mb-1
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                  | Fulcrum  
      .col-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema4/img08.png', alt='imagen decorativa')

</template>

<script>
export default {
  name: 'Tema4',
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
