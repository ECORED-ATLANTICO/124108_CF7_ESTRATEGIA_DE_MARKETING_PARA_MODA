<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
    
        .bg-color-1.mb-5.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/intro/1.svg").mx-auto
            .col-lg
              p.mb-0 El componente formativo aborda los fundamentos estratégicos del marketing aplicados al Sistema Moda, integrando conceptos de mercadeo, planeación estratégica, comercio electrónico, ecosistemas digitales, marketing digital y gestión de redes sociales. Este enfoque permite comprender el entorno competitivo actual y las dinámicas del consumidor en escenarios digitales y omnicanales.
        
        .row.justify-content-center.align-items-center.mb-5
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-xl-0
            figure
              img(src="@/assets/curso/intro/2.png", data-aos="zoom-in")
          .col-lg-7.col-xl-5.mb-3.mb-lg-0
            .bg-color-2.p-4.tarjeta 
              p.mb-0 Su desarrollo fortalece la capacidad del aprendiz para analizar mercados, formular estrategias comerciales y utilizar herramientas tecnológicas de manera estratégica. Los contenidos se abordarán mediante explicaciones conceptuales, análisis de casos empresariales del sector moda, ejercicios aplicados y ejemplos prácticos que faciliten la transferencia del conocimiento hacia contextos reales de desempeño organizacional.
          .col-md-8.col-lg-5.col-xl-3.mb-3.mb-xl-0
            figure
              img(src="@/assets/curso/intro/3.png", data-aos="zoom-in")
        
        .bg-color-3.mb-5.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/intro/4.svg").mx-auto
            .col-lg
              p.mb-0 El componente formativo aborda los fundamentos estratégicos del marketing aplicados al Sistema Moda, integrando conceptos de mercadeo, planeación estratégica, comercio electrónico, ecosistemas digitales, marketing digital y gestión de redes sociales. Este enfoque permite comprender el entorno competitivo actual y las dinámicas del consumidor en escenarios digitales y omnicanales.
    
    

</template>

<script>
export default {
  name: 'Introduccion',
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
