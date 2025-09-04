<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Almacén

    
    p.mb-5 Adentrémonos en el mundo del almacenaje con la siguiente reflexión, realizada por la empresa Rajapack:
    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-lg-12.mb-4
        div.tarjeta-horz.mb-3.curvas
          img(src='@/assets/curso/temas/tema1/img01.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-color-secundario-p10
            .bloque-texto-b.px-4
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                p.mb-0 ¿Qué sería del mundo de la logística sin el almacén? Este lugar es esencial, ya que en él se organizan y agrupan los productos antes de su distribución o su uso. Sin embargo, no todos los almacenes son iguales y cada uno está diseñado para satisfacer una necesidad específica.
                i.fas.fa-quote-right
          
    separador

    // titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 1.1. Concepto

    .row.justify-content-center.align-items-center.mb-3
      .col-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema1/img02.png', alt='imagen decorativa')
      .col-lg-8
          p.mb-3 En el ámbito logístico, un almacén es un espacio destinado a guardar de manera temporal o permanente mercancías, materias primas, productos en proceso o terminados, con la finalidad de asegurar que estén disponibles cuando y donde la cadena de suministro lo necesite. El almacén es, por tanto, un eslabón clave que conecta la producción con la distribución, asegurando el flujo constante de mercancías y la optimización de los recursos logísticos
       
    separador

     // titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_2 1.2. Características
    p.mb-5 Los almacenes logísticos modernos presentan una serie de características que los hacen esenciales para la eficiencia de la cadena de suministro:



    .titulo-sexto.mb-4
      h5 Figura 1. 
      span Línea de tiempo de las redes sociales 
    figure.mb-4
      figure.mb-3
        img(src='@/assets/curso/temas/tema1/img03.svg', alt='').mx-auto.d-none.d-sm-block
        img(src='@/assets/curso/temas/tema1/img03m.svg', alt='').mx-auto.d-block.d-sm-none

      figcaption 
        b Fuente: 
        | Sena (2025)


    separador


    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_2 1.3. Tipos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema1/img04.png', alt='imagen decorativa')
      .col-lg-7
          p Conocer los diferentes tipos de almacenes dentro de la logística es fundamental para diseñar estrategias que optimicen el manejo, almacenamiento y distribución de mercancías. Esta comprensión permite asignar cada tipo de almacén a su función específica dentro de la cadena de suministro, facilitando una gestión más eficiente del inventario y reduciendo costos operativos. 
          p.mb-0 Los almacenes se clasifican de acuerdo con varios criterios:
       

    .row.mb-3.titulo-icono
      .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.position-relative.bg-color-secundario Según su estructura
            img(src='@/assets/curso/temas/tema1/img05.png', alt='imagen decorativa')


    .row.justify-content-center.mb-5
      .col-xl-5.col-lg-6.col-10.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img06.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            p.text-bold.mb-3.text-center Almacenes interiores o cubiertos.
            p.mb-0.text-center Se trata de instalaciones totalmente selladas que resguardan los bienes almacenados frente a las variaciones climáticas externas, como cambios en la humedad o en la temperatura ambiente.

      .col-xl-5.col-lg-6.col-10.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img07.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            p.text-bold.mb-3.text-center Almacenes exteriores o descubiertos.
            p.mb-0.text-center Son áreas descubiertas dentro de un recinto delimitado, destinadas a almacenar bienes que no requieren protección especial contra factores ambientales.


    // Subtitulo
    .row.mb-3.titulo-icono
      .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.position-relative.bg-color-secundario Según su función en la cadena de suministro
            img(src='@/assets/curso/temas/tema1/img05.png', alt='imagen decorativa')


    // Slider
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema1/img08.png', alt='imagen decorativa')
      .col-lg-8
        .tarjeta.fondo_1_2.p-5.bg02
          SlyderA(tipo="b").tarjeta--blanca.p-3.rounded
            .tarjeta
              .row.justify-content-center.align-items-center.p-1
                .col-md-12.col-xl-8.mb-3
                  h3.mb-2 Almacén de materias primas 
                  p Almacena insumos para la producción. Ubicación cerca para reducir tiempos de abastecimiento 
                .col-md-8.col-xl-4.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img09.png', alt='Texto que describa la imagen').mx-auto
                
            .tarjeta.bg-01.p-2
              .row.justify-content-center.align-items-center.p-3
                .col-md-12.col-xl-8.mb-4
                  h3.mb-2 Almacén de bienes en proceso
                  p Guarda bienes semielaborados durante las etapas de producción.
                .col-md-8.col-xl-4.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img10.png', alt='Texto que describa la imagen').mx-auto
                
            .tarjeta.bg-01.p-2
              .row.ordenar_tarjeta.justify-content-center.align-items-center.p-3
                .col-md-12.col-xl-8.mb-4
                  h3.mb-2 Almacén de productos terminados 
                  p Contiene bienes listos para su distribución al cliente final. Puede estar cerca de centros de producción o distribución.  
                .col-md-8.col-xl-4.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img11.png', alt='Texto que describa la imagen').mx-auto
                
            .tarjeta.bg-01.p-2
              .row.ordenar_tarjeta.justify-content-center.align-items-center.p-3
                .col-md-12.col-xl-8.mb-4
                  h3.mb-2 Almacén de distribución 
                  p Centraliza bienes para su redistribución a minoristas o clientes. 
                .col-md-8.col-xl-4.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img12.png', alt='Texto que describa la imagen').mx-auto
                
            .tarjeta.bg-01.p-2
              .row.ordenar_tarjeta.justify-content-center.align-items-center.p-3
                .col-md-12.col-xl-8.mb-4
                  h3.mb-2 Almacén de 
                    i Cross-Docking. 
                  p Minimiza el tiempo de almacenamiento: los bienes entran y salen rápidamente sin guardarse. Ideal para mercancías perecederas o pedidos urgentes. 
                .col-md-8.col-xl-4.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img13.png', alt='Texto que describa la imagen').mx-auto

            .tarjeta.bg-01.p-2
              .row.ordenar_tarjeta.justify-content-center.align-items-center.p-3
                .col-md-12.col-xl-8.mb-4
                  h3.mb-2 Almacén de consolidación
                  p Agrupa cargas pequeñas en envíos más grandes para optimizar transporte. 
                .col-md-8.col-xl-4.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img14.png', alt='Texto que describa la imagen').mx-auto

            .tarjeta.bg-01.p-2
              .row.ordenar_tarjeta.justify-content-center.align-items-center.p-3
                .col-md-12.col-xl-8.mb-4
                  h3.mb-2 Almacén temporal (transitorio) 
                  p Usado para almacenaje a corto plazo, como en puertos o zonas francas. 
                .col-md-8.col-xl-4.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img15.png', alt='Texto que describa la imagen').mx-auto

    // Subtitulo
    .row.mb-3.titulo-icono
      .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.position-relative.bg-color-secundario Según los tipos de bienes 
            img(src='@/assets/curso/temas/tema1/img05.png', alt='imagen decorativa')


    // Tabs con Iconos
    TabsB.color-primario.mb-5
      .py-4.py-md-5(titulo="Almacén de bienes perecederos." :icono="require('@/assets/curso/temas/tema1/img16.svg')")
        .row.px-4.align-items-center
          .col-md-6.mb-4.mb-md-0.mx-auto
            h4 Almacén de bienes perecederos.
            p Centros de distribución de supermercados. Farmacéuticas (vacunas y medicamentos sensibles). 
          .col-md-4.col-8.mx-auto
            figure
              img(src='@/assets/curso/temas/tema1/img20.png', alt='Imagen decorativa')
      .py-4.py-md-5(titulo="Almacén de bienes peligrosos. " :icono="require('@/assets/curso/temas/tema1/img17.svg')")
        .row.px-4.align-items-center
          .col-md-6.mb-4.mb-md-0.mx-auto
            h4 Almacén de bienes peligrosos.
            p Plantas químicas o farmacéuticas. Puertos para manejo de combustibles. 
          .col-md-4.col-8.mx-auto
            figure
              img(src='@/assets/curso/temas/tema1/img21.png', alt='Imagen decorativa')
      .py-4.py-md-5(titulo="Almacén bienes en general. " :icono="require('@/assets/curso/temas/tema1/img18.svg')")
        .row.px-4.align-items-center
          .col-md-6.mb-4.mb-md-0.mx-auto
            h4 Almacén bienes en general. 
            p Centros de distribución de minoristas. Almacenes de suministros industriales. 
          .col-md-4.col-8.mx-auto
            figure
              img(src='@/assets/curso/temas/tema1/img22.png', alt='Imagen decorativa')
      .py-4.py-md-5(titulo="Almacén de comercio electrónico. " :icono="require('@/assets/curso/temas/tema1/img19.svg')")
        .row.px-4.align-items-center
          .col-md-6.mb-4.mb-md-0.mx-auto
            h4 Almacén de comercio electrónico.
            p Centros de cumplimiento de Amazon, Temu, etc. Almacenes dark store para entregas ultra rápidas (15-30 minutos). 
          .col-md-4.col-8.mx-auto
            figure
              img(src='@/assets/curso/temas/tema1/img23.png', alt='Imagen decorativa')

    // Subtitulo
    .row.mb-3.titulo-icono
      .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.position-relative.bg-color-secundario Según el grado de automatización 
            img(src='@/assets/curso/temas/tema1/img05.png', alt='imagen decorativa')  


    // Slider
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema1/img24.png', alt='imagen decorativa')
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Almacén convencional ")
              p Cuentan con estanterías tradicionales y simples. Para facilitar las operaciones, se emplean montacargas y las estanterías están organizadas estratégicamente para permitir maniobras ágiles y seguras. 
          .row(titulo="Almacén automatizado  ")
              p Utiliza sistemas robóticos y equipos programados para realizar tareas de almacenamiento, recuperación y transporte de mercancías con mínima intervención humana. 
          .row(titulo="Monitoreo de las operaciones logísticas de almacén ")
              p Va más allá de la automatización: integra IoT, Big Data, IA y computación en la nube para tomar decisiones en tiempo real y optimizar procesos de manera adaptativa. 
         
    separador

    // Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_3 1.4. Funciones
    p.mb-5 Las funciones de un almacén en logística son múltiples y fundamentales para garantizar la eficiencia operativa y la satisfacción del cliente. Las principales funciones incluyen: 

    .row
      .col-12.col-md-10.mx-auto
        .titulo-sexto.mb-4
          h5 Tabla 1. 
          span Tipos de funciones de los almacenes
        .tabla-a.color-acento-botones 
          table
            caption 
              b Fuente: 
              | Sena (2025)
            thead
              tr
                th Tipo de función 
                th Actividad 
                th Descripción
            tbody
              tr
                td(rowspan="7").text-center
                  b Funciones operativas 
              tr
                td Recepción de bienes. 
                td Verificación de cantidades y calidad. <br>Registro en el sistema (WMS/ERP). 

              tr
                td Almacenamiento 
                td Ubicación en racks, estanterías o zonas específicas. 
                  <br>Control de condiciones (temperatura, humedad). 
              tr
                td Gestión de inventarios 
                td Control de 
                  i stock.  
                  | Conteos cíclicos para evitar mermas. 

              tr
                td Preparación de pedidos 
                  i (Picking & Packing).  
                td Selección de productos según órdenes de compra. <br>Embalaje y etiquetado para envío.  
              tr
                td Despacho y distribución.  
                td Carga en vehículos para transporte. <br>Coordinación con transportistas.  
              tr
                td 
                  i Kitting  
                td Agrupar componentes para ensamblaje posterior.  
              tr
                td(rowspan="3").text-center
                  b Funciones de valor añadido
              tr
                td Etiquetado y personalización.  
                td Preparación de productos para clientes específicos.  

              tr
                td Servicios postventa  
                td Gestión de devoluciones.  
              tr
                td(rowspan="5").text-center
                  b Funciones estratégicas 
              tr
                td Reducción de costos.  
                td Optimización de espacio y recursos.  
              tr
                td Control de calidad  
                td Inspección de los productos para garantizar que cumplen con los estándares requeridos.  
              tr
                td Mejora del servicio al cliente.  
                td Entrega rápida y sin errores.  
              tr
                td Soporte a la producción.  
                td Suministro eficiente de materiales.  










</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
