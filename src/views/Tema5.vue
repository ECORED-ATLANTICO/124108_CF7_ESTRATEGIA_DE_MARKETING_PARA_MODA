<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Marketing digital
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/1.png", data-aos="zoom-in")
          .col-lg-8
            p El marketing digital constituye el conjunto de estrategias, herramientas y procesos orientados a promocionar productos, servicios y marcas mediante canales digitales interconectados. En el sistema moda, su relevancia se ha incrementado debido al cambio en los hábitos de consumo, donde los clientes investigan, comparan y compran a través de internet antes de tomar decisiones de compra.
            .bg-color-16.p-4.tarjeta
              p.mb-0 El capítulo aborda el concepto, características, técnicas y herramientas del marketing digital, analizando su aplicación práctica en el sistema moda mediante casos empresariales, tablas conceptuales y preguntas de aplicación. El desarrollo busca fortalecer la comprensión estratégica del aprendiz frente al uso de tecnologías digitales en procesos comerciales, posicionamiento de marca y fidelización de clientes.

        separador
        
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 5.1 Concepto
        
        .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El marketing digital se define como el conjunto de estrategias promocionales desarrolladas mediante plataformas digitales con el propósito de atraer, convertir y fidelizar clientes. A diferencia del marketing tradicional, se fundamenta en el uso de datos en tiempo real que permiten segmentar audiencias, personalizar mensajes y evaluar el desempeño de las campañas de manera continua, este enfoque convierte la comunicación empresarial en un proceso interactivo orientado a la experiencia del usuario.
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-2
            figure
              img(src="@/assets/curso/tema5/3.png", data-aos="zoom-in")
          .col-lg-8.order-1
            p En el sistema moda, el marketing digital permite promocionar colecciones mediante redes sociales, comercio electrónico, campañas de correo electrónico y posicionamiento en buscadores. Estas acciones facilitan la visibilidad de la marca y amplían el alcance del mercado sin necesidad de grandes inversiones en medios tradicionales, la capacidad de medición inmediata constituye una de sus principales ventajas estratégicas.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .bg-color-3.p-4.tarjeta
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/tema5/4.png").mx-auto
                .col-lg
                  p.mb-0  <b>Clave estratégica</b>: las empresas que adoptan estrategias de marketing digital logran mayor eficiencia en la captación de clientes y mejor comprensión de sus preferencias de consumo. 
    
    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Características
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/5.png", data-aos="zoom-in")
      .col-lg-8
        p El marketing digital se caracteriza por la interactividad, la medición en tiempo real, la segmentación avanzada y la automatización de procesos promocionales. La interactividad permite que los consumidores participen activamente mediante comentarios, reseñas y contenido generado por usuarios. 
        .row.align-items-center.bg-color-3.tarjeta.p-4
          .col-lg-auto.mb-3.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema5/9.svg").mx-auto
          .col-lg
            p.mb-0 La medición en tiempo real facilita evaluar el desempeño de campañas de manera inmediata, permitiendo ajustes estratégicos oportunos. Estas características hacen del marketing digital un sistema dinámico y adaptable.
    
    .bg-color-1.mb-5.tarjeta.p-4
      .row.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.order-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema5/6.svg").mx-auto
        .col-lg.order-1
          p.mb-0 Otra característica relevante es la personalización del mensaje, que permite adaptar contenidos según intereses, comportamientos y preferencias del consumidor, asimismo, la automatización optimiza procesos repetitivos como envíos de correos promocionales, respuestas automatizadas y segmentación de audiencias, estas capacidades mejoran la eficiencia operativa y reducen costos de marketing.
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Tipos de marketing digital y sus características
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th.bg-color-7 Tipo de marketing digital
                th.bg-color-7 Características principales
                th.bg-color-7 Canal o herramienta común
            tbody
              tr.bg-color-white
                td <b>Marketing de contenidos.</b>
                td Ofrece valor educativo o emocional antes de vender.
                td Blogs, infografías, videos, podcasts.
              tr.bg-color-8
                td <b>Email marketing.</b>
                td Comunicación directa, automatizada y personalizada.
                td Plataformas de mailing (mailchimp, etc.)
              tr.bg-color-white
                td <b>Publicidad programática.</b>
                td Compra automatizada de espacios publicitarios por subasta.
                td Google Ads, Meta Ads.
              tr.bg-color-8
                td <b>Social media marketing.</b>
                td Promueve la marca a través de redes sociales y comunidades.
                td Facebook, Instagram, LinkedIn.
              tr.bg-color-white
                td <b>SEO (optimización en buscadores).</b>
                td Mejora visibilidad orgánica en motores de búsqueda.
                td Google, Bing, herramientas SEO.
              tr.bg-color-8
                td <b>Influencer marketing.</b>
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
      p.mb-0 Esta dinámica se ve impulsada por la innovación tecnológica, que transforma continuamente las posibilidades del marketing digital y exige una actualización permanente de capacidades. En consecuencia, la adaptación estratégica se convierte en un factor clave para fortalecer el posicionamiento competitivo. A su vez, la interacción continua con los clientes mejora la fidelización, consolidando una relación más cercana y duradera donde la experiencia del cliente se posiciona como prioridad estratégica central.
  
    separador
    
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Técnicas
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        img(src="@/assets/curso/tema5/10.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text Las técnicas de marketing digital corresponden a los métodos estratégicos utilizados para posicionar marcas, atraer audiencias y generar conversiones mediante medios digitales. Entre las principales técnicas se encuentran el posicionamiento en buscadores (SEO), la publicidad digital (SEM), el marketing de contenidos y el marketing en redes sociales. Cada técnica cumple funciones específicas dentro de la estrategia integral de comunicación empresarial.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Tecnícas de marketing

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
              div(titulo="Marketing de contenidos")
                p.ms-5 Busca atraer audiencias mediante información relevante.
              div(titulo="Marketing en redes sociales")
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
