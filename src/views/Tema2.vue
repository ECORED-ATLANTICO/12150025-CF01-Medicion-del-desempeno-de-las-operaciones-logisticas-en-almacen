<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Operación de almacén 

    // banner con tarjeta
    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-lg-12.mb-4
        div.tarjeta-horz.mb-3
          img(src='@/assets/curso/temas/tema2/img01.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-gray-gradient
            .px-4
              p.mb-0 El proceso operativo de un almacén es fundamental para asegurar que los productos estén disponibles en el lugar y momento precisos, lo cual tiene un impacto directo en la eficiencia de la cadena de suministro y en la satisfacción del cliente final. Este proceso garantiza la correcta recepción, almacenamiento, manejo y despacho de mercancías, optimizando recursos y minimizando errores para cumplir con las demandas del mercado de manera ágil y efectiva.  
          
    separador

    .bg-full-width.bg03
      // titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_2_1 2.1 Concepto

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-2
          figure
            img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema2/img02.png', alt='imagen decorativa')
        .col-lg-10
          p.mb-0 El proceso operativo de un almacén es el conjunto de actividades planificadas y sistematizadas que permiten la recepción, almacenamiento, gestión y despacho de mercancías de manera eficiente. 
          p.mb-0 Este proceso es fundamental dentro de la cadena de suministro, ya que actúa como enlace entre la producción y la distribución, impactando directamente en la satisfacción del cliente final.
        
      // Figura
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.mx-auto
          .titulo-sexto.mb-4
            h5 Figura 2. 
            span Objetivos del proceso operativo de almacén 
          .row.mx-auto
            .col-12.col-md-8.order-2.order-md-1
              figure
              img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema2/img03.svg', alt='imagen decorativa')
            .col-5.col-md-4.mx-auto.order-1.order-md-2
              figure
                img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema2/img03.png', alt='imagen decorativa')
          figcaption 
            b Fuente: 
            | Sena (2025)


    separador

      // titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_2_2 2.2 Etapas

    p.mb-5 El proceso operativo de un almacén es un sistema integrado donde cada etapa cumple una función crítica en la cadena de suministro. Su correcta ejecución garantiza eficiencia, reducción de costos y satisfacción del cliente. A continuación, se detallan cada una de las etapas: 

    .bg-full-width.bg03
      // Slider
      .row.justify-content-center.align-items-center.mb-5
        .col-10.col-lg-4
          figure
            img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema2/img04.png', alt='imagen decorativa')
        .col-lg-8
          .tarjeta.fondo_1_2.p-3.p-md-4.p-lg-5.bg05
            SlyderA(tipo="b").tarjeta--blanca.p-3.rounded
              .tarjeta.p-4
                    h3.mb-2 1.Recepción de bienes 
                    p En la fase inicial se reciben bienes de proveedores o producción, se inspeccionan visualmente, se verifica correspondencia con lo solicitado y se realiza un chequeo interno para identificar, clasificar y ubicar los productos adecuadamente. 
              .tarjeta.p-4
                    h3.mb-2 2. Almacenamiento 
                    p Una vez recibidos y clasificados los bienes, se procede a su colocación en el almacén. Esta etapa es fundamental para optimizar el espacio disponible y facilitar la rápida localización de los bienes cuando se necesiten. 
              .tarjeta.p-4
                    h3.mb-2 3. 
                      i Picking 
                      | (Selección de pedidos) 
                    p En este punto se seleccionan bienes para pedidos o la siguiente etapa logística. El 
                      i picking 
                      | se realiza por piezas, lotes o zonas, según el tipo de producto y el volumen de pedidos requeridos. 
              .tarjeta.p-4
                    h3.mb-2 4. 
                      i Packing 
                      | (Embalaje y etiquetado) 
                    p Es una etapa clave en el almacén, donde se preparan física y documentalmente los productos para despacho, asegurando que estén en perfecto estado, identificados correctamente y listos para su distribución eficiente. 
              .tarjeta.p-4
                    h3.mb-2 5. Despacho y expedición 
                    p Se organizan pedidos para transporte, garantizando embalaje según requisitos del cliente, distribución óptima de la carga y emisión de la documentación necesaria que acompañará la mercancía durante todo su traslado. 
              .tarjeta.p-4
                    h3.mb-2 6. Gestión de devoluciones 
                    p La logística inversa consiste en recibir, inspeccionar, clasificar y reincorporar o descartar productos devueltos por clientes o socios, siendo esencial en la cadena de suministro, especialmente en 
                      i e-commerce, retail 
                      | y sectores de fabricación. 
              .tarjeta.p-4
                    h3.mb-2 7. Control y gestión de inventarios. 
                    p Proceso continuo de auditorías y recuentos para garantizar que existencias físicas coincidan con registros. El control de inventarios detecta desviaciones, previene faltantes o excesos y asegura precisión en la gestión eficiente del almacén. 


    separador 

    // titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_2_3 2.3 Herramientas tecnológicas 

    p.mb-5 Las tecnologías están transformando radicalmente la gestión de almacenes, sustituyendo métodos manuales por procesos mucho más ágiles, precisos y eficientes. A continuación, se presenta un análisis exhaustivo de las innovaciones tecnológicas que están remodelando la logística en este ámbito:  
    
    .bg-full-width.bg04
      .row.mb-3
        .titulo-sexto.mb-4
          h5 Tabla 2. 
          span herramientas tecnológicas
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
            tbody.bg-white
              tr
                td.text-center 
                  b Sistemas de gestión de almacenes (WMS). 
                td.bg-gray Gestión de inventario en tiempo real con actualización automática de 
                  i stock.<br> 
                  | Optimización de rutas de 
                  i picking 
                  | mediante algoritmos inteligentes. <br>Gestión de ubicaciones dinámica basada en rotación de productos. 
                td.bg-gray Reducción de hasta 30 % en tiempos de preparación de pedidos. <br>Precisión de inventario superior al 99.5 %. <br>Disminución de 25-40 % en costos operativos. 
              tr
                td(rowspan="3").text-center.bg-gray
                  b Automatización y robótica. 
              tr
                td 
                  p 
                    b Sistemas AS/RS 
                    i (Automated Storage and Retrieval Systems): 
                  p Almacenamiento vertical automatizado. <br>Recuperación guiada por 
                    i software. <br>
                    | Transporte autónomo de carga.   
                td Ahorro de espacio.  <br>Reducción de errores. <br>Productividad continua. <br>Elimina accidentes por manipulación. <br>Eficiencia energética.  

              tr
                td.bg-gray
                  p 
                    b Robots móviles Autónomos: 
                  p Navegación inteligente. <br>
                    i Picking 
                    | autónomo. <br>Optimización de rutas en tiempo real. 
                td.bg-gray Flexibilidad operativa. <br>Rentabilidad comprobada. <br>Adaptabilidad <br>Métricas de desempeño.   
              tr
                td(rowspan="4").text-center
                  b Tecnologías 4.0 
              tr
                td Internet de las cosas   
                td Sensores inteligentes para monitoreo de condiciones ambientales, control de equipos y gestión de flujos. <br>Dispositivos de realidad aumentada para 
                  i picking.   
              tr.bg-gray
                td 
                  i Blockchain 
                  | para trazabilidad.  
                td Registro inmutable de movimientos de bienes. <br>Certificación de origen y autenticidad de productos. <br>
                  i Smart 
                  | contracts para automatizar procesos logísticos.  
              tr
                td Inteligencia artificial y 
                  i Machine Learning. 
                td Optimización dinámica de layouts de almacén. <br>Detección de anomalías: Identificación de patrones de error. <br>Sistemas autónomos de toma de decisiones. 

    separador

    //titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_2_4 2.4 Registros


    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema2/img06.png', alt='imagen decorativa')
      .col-lg-7
        p La importancia de los registros en el proceso operativo del almacén radica en que constituyen la base para un control riguroso y eficiente del inventario y las operaciones logísticas. 
          .cajon.color-acento-contenido.p-4
            p.mb-0 En conjunto, estos registros ofrecen visibilidad en tiempo real y datos confiables que permiten una rápida toma de decisiones, optimización de recursos y mejora continua en la operación del almacén. Además, con la integración de tecnologías como RFID y sistemas automatizados, estos registros se vuelven más precisos y ágiles, lo que reduce costos y mejora la competitividad empresarial. 
        



    // Tabs
    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Entradas").bg-color-secundario-p10
        .row.py-4
          .col-1
          .col-12.col-lg-6.mb-4.mb-md-0.px-5
            p 
              b Entradas 
            p.mb-0 
              b Descripción 
            p Documentar todos los productos que ingresan al almacén, verificando su conformidad con los pedidos. 
            p
              b Datos clave
            .row
              .col-6
                ul
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Número de factura o remisión (del proveedor). 
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Fecha y hora de recepción. 
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Proveedor (nombre, contacto). 
              .col-6
                ul
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Descripción de los productos (código, SKU, cantidad)
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Condición de los productos (inspección visual, daños, caducidad). 
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Responsable de recepción. 
          .col-lg-4.col-8.mx-auto
            figure
              img(src='@/assets/curso/temas/tema2/img07.png', alt='Imagen Decorativa')
          .col-1
      
      .py-3.py-md-4(titulo="Salidas").bg-color-secundario-p10
        .row.py-4
          .col-1
          .col-lg-4.col-8.mx-auto.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/tema2/img08.png', alt='Imagen Decorativa')
          .col-12.col-lg-6.mb-4.mb-md-0.px-5.order-1.order-lg-2
            p 
              b Salidas 
            p.mb-0 
              b Descripción 
            p Llevar control de los productos que salen del almacén, ya sea por ventas, traslados o devoluciones.
            p
              b Datos clave
            .row
              .col-6
                ul
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(
                      style="color:#FE8849; font-size:15px; line-height:1.5;"
                    )
                    span Número de orden de salida o 
                      em picking
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Cliente o destino (si es una venta o traslado interno).
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Fecha y hora de salida.
              .col-6
                ul
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Lista de productos despachados (cantidad, lote, seriales).
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Transportista o método de envío.
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Firma de conformidad del receptor.
          
          .col-1
      .py-3.py-md-4(titulo="Inventario").bg-color-secundario-p10
        .row.py-4
          .col-1
          .col-12.col-lg-10
            .row
              .col-12.col-lg-6.mb-4.mb-md-0.px-5
                p 
                  b Inventario 
                p.mb-0 
                  b Descripción 
                p Mantener un control actualizado de las cantidades disponibles en el almacén. Registro de inventario perpetuo: se actualiza en tiempo real con cada entrada o salida (usando sistemas WMS o ERP). Registro de inventario periódico: se realiza mediante conteos físicos programados (semanal, mensual o anual).

              .col-lg-4.col-8.mx-auto
                figure
                  img(src='@/assets/curso/temas/tema2/img09.png', alt='Imagen Decorativa')
            .row
              .col-0
              .col-10.mx-auto
                p
                  b Datos clave
                .row
                  .col-12.col-md-6
                    ul
                      li.d-flex.align-items-start.mb-1 
                        i.fa-solid.fa-circle-check.me-2.flex-shrink-0(
                          style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                        span Código del producto y ubicación en el almacén.

                      li.d-flex.align-items-start.mb-1 
                        i.fa-solid.fa-circle-check.me-2.flex-shrink-0(
                          style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                        span 
                          em Stock 
                          |  actual (cantidad disponible).

                  .col-12.col-md-6
                    ul
                      li.d-flex.align-items-start.mb-1 
                        i.fa-solid.fa-circle-check.me-2.flex-shrink-0(
                          style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                        span 
                          em Stock 
                          |  mínimo y máximo (para alertas de reposición).

                      li.d-flex.align-items-start.mb-1 
                        i.fa-solid.fa-circle-check.me-2.flex-shrink-0(
                          style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                        span Fecha del último movimiento.
              .col-1
          .col-1
      
      .py-3.py-md-4(titulo="Movimientos internos ").bg-color-secundario-p10
        .row.py-4
          .col-1
          .col-lg-4.col-8.mx-auto.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/tema2/img10.png', alt='Imagen Decorativa')
          .col-12.col-lg-6.mb-4.mb-md-0.px-5.order-1.order-lg-2
            p 
              b Entradas 
            p.mb-0 
              b Descripción 
            p Rastrear cambios de ubicación dentro del almacén (ej: de zona de recepción a 
              i picking).
            p
              b Datos clave
            .row
              .col-6
                  ul
                    li.d-flex.align-items-start.mb-1 
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                      | Producto y cantidad movida.
                    li.d-flex.align-items-start.mb-1 
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                      | Ubicación origen y destino
              .col-6
                ul
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Motivo del movimiento (reabastecimiento, reorganización).
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Responsable del movimiento.
          .col-1

      .py-3.py-md-4(titulo="No conformidad (devoluciones, daños, pérdidas) ").bg-color-secundario-p10
        .row.py-4
          .col-1
          .col-12.col-lg-6.mb-4.mb-md-0.px-5
            p.mb-0 
              b Descripción 
            p Documentar productos que no cumplen con los estándares de calidad o se pierden. <br>Productos dañados (roturas, humedad). <br>Productos vencidos o próximos a vencer. <br>Diferencias en inventario (faltantes inexplicables). <br>Reclamos de clientes por errores en despachos. 
            p
              b Datos clave
            .row
              .col-6
                ul
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Descripción del problema.
                  li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Fotos o evidencias (en sistemas digitales).
              .col-6
                ul
                 li.d-flex.align-items-start.mb-1 
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Acciones tomadas (reemplazo, descarte, ajuste contable).
          .col-lg-4.col-8.mx-auto
            figure
              img(src='@/assets/curso/temas/tema2/img11.png', alt='Imagen Decorativa')
          .col-1

    // Figura
    .row.justify-content-center.align-items-center.mb-5
      .col-12.mx-auto
        .titulo-sexto.mb-4
          h5 Figura 3. 
          span Tendencias actuales en registros de almacén 
        .row.mx-auto
          .col-12.col-md-12
            figure
             img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema2/img13.svg', alt='imagen decorativa').mx-auto.d-none.d-sm-block
          .col-12.mx-auto
            figure
              img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema2/img13m.svg', alt='imagen decorativa').mx-auto.d-block.d-sm-none
        figcaption 
          b Fuente: 
          | Sena (2025)

    //cajon
    .cajon.color-acento-contenido.p-4.mb-3
      p.mb-0 Estas tendencias están redefiniendo los estándares de precisión, eficiencia y valor estratégico de los registros en almacenes. Las empresas líderes ya están obteniendo ventajas competitivas significativas mediante su adopción. 

    separador

    //subt
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_2_5 2.5 Reportes

    p.mb-5 Conocer los tipos de reportes es fundamental para una gestión eficiente del almacén, ya que cada uno aporta información clave que facilita la toma de decisiones estratégicas y operativas. 

    .row.justify-content-center.align-items-center.mb-5
      .col-md-6
        figure
          img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema2/img14.png', alt='imagen decorativa')
      .col-md-6
        p En conjunto, estos reportes proporcionan una fotografía precisa y en tiempo real del estado del almacén, lo que es indispensable para responder ágilmente a cambios en la demanda, mejorar la eficiencia operativa y mantener la competitividad en mercados exigentes.  
        p Un reporte de almacén efectivo debe contener los siguientes elementos fundamentales: 
        .row.bg-color-secundario-p10.align-items-center.p-3.justify-content-center.tarjeta.curva-derecha
          .col-4
             figure
              img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema2/img15.png', alt='imagen decorativa')
          .col-8
            ul.mb-0
              li.d-flex.align-items-start.mb-1
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                | Nombre del reporte. 
                
              li.d-flex.align-items-start.mb-1 
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                | Almacén/Zona cubierta.
              li.d-flex.align-items-start.mb-1
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                | Periodo de reporte.
                
              li.d-flex.align-items-start.mb-1 
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                | Fecha de generación. 
              li.d-flex.align-items-start.mb-1 
                 i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                 | Elaborado por.  
              li.d-flex.align-items-start.mb-1 
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                | Revisado/Aprobado por. 
       
    // Tabs con Iconos
    TabsB.color-primario.mb-5
      
      .py-4.py-md-5(titulo="Inventario " :icono="require('@/assets/curso/temas/tema2/img16.svg')")
        .row
          .col-12.col-lg-10.px-4.align-items-center.mx-auto
            h4 Inventario 
            p.mb-0 Proporcionar información actualizada sobre las existencias en el almacén, siendo fundamental para la planificación y el reabastecimiento. 
            p Frecuencia recomendada: diaria/semanal. 
            .row
              .col-12.col-md-6.col-lg-4
                ul.mb-0
                  li.d-flex.align-items-start.mb-1
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Código y descripción del producto.
                  li.d-flex.align-items-start.mb-1
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Stock actual disponible. 
                  li.d-flex.align-items-start.mb-1
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Stock mínimo y máximo establecido. 
              .col-12.col-md-6.col-lg-4.mb-3.mb-lg-0
                  ul.mb-0
                  li.d-flex.align-items-start.mb-1
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Días de inventario disponibles. 
                  li.d-flex.align-items-start.mb-1
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Productos próximos a vencer. 
                  li.d-flex.align-items-start.mb-1
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                    | Productos obsoletos o de lento movimiento.
              .col-12.col-md-8.col-lg-4.mx-auto
                figure
                  img(src='@/assets/curso/temas/tema2/img21.png', alt='Imagen decorativa')

           
      .py-4.py-md-5(titulo="Movimientos  " :icono="require('@/assets/curso/temas/tema2/img17.svg')")
        .row
          .col-12.col-lg-10.px-4.align-items-center.mx-auto
              h4 Movimientos 
              p.mb-0 Registrar todas las entradas y salidas de productos con sus saldos. 
              p Beneficios: trazabilidad completa de cada ítem, control de costos de inventario y detección de discrepancias. 
              .row
                .col-12.col-md-8.col-lg-4.mx-auto
                  figure
                    img(src='@/assets/curso/temas/tema2/img22.png', alt='Imagen decorativa').mb-4.mb-lg-0
                .col-12.col-md-6.col-lg-4
                    ul.mb-0
                      li.d-flex.align-items-start.mb-1
                        i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                        | Fecha y hora del movimiento. 
                      li.d-flex.align-items-start.mb-1
                        i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                        | Tipo de movimiento (compra, venta, ajuste).  
                      li.d-flex.align-items-start.mb-1
                        i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                        | Documento asociado (factura, remisión).
                .col-12.col-md-6.col-lg-4.mb-3.mb-lg-0
                    ul.mb-0
                      li.d-flex.align-items-start.mb-1
                        i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                        | Cantidades (entradas, salidas, saldo). 
                      li.d-flex.align-items-start.mb-1
                        i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                        | Costos unitarios y totales (para valorización).
                      

      .py-4.py-md-5(titulo="Pérdidas y mermas " :icono="require('@/assets/curso/temas/tema2/img18.svg')")
        .row
          .col-12.col-lg-10.px-4.align-items-center.mx-auto
            h4 Pérdidas y mermas 
            p Cuantificar y analizar las pérdidas de inventario. 
            .row
              .col-12.col-md-6.col-lg-4
                  ul.mb-0
                    li.d-flex.align-items-start.mb-1
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                      | Código/SKU del producto.
                    li.d-flex.align-items-start.mb-1
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                      | Descripción completa.  
                    li.d-flex.align-items-start.mb-1
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                      | Cantidad perdida.
              .col-12.col-md-6.col-lg-4.mb-3.mb-lg-0
                  ul.mb-0
                    li.d-flex.align-items-start.mb-1
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                      | Valor unitario y total. 
                    li.d-flex.align-items-start.mb-1
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                      | Lote/número de serie (cuando aplica). 
                    li.d-flex.align-items-start.mb-1
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                      | Ubicación donde ocurrió la merma.
                    li.d-flex.align-items-start.mb-1
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                      | Fecha de detección.
              .col-12.col-md-8.col-lg-4.mx-auto
                figure
                  img(src='@/assets/curso/temas/tema2/img23.png', alt='Imagen decorativa')


      .py-4.py-md-5(titulo="Trazabilidad" :icono="require('@/assets/curso/temas/tema2/img19.svg')")
        .row
          .col-12.col-lg-10.px-4.align-items-center.mx-auto
            h4 Trazabilidad
            p Seguir el historial completo de un producto. 
            .row
              .col-12.col-md-8.col-lg-4.mx-auto
                figure
                  img(src='@/assets/curso/temas/tema2/img24.png', alt='Imagen decorativa').mb-4.mb-lg-0
              .col-12.col-md-6.col-lg-4
                  ul.mb-0
                    li.d-flex.align-items-start.mb-1
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                      | Origen (proveedor, lote, fecha fabricación). 
                    li.d-flex.align-items-start.mb-1
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                      | Movimientos internos (ubicaciones, fechas). 
              .col-12.col-md-6.col-lg-4.mb-3.mb-lg-0
                  ul.mb-0
                    li.d-flex.align-items-start.mb-1
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                      | Transformaciones (ensamblajes, reempaques).  
                    li.d-flex.align-items-start.mb-1
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                      | Destino final (cliente, fecha despacho). 

              
      .py-4.py-md-5(titulo="Auditoría" :icono="require('@/assets/curso/temas/tema2/img20.svg')")
        .row
          .col-12.col-lg-10.px-4.align-items-center.mx-auto
            h4 Auditoría 
            .row
              .col-12.col-md-6.col-lg-4.mb-3.mb-lg-0
                p.mb-0 Verificar el cumplimiento de normas y procedimientos. 
                p.mb-0 Exactitud de registros físicos vs sistema. 
                p.mb-0 Cumplimiento de procedimientos operativos. 
                p.mb-0 Condiciones de almacenamiento. 
                p.mb-0 Seguridad e higiene. 
                p.mb-0 Documentación completa. 
              
              .col-12.col-md-6.col-lg-4
                  ul.mb-0
                    li.d-flex.align-items-start.mb-1
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                      | Código/SKU del producto.  
                    li.d-flex.align-items-start.mb-1
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                      | Descripción completa.
                    li.d-flex.align-items-start.mb-1
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                      | Valor unitario y total.  
                    li.d-flex.align-items-start.mb-1
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                      | Lote/número de serie (cuando aplica).  
                    li.d-flex.align-items-start.mb-1
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                      | Ubicación donde ocurrió la merma.
                    li.d-flex.align-items-start.mb-1
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                      | Fecha de detección.
              .col-12.col-md-8.col-lg-4.mx-auto
                figure
                  img(src='@/assets/curso/temas/tema2/img25.png', alt='Imagen decorativa')

    p.mb-5 Este marco garantiza que todos los reportes, independientemente de su tipo o frecuencia, contengan la información mínima necesaria para: 

    //cajon
    .row
      .col-12.col-md-10.mx-auto
        .cajon.color-acento-contenido.p-4.mb-3
          p.mb-0 Este marco garantiza que todos los reportes, independientemente de su tipo o frecuencia, contengan la información mínima necesaria para: 


    .row.mb-5
      .col-12.col-lg-6.mx-auto
        .row.bg-color-secundario-p10.align-items-center.p-3.justify-content-center.tarjeta.curva-derecha
          .col-4
              figure
              img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema2/img15.png', alt='imagen decorativa')
          .col-8
            ul.mb-0
              li.d-flex.align-items-start.mb-1
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                | Nombre del reporte. 
                
              li.d-flex.align-items-start.mb-1 
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                | Almacén/Zona cubierta.
              li.d-flex.align-items-start.mb-1
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                | Periodo de reporte.
                
              li.d-flex.align-items-start.mb-1 
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                | Fecha de generación. 
              li.d-flex.align-items-start.mb-1 
                  i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                  | Elaborado por.  
              li.d-flex.align-items-start.mb-1 
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color: #FE8849; font-size: 15px; line-height: 1.5;")
                | Revisado/Aprobado por. 
       

    .row
      .col-12.col-lg-10.mx-auto
        .titulo-sexto.mb-4
          h5 Figura 4. 
          span Tendencias actuales en reportes de almacén  
        figure.mb-4
          figure.mb-3
            img(src='@/assets/curso/temas/tema2/img26.svg', alt='Imagen Decorativa').mx-auto.d-none.d-sm-block
            img(src='@/assets/curso/temas/tema2/img26m.svg', alt='Imagen Decorativa').mx-auto.d-block.d-sm-none

          figcaption 
            b Fuente: 
            | Sena (2025)

    //cajon
    .cajon.color-secundario.p-4.mb-3
      p.mb-0.text-center Estas tendencias están transformando los reportes de almacén de documentos estáticos a herramientas estratégicas en tiempo real. 


</template>

<script>
export default {
  name: 'Tema2',
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
