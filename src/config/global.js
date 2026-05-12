export default {
  global: {
    Name: 'Estrategias de mercadeo digital y comercio electrónico',
    Description:
      'El componente presenta los fundamentos del marketing aplicado al Sistema Moda, integrando planeación estratégica, comercio electrónico, ecosistemas digitales, marketing digital y gestión de redes sociales. Su propósito es desarrollar capacidades para analizar mercados, formular estrategias comerciales y gestionar herramientas digitales, mediante enfoques conceptuales, casos empresariales y ejercicios aplicados orientados a contextos reales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
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
        titulo: 'Mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '1.1', titulo: 'Concepto', hash: 't_1_1' },
          { numero: '1.2', titulo: 'Tipos de estrategias', hash: 't_1_2' },
          { numero: '1.3', titulo: 'Consumidores', hash: 't_1_3' },
          { numero: '1.4', titulo: 'Análisis de competidores', hash: 't_1_4' },
          { numero: '1.5', titulo: 'Mezcla de mercadeo', hash: 't_1_5' },
          { numero: '1.6', titulo: 'Marketing digital', hash: 't_1_6' },
          { numero: '1.7', titulo: 'Email marketing', hash: 't_1_7' },
          { numero: '1.8', titulo: 'Estrategia digital', hash: 't_1_8' },
          { numero: '1.9', titulo: 'Mercadeo de moda', hash: 't_1_9' },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Planeación',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '2.1', titulo: 'Concepto', hash: 't_2_1' },
          { numero: '2.2', titulo: 'Metodologías o modelos', hash: 't_2_2' },
          { numero: '2.3', titulo: 'Procesos', hash: 't_2_3' },
          { numero: '2.4', titulo: 'Plan estratégico', hash: 't_2_4' },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Comercio electrónico',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '3.1', titulo: 'Conceptos', hash: 't_3_1' },
          { numero: '3.2', titulo: 'Tipos', hash: 't_3_2' },
          { numero: '3.3', titulo: 'Plataformas', hash: 't_3_3' },
          { numero: '3.4', titulo: 'Marco legal', hash: 't_3_4' },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ecosistemas digitales',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '4.1', titulo: 'Concepto', hash: 't_4_1' },
          { numero: '4.2', titulo: 'Tipos', hash: 't_4_2' },
          { numero: '4.3', titulo: 'Terminología', hash: 't_4_3' },
          { numero: '4.4', titulo: 'Web', hash: 't_4_4' },
          { numero: '4.5', titulo: 'Redes sociales', hash: 't_4_5' },
          { numero: '4.6', titulo: 'Plataformas digitales', hash: 't_4_6' },
          { numero: '4.7', titulo: 'Herramientas', hash: 't_4_7' },
          { numero: '4.8', titulo: 'Protocolos', hash: 't_4_8' },
          { numero: '4.9', titulo: 'Cargue de información', hash: 't_4_9' },
          {
            numero: '4.10',
            titulo: 'Testeos de funcionamiento',
            hash: 't_4_10',
          },
          { numero: '4.11', titulo: 'Omnicanal digital', hash: 't_4_11' },
          { numero: '4.12', titulo: 'Marco legal', hash: 't_4_12' },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Marketing digital',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '5.1', titulo: 'Concepto', hash: 't_5_1' },
          { numero: '5.2', titulo: 'Características', hash: 't_5_2' },
          { numero: '5.3', titulo: 'Técnicas', hash: 't_5_3' },
          { numero: '5.4', titulo: 'Tipos de herramientas', hash: 't_5_4' },
          {
            numero: '5.5',
            titulo: 'Tipos de estrategias digitales',
            hash: 't_5_5',
          },
          { numero: '5.6', titulo: 'Arquetipos digitales', hash: 't_5_6' },
          { numero: '5.7', titulo: 'Estrategia de marca', hash: 't_5_7' },
          { numero: '5.8', titulo: 'Técnicas publicitarias', hash: 't_5_8' },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '6.1', titulo: 'Funciones', hash: 't_6_1' },
          { numero: '6.2', titulo: 'Procedimientos', hash: 't_6_2' },
          { numero: '6.3', titulo: 'Expresiones', hash: 't_6_3' },
          { numero: '6.4', titulo: 'Métodos', hash: 't_6_4' },
          { numero: '6.5', titulo: 'Publicación', hash: 't_6_5' },
          { numero: '6.6', titulo: 'Pauta digital', hash: 't_6_6' },
          { numero: '6.7', titulo: 'Hashtags', hash: 't_6_7' },
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
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
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
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Comercio electrónico',
      significado: 'Compra y venta de bienes o servicios en línea.',
    },
    {
      termino: 'CRM',
      significado: 'Sistema de gestión de la relación con clientes.',
    },
    {
      termino: 'Ecosistema digital',
      significado:
        'Conjunto de plataformas, herramientas y datos interconectados digitalmente.',
    },
    {
      termino: '<em>Email marketing</em>',
      significado: 'Comunicación directa por correo electrónico.',
    },
    {
      termino: 'Estrategia digital',
      significado:
        'Plan de acción para alcanzar objetivos en el entorno digital.',
    },
    {
      termino: 'KPI',
      significado: 'Indicadores clave para medir desempeño digital.',
    },
    {
      termino: 'Marketing digital',
      significado: 'Estrategias promocionales mediante canales digitales.',
    },
    {
      termino: 'Omnicanalidad',
      significado: 'Integración de todos los canales de interacción digital.',
    },
    {
      termino: 'Redes sociales',
      significado: 'Plataformas digitales de interacción y comunicación.',
    },
    {
      termino: 'SEO',
      significado: 'Optimización para mejorar visibilidad en buscadores.',
    },
  ],
  referencias: [
    {
      referencia: 'AMA. (2023). <em>Definition of Marketing</em>.',
      link: 'https://www.ama.org/the-definition-of-marketing/',
    },
    {
      referencia:
        'Arango Serna, S. A., Londoño Salazar, J. H., & Álvarez Uribe, A. M. (2015). <em>Capacidades de negocio en el contexto empresarial</em>. Revista Facultad de Ingeniería, (76), 2-13.',
      link: 'https://www.redalyc.org/pdf/1942/194224362002.pdf',
    },
    {
      referencia:
        'Fernández Valiñas, R. (2023). <em>Segmentación de mercados</em>. Universidad Tecnológica de México.',
      link:
        'https://www.uteg.edu.ec/biblioteca-libros/wp-content/uploads/2023/09/Segmentacion-de-mercados_compressed.pdf',
    },
    {
      referencia:
        'SENA. (2022). <em>Conceptos básicos sobre marketing digital - SENA- Formación virtual</em>.',
      link: 'https://www.youtube.com/watch?v=LnUX087fcsk',
    },
    {
      referencia:
        'Solomon, M. R. (2018). <em>Comportamiento del consumidor: Comprando, poseyendo y siendo</em> (12ª ed.). Pearson Educación.',
      link:
        'https://www.academia.edu/123591709/Comportamiento_del_consumidor_Solomon',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de la línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
