<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 <em>Marketing</em> digital
    
    .bg-full-width.bg-fondo-2
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/1.png", data-aos="zoom-in")
          .col-lg-8
            p El <em>marketing</em> digital constituye el conjunto de estrategias, herramientas y procesos orientados a promocionar productos, servicios y marcas mediante canales digitales interconectados. En el sistema moda, su relevancia se ha incrementado debido al cambio en los hábitos de consumo, donde los clientes investigan, comparan y compran a través de internet antes de tomar decisiones de compra.
            .bg-color-16.p-4.tarjeta
              p.mb-0 El capítulo aborda el concepto, características, técnicas y herramientas del <em>marketing</em> digital, analizando su aplicación práctica en el sistema moda mediante casos empresariales, tablas conceptuales y preguntas de aplicación. El desarrollo busca fortalecer la comprensión estratégica del aprendiz frente al uso de tecnologías digitales en procesos comerciales, posicionamiento de marca y fidelización de clientes.

        separador
        
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 5.1 Concepto
        
        .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El <em>marketing</em> digital se define como el conjunto de estrategias promocionales desarrolladas mediante plataformas digitales con el propósito de atraer, convertir y fidelizar clientes. A diferencia del <em>marketing</em> tradicional, se fundamenta en el uso de datos en tiempo real que permiten segmentar audiencias, personalizar mensajes y evaluar el desempeño de las campañas de manera continua, este enfoque convierte la comunicación empresarial en un proceso interactivo orientado a la experiencia del usuario.
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-2
            figure
              img(src="@/assets/curso/tema5/3.png", data-aos="zoom-in")
          .col-lg-8.order-1
            p En el sistema moda, el <em>marketing</em> digital permite promocionar colecciones mediante redes sociales, comercio electrónico, campañas de correo electrónico y posicionamiento en buscadores. Estas acciones facilitan la visibilidad de la marca y amplían el alcance del mercado sin necesidad de grandes inversiones en medios tradicionales, la capacidad de medición inmediata constituye una de sus principales ventajas estratégicas.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .bg-color-3.p-4.tarjeta
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/tema5/4.png").mx-auto
                .col-lg
                  p.mb-0  <b>Clave estratégica</b>: las empresas que adoptan estrategias de <em>marketing</em> digital logran mayor eficiencia en la captación de clientes y mejor comprensión de sus preferencias de consumo. 
    
    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Características
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/5.png", data-aos="zoom-in")
      .col-lg-8
        p El <em>marketing</em> digital se caracteriza por la interactividad, la medición en tiempo real, la segmentación avanzada y la automatización de procesos promocionales. La interactividad permite que los consumidores participen activamente mediante comentarios, reseñas y contenido generado por usuarios. 
        .row.align-items-center.bg-color-3.tarjeta.p-4
          .col-lg-auto.mb-3.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema5/9.svg").mx-auto
          .col-lg
            p.mb-0 La medición en tiempo real facilita evaluar el desempeño de campañas de manera inmediata, permitiendo ajustes estratégicos oportunos. Estas características hacen del <em>marketing</em> digital un sistema dinámico y adaptable.
    
    .bg-color-1.mb-5.tarjeta.p-4
      .row.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.order-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema5/6.svg").mx-auto
        .col-lg.order-1
          p.mb-0 Otra característica relevante es la personalización del mensaje, que permite adaptar contenidos según intereses, comportamientos y preferencias del consumidor, asimismo, la automatización optimiza procesos repetitivos como envíos de correos promocionales, respuestas automatizadas y segmentación de audiencias, estas capacidades mejoran la eficiencia operativa y reducen costos de <em>marketing</em>.
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Tipos de <em>marketing</em> digital y sus características
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th.bg-color-7 Tipo de <em>marketing</em> digital
                th.bg-color-7 Características principales
                th.bg-color-7 Canal o herramienta común
            tbody
              tr.bg-color-white
                td <b><em>marketing</em> de contenidos.</b>
                td Ofrece valor educativo o emocional antes de vender.
                td Blogs, infografías, videos, podcasts.
              tr.bg-color-8
                td <b><em>Email marketing.</em></b>
                td Comunicación directa, automatizada y personalizada.
                td Plataformas de mailing (mailchimp, etc.)
              tr.bg-color-white
                td <b>Publicidad programática.</b>
                td Compra automatizada de espacios publicitarios por subasta.
                td Google Ads, Meta Ads.
              tr.bg-color-8
                td <b>Social media <em>marketing</em>.</b>
                td Promueve la marca a través de redes sociales y comunidades.
                td Facebook, Instagram, LinkedIn.
              tr.bg-color-white
                td <b>SEO (optimización en buscadores).</b>
                td Mejora visibilidad orgánica en motores de búsqueda.
                td Google, Bing, herramientas SEO.
              tr.bg-color-8
                td <b>Influencer <em>marketing</em>.</b>
                td Utiliza líderes de opinión digitales para ganar credibilidad.
                td YouTube, Instagram, TikTok.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-5.col-xl-9.mb-3.mb-xl-0
        .row.justify-content-center.align-items-center.mb-3
          .col-md-8.col-lg-5.col-xl-6.mb-3.mb-xl-0
            figure
              img(src="@/assets/curso/tema5/7.png", data-aos="zoom-in")
          .col-lg-7.col-xl-6
            .bg-color-2.p-4.tarjeta 
              p.mb-0 Las empresas del sistema moda aprovechan las herramientas digitales y la analítica avanzada para diseñar campañas personalizadas en función de las tendencias de consumo y el comportamiento de compra, lo que les permite conectar con públicos específicos de manera más precisa y relevante.  
        .bg-color-sintesis.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema5/9.svg").mx-auto
            .col-lg
              p.mb-0 Gracias a la capacidad de analizar datos en tiempo real, pueden anticipar demandas del mercado, ajustar inventarios y estructurar estrategias comerciales más efectivas, reduciendo la improvisación y aumentando la probabilidad de conversión. 
      .col-md-8.col-lg-5.col-xl-3.mb-3.mb-xl-0
        figure
          img(src="@/assets/curso/tema5/8.png", data-aos="zoom-in")

    .bg-color-16.mb-5.tarjeta.p-4
      p.mb-0 Esta dinámica se ve impulsada por la innovación tecnológica, que transforma continuamente las posibilidades del <em>marketing</em> digital y exige una actualización permanente de capacidades. En consecuencia, la adaptación estratégica se convierte en un factor clave para fortalecer el posicionamiento competitivo. A su vez, la interacción continua con los clientes mejora la fidelización, consolidando una relación más cercana y duradera donde la experiencia del cliente se posiciona como prioridad estratégica central.
  
    separador
    
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Técnicas
    
    .bg-full-width.bg-fondo-2
      .px-4.px-lg-5
        img(src="@/assets/curso/tema5/10.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text Las técnicas de <em>marketing</em> digital corresponden a los métodos estratégicos utilizados para posicionar marcas, atraer audiencias y generar conversiones mediante medios digitales. Entre las principales técnicas se encuentran el posicionamiento en buscadores (SEO), la publicidad digital (SEM), el <em>marketing</em> de contenidos y el <em>marketing</em> en redes sociales. Cada técnica cumple funciones específicas dentro de la estrategia integral de comunicación empresarial.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Tecnícas de <em>marketing</em>

        .row.mb-5.align-items-center.justify-content-center
          .col-md-8.col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/11.png", data-aos="zoom-in")
          .col-lg-7
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-17")
              div(titulo="SEO (<em>Search Engine Optimization</em>)")
                p.ms-5 Se orienta a mejorar la visibilidad orgánica en buscadores mediante optimización de contenidos y estructura web.
              div(titulo="SEM (<em>Search Engine Marketing</em>)")
                p.ms-5 Utiliza publicidad paga para posicionar anuncios en resultados de búsqueda o plataformas digitales.
              div(titulo="<em>marketing</em> de contenidos")
                p.ms-5 Busca atraer audiencias mediante información relevante.
              div(titulo="<em>marketing</em> en redes sociales")
                p.ms-5 Fortalece la interacción y la construcción de comunidad.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3.mb-3.mb-lg-0.order-2
            figure
              img(src="@/assets/curso/tema5/12.png", data-aos="zoom-in")
          .col-lg-9.order-1
            p En el sistema moda, las empresas articulan contenido visual atractivo, campañas pagas en redes sociales y estrategias de posicionamiento en buscadores para ampliar el alcance de sus colecciones y captar audiencias segmentadas. Esta combinación coordinada de técnicas digitales no solo incrementa la visibilidad de marca, sino que impacta directamente en el rendimiento comercial al atraer tráfico calificado y estimular la conversión. Sin embargo, para que estas acciones generen resultados sostenibles, es indispensable una planificación estratégica que permita seleccionar la técnica más adecuada según los objetivos empresariales, el público meta y la etapa del ciclo de producto. A partir de ello, la medición constante de indicadores facilita la optimización continua de las campañas, ajustando presupuestos y mensajes según el desempeño observado.
            .bg-color-16.p-4.tarjeta
              p.mb-0 En este entorno dinámico, la innovación digital impulsa la aparición de nuevas técnicas promocionales, mientras que la creatividad se consolida como el elemento diferenciador que fortalece la competitividad y posiciona a la marca en un mercado altamente visual y cambiante.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .bg-color-3.p-4.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema5/4.png").mx-auto
            .col-lg
              p.mb-0  <b>Clave estratégica</b>. La integración de varias técnicas digitales genera mejores resultados que el uso aislado de una sola.
    
    separador
    
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Tipos de herramientas
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-5.col-xl-9.mb-3.mb-xl-0
        .row.justify-content-center.align-items-center.mb-3
          .col-md-8.col-lg-5.col-xl-6.mb-3.mb-xl-0
            figure
              img(src="@/assets/curso/tema5/13.png", data-aos="zoom-in")
          .col-lg-7.col-xl-6
            .bg-color-2.p-4.tarjeta 
              p.mb-0 Las herramientas de <em>marketing</em> digital corresponden a las plataformas tecnológicas utilizadas para planificar, ejecutar, automatizar y medir campañas promocionales en entornos digitales. Estas herramientas facilitan la gestión de contenidos, la segmentación de audiencias, el análisis de resultados y la administración de relaciones con clientes, su utilización permite optimizar la eficiencia operativa de las estrategias digitales empresariales. 
        .bg-color-sintesis.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema5/9.svg").mx-auto
            .col-lg
              p.mb-0 Entre los principales tipos de herramientas se encuentran las plataformas de gestión de redes sociales, herramientas de analítica digital, sistemas de automatización de <em>marketing</em> y plataformas de gestión de clientes (CRM). 
      .col-md-8.col-lg-5.col-xl-3.mb-3.mb-xl-0
        figure
          img(src="@/assets/curso/tema5/14.png", data-aos="zoom-in")
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Herramientas digitales y su aplicación en el sistema moda
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th.bg-color-7 Herramienta
                th.bg-color-7 Función
                th.bg-color-7 Ejemplo aplicado al sistema moda
            tbody
              tr.bg-color-white
                td <b>CRM (<em>Customer Relationship Management</em>).</b>
                td Gestión y segmentación de clientes, historial de compras y seguimiento de interacción.
                td Una marca de ropa registra qué clientes compraron la colección primavera y le envía un acceso anticipado exclusivo a la nueva colección verano, aumentando recompra y fidelización.
              tr.bg-color-8
                td <b>Analítica web.</b>
                td Medición de tráfico, comportamiento del usuario y tasas de conversión en el sitio web.
                td Una tienda online detecta que muchas visitas abandonan el carrito en el paso de pago y optimiza ese proceso, reduciendo fricciones y aumentando ventas.
              tr.bg-color-white
                td <b>Automatización de <em>marketing</em>.</b>
                td Programación y ejecución automática de campañas digitales según comportamiento del usuario.
                td Si un cliente visualiza varias veces una chaqueta sin comprarla, el sistema envía automáticamente un correo con descuento personalizado para incentivar la conversión.
              tr.bg-color-8
                td <b>Gestión de redes sociales.</b>
                td Programación, monitoreo y análisis de publicaciones en plataformas sociales.
                td Una marca programa el lanzamiento de su nueva colección con contenidos coordinados en Instagram, TikTok y Facebook, midiendo engagement y ajustando mensajes según interacción.
    
    .bg-color-16.p-4.tarjeta
      p.mb-0 Las empresas del sistema moda utilizan herramientas de analítica para evaluar el comportamiento de los consumidores, plataformas de automatización para enviar campañas segmentadas y sistemas CRM para fortalecer la fidelización, la integración tecnológica de herramientas mejora la eficiencia comercial y la toma de decisiones basada en datos.

    separador
    
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 Tipos de estrategias digitales
    
    .bg-full-width.bg-fondo-2
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/15.png", data-aos="zoom-in")
          .col-lg-8
            p Las estrategias digitales corresponden al conjunto de planes de acción diseñados para alcanzar objetivos comerciales mediante el uso de medios y plataformas digitales, estas estrategias se orientan a la generación de tráfico, posicionamiento de marca, captación de clientes potenciales y fidelización del consumidor. En el sistema moda, la correcta selección de estrategias digitales permite mejorar la visibilidad de colecciones, fortalecer la identidad de marca y aumentar las ventas en comercio electrónico, su implementación requiere análisis de audiencias, definición de objetivos y selección de canales adecuados.
            .bg-color-16.p-4.tarjeta
              p.mb-0 Entre los principales tipos de estrategias digitales se encuentran la estrategia de atracción (<em>inbound marketing</em>), la estrategia de conversión, la estrategia de fidelización y la estrategia de posicionamiento de marca. 

        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-8
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Figura 6.
              span Tipos de estrategias digitales
            img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema5/16.png", alt="la figura presenta los cuatro tipos de estrategias digitales.")
            img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema5/16-1.png", alt="la figura presenta los cuatro tipos de estrategias digitales.")
            figcaption Fuente: SENA, 2026
        
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-10(data-aos="fade-up")
            .tarjeta.color-primario.bg-color-10.p-3.mb-5
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2
                  img(src="@/assets/curso/tema5/28.png")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Aplicación de estrategias digitales
                      p.mb-0 Zara, marca del grupo Inditex, es uno de los referentes globales del sistema moda en integración de estrategias digitales con retail físico y comercio electrónico.
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/Aplicacion_de_estrategias_digitales_D2.pdf')" target="_blank")
                        span Descargar pdf
                        i.fas.fa-file-download
        
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/17.png", data-aos="zoom-in")
      .col-lg-6
        .bg-color-1.tarjeta.p-2
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema5/18.png").mx-auto
            .col-lg
              h5.mb-0 Pregunta de aplicación
              p.mb-0 ¿Qué estrategia digital se orienta principalmente a transformar visitantes en compradores?
    
    separador
    
    #t_5_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.6 Arquetipos digitales
    
    img(src="@/assets/curso/tema5/19.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text Los arquetipos digitales representan modelos de personalidad de marca utilizados para orientar la comunicación estratégica en entornos digitales, estos arquetipos permiten construir mensajes coherentes, fortalecer la identidad corporativa y facilitar la conexión emocional con los consumidores. En el sistema moda, la definición del arquetipo digital contribuye a diferenciar la marca en mercados altamente competitivos y saturados de información.
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10(data-aos="fade-up")
        .tarjeta.color-primario.bg-color-16.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-auto
              img(src="@/assets/curso/tema5/20.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Tipos de arquetipos
                  p.mb-0 Te invitamos a ver el siguiente video educativo, donde podrás profundizar en la temática. Este contenido de Edutin Academy explica los arquetipos publicitarios y cómo ayudan a crear historias coherentes que conectan emocionalmente con el público.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://youtu.be/tdEv-yO1Uvg?si=W4kmv5psirpUbjwd " target="_blank")
                    span Ir al video
                    i.fas.fa-file-download
    
    .row.justify-content-center.align-items-center.mb-3
      .col-md-8.col-lg-5.col-xl-9.mb-3.mb-xl-0
        .row.justify-content-center.align-items-center.mb-3
          .col-md-8.col-lg-5.col-xl-6.mb-3.mb-xl-0
            figure
              img(src="@/assets/curso/tema5/21.png", data-aos="zoom-in")
          .col-lg-7.col-xl-6
            .bg-color-2.p-4.tarjeta 
              p.mb-0 Las empresas del sector moda emplean modelos de arquetipos de marca para diseñar campañas coherentes en redes sociales, publicidad digital y contenido audiovisual, asegurando que cada mensaje refleje una personalidad definida y reconocible. 
        .bg-color-sintesis.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema5/9.svg").mx-auto
            .col-lg
              p.mb-0 Cuando el arquetipo se mantiene consistente en todos los puntos de contacto, se fortalece la recordación de marca y se facilita la fidelización del consumidor, ya que la audiencia identifica patrones emocionales y simbólicos claros. Esta coherencia narrativa mejora la conexión emocional, permitiendo que la marca trascienda la simple transacción comercial y construya vínculos más profundos. 
      .col-md-8.col-lg-5.col-xl-3.mb-3.mb-xl-0
        figure
          img(src="@/assets/curso/tema5/22.png", data-aos="zoom-in")
    
    .bg-color-18.mb-5.tarjeta.p-4
      p.mb-0 A su vez, una identidad clara simplifica el posicionamiento competitivo, porque delimita el territorio simbólico que la empresa ocupa en la mente del consumidor. En consecuencia, la diferenciación estratégica impulsa el reconocimiento de marca, siempre que la planificación comunicativa se alinee de manera rigurosa con el arquetipo seleccionado y se mantenga coherente en el tiempo.

    separador
    
    #t_5_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.7 Estrategia de marca
    
    .bg-full-width.bg-fondo-2
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3
            figure
              img(src="@/assets/curso/tema5/23.png", data-aos="zoom-in")
          .col-lg-8
            p La estrategia de marca corresponde al conjunto de decisiones orientadas a construir una identidad diferenciada, reconocible y coherente en el mercado. En entornos digitales, esta estrategia se manifiesta mediante el diseño visual, el tono comunicativo, la propuesta de valor y la experiencia del cliente en todos los canales digitales. En el sistema moda, la estrategia de marca determina la percepción del consumidor frente a las colecciones y la propuesta estética de la empresa.
            .bg-color-10.px-5.py-4.tarjeta
              p.mb-0 Una estrategia de marca digital incluye elementos como branding visual, storytelling, coherencia de contenidos y posicionamiento en plataformas digitales. El branding visual define la identidad gráfica; el <em>storytelling</em> construye narrativas que conectan emocionalmente con el consumidor; la coherencia de contenidos asegura uniformidad comunicativa; y el posicionamiento digital fortalece la visibilidad de la marca. Estos componentes permiten consolidar una identidad corporativa sólida.
    
        .row.justify-content-center
          .col-lg-12
            .titulo-sexto.color-acento-contenido
              h5 Tabla 8.
              span Estrategias de marca digital aplicadas al sistema moda
            .tabla-a.color-secundario.mb-5.tbl
              table
                caption Nota. SENA, (2026).
                thead
                  tr
                    th.bg-color-7 Estrategia
                    th.bg-color-7 Definición
                    th.bg-color-7 Ejemplo aplicado al sistema moda
                    th.bg-color-7 Impacto estratégico
                tbody
                  tr.bg-color-white
                    td <b>Branding visual.</b>
                    td Define la identidad gráfica de la marca (logo, colores, tipografía, estilo fotográfico).
                    td Una marca de moda sostenible utiliza tonos tierra, fotografías en entornos naturales y empaques ecológicos coherentes en web y redes sociales.
                    td Genera reconocimiento inmediato y refuerza la identidad corporativa.
                  tr.bg-color-8
                    td <b><em>Storytelling.</em></b>
                    td Construcción de narrativas que conectan emocionalmente con el consumidor.
                    td Una marca urbana comparte historias reales de sus diseñadores y procesos creativos en <em>reels</em> y videos, mostrando autenticidad.
                    td Fortalece vínculo emocional y aumenta la conexión con el público objetivo.
                  tr.bg-color-white
                    td <b>Coherencia de contenidos.</b>
                    td Uniformidad en tono, mensaje y estilo comunicativo en todos los canales digitales.
                    td Una marca elegante mantiene lenguaje sofisticado y estética minimalista tanto en Instagram como en su tienda online y campañas publicitarias.
                    td Consolida credibilidad, profesionalismo y consistencia comunicativa.
                  tr.bg-color-8
                    td <b>Posicionamiento digital.</b>
                    td Estrategias para aumentar visibilidad en buscadores y plataformas digitales.
                    td Optimización SEO para búsquedas como “vestidos de fiesta”, campañas segmentadas en redes y colaboración con micro <em>influencers</em> locales.
                    td Incrementa tráfico cualificado, visibilidad de marca y ventas en comercio electrónico.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            .bg-color-1.p-3.tarjeta
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/tema5/24.png").mx-auto
                .col-lg
                  p.mb-0  <b>Clave estratégica</b>. La coherencia visual y narrativa fortalece la recordación de marca en entornos digitales.
    
    separador
    
    #t_5_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.8 Técnicas publicitarias
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/25.png", data-aos="zoom-in")
      .col-lg-8
        p Las técnicas publicitarias digitales comprenden los métodos utilizados para promocionar productos o servicios mediante anuncios en plataformas digitales, estas técnicas incluyen publicidad en buscadores, publicidad en redes sociales, <em>remarketing</em> y publicidad programática, su finalidad es incrementar la visibilidad de la marca, atraer clientes potenciales y estimular la conversión comercial.

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 9.
          span Técnicas publicitarias digitales aplicadas al sistema moda
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th.bg-color-7 Estrategia
                th.bg-color-7 Definición
                th.bg-color-7 Ejemplo aplicado al sistema moda
                th.bg-color-7 Impacto estratégico
            tbody
              tr.bg-color-white
                td <b>Publicidad en buscadores (SEM).</b>
                td Posiciona anuncios pagados según palabras clave ingresadas por los usuarios en motores de búsqueda.
                td Una marca de ropa deportiva invierte en Google Ads para aparecer cuando alguien busca “leggings deportivos mujer” o “ropa fitness Bogotá”.
                td Atrae tráfico con alta intención de compra y aumenta conversiones directas.
              tr.bg-color-8
                td <b>Publicidad en redes sociales.</b>
                td Permite segmentar audiencias específicas según edad, intereses, ubicación y comportamiento digital.
                td Una marca de moda femenina segmenta anuncios en Instagram a mujeres entre 20 y 35 años interesadas en tendencias y compras online.
                td Incrementa alcance cualificado y mejora la eficiencia del presupuesto publicitario.
              tr.bg-color-white
                td <b><em>Remarketing.</em></b>
                td Impacta nuevamente a usuarios que ya interactuaron con la marca, pero no finalizaron compra.
                td Un usuario visita una tienda online de chaquetas y luego ve anuncios del mismo producto con descuento mientras navega en otras páginas o redes sociales.
                td Recupera carritos abandonados y mejora la tasa de conversión.
              tr.bg-color-8
                td <b>Publicidad programática.</b>
                td Automatiza la compra de espacios publicitarios digitales mediante algoritmos y datos de comportamiento.
                td Una marca internacional de moda lanza una campaña automatizada que muestra anuncios personalizados según historial de navegación y perfil del usuario.
                td Optimiza inversión publicitaria en tiempo real y aumenta precisión en segmentación.
    
    .row.justify-content-center.align-items-center.mb-3
      .col-md-8.col-lg-5.col-xl-9.mb-3.mb-xl-0
        .row.justify-content-center.align-items-center.mb-3
          .col-md-8.col-lg-5.col-xl-6.mb-3.mb-xl-0
            figure
              img(src="@/assets/curso/tema5/26.png", data-aos="zoom-in")
          .col-lg-7.col-xl-6
            .bg-color-2.p-4.tarjeta 
              p.mb-0 Las empresas del sistema moda utilizan estas técnicas publicitarias para promocionar colecciones, lanzamientos y campañas estacionales con mayor precisión en la inversión, ya que la segmentación avanzada permite dirigir los mensajes a audiencias específicas según intereses, comportamiento y etapa del proceso de compra. 
        .bg-color-sintesis.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema5/9.svg").mx-auto
            .col-lg
              p.mb-0 Como consecuencia, se mejora el retorno de inversión al reducir la dispersión del presupuesto y concentrarlo en públicos con mayor probabilidad de conversión. A su vez, la medición constante de resultados facilita la optimización de campañas en tiempo real, ajustando creatividades, segmentaciones o presupuestos según el desempeño observado.  
      .col-md-8.col-lg-5.col-xl-3.mb-3.mb-xl-0
        figure
          img(src="@/assets/curso/tema5/27.png", data-aos="zoom-in")
    
    .bg-color-18.mb-5.tarjeta.p-4
      p.mb-0 En este entorno dinámico, la creatividad publicitaria se convierte en un factor clave para fortalecer la diferenciación, mientras que la innovación tecnológica amplía las oportunidades promocionales mediante nuevos formatos y automatizaciones. No obstante, para que estos elementos generen impacto sostenible, la planificación estratégica debe garantizar coherencia comunicativa en todos los canales digitales.

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
