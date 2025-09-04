export default {
  global: {
    Name: 'Monitoreo de las operaciones logísticas de almacén',
    Description:
      'El componente formativo aborda la gestión integral de almacenes, incluyendo su concepto, características, tipos y funciones. Cubre operaciones como etapas, herramientas tecnológicas, registros y reportes. También trata el manejo confidencial de información, métodos de captura de datos, formularios de recolección y su elaboración. Finalmente, incluye monitoreo del almacén, sus tipos y procedimientos para optimizar procesos y garantizar eficiencia.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Almacén',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Funciones',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Operación de almacén ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Etapas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Herramientas tecnológicas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Registros',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Reportes',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Principios de manejo confidencial de información',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Métodos de captura de datos ',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tipos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Funciones',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Formularios de recolección de datos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos',
            hash: 't_3_1',
          },
          {
            numero: '4.2',
            titulo: 'Técnicas de elaboración ',
            hash: 't_3_2',
          },
          {
            numero: '4.3',
            titulo: 'Herramientas tecnológicas',
            hash: 't_3_3',
          },
          {
            numero: '4.4',
            titulo: 'Funciones',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Monitoreo del almacén  ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Tipos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Procedimiento',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Funciones',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Almacén',
      referencia:
        'Brain Logistic. (2022). Almacenes: Concepto de almacén. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BIA7pl-zM0Q',
    },
    {
      tema: 'Operación de almacén.',
      referencia:
        'Brain Logistic. (2020). Procesos básicos de un almacén. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XlU1UFvbpj4',
    },
    {
      tema: 'Monitoreo del almacén.',
      referencia:
        'ProcesOptimoSDQ. (2024). Sistemas y tecnologías para la gestión de almacén: optimiza tus operaciones. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UvXTZSlrwh0',
    },
    {
      tema: 'Gestion de información.',
      referencia:
        'Legintech. (2022). Principios para el tratamiento de datos personales. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4KaLVfgjIl4',
    },
  ],
  glosario: [
    {
      termino: 'Almacén ',
      significado:
        'espacio destinado a guardar mercancías, materias primas o productos terminados para asegurar su disponibilidad en la cadena de suministro.',
    },
    {
      termino: '<em>Blockchain</em>',
      significado:
        'tecnología de registro inmutable para trazabilidad logística y autenticidad de productos.',
    },
    {
      termino: 'Cadena de suministro',
      significado:
        'conjunto de procesos y actividades que conectan la producción con la distribución de bienes hasta el cliente final.',
    },
    {
      termino: 'Captura de datos',
      significado:
        'proceso de recolección y registro de información relevante para la gestión del almacén.',
    },
    {
      termino: 'Confidencialidad',
      significado:
        'principio que garantiza la protección de datos sensibles contra accesos no autorizados.',
    },
    {
      termino: 'Despacho',
      significado:
        'proceso de salida de mercancías del almacén para su distribución o entrega al cliente.',
    },
    {
      termino: 'Formularios',
      significado:
        'instrumentos físicos o digitales utilizados para recopilar y organizar datos en el almacén.',
    },
    {
      termino: 'Gestión de información',
      significado:
        'proceso de manejo del ciclo de vida de los datos, desde su captura hasta su eliminación.',
    },
    {
      termino: 'Gestión de devoluciones',
      significado:
        'proceso de recibir, inspeccionar y reincorporar productos devueltos (logística inversa).',
    },
    {
      termino: '<em>IoT</em>',
      significado:
        'internet de las cosas, red de dispositivos interconectados para monitoreo en tiempo real.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'observación y registro continuo de las operaciones y movimientos dentro del almacén.',
    },
    {
      termino: '<em>Packing</em>',
      significado:
        'etapa de embalaje y etiquetado de productos antes del despacho.',
    },
    {
      termino: '<em>Picking</em>',
      significado:
        'proceso de selección y preparación de pedidos según órdenes de compra.',
    },
    {
      termino: 'Registros',
      significado:
        'documentos o sistemas electrónicos donde se anotan entradas, salidas y movimientos de mercancías.',
    },
    {
      termino: 'Reportes',
      significado:
        'informes periódicos que resumen el estado, movimientos y gestión del almacén para la toma de decisiones.',
    },
    {
      termino: 'RFID',
      significado:
        'es un sistema de almacenamiento y recuperación de datos remotos que usa dispositivos denominados etiquetas, tarjetas o transpondedores',
    },
    {
      termino: 'TIC (Tecnologías de la Información y Comunicación)',
      significado:
        'herramientas tecnológicas aplicadas para optimizar la gestión y seguridad de la información en los procesos logísticos.',
    },
    {
      termino: 'WMS',
      significado:
        'sistema de gestión de almacenes, <i>software</i>  para controlar inventarios y operaciones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aula Centro de Formación. (2022). <em>Gestión de Almacén y Logística.</em>',
      link:
        'https://dl.dropboxusercontent.com/scl/fi/ucro9rrtkrv682y7s1qt6/Curso-Gesti-n-de-Almanc-n-y-Log-stica-Aula-Centro-Formaci-n.pdf?rlkey=azxypu2r27s5m21odlj9ymwys&dl=0',
    },
    {
      referencia:
        'AR Racking. (2024). <em>Tipos de almacenes: Características y diferencias.</em> ',
      link:
        'https://www.ar-racking.com/co/blog/tipos-de-almacenes-caracteristicas-y-diferencias/',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2021). Zajuna Semilla. 121523_2_Virtual-Coordinación de procesos logísticos',
      link: 'https://zajuna.sena.edu.co/zajuna/course/view.php?id=32450',
    },
    {
      referencia:
        'Universidad Politecnica de Valencia. (2022). Introducción a la gestión de la información y del conocimiento en la empresa',
      link:
        'https://riunet.upv.es/bitstreams/e0125038-9086-42d8-954e-4401b3f5637e/download',
    },
    {
      referencia:
        'Universidad Tecnológica de Chile. (2017).<em> Logística y Distribución.</em> ',
      link:
        'https://dl.dropboxusercontent.com/scl/fi/fj36tqqwn137olufh5mt9/15.-Log-stica-y-Distribucci-n-autor-Inacap.pdf?rlkey=in7otqa16lkpda014bvsmn5pd&dl=0',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yezid Arturo Choperena Guerrero',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallard',
          cargo: 'Evaluador instruccional ',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoy',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
