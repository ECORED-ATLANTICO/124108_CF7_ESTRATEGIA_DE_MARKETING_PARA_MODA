<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Mercadeo
    
    img(src="@/assets/curso/tema1/13.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        .banner-text 
          p El mercadeo constituye el eje estructural de toda estrategia digital en el sistema moda, no se limita a la promoción, sino que integra análisis, planeación, segmentación y creación de valor sostenible. 
          p.mb-0 En el entorno digital actual, el mercadeo adquiere una dimensión relacional y experiencial, las marcas de moda compiten por relevancia simbólica y posicionamiento emocional. Comprender el mercado implica analizar consumidores, competidores y tendencias culturales. 

    p.mb-5 Este capítulo desarrolla los fundamentos estratégicos del mercadeo con enfoque aplicado, se integran herramientas clásicas y digitales, el propósito es formar criterio estratégico sólido.

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-0 El mercadeo se define como el proceso social y administrativo mediante el cual individuos y organizaciones crean e intercambian valor (Kotler & Keller, 2016). Implica identificar necesidades, diseñar ofertas y comunicar propuestas diferenciales, integra investigación, estrategia y experiencia, además no se reduce a vender, sino a construir relaciones. En el sistema moda, el valor es funcional y simbólico, las marcas compiten en percepción y estilo de vida, su enfoque actual es centrado en el cliente. 
    
    .bg-color-1.mb-5.tarjeta.p-4
      .row.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.order-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema1/2.svg").mx-auto
        .col-lg.order-1
          p.mb-0 <b>Ejemplo aplicado</b>. En empresas como Zara, el mercadeo se articula con análisis de tendencias y respuesta rápida al consumidor, la información de ventas retroalimenta el diseño de producto, así el consumidor participa indirectamente en la creación de la oferta; este enfoque evidencia la transición hacia un mercadeo dinámico. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-8
        .row.align-items-center.bg-color-4.tarjeta.p-4
          .col-lg-auto.mb-3.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema1/4.svg").mx-auto
          .col-lg
            p.mb-0 El mercadeo integra investigación cualitativa y cuantitativa, esto permite anticipar comportamientos y tendencias, aunado a la digitalización, se amplifica la disponibilidad de datos. En moda, las emociones influyen en la decisión de compra, por ello, el mercadeo combina racionalidad y narrativa simbólica, su comprensión integral fortalece la competitividad empresarial.
    
    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Tipos de estrategias
    
    .bg-full-width.bg-fondo-2
      .px-4.px-lg-5
        .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/5.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las estrategias de mercadeo pueden clasificarse en tres tipos asi: crecimiento, competitivas y de posicionamiento; en moda, la diferenciación suele basarse en diseño y marca, la elección estratégica depende del contexto competitivo, donde la coherencia estratégica es determinante.

        .row.mb-5.justify-content-center
          .col-md-6.col-xl-4.mb-4.mb-xl-0
            //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta-numerada.color-secundario.p-5
              .tarjeta-numerada__numero
                .h2 1
              p.text-center 
                b Crecimiento 
              p.text-center Incluyen penetración, desarrollo de mercado y diversificación.

          .col-md-6.col-xl-4.mb-4.mb-xl-0
            //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta-numerada.color-acento-contenido.p-5
              .tarjeta-numerada__numero
                .h2 2
              p.text-center 
                b Competitivas 
              p.text-center Se orientan a liderazgo en costos o diferenciación.

          .col-md-6.col-xl-4.mb-4.mb-xl-0
            //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta-numerada.color-primario.p-5
              .tarjeta-numerada__numero
                .h2 3
              p.text-center 
                b Posicionamiento
              p.text-center Buscan ocupar un lugar claro en la mente del consumidor.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .bg-color-6.p-4.tarjeta
              .row.align-items-center
                .col-lg-auto.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/tema1/6.svg").mx-auto
                .col-lg
                  p.mb-0 <b>Ejemplo aplicado</b>. Nike aplica diferenciación basada en innovación y propósito, en contraste, marcas <em>fast fashion</em> aplican penetración de mercado mediante precios accesibles. En Colombia, Tennis combina posicionamiento juvenil con identidad nacional. 
        
        .row.mb-5.justify-content-center.align-items-center
          .col-md-8.col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in")
          .col-lg-9
            p.mb-3(data-aos="fade-right") Cada estrategia implica decisiones en producto, precio y comunicación, no existe una estrategia universal, su selección requiere análisis interno y externo, al tener en cuenta el entorno digital, se debe pensar que esto amplifica la competencia y la posibilidad de una mayor penetración en el mercado, ya que las estrategias digitales permiten microsegmentación precisa, sin embargo, esta penetración exige claridad conceptual, ya que una estrategia mal definida genera dispersión de recursos. El aprendiz debe evaluar capacidades empresariales. La estrategia es dirección, no improvisación.
        
            .row.justify-content-center.align-items-center
              .col-lg-10.mb-3
                .bg-color-6.p-4.tarjeta
                  .row.align-items-center
                    .col-lg-auto.mb-lg-0
                      img.d-none.d-lg-flex(src="@/assets/curso/tema1/8.png").mx-auto
                    .col-lg
                      p.mb-0  <b><em>Insight</em></b>. La estrategia define el rumbo; la táctica ejecuta el camino.
    
    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Consumidores
    
    .row.justify-content-center.align-items-center.mb-3
      .col-xl-9.mb-3.mb-xl-0
        .row.justify-content-center.align-items-center
          .col-md-8.col-lg-5.col-xl-6.mb-3.mb-xl-0
            figure
              img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in")
          .col-lg-7.col-xl-6.mb-3
            .bg-color-2.p-4.tarjeta 
              p.mb-0 El consumidor es el eje del mercadeo contemporáneo, especialmente en el sistema moda donde la identidad simbólica influye en la decisión de compra. El análisis del consumidor permite identificar motivaciones, comportamientos y preferencias, conllevando a definir las personalidades de compra o <em>buyer</em> personas, los cuales representan perfiles semificticios basados en datos reales. Estos perfiles integran variables demográficas, psicográficas y digitales, comprenderlos facilita diseñar mensajes relevantes, con segmentos bien definidos, lo que permite optimizar recursos publicitarios. 
          
          .bg-color-sintesis.tarjeta.p-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img.d-none.d-lg-flex(src="@/assets/curso/tema1/11.svg").mx-auto
              .col-lg
                p.mb-0 En el entorno digital, la trazabilidad de datos fortalece el análisis conductual, lo que ayuda a una personalización de los posibles clientes, para sacar una ventaja competitiva.
        
      .col-md-8.col-lg-4.col-xl-3.mb-3.mb-xl-0
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")
    
    
    
    .bg-color-1.mb-5.tarjeta.p-4
      .row.justify-content-center.align-items-center
        .col-md-6.col-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema1/12.png", data-aos="zoom-in")
        .col-lg-8
          p.mb-0(data-aos="fade-right") <b>Ejemplo aplicado</b>. Empresas como Adidas utilizan analítica de comportamiento para personalizar experiencias en sus tiendas virtuales, las recomendaciones automáticas se basan en historial de navegación y compra. En el sector moda colombiano, marcas emergentes segmentan sus audiencias mediante Instagram <em>Insights</em>, esto permite adaptar contenido visual según intereses del público. 

    .bg-full-width.bg-fondo-2
      .px-4.px-lg-5
        img(src="@/assets/curso/tema1/13.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text El análisis del consumidor no se limita a identificar necesidades actuales, sino que también implica monitorear los cambios socioculturales que influyen en sus decisiones. Tendencias como la sostenibilidad, la inclusión y el consumo consciente están transformando los hábitos de compra, obligando a las marcas a adaptar continuamente sus propuestas de valor. Además, el consumidor actual investiga antes de comprar, compara opciones y evalúa la reputación digital de las empresas, la cual influye directamente en su decisión final. 
        

        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 1.
              span Tipos de consumidor
            .tabla-a.color-secundario.mb-5.tbl
              table
                caption Nota. SENA, (2026).
                thead
                  tr
                    th.bg-color-7 Tipo de consumidor
                    th.bg-color-7 Características
                    th.bg-color-7 Aplicación estratégica en el sistema moda
                tbody
                  tr.bg-color-white
                    td <b>Aspiracional</b>
                    td Busca estatus simbólico y reconocimiento social. Se deja influenciar por tendencias, celebridades e <em>influencers</em>. Valora la exclusividad, el diseño diferencial y la identidad de marca. Está dispuesto a pagar más por percepción de prestigio. Alta sensibilidad a la imagen y reputación digital.
                    td Moda <em>premium</em>, colecciones limitadas, colaboraciones con diseñadores o figuras públicas, <em>storytelling</em> de marca, campañas visuales de alto impacto y presencia fuerte en redes sociales aspiracionales.
                  tr.bg-color-8
                    td <b>Funcional</b>
                    td Prioriza utilidad, comodidad y durabilidad. Evalúa la relación costo beneficio. Toma decisiones racionales basadas en calidad y practicidad. Busca soluciones específicas a necesidades concretas. Menor influencia de tendencias pasajeras.
                    td Ropa laboral, uniformes, prendas básicas, líneas versátiles. Comunicación enfocada en beneficios tangibles, resistencia del material, garantía y funcionalidad del producto.
                  tr.bg-color-white
                    td <b>Consciente</b>
                    td Valora sostenibilidad, ética empresarial y transparencia. Investiga procesos productivos y origen de materiales. Prefiere marcas con responsabilidad social y ambiental. Se inclina por consumo responsable y compra reflexiva.
                    td Moda ecológica, <em>slow fashion</em>, materiales reciclados u orgánicos. Comunicación basada en impacto ambiental positivo, certificaciones, trazabilidad y narrativa de propósito social.
    
    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Análisis de competidores
    
    .row.mb-3.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/14.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-0(data-aos="fade-right") El análisis de competidores permite identificar fortalezas, debilidades y estrategias presentes en el entorno empresarial, constituyéndose en una herramienta fundamental para la toma de decisiones estratégicas. Este proceso incluye prácticas como el <em>benchmarking</em>, el monitoreo de precios y la evaluación del posicionamiento de marca, lo que facilita una comprensión estructurada del mercado. Al entender cómo actúan los competidores, las organizaciones pueden detectar oportunidades reales de diferenciación y evitar decisiones basadas en suposiciones. 
    
    .row.justify-content-center.align-items-center.mb-3
      .col-md-8.col-lg-3.mb-3.order-2
        figure
          img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
      .col-lg-9.order-1.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/11.svg").mx-auto
            .col-lg
              p.mb-0 En el sistema moda, donde las tendencias se replican con rapidez y la innovación se convierte en un factor crítico de competitividad, el análisis de la competencia no puede realizarse de manera ocasional, sino que debe asumirse como un proceso permanente y sistemático. La velocidad del mercado exige monitoreo continuo de lanzamientos, precios, campañas y posicionamiento digital. 
    
    .bg-color-9.tarjeta.p-4.mb-5
      p.mb-0 En este contexto, las herramientas tecnológicas permiten realizar seguimiento en tiempo real, recopilar datos relevantes y transformar información dispersa en inteligencia competitiva accionable. Sin embargo, el propósito de este análisis no es imitar prácticas ajenas, sino comprender dinámicas del mercado, identificar vacíos estratégicos y diseñar propuestas de valor diferenciadas que generen ventajas sostenibles en el tiempo.
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-8
        h4.d-inline-block.bg-color-10.p-3.tarjeta Elementos del análisis de competidores
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-7.col-xl-5.mb-3.mb-lg-0.order-2
        .tarjeta-avatar-b.align-items-center.mb-3.position-relative(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/01.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-2
              p.mb-0.me-5 <b><em>Benchmarking</em></b>: comparación estratégica. Mejora procesos.
          img.position-absolute.pst-1(src='@/assets/curso/tema1/17.svg', style="max-width: 101px" alt='')

        .tarjeta-avatar-b.align-items-center.mb-3.position-relative(data-aos="fade-down")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/02.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-2
              p.mb-0.me-5 <b>Monitoreo digital</b>: seguimiento <em>online</em>, útil para detectar tendencias.
          img.position-absolute.pst-1(src='@/assets/curso/tema1/18.svg', style="max-width: 101px" alt='')

        .tarjeta-avatar-b.align-items-center.mb-3.position-relative(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/03.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-2
              p.mb-0.me-5 <b>Participación</b>: cuota de mercado. Útil para evaluar competitividad.
          img.position-absolute.pst-1(src='@/assets/curso/tema1/19.svg', style="max-width: 101px" alt='')
      .col-md-8.col-lg-5.col-xl-3.mb-3.mb-xl-0.order-1
        figure
          img(src="@/assets/curso/tema1/16.png", data-aos="zoom-in")
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .bg-color-11.p-4.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/20.png").mx-auto
            .col-lg
              h5.mb-0 Pregunta de aplicación
              p.mb-0  ¿Qué indicadores analizaría para comparar la presencia digital de dos marcas de moda?
    
    separador
    
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Mezcla de mercadeo
    
    .bg-full-width.bg-fondo-2
      .px-4.px-lg-5
        .bg-full-width.bg-fondo-2
          .px-4.px-lg-5
            .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/tema1/21.png')})`}"
              )
              .bloque-texto-g__texto.p-4
                p.mb-0 La mezcla de mercadeo o <em>marketing mix</em> corresponde al conjunto de herramientas tácticas que las empresas utilizan para influir en la demanda del mercado, conocidas como las 4P: producto, precio, plaza y promoción; cada elemento cumple una función estratégica en la generación de valor para el cliente y en el posicionamiento competitivo de la organización. En el sistema moda, el producto incluye diseño, calidad y simbolismo, el precio comunica posicionamiento, la plaza se relaciona con canales físicos y digitales, y la promoción integra comunicación estratégica.

        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-12
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Figura 1.
              span Elementos de la mezcla de <em>marketing</em>
            img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema1/22.png", alt="La figura muestra la mezcla de marketing o 4P, integrada por cuatro elementos principales: Producto, relacionado con la oferta al consumidor; Precio, que define el valor económico; Plaza, enfocada en los canales de distribución; y Promoción, encargada de informar y persuadir al consumidor. Todos estos componentes se integran para apoyar las estrategias comerciales de la empresa.")
            img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema1/22-1.png", alt="La figura muestra la mezcla de marketing o 4P, integrada por cuatro elementos principales: Producto, relacionado con la oferta al consumidor; Precio, que define el valor económico; Plaza, enfocada en los canales de distribución; y Promoción, encargada de informar y persuadir al consumidor. Todos estos componentes se integran para apoyar las estrategias comerciales de la empresa.")
            figcaption Nota. SENA, (2026).

    .bg-color-1.mb-5.tarjeta.p-4
      .row.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema1/23.svg").mx-auto
        .col-lg
          p.mb-0 <b>Clave estratégica</b>.  La correcta combinación de las 4P permite a las organizaciones responder de manera eficiente a los cambios del mercado y a las expectativas de los consumidores. Las empresas que ajustan constantemente su mezcla de <em>marketing</em> logran mayor adaptación competitiva.
    
    separador
    
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.6 <em>Marketing</em> digital

    img(src="@/assets/curso/tema1/24.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text El <em>marketing</em> digital se refiere al conjunto de estrategias y acciones comerciales que utilizan plataformas digitales y tecnologías de la información para promover productos, servicios o experiencias; este enfoque trasciende el objetivo tradicional de venta, ya que se basa en crear relaciones interactivas y medibles entre la marca y el consumidor, aprovechando medios como redes sociales, motores de búsqueda, sitios web, correo electrónico y publicidad en línea; esta información será ampliada en el capítulo cinco (5), del presente componente formativo, se trabajará de forma ampliada esta temática. 
    
    separador
    
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.7 <em>Email marketing</em>
    
    .row.justify-content-center.align-items-center.mb-3
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/25.png", data-aos="zoom-in")
      .col-lg-9
        .bg-color-12.p-4.tarjeta.mb-3
          p.mb-0 El <em>email marketing</em> es una estrategia de comunicación directa que utiliza el correo electrónico para enviar mensajes a audiencias previamente segmentadas, con el propósito de establecer y mantener una relación constante con clientes actuales y potenciales. Su efectividad radica en características como la personalización del contenido, la automatización de envíos y la posibilidad de medir resultados a través de indicadores como tasa de apertura y conversión. 
        p En el sistema moda, esta herramienta se emplea estratégicamente para anunciar lanzamientos de colecciones, promociones exclusivas y novedades de temporada. No obstante, su implementación exige que las bases de datos se obtengan con consentimiento previo, garantizando el cumplimiento de la normativa de protección de datos. En este contexto, la relevancia del mensaje y un diseño visual atractivo se convierten en factores determinantes para captar la atención y maximizar la efectividad de la campaña.

        .row.justify-content-center.align-items-center
          .col-lg-12.mb-3
            .bg-color-1.p-3.tarjeta
              .row.align-items-center
                .col-lg-auto.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/tema1/8.png").mx-auto
                .col-lg
                  p.mb-0  <b><em>Insight</em></b>. El valor del correo está en la relevancia del contenido.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-3.order-2
        figure
          img(src="@/assets/curso/tema1/26.png", data-aos="zoom-in")
      .col-lg-9.order-1
        .bg-color-9.p-5.tarjeta
          p.mb-0 El <em>email marketing</em> funciona mejor cuando se concibe como una herramienta relacional y no únicamente promocional, fortaleciendo vínculos a largo plazo. En un entorno donde la saturación de mensajes es constante, la creatividad y la segmentación se vuelven indispensables para evitar comunicaciones irrelevantes. Asimismo, la automatización mejora la eficiencia operativa y permite escalar procesos. Implementado estratégicamente, el <em>email marketing</em> contribuye a consolidar ventas recurrentes y fidelización sostenible.

    separador
    
    #t_1_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.8 Estrategia digital

    .bg-full-width.bg-fondo-2
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3
            figure
              img(src="@/assets/curso/tema1/27.png", data-aos="zoom-in")
          .col-lg-8
            p La estrategia digital es el plan integral que orienta la presencia de la marca en entornos digitales, estableciendo con claridad objetivos, audiencias, canales y métricas de evaluación. Su enfoque es sistémico y no meramente táctico, ya que articula planificación de contenidos, publicidad y analítica bajo una misma dirección estratégica. 
            .bg-color-9.p-4.tarjeta
              p.mb-0 La coherencia entre lo que la empresa se propone alcanzar y las acciones que ejecuta determina el éxito de la gestión digital. En el sistema moda, esta estrategia permite conectar el <em>storytelling</em> de marca con procesos de conversión efectivos, integrando creatividad y datos para generar impacto comercial sostenible.

        .bg-color-1.mb-5.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/28.png").mx-auto
            .col-lg
              p.mb-0 <b>Ejemplo aplicado</b>. En la práctica, las empresas globales estructuran calendarios editoriales alineados con temporadas comerciales y fechas clave del mercado, garantizando coherencia entre comunicación y ciclos de consumo. Siguiendo esta lógica, en el sector moda colombiano las campañas digitales se planifican de acuerdo con los lanzamientos de colecciones, anticipando tendencias y momentos de mayor demanda. Esta planificación no opera de manera aislada, sino que integra redes sociales, plataformas de comercio electrónico y pauta digital para asegurar alcance, conversión y posicionamiento. Una vez ejecutada la estrategia, el análisis de resultados permite evaluar el desempeño de cada canal y realizar ajustes constantes. De esta manera, la gestión digital se convierte en un proceso dinámico de mejora continua, orientado a maximizar impacto comercial y competitividad.

        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.bg-color-13.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/29.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La estrategia digital incorpora la definición de indicadores clave de desempeño que permiten medir resultados y orientar decisiones. Métricas como alcance, <em>engagement</em> y conversión facilitan la evaluación objetiva del desempeño, mientras que la segmentación de audiencias posibilita la personalización de mensajes y ofertas. Dado que la innovación tecnológica genera constantemente nuevas oportunidades, las empresas deben revisar periódicamente su estrategia para adaptarse a un entorno digital cambiante. En este contexto, la flexibilidad estratégica y la planificación estructurada se convierten en factores determinantes para mejorar resultados comerciales.

        separador
        
        #t_1_9.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.9 Mercadeo de moda
        
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3
        figure
          img(src="@/assets/curso/tema1/30.png", data-aos="zoom-in")
      .col-lg-8
        p El mercadeo de moda integra el análisis de tendencias, el diseño de producto y la comunicación simbólica como elementos interdependientes de una misma estrategia. A diferencia de otros sectores, la moda no solo responde a necesidades funcionales, sino que se vincula profundamente con la identidad cultural y la expresión personal del consumidor. 
        .bg-color-1.mb-5.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Por esta razón, las estrategias deben considerar tanto los ciclos de temporada como el comportamiento aspiracional que caracteriza al mercado. En este contexto, la imagen de marca se convierte en un factor determinante para construir posicionamiento y reconocimiento.
    
    img(src="@/assets/curso/tema1/31.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text El mercadeo de moda también implica una gestión integral de la experiencia de marca, ya que la forma en que se presenta el producto, tanto en tiendas físicas como en entornos digitales, influye directamente en la percepción y valoración del consumidor. 

    .bg-full-width.bg-fondo-2
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-md-8.col-lg-6.col-xl-4.mb-3.mb-xl-0
            figure
              img(src="@/assets/curso/tema1/32.png", data-aos="zoom-in")
          .col-lg-6.col-xl-5
            .bg-color-2.p-4.tarjeta 
              p.mb-0 Por ello, las campañas deben reflejar con coherencia la identidad conceptual de cada colección, asegurando consistencia entre diseño, comunicación y ambientación. La innovación tecnológica, a través de experiencias inmersivas y recursos interactivos, amplía las posibilidades de conexión emocional. Dado que el consumidor de moda busca significado y no solo funcionalidad, el <em>marketing</em> asume un enfoque estratégico y cultural, traduciendo tendencias en propuestas comerciales con valor simbólico.
          .col-md-8.col-lg-5.col-xl-3.mb-3.mb-xl-0
            figure
              img(src="@/assets/curso/tema1/33.png", data-aos="zoom-in")

        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 2.
              span Elementos estratégicos del mercadeo de moda y su aplicación
            .tabla-a.color-secundario.mb-5.tbl
              table
                caption Nota. SENA, (2026).
                thead
                  tr
                    th.bg-color-7 Elemento
                    th.bg-color-7 Características
                    th.bg-color-7 Aplicación en el sistema moda
                tbody
                  tr.bg-color-white
                    td <b>Tendencias</b>
                    td Reflejan cambios culturales, sociales y estéticos que influyen en el comportamiento del consumidor. Se nutren de contextos globales, movimientos sociales, innovación textil y dinámicas digitales. Son cíclicas y evolucionan rápidamente.
                    td Diseño y desarrollo de colecciones alineadas con temporadas, adaptación de paletas de color, siluetas y materiales. Planeación anticipada de lanzamientos según calendario comercial y análisis de <em>forecasting</em>.
                  tr.bg-color-8
                    td <b>Imagen de marca</b>
                    td Conjunto de elementos visuales y simbólicos que construyen identidad y posicionamiento. Incluye logotipo, tono comunicativo, narrativa conceptual y coherencia estética. Determina percepción y diferenciación en el mercado.
                    td Desarrollo de campañas publicitarias coherentes con la identidad de la colección, construcción de <em>storytelling</em> visual en redes sociales, diseño de piezas gráficas y lineamientos de <em>branding</em> en entornos físicos y digitales.
                  tr.bg-color-white
                    td <b>Experiencia</b>
                    td Interacción integral del cliente con la marca en todos los puntos de contacto. Incluye percepción sensorial, navegación digital, atención al cliente y servicio postventa. Influye en fidelización y recomendación.
                    td Diseño de tiendas digitales intuitivas, visual <em>merchandising</em> en puntos físicos, implementación de tecnologías inmersivas, atención personalizada y estrategias omnicanal que integren compra, entrega y servicio.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            .bg-color-1.p-4.tarjeta
              .row.align-items-center
                .col-lg-auto.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/tema1/34.svg").mx-auto
                .col-lg
                  h5.mb-0 Cita de reflexión
                  p.mb-0  “La verdadera estrategia comienza cuando la integridad guía cada decisión empresarial.”
  
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
