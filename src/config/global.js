export default {
  global: {
    Name:
      'Control y verificación de las actividades de manejo en producción de pollo de engorde',
    Description:
      'El manejo en la producción de pollos de engorde integra prácticas técnicas de control, bioseguridad, bienestar animal y monitoreo ambiental para garantizar la sanidad, productividad y cumplimiento normativo, mediante la verificación constante de actividades y el análisis de parámetros productivos',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Controlar el desarrollo de las actividades de manejo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Plan de mejoramiento: acciones preventivas y correctivas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Manejo ambiental: control y seguimiento',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Condiciones ambientales: monitoreo',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Densidad de aves: ajuste técnico',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Control del estado y comportamiento de las aves',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Protocolos: concepto y aplicación',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Cálculo de parámetros de producción',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Reporte de novedades y contingencias',
            hash: 't_1_8',
          },
          {
            numero: '1.9',
            titulo: 'Seguridad y Salud en el Trabajo (SST) en el control',
            hash: 't_1_9',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Verificar la ejecución de las actividades de manejo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Contingencias: tipos y características',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Protocolos: cumplimiento',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Buenas prácticas avícolas y bienestar animal verificación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Registro y control de procesos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Evaluación de parámetros productivos',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Seguridad y Salud en el Trabajo (SST) en la verificación',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Manejo de residuos y condiciones sanitarias',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Manejo operativo de aves',
            hash: 't_2_8',
          },
          {
            numero: '2.9',
            titulo: 'Verificación del proceso de transporte',
            hash: 't_2_9',
          },
          {
            numero: '2.10',
            titulo: 'Sistemas de bioseguridad',
            hash: 't_2_10',
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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
