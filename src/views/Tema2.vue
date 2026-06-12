<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Planeación
    
    .bg-full-width.bg-fondo-2
      .px-4.px-lg-5
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-right") La planeación estratégica constituye el fundamento estructural de toda acción de <em>marketing</em> en el sistema moda. En un entorno caracterizado por cambios acelerados en tendencias, comportamientos de consumo y dinámicas digitales, la improvisación empresarial representa un alto riesgo competitivo. 
            .bg-color-10.tarjeta.p-4.mb-3
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/tema2/2.png", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 La planeación permite reducir incertidumbre, asignar recursos con criterio y anticipar escenarios futuros. En el sector moda, donde los ciclos de producto son cortos y altamente sensibles a la cultura, planificar implica comprender el mercado con profundidad.
            p.mb-0 Este capítulo desarrolla el concepto, los modelos metodológicos, los procesos estructurados y la formulación del plan estratégico de mercadeo, el propósito es formar pensamiento estratégico sólido, ya que la planeación no es un documento estático, sino una práctica permanente de gestión.

        separador
        
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.1 Concepto

        img(src="@/assets/curso/tema2/3.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text La planeación puede definirse como el proceso sistemático mediante el cual una organización establece objetivos, determina estrategias y diseña acciones para alcanzarlos en un período determinado (David & David, 2017). 
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
          .col-lg-8
            p En el ámbito del <em>marketing</em>, este proceso exige analizar previamente el entorno, la competencia y el comportamiento del consumidor antes de ejecutar acciones comerciales, garantizando decisiones fundamentadas y no improvisadas. 
            .row.align-items-center.bg-color-3.p-4
              .col-lg-auto.mb-3.mb-lg-0
                img.d-lg-flex.d-none(src="@/assets/curso/tema2/5.svg").mx-auto
              .col-lg
                p.mb-0 En el sistema moda, la planeación adquiere especial relevancia debido a la estacionalidad del mercado y la rotación constante de colecciones, factores que obligan a anticipar tendencias y optimizar inventarios para evitar sobrecostos o desabastecimiento. 

    .bg-color-1.mb-5.tarjeta.p-3
      .row.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.order-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema2/6.svg").mx-auto
        .col-lg.order-1
          p.mb-0 Asimismo, permite asegurar coherencia entre la identidad de marca y las acciones promocionales, fortaleciendo el posicionamiento. En consecuencia, la planeación estratégica orienta decisiones a mediano y largo plazo, constituyéndose no como una reacción ante el mercado, sino como una dirección clara que marca el punto de partida de la competitividad sostenible.

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Metodologías o modelos
    
    .bg-full-width.bg-fondo-2
      .px-4.px-lg-5
        .bg-full-width.bg-fondo-2
          .px-4.px-lg-5
            .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/tema2/7.png')})`}"
              )
              .bloque-texto-g__texto.p-4
                p.mb-0 Las metodologías de planeación permiten estructurar el análisis estratégico, entre las más utilizadas se encuentran DOFA, PESTEL y el modelo de objetivos SMART.

        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 3.
              span Metodologías de planeación
            .tabla-a.color-secundario.mb-5.tbl
              table
                caption Nota. SENA, (2026).
                thead
                  tr
                    th.bg-color-7 Modelo
                    th.bg-color-7 Características
                    th.bg-color-7 Utilidad estratégica en el sistema moda
                tbody
                  tr.bg-color-white
                    td <b>DOFA (FODA)</b>
                    td Analiza factores internos (debilidades y fortalezas) y externos (oportunidades y amenazas). Permite visualizar la posición competitiva de la organización y relacionar variables internas con condiciones del mercado. Facilita la formulación de estrategias ofensivas, defensivas, adaptativas o de supervivencia.
                    td Identificar ventajas competitivas, detectar brechas frente a competidores, anticipar riesgos del mercado y definir estrategias para lanzamientos de colecciones, posicionamiento de marca o expansión digital.
                  tr.bg-color-8
                    td <b>PESTEL</b>
                    td Examina variables del macroentorno: políticas, económicas, sociales, tecnológicas, ecológicas y legales. Permite comprender factores externos que influyen indirectamente en la organización y que están fuera de su control directo.
                    td Evaluar riesgos regulatorios, cambios en hábitos de consumo, impacto de tendencias sostenibles, avances tecnológicos en e-commerce y condiciones económicas que afectan precios y demanda en el sector moda.
                  tr.bg-color-white
                    td <b>SMART</b>
                    td Establece objetivos específicos, medibles, alcanzables, relevantes y con tiempo definido. Facilita claridad en metas y alineación entre estrategia y ejecución. Permite seguimiento cuantificable del desempeño.
                    td Controlar resultados de campañas digitales, definir metas de ventas por temporada, establecer indicadores de crecimiento en redes sociales y medir desempeño de lanzamientos de colección con criterios verificables.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-right") Cada modelo de planeación debe adaptarse al tamaño, capacidad y contexto de la organización para garantizar su efectividad. 
        ul.lista-ul--color
          li.mb-3.d-flex
            i.fas.fa-angle-right.bg-color-14
            p.mb-0 En pequeñas marcas emergentes del sistema moda, el <b>DOFA</b> resulta práctico y accesible, ya que permite identificar rápidamente fortalezas, debilidades, oportunidades y amenazas con recursos limitados. 
          li.mb-3.d-flex
            i.fas.fa-angle-right.bg-color-14
            p.mb-0 En cambio, en empresas consolidadas, el análisis <b>PESTEL</b> complementa la toma de decisiones estratégicas, especialmente en procesos de expansión nacional o internacional, donde el entorno macroeconómico y regulatorio adquiere mayor relevancia. 
          li.mb-3.d-flex
            i.fas.fa-angle-right.bg-color-14
            p.mb-0 Por su parte, el modelo <b>SMART</b> garantiza que los objetivos definidos puedan medirse y evaluarse con precisión, evitando metas ambiguas o difíciles de controlar. 
        .bg-color-15.tarjeta.p-3
          p.mb-0 Así, la correcta aplicación metodológica no solo aporta claridad estratégica, sino que optimiza recursos y reduce la improvisación. Sin embargo, estas herramientas no reemplazan el criterio directivo; lo estructuran y fortalecen. En consecuencia, la disciplina analítica se convierte en un motor de competitividad sostenible. 
    
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Proceso
    
    img(src="@/assets/curso/tema2/9.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text El proceso de planeación estratégica comprende etapas secuenciales e interrelacionadas, es un proceso cíclico, donde la retroalimentación permite ajustes permanentes. Inicia con análisis situacional, continúa con formulación estratégica, pasa a implementación y culmina con control. 
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Proceso de planeación
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema2/10.png", alt="la figura muestra las etapas del proceso de planeación estratégica organizado en un ciclo continuo, conformado por cuatro etapas principales. El análisis situacional; que estudia el mercado y la competencia. La formulación estratégica, donde se define la dirección empresarial. La implementación, que convierte las estrategias en acciones concretas. El control, encargado de evaluar el desempeño y los resultados obtenidos.")
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema2/10-1.png", alt="la figura muestra las etapas del proceso de planeación estratégica organizado en un ciclo continuo, conformado por cuatro etapas principales. El análisis situacional; que estudia el mercado y la competencia. La formulación estratégica, donde se define la dirección empresarial. La implementación, que convierte las estrategias en acciones concretas. El control, encargado de evaluar el desempeño y los resultados obtenidos.")
        figcaption Nota. SENA, 2026.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
      .col-lg-8
        p En el sistema moda, el análisis situacional puede incluir estudio de tendencias globales y comportamiento digital. La formulación estratégica orienta metas comerciales por temporada. La implementación involucra diseño, producción y comunicación digital. El control evalúa ventas y percepción de marca. 
        .row.align-items-center.bg-color-1.p-3.tarjeta
          .col-lg-auto.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema2/12.png").mx-auto
          .col-lg
            p.mb-0 <b><em>Insight</em></b>. El seguimiento convierte la planeación en aprendizaje continuo.
        
    
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Plan estratégico
    
    .bg-full-width.bg-fondo-2
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
          .col-lg-8
            p El plan estratégico de mercadeo es el documento formal que integra el análisis situacional, la definición de objetivos, las estrategias y el plan de acción comercial, constituyéndose en la hoja de ruta que orienta la gestión empresarial. Su estructura comprende diagnóstico del entorno y de la organización, segmentación de mercados, definición de posicionamiento y asignación de presupuesto, garantizando coherencia entre análisis y ejecución. 
            .bg-color-9.tarjeta.p-4.mb-5
              p.mb-0 En el Sistema Moda, este plan orienta decisiones clave relacionadas con el desarrollo de colecciones, selección de canales digitales y planificación de campañas por temporada. Además, establece responsables, cronogramas e indicadores de desempeño que permiten medir resultados y realizar ajustes oportunos. De esta manera, su función no es únicamente documentar intenciones, sino guiar una ejecución coordinada y estratégica que fortalezca la competitividad de la marca.
        
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-10(data-aos="fade-up")
            .tarjeta.color-primario.bg-color-10.p-3.mb-5
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2
                  img(src="@/assets/curso/tema2/14.png")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Plan estratégico de mercadeo
                      p.mb-0 A continuación, se presenta un ejemplo condensado, en el cual cada aspecto puede desarrollarse con la profundidad conceptual necesaria para precisar y contextualizar su intención estratégica. 
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/Plan_estrategico_de_mercadeo_D1.pdf')" target="_blank")
                        span Descargar pdf
                        i.fas.fa-file-download

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8(data-aos="fade-up")
            .bg-color-3.mb-5.tarjeta.p-4
              .row.align-items-center
                .col-lg-auto.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/tema2/5.svg").mx-auto
                .col-lg
                  h5.mb-0 Cita de reflexión
                  p.mb-0 “La integridad en la planeación refleja responsabilidad con los recursos y compromiso con el futuro.”
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            .row.bg-color-15.tarjeta.py-4.align-items-center.justify-content-center
              .col-md-6.col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
              .col-lg-7
                h2(data-aos="fade-left").mb-4 ¿Sabías qué?
                p Lo invitamos a escuchar el siguiente Pódcast:
                
                TarjetaAudio.color-secundario.bg-color-white.mb-3(
                  texto="Integración de análisis, decisión y valor competitivo"
                  tiempo
                  :audio="require('../assets/curso/podcast/podcast1.mp3')"
                )



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
