<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Ecosistemas digitales
    
    .bg-full-width.bg-fondo-2
      .px-4.px-lg-5
        .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El ecosistema digital representa la articulación estratégica de plataformas, tecnologías, procesos y usuarios que interactúan de manera permanente dentro del entorno digital empresarial. Su comprensión resulta esencial para las organizaciones del sistema moda, debido a que las decisiones de <em>marketing</em>, ventas, comunicación y servicio al cliente dependen cada vez más de la integración tecnológica. En este contexto, la competitividad empresarial no se determina únicamente por la calidad del producto, sino por la eficiencia de su presencia digital.

        .row.justify-content-center.align-items-center.mb-5
          .col-xl-9.mb-3.mb-xl-0
            .row.justify-content-center.align-items-center.mb-3
              .col-md-8.col-lg-5.col-xl-6.mb-3.mb-xl-0
                figure
                  img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
              .col-lg-7.col-xl-6
                .bg-color-2.p-4.tarjeta 
                  p.mb-0 El capítulo aborda los elementos conceptuales, tecnológicos y operativos que integran los ecosistemas digitales, incluyendo plataformas, herramientas, protocolos, métodos de gestión de contenidos y pruebas de funcionamiento. Además, se analizan los modelos omnicanal y el marco legal colombiano aplicable al entorno digital.   
            .bg-color-sintesis.tarjeta.p-4
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/tema4/4.svg").mx-auto
                .col-lg
                  p.mb-0 El desarrollo se presenta mediante casos empresariales, tablas conceptuales y preguntas de aplicación que permiten contextualizar los aprendizajes en escenarios reales del sistema moda.
          .col-md-8.col-lg-4.col-xl-3.mb-3.mb-xl-0
            figure
              img(src="@/assets/curso/tema4/3.png", data-aos="zoom-in")

        separador
        
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.1 Concepto
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/5.png", data-aos="zoom-in")
          .col-lg-8
            p Un ecosistema digital se define como el conjunto interconectado de plataformas, tecnologías, datos y actores que interactúan para generar valor dentro de un entorno digital empresarial, su estructura se asemeja a los ecosistemas biológicos, donde múltiples componentes cooperan de manera dinámica para mantener la estabilidad y el crecimiento del sistema. Este enfoque permite comprender que la presencia digital empresarial no es un canal aislado, sino una red estratégica integrada.
            .bg-color-9.tarjeta.p-4
              p.mb-0 En el sector moda, marcas como Zara integran comercio electrónico, redes sociales, aplicaciones móviles, CRM y sistemas logísticos en un solo entorno digital coordinado, este modelo permite optimizar la experiencia del cliente desde la búsqueda del producto hasta la entrega final, su análisis del ecosistema digital facilita identificar puntos de mejora en procesos de <em>marketing</em> y ventas.
    
    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Tipos
    
    img(src="@/assets/curso/tema4/6.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text Los ecosistemas digitales pueden clasificarse en comerciales, de contenido, de servicios y colaborativos, según su objetivo estratégico principal.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Tipos de ecosistemas digitales
    
    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/7.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Comerciales
            p.mb-0 Se enfocan en ventas digitales. Requieren integración logística y de pagos.
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/8.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Contenido
            p.mb-0 Priorizan generación de audiencias. Demandan gestión de audiencias.
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/9.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Servicios
            p.mb-0 Integran soluciones tecnológicas. Enfatizan la interoperabilidad tecnológica.     
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/10.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Colaborativos
            p.mb-0 Conectan comunidades de usuarios o proveedores. Se sustentan en redes de participación.
    
    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Terminología
    
    .bg-full-width.bg-fondo-2
      .px-4.px-lg-5
        .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/11.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La terminología de los ecosistemas digitales está conformada por un conjunto dinámico de conceptos que hoy hacen parte del léxico estratégico empresarial. Este vocabulario evoluciona constantemente a medida que surgen nuevas tecnologías, plataformas y modelos de interacción digital. Por ello, comprender estos términos no solo facilita la comunicación técnica, sino que también fortalece la capacidad de análisis y toma de decisiones en entornos digitales. A continuación, se presentan algunos de los conceptos más recientes y relevantes dentro de los ecosistemas digitales:
        
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 4.
              span Términos recientes en ecosistemas digitales (aplicados al sistema moda)
            .tabla-a.color-secundario.mb-5.tbl
              table
                caption Nota. SENA, (2026).
                thead
                  tr
                    th.bg-color-7 Término
                    th.bg-color-7 Definición
                    th.bg-color-7 Aterrizaje al sistema moda
                tbody
                  tr.bg-color-white
                    td <b><em>API Economy</em></b>
                    td Modelo económico basado en la integración de servicios digitales mediante APIs.
                    td Permite integrar la tienda <em>online</em> con pasarelas de pago, logística, CRM y <em>marketplaces</em> como Mercado Libre o Amazon sin perder coherencia operativa.
                  tr.bg-color-8
                    td <b>Automatización Inteligente</b>
                    td Uso combinado de inteligencia artificial y automatización de procesos.
                    td Automatiza respuestas en Instagram, envíos de <em>email marketing</em> y recomendaciones de prendas según historial de compra.
                  tr.bg-color-white
                    td <b><em>Blockchain</em></b>
                    td Tecnología de registro descentralizado y seguro.
                    td Facilita certificación de autenticidad en prendas de lujo o sostenibles y trazabilidad en cadenas de suministro.
                  tr.bg-color-8
                    td <b>CDP (<em>Customer Data Platform</em>)</b>
                    td Plataforma que centraliza datos del cliente en tiempo real.
                    td Unifica datos de compras <em>online</em>, interacción en redes y visitas web para personalizar lanzamientos de colecciones.
                  tr.bg-color-white
                    td <b><em>Composable Commerce</em></b>
                    td Modelo modular de comercio digital basado en componentes flexibles.
                    td Permite construir una tienda virtual adaptable según temporada, integrando módulos para preventas o <em>drops</em> exclusivos.
                  tr.bg-color-8
                    td <b><em>Creator Economy</em></b>
                    td Ecosistema económico basado en creadores de contenido digital.
                    td Colaboraciones con <em>influencers</em> que lanzan cápsulas de colección o realizan <em>live shopping</em>.
                  tr.bg-color-white
                    td <b><em>Data Governance</em></b>
                    td Gestión estratégica de calidad, seguridad y uso de datos.
                    td Garantiza cumplimiento de la Ley de Protección de Datos y uso responsable de información de clientes.
                  tr.bg-color-8
                    td <b><em>Headless Commerce</em></b>
                    td Separación entre <em>frontend</em> y <em>backend</em> en <em>e-commerce</em>.
                    td Permite mostrar la colección en web, <em>app</em> y redes sociales con experiencias visuales distintas pero mismo sistema operativo interno.
                  tr.bg-color-white
                    td <b>Omnicanalidad</b>
                    td Integración coherente de todos los canales de contacto.
                    td Cliente puede ver la prenda en Instagram, comprar en la web y recoger en tienda física sin fricciones.
                  tr.bg-color-8
                    td <b>Web3</b>
                    td Nueva generación de internet basada en descentralización y <em>blockchain</em>.
                    td Posibilidad de lanzar NFTs asociados a colecciones exclusivas o comunidades digitales de marca.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .bg-color-3.p-4.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/4.svg").mx-auto
            .col-lg
              p.mb-0  <b>Clave estratégica</b>. Las empresas deben capacitar a sus equipos de <em>marketing</em> constantemente para estar a la vanguardia de la terminología tecnológica aplicada al mercadeo.
    
    separador
    
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Web
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/12.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-0(data-aos="fade-right") La web constituye el núcleo estructural del ecosistema digital empresarial porque centraliza la información institucional, las operaciones de comercio electrónico y los principales puntos de interacción con los clientes, convirtiéndose en el eje de convergencia de todos los canales digitales. Por esta razón, su diseño no puede limitarse a lo estético, sino que debe contemplar criterios de accesibilidad, optimización SEO y compatibilidad móvil, garantizando visibilidad, posicionamiento en buscadores y rendimiento técnico adecuado. 
  
    
    .bg-color-9.tarjeta.p-4.mb-5
      p.mb-0 En el sistema moda, las empresas utilizan la web como plataforma principal de conversión comercial, articulándola estratégicamente con redes sociales y <em>marketplaces</em> para ampliar alcance y tráfico. Cuando existe coherencia visual y funcional entre estos canales, se fortalece la identidad de marca y se consolida una experiencia integrada para el consumidor. En contraste, una web mal optimizada provoca pérdida de tráfico, baja conversión y deterioro de la imagen corporativa, impactando negativamente la competitividad empresarial.

    separador
    
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Redes sociales
    
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-9.mb-3.mb-xl-0
        .row.justify-content-center.align-items-center.mb-3
          .col-md-8.col-lg-5.col-xl-5.mb-3.mb-xl-0
            figure
              img(src="@/assets/curso/tema4/13.png", data-aos="zoom-in")
          .col-lg-7.col-xl-7
            .bg-color-2.p-4.tarjeta 
              p.mb-0 Las redes sociales han revolucionado la forma en que las personas interactúan en el mundo digital. Estas plataformas permiten la conexión entre individuos, marcas y comunidades, facilitando la comunicación en tiempo real a través de distintos formatos como texto, imágenes, videos y transmisiones en vivo. Más que simples espacios de entretenimiento, las redes sociales han evolucionado para convertirse en herramientas esenciales de interacción y difusión de contenido a gran escala.   
        .bg-color-sintesis.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/4.svg").mx-auto
            .col-lg
              p.mb-0 Según Coiera (2013) las redes sociales son medios de comunicación, diferentes a los tradicionales, ya que utilizan un conjunto de tecnologías, con el fin de crear espacios virtuales para que los usuarios puedan interactuar entre sí. En el capítulo seis (6), de la presente guía, se trabajará de forma ampliada esta temática. 
      .col-md-8.col-lg-4.col-xl-3.mb-3.mb-xl-0
        figure
          img(src="@/assets/curso/tema4/14.png", data-aos="zoom-in")

    separador
    
    #t_4_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.6 Plataformas digitales
    
    .bg-full-width.bg-fondo-2
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/15.png", data-aos="zoom-in")
          .col-lg-8
            p Las plataformas digitales son infraestructuras tecnológicas que permiten la interacción entre usuarios, empresas y servicios mediante aplicaciones en línea que integran comunicación, comercio, análisis de datos y gestión de contenidos. Estas plataformas constituyen el núcleo operativo de los ecosistemas digitales empresariales, ya que facilitan la automatización de procesos comerciales, la administración de clientes y la distribución de productos. 
            .bg-color-10.tarjeta.p-4
              p.mb-0 En el sistema moda cumplen funciones de catálogos virtuales, gestión logística, atención al cliente y <em>marketing</em> automatizado, su implementación requiere planificación tecnológica alineada con los objetivos estratégicos de la organización. Las empresas seleccionan plataformas según escalabilidad, compatibilidad, costos operativos y seguridad, la correcta integración tecnológica permite centralizar la información y mejorar la eficiencia organizacional. La tendencia actual apunta a plataformas integradas que conectan comercio electrónico, redes sociales y sistemas de gestión empresarial, esto fortalece la competitividad digital.

        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-6
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Figura 4.
              span Tipos de plataformas digitales
            img(data-aos="fade-up", src="@/assets/curso/tema4/16.png", alt="La figura muestra los diferentes tipos de plataformas digitales, divididos en tres categorías: comerciales, orientadas a la compra y venta de productos; operativas, enfocadas en la gestión interna y optimización de procesos empresariales; y colaborativas, que facilitan la interacción y participación entre proveedores, clientes y aliados estratégicos")
            figcaption Nota. SENA, (2026).
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/17.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-16.tarjeta.p-4
          p.mb-0 Cada categoría presenta características técnicas relacionadas con almacenamiento de datos, integraciones API (<em>Application Programming Interface</em> - Interfaz de Programación de Aplicaciones - conjunto de reglas y protocolos que permite que dos sistemas o aplicaciones diferentes se comuniquen entre sí sin que el usuario tenga que intervenir.), seguridad informática y automatización, la elección depende de la etapa de madurez digital de la empresa, así mismo, su integración mejora la eficiencia operativa, además de permitir una visión integral del cliente.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema4/19.png", data-aos="zoom-in")
      .col-lg-6.order-1.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-3.p-lg-2
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/18.png").mx-auto
            .col-lg
              h5.mb-0 Pregunta de aplicación
              p.mb-0 ¿Qué criterios debería evaluar una empresa antes de seleccionar una plataforma digital empresarial?
    
    separador
    
    #t_4_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.7 Herramientas
    
    .bg-full-width.bg-fondo-2
      .px-4.px-lg-5
        img(src="@/assets/curso/tema4/20.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text Las herramientas digitales son aplicaciones, <em>software</em> y recursos tecnológicos que facilitan la ejecución de actividades dentro de los ecosistemas digitales, incluyendo <em>marketing</em>, comunicación, diseño, análisis de datos y automatización de procesos, estas herramientas permiten optimizar el trabajo operativo y estratégico de las organizaciones, reduciendo tiempos de ejecución y mejorando la precisión de las decisiones. 
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Clasificación de herramientas digitales
        

        TabsB.color-acento-contenido.mb-5
          .py-4.py-md-5(titulo="<em>Marketing</em>" :icono="require('@/assets/componentes/2.svg')")
            .row.justify-content-center.align-items-center.p-4.p-lg-0
              .col-lg-7.order-2
                h4 <em>Marketing</em>
                p Facilitan la gestión de campañas publicitarias, programación de contenidos y monitoreo de <em>engagement</em>; su característica principal es la optimización comunicacional.
              .col-lg-4.order-1.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema4/21.png', alt='alt')
          .py-4.py-md-5(titulo="Analítica" :icono="require('@/assets/componentes/3.svg')")
            .row.justify-content-center.align-items-center.p-4.p-lg-0
              .col-lg-7.order-2
                h4 Analítica
                p Permiten medir indicadores de rendimiento, analizar tendencias de mercado y evaluar el comportamiento del consumidor, destacándose por su enfoque en datos.
              .col-lg-4.order-1.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema4/22.png', alt='alt')
          .py-4.py-md-5(titulo="Productividad" :icono="require('@/assets/componentes/4.svg')")
            .row.justify-content-center.align-items-center.p-4.p-lg-0
              .col-lg-7.order-2
                h4 Productividad
                p Mejoran la organización del trabajo mediante gestión de proyectos, almacenamiento en la nube y automatización de tareas.
              .col-lg-4.order-1.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema4/23.png', alt='alt')

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/24.png", data-aos="zoom-in")
          .col-lg-8
            p En la industria de la moda, las herramientas digitales permiten coordinar equipos creativos, lanzar campañas promocionales y analizar tendencias globales en tiempo real. La integración de analítica y <em>marketing</em> facilita estrategias basadas en datos que incrementan la efectividad comercial. Las empresas que adoptan herramientas automatizadas logran reducir costos operativos y mejorar la precisión en la segmentación de clientes, asimismo, la automatización de procesos repetitivos permite concentrar recursos en innovación y creatividad. 
        
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-12(data-aos="fade-up")
            .tarjeta.color-primario.bg-color-10.p-3.mb-5
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2
                  img(src="@/assets/curso/tema4/25.png")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 <em>Insight</em>
                      p.mb-0 Un informe especializado indica que alrededor del 40 % de las empresas colombianas que implementan automatización de <em>marketing</em> han observado aumentos significativos en sus tasas de conversión, evidenciando el valor estratégico de estas tecnologías para incrementar ventas y rendimiento comercial. Se sugiere al aprendiz consultar el siguiente enlace.  
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://cangrejodigital.com/wp-content/uploads/2025/07/Tendencias-de-Marketing-Digital-2025-2026-en-Colombia-Lo-que-tu-Negocio-Debe-Saber-para-Crecer-Cangrejo-Digital.pdf?utm_source=chatgpt.com" target="_blank")
                        span Ir al enlace
                        i.fas.fa-link

    .bg-full-width.bg-fondo-2
      .px-4.px-lg-5
        .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/26.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 <b>Ejemplo aplicado</b>. La plataforma de moda de lujo LUISAVIAROMA experimentó mejoras drásticas en su rendimiento comercial tras automatizar campañas omnicanal mediante una solución de <em>marketing</em> inteligente. Con perfiles más precisos y mensajes personalizados, la empresa logró aumentar su tasa de conversión en hasta 400 % y el ingreso generado por campañas de <em>email marketing</em> en 900 %, gracias a la automatización y la analítica aplicada para adaptar ofertas y contenido relevante para segmentos específicos de su audiencia global.
    
    separador
    
    #t_4_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.8 Protocolos
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/27.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-0 Los protocolos digitales son conjuntos de normas técnicas que regulan la comunicación, transferencia de datos y funcionamiento de sistemas informáticos dentro de internet y las redes tecnológicas empresariales. Estos protocolos garantizan que los dispositivos, plataformas y aplicaciones puedan interactuar de manera segura, eficiente y estandarizada. 

    .bg-color-2.tarjeta.p-4.mb-5
      p.mb-0 En los ecosistemas digitales empresariales, los estándares técnicos constituyen la base que permite la transmisión confiable de información comercial, la ejecución segura de transacciones electrónicas y el funcionamiento eficiente de procesos automatizados. Debido a que estos entornos operan de manera interconectada y en tiempo real, la seguridad de los datos y la continuidad operativa dependen directamente del cumplimiento riguroso de dichos estándares. Por ello, las organizaciones deben implementar protocolos tecnológicos actualizados que prevengan vulnerabilidades informáticas y reduzcan riesgos asociados a fraudes, filtraciones o interrupciones del servicio. 
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Clasificación de los protocolos

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/28.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Comunicación
            p.mb-0 Regulan la transmisión de información entre dispositivos y servidores, destacándose por su función de conectividad.
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/29.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Seguridad
            p.mb-0 Protegen la información mediante cifrado y autenticación de usuarios, siendo esenciales para las transacciones electrónicas.
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/30.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Transferencia de datos
            p.mb-0 Permiten el envío estructurado de archivos entre sistemas informáticos, garantizando la integridad de la información.

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-9.mb-3.mb-xl-0
        .row.justify-content-center.align-items-center.mb-3
          .col-md-8.col-lg-5.col-xl-5.mb-3.mb-xl-0
            figure
              img(src="@/assets/curso/tema4/31.png", data-aos="zoom-in")
          .col-lg-7.col-xl-7
            .bg-color-2.p-4.tarjeta 
              p.mb-0 En el sistema moda, los protocolos digitales constituyen el soporte técnico que garantiza la operación segura de tiendas virtuales, sistemas de pago electrónico y plataformas logísticas integradas, permitiendo que las transacciones se desarrollen sin vulnerar la información del cliente ni la estabilidad del negocio. Cuando estos protocolos se implementan de manera adecuada, se reducen significativamente los riesgos de fraude digital y, en consecuencia, se fortalece la confianza del consumidor en las compras en línea.    
        .bg-color-sintesis.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/4.svg").mx-auto
            .col-lg
              p.mb-0 Además, su correcta configuración facilita la interoperabilidad entre plataformas de comercio electrónico, sistemas de inventario y herramientas de <em>marketing</em> digital, optimizando procesos y asegurando coherencia operativa. 
      .col-md-8.col-lg-4.col-xl-3.mb-3.mb-xl-0
        figure
          img(src="@/assets/curso/tema4/32.png", data-aos="zoom-in")
    
    .bg-color-1.mb-5.tarjeta.p-4
      .row.justify-content-center.align-items-center
        .col-md-6.col-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/4.png", data-aos="zoom-in")
        .col-lg-8
          p.mb-0(data-aos="fade-right") Las empresas que invierten en infraestructura tecnológica segura no solo incrementan su reputación digital, sino que transforman la ciberseguridad en una ventaja competitiva sostenible. Sin embargo, este fortalecimiento exige capacitación permanente del personal en buenas prácticas digitales y una gestión continua de riesgos tecnológicos, ya que la protección de la información se consolida como un activo estratégico empresarial.
    
    separador
    
    #t_4_9.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.9 Cargue de información

    .bg-full-width.bg-fondo-2
      .px-4.px-lg-5
        .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/33.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los métodos de cargue de información corresponden a los procedimientos tecnológicos mediante los cuales se incorporan datos, archivos y contenidos a sistemas digitales, plataformas web o bases de datos empresariales. Estos métodos son esenciales para el funcionamiento eficiente de los ecosistemas digitales, ya que garantizan la disponibilidad, actualización y consistencia de la información utilizada en procesos comerciales y operativos. 
    
    .bg-full-width.bg-fondo-2
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-2
            figure
              img(src="@/assets/curso/tema4/34.png", data-aos="zoom-in")
          .col-lg-8.order-1
            p En el sistema moda permiten actualizar catálogos de productos, inventarios, imágenes de colecciones y contenidos promocionales en tiempo real. La correcta implementación de estos métodos reduce errores operativos y mejora la experiencia del usuario final. Asimismo, facilita la integración entre plataformas empresariales y sistemas de comercio electrónico. Las organizaciones deben seleccionar el método adecuado según el volumen y la frecuencia de actualización de datos, su gestión estratégica impacta la eficiencia digital.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Clasificación de los métodos de cargue de información

        .bg-full-width.bg-fondo-3.mb-5
          .px-4.px-md-5
            .row.justify-content-center.align-items-center
              .col-xl-8.order-lg-2
                SlyderF(columnas="col-12 col-lg-6").p-4
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema4/34.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4.bg-color-2.p-3 Cargue manual
                    p.text-center Se caracteriza por la introducción directa de datos por parte del usuario en sistemas digitales, siendo útil para actualizaciones pequeñas o específicas.
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema4/35.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4.bg-color-2.p-3 Cargue automatizado
                    p.text-center Permite la sincronización entre sistemas mediante integraciones tecnológicas, destacándose por su eficiencia y reducción de errores humanos.
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema4/36.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4.bg-color-2.p-3 Cargue masivo
                    p.text-center Facilita la incorporación simultánea de grandes volúmenes de datos mediante archivos estructurados, siendo fundamental en procesos de actualización de inventarios o bases de clientes. 
              .col-md-8.col-lg-4.order-lg-1
                figure
                  img(src='@/assets/curso/tema4/35.png', alt='Descripción de la imagen')

        .bg-color-1.mb-5.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.order-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/37.png").mx-auto
            .col-lg.order-1
              p.mb-0 En la práctica, la forma de realizar el cargue de información no es única ni estándar, sino que depende directamente del sistema tecnológico donde se aloja la información y de los recursos disponibles en la organización. Así como organizar zapatos varía según el espacio —no es lo mismo guardarlos en un nochero, un clóset, una repisa o un organizador especializado—, el cargue de datos se adapta a la “estructura” del sistema: puede hacerse manualmente desde un panel administrativo, mediante archivos masivos como hojas de cálculo, a través de integraciones automáticas o usando APIs que sincronizan información en tiempo real. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/38.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.tarjeta.p-4
          p.mb-0 Por ejemplo, una marca de moda pequeña puede actualizar su catálogo cargando un archivo Excel en su plataforma de <em>e-commerce</em>, mientras que una empresa con mayor madurez digital conectará su sistema de inventarios con la tienda virtual para que los datos se actualicen automáticamente. Por ello, antes de ejecutar el cargue, es necesario indagar cómo funciona el sistema, consultar la documentación técnica y aplicar el método más adecuado, entendiendo que la correcta gestión de la información se construye según el “espacio” digital con el que se cuenta en cada momento.
    
    separador
    
    #t_4_10.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.10 Testeos de funcionamiento
    
    img(src="@/assets/curso/tema4/39.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text Los testeos de funcionamiento corresponden a procesos de verificación técnica que permiten evaluar el correcto desempeño de sistemas digitales, plataformas web y aplicaciones tecnológicas antes de su implementación o actualización. Estos procedimientos aseguran la calidad del servicio digital, la estabilidad operativa y la seguridad de la información. En los ecosistemas empresariales permiten detectar fallas técnicas, errores de programación o problemas de compatibilidad que podrían afectar la experiencia del usuario. 
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Clasificación de los testeos de funcionamiento

    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/40.png", data-aos="zoom-in")
      .col-lg-8
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Pruebas funcionales")
            h4 Pruebas funcionales
            p.mb-0 Verifican que cada componente del sistema opere según lo diseñado, identificando errores operativos o fallas de interacción. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Pruebas de rendimiento")
            h4 Pruebas de rendimiento
            p.mb-0 Evalúan la capacidad del sistema para soportar cargas de usuarios y volumen de operaciones, destacándose por su enfoque en velocidad y estabilidad. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Pruebas de seguridad")
            h4 Pruebas de seguridad
            p.mb-0 Analizan vulnerabilidades informáticas que podrían comprometer la información empresarial o de los clientes, siendo fundamentales para la protección de datos.


    .row.align-items-center.bg-color-3.p-4.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        img.d-lg-flex.d-none(src="@/assets/curso/tema4/4.svg").mx-auto
      .col-lg
        p.mb-0 <b>Ejemplo aplicado</b>. En el sector moda, la implementación de pruebas de rendimiento antes de campañas promocionales permite asegurar que las plataformas de comercio electrónico soporten altos volúmenes de tráfico. Asimismo, las pruebas de seguridad protegen la información financiera de los clientes durante las transacciones digitales.  
    
    .bg-color-1.mb-5.tarjeta.p-4
      .row.justify-content-center.align-items-center
        .col-md-6.col-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/4.png", data-aos="zoom-in")
        .col-lg-8
          p.mb-0(data-aos="fade-right") <b>Clave estratégica.</b> Las empresas que adoptan metodologías de <em>testing</em> estructurado logran mayor confiabilidad en sus servicios digitales, esto incrementa la satisfacción del consumidor y fortalece la reputación empresarial, así mismo, la evaluación continua permite detectar oportunidades de mejora tecnológica, lo que conlleva a una alta calidad digital convirtiendo esto en una ventaja competitiva.
    
    separador
    
    
    #t_4_11.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.11 Omnicanal digital
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-3
          .col-md-6.col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/41.png", data-aos="zoom-in")
          .col-lg-9
            .bg-color-12.p-4.tarjeta.mb-3
              p.mb-0 La omnicanalidad digital corresponde a la integración coordinada de todos los canales de comunicación, venta y servicio al cliente de una empresa, permitiendo que el consumidor interactúe de manera continua y coherente en entornos físicos y digitales, este enfoque supera el modelo multicanal al priorizar la experiencia del cliente como eje central de la estrategia empresarial.  
            p El sistema moda permite que el consumidor consulte productos en redes sociales, realice compras en línea y recoja en tienda física sin interrupciones en el proceso. La omnicanalidad requiere integración tecnológica entre plataformas, inventarios, sistemas de atención y bases de datos, su implementación mejora la satisfacción del cliente y aumenta las oportunidades de venta, asimismo, fortalece la fidelización mediante experiencias personalizadas. 
            .bg-color-1.tarjeta.p-3
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/tema4/42.png", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 En las empresas del sistema moda, la omnicanalidad permite sincronizar inventarios de tiendas físicas y virtuales, ofreciendo disponibilidad en tiempo real al consumidor, esto, facilita campañas promocionales que integran redes sociales, comercio electrónico y tiendas presenciales. 

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/tema4/43.png", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0
            .bg-color-16.tarjeta.p-3.mb-3
               p.mb-0 <b><em>Insight</em></b>. Las organizaciones que implementan estrategias omnicanal logran mayor retención de clientes y aumento en la frecuencia de compra.
            .bg-color-1.tarjeta.p-3
              .row.align-items-center
                .col-lg-auto.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/tema4/18.png").mx-auto
                .col-lg
                  h5.mb-0 Pregunta de aplicación
                  p.mb-0 ¿Cómo puede una empresa del sistema moda mejorar la fidelización mediante estrategias omnicanal?
    
    separador
    
    #t_4_12.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.12 Marco legal
    
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-9.mb-3.mb-xl-0
        .row.justify-content-center.align-items-center.mb-3
          .col-md-8.col-lg-5.col-xl-5.mb-3.mb-xl-0
            figure
              img(src="@/assets/curso/tema4/44.png", data-aos="zoom-in")
          .col-lg-7.col-xl-7
            .bg-color-2.p-4.tarjeta 
              p.mb-0 El marco legal vigente en Colombia establece el conjunto de normas que regulan el uso de tecnologías digitales, comercio electrónico, protección de datos personales y seguridad de la información dentro de las actividades empresariales. Estas disposiciones buscan garantizar la transparencia en las transacciones digitales, proteger los derechos de los consumidores y promover la confianza en los entornos virtuales.   
        .bg-color-sintesis.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/4.png").mx-auto
            .col-lg
              p.mb-0 Las empresas que operan en ecosistemas digitales deben cumplir las normativas relacionadas con comercio electrónico, <em>habeas data</em>, propiedad intelectual y protección del consumidor, el desconocimiento de estas regulaciones puede generar sanciones económicas y pérdida de reputación corporativa, de allí que la actualización permanente en legislación digital sea fundamental para la gestión empresarial, esto, fortalece la seguridad jurídica de las operaciones comerciales. 
      .col-md-8.col-lg-4.col-xl-3.mb-3.mb-xl-0
        figure
          img(src="@/assets/curso/tema4/45.png", data-aos="zoom-in")
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            .bg-color-3.p-4.tarjeta
              .row.align-items-center
                .col-lg-auto.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/tema4/4.svg").mx-auto
                .col-lg
                  p.mb-0  <b>Clave estratégica.</b>  El cumplimiento normativo se convierte en factor competitivo. La responsabilidad digital empresarial exige vigilancia normativa constante.
        
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 5.
              span Regulaciones del comercio electrónico y entorno digital en Colombia
            .tabla-a.color-secundario.mb-5.tbl
              table
                caption Nota. SENA, (2026).
                thead
                  tr
                    th.bg-color-7 Tipo de regulación
                    th.bg-color-7 Características principales
                    th.bg-color-7 Norma (nombre y breve resumen)
                tbody
                  tr.bg-color-white
                    td <b>Comercio electrónico y firma digital</b>
                    td Establece validez jurídica de mensajes de datos, firma electrónica y transacciones digitales.
                    td Ley 527 de 1999: regula el acceso y uso de mensajes de datos y contratación por medios electrónicos.
                  tr.bg-color-8
                    td <b>Protección de datos personales</b>
                    td Protege los datos de los usuarios, define deberes de tratamiento y derechos de los titulares.
                    td Ley 1581 de 2012: establece disposiciones generales para protección, tratamiento, actualización y supresión de datos personales.
                  tr.bg-color-white
                    td <b>Derechos del consumidor</b>
                    td Regula derechos, información clara, garantías y deberes de proveedores en comercio electrónico.
                    td Ley 1480 de 2011 (Estatuto del Consumidor): protege al consumidor en ventas a distancia y comercio electrónico.
                  tr.bg-color-8
                    td <b>Facturación electrónica</b>
                    td Obliga al uso de factura electrónica y regula su implementación.
                    td Ley 223 de 1995 y disposiciones en normatividad tributaria, sobre factura electrónica y registro en comercio digital.
                  tr.bg-color-white
                    td <b>Protección del consumidor en comercio electrónico</b>
                    td Especifica derechos en contratos y ventas no presenciales.
                    td Disposiciones del Estatuto del Consumidor (Ley 1480 de 2011) - Art. 49: define comercio electrónico y derechos asociados.
                  tr.bg-color-8
                    td <b>Regulación del emprendimiento digital</b>
                    td Promueve el ejercicio del comercio electrónico y emprendimiento digital.
                    td Ley 2069 de 2020: fomenta el emprendimiento, incluyendo actividades digitales y comercio en línea.
                  tr.bg-color-white
                    td <b>Política de gobierno digital</b>
                    td Define lineamientos para servicios digitales y habilitación de prestadores.
                    td Decreto 767 de 2022 y Resolución MINTIC 1951 de 2022: establecen requisitos para servicios digitales y estándares técnicos.
                  tr.bg-color-8
                    td <b>Estatuto del consumidor - obligaciones publicidad y comercio</b>
                    td Regula obligaciones informativas y derechos del consumidor digital.
                    td Estatuto del Consumidor (Ley 1480 de 2011): artículos relacionados con información clara y calidad del producto.
                  tr.bg-color-white
                    td <b>Protección de datos en transferencia internacional</b>
                    td Regula las condiciones para la transferencia de datos fuera de Colombia.
                    td Ley 1581 de 2012 - Artículo 26: prohíbe transferencia de datos a países sin protección adecuada sin consentimiento.
                  tr.bg-color-8
                    td <b>Inclusión digital y servicios de valor agregado</b>
                    td Regula acceso equitativo a las TIC y servicios digitales avanzados.
                    td Ley 1341 de 2009: reglamenta servicios de TIC y protección de usuarios digitales, con impacto en comercio electrónico.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/46.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-4.tarjeta.mb-3
          p.mb-0 En el sistema moda, el cumplimiento del marco legal permite desarrollar estrategias digitales seguras, proteger datos de clientes y operar plataformas de comercio electrónico conforme a la legislación vigente, asimismo, fortalece la reputación empresarial al garantizar transparencia en la gestión de información personal y transacciones comerciales. Las empresas que integran la gestión legal dentro de su estrategia digital reducen riesgos operativos y sanciones regulatorias. 
        .row.align-items-center.bg-color-1.p-3.tarjeta
          .col-lg-auto.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema4/47.png").mx-auto
          .col-lg
            h5.mb-0 Cita de reflexión
            p.mb-0 “La integridad es hacer lo correcto incluso cuando nadie observa.”


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
