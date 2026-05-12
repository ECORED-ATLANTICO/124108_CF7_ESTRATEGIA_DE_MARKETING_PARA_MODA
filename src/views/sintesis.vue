<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3
        figure
          img(src="@/assets/curso/1.png", data-aos="zoom-in")
      .col-lg-8
        p El componente formativo “Estrategias de mercadeo digital y comercio electrónico”, ofrece al aprendiz una comprensión integral de los fundamentos del marketing aplicado al sistema moda, articulando conceptos clásicos de mercadeo con enfoques contemporáneos de marketing digital, comercio electrónico y gestión de ecosistemas digitales. Este componente capacita al aprendiz en la identificación de perfiles de consumidores, análisis competitivo, diseño de estrategias y ejecución de acciones coherentes con objetivos comerciales y tendencias digitales. Además, proporciona criterios prácticos para seleccionar herramientas tecnológicas, métodos de análisis y métricas de desempeño en proyectos empresariales del sector moda.
        .bg-color-1.tarjeta.p-4
          p.mb-0 El aprendiz desarrollará habilidades para planificar y ejecutar campañas digitales, optimizar presencia en plataformas tecnológicas, diseñar experiencias omnicanal y gestionar redes sociales como canales estratégicos de interacción. También se familiariza con el marco legal colombiano que regula el entorno digital, garantizando operaciones seguras y éticas. Como resultado, el aprendiz está preparado para enfrentar retos reales del mercado, generar valor sostenible para la organización y promover propuestas competitivas de marketing en escenarios empresariales dinámicos. 
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
