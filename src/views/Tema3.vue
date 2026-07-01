<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Comercio electrónico
    
    .bg-full-width.bg-fondo-2
      .px-4.px-lg-5
        img(src="@/assets/curso/tema3/1.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text El comercio electrónico se ha consolidado como uno de los principales motores de transformación empresarial en el sistema moda, permitiendo a las organizaciones ampliar su alcance de mercado, optimizar procesos comerciales y establecer relaciones directas con el consumidor digital. 
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
          .col-lg-8
            p La digitalización del consumo ha modificado los hábitos de compra, impulsando modelos de negocio basados en plataformas virtuales y experiencias omnicanal. En el sector moda, la velocidad de rotación de productos y la influencia de tendencias globales hacen que el comercio electrónico sea un canal estratégico indispensable. 
            .row.align-items-center.bg-color-3.tarjeta.p-4
              .col-lg-auto.mb-3.mb-lg-0
                img.d-lg-flex.d-none(src="@/assets/curso/tema3/3.svg").mx-auto
              .col-lg
                p.mb-0 Este capítulo desarrolla los conceptos fundamentales, los tipos de comercio electrónico, las plataformas tecnológicas disponibles y el marco legal colombiano que regula las operaciones digitales. Se integran ejemplos empresariales aplicados para contextualizar el aprendizaje. El propósito es fortalecer la comprensión estratégica del entorno digital comercial. 

        separador
        
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.1 Concepto
        
        .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/4.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El comercio electrónico puede definirse como el conjunto de transacciones comerciales de bienes y servicios realizadas mediante medios digitales, principalmente a través de internet (Laudon & Traver, 2022), lo que permite una interacción directa entre empresa y consumidor sin limitaciones geográficas ni restricciones de horario. 
        
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-9.mb-3.mb-xl-0
        .row.justify-content-center.align-items-center.mb-3
          .col-md-8.col-lg-5.col-xl-6.mb-3.mb-xl-0
            figure
              img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
          .col-lg-7.col-xl-6
            .bg-color-2.p-4.tarjeta 
              p.mb-0 En el sistema moda, este modelo facilita lanzamientos rápidos de colecciones y pruebas de mercado casi inmediatas, reduciendo tiempos de respuesta frente a tendencias cambiantes. Además, posibilita la recopilación y análisis de datos sobre comportamiento del consumidor, optimizando decisiones relacionadas con inventarios, precios y estrategias promocionales.  
        .bg-color-sintesis.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/3.svg").mx-auto
            .col-lg
              p.mb-0 Las tiendas virtuales operan como vitrinas digitales permanentes, mientras que su integración con sistemas logísticos asegura procesos eficientes de distribución, en consecuencia, el comercio electrónico transforma la experiencia de compra tradicional y su crecimiento responde al avance sostenido de la digitalización global.
      .col-md-8.col-lg-4.col-xl-3.mb-3.mb-xl-0
        figure
          img(src="@/assets/curso/tema3/6.png", data-aos="zoom-in")
    
    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Tipos
    
    .bg-full-width.bg-fondo-2
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/7.png", data-aos="zoom-in")
          .col-lg-8
            p.mb-0 El comercio electrónico puede clasificarse según los actores participantes en la transacción, los principales tipos son B2C (empresa a consumidor), B2B (empresa a empresa), C2C (consumidor a consumidor) y D2C (marca directa al consumidor). La elección del modelo depende de la estrategia empresarial, pues cada tipo implica dinámicas operativas diferentes.
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-8
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Figura 3.
              span Tipos de comercio electrónico
            img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema3/8.png", alt="la figura muestra los principales tipos de comercio electrónico en el mercado. B2C (empresa a consumidor) orientado a ventas de empresa a consumidor (minoristas. El modelo B2B (empresa a empresa)enfocado en operaciones entre empresas; modelo D2C (marca directa a consumidor) que elimina intermediarios para fortalecer la relación directa con el cliente. Finalmente, el modelo C2C (consumidor a consumidor) permite transacciones mediante plataformas digitales.")
            img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema3/8-1.png", alt="la figura muestra los principales tipos de comercio electrónico en el mercado. B2C (empresa a consumidor) orientado a ventas de empresa a consumidor (minoristas. El modelo B2B (empresa a empresa)enfocado en operaciones entre empresas; modelo D2C (marca directa a consumidor) que elimina intermediarios para fortalecer la relación directa con el cliente. Finalmente, el modelo C2C (consumidor a consumidor) permite transacciones mediante plataformas digitales.")
            figcaption Nota. SENA, 2026.

        p.mb-5 La elección del modelo depende de la estrategia empresarial. Cada tipo implica dinámicas operativas diferentes.

    .bg-color-4.mb-5.tarjeta.p-3
      .row.justify-content-center.align-items-center
        .col-6.col-md-4.col-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")
        .col-lg-10
          p.mb-0(data-aos="fade-right") <b>Ejemplo aplicado</b>. En el sistema moda, el modelo B2C predomina en tiendas virtuales de marcas comerciales. El modelo B2B es utilizado por proveedores textiles que venden a fabricantes. Plataformas como Mercado Libre facilitan operaciones C2C. El modelo D2C ha crecido gracias a redes sociales y tiendas propias <em>online</em>. Marcas emergentes utilizan D2C para controlar la experiencia del cliente. Este modelo incrementa márgenes de rentabilidad. Sin embargo, exige mayor inversión logística. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in")
      .col-lg-8
        p Comprender los tipos de comercio electrónico no es un ejercicio teórico aislado, sino un insumo clave para la toma de decisiones estratégicas. Cuando una empresa identifica con claridad si le conviene operar bajo un modelo B2C, B2B, C2C o incluso híbrido, puede alinear esa elección con sus objetivos comerciales, ya sea expansión de mercado, posicionamiento de marca o incremento en rentabilidad. A partir de este análisis estratégico, se define el modelo más conveniente según el público objetivo, la propuesta de valor y la capacidad operativa.
        .bg-color-9.tarjeta.p-4
          p.mb-0 En la práctica, muchas empresas consolidadas no se limitan a una sola modalidad, sino que operan en múltiples esquemas de manera simultánea. La digitalización ha facilitado esta convergencia de modelos, permitiendo integrar canales físicos y virtuales, <em>marketplaces</em> y tiendas propias en un ecosistema omnicanal, esta integración fortalece la cobertura de mercado, amplía el alcance geográfico y diversifica las fuentes de ingreso.
    
    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Plataformas
    

    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        img(src="@/assets/curso/tema3/11.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text Las plataformas de comercio electrónico constituyen la base tecnológica que permite crear, administrar y operar tiendas virtuales de manera estructurada y eficiente. Estas soluciones no solo alojan el catálogo de productos, sino que integran funcionalidades clave como gestión de inventarios, pasarelas de pago, análisis de datos y control de pedidos, lo que incide directamente en la eficiencia operativa del negocio.
        
        h5.mb-5.bg-color-2.p-3.tarjeta Entre las más utilizadas se encuentran Shopify, WooCommerce y Magento, cada una diseñada para responder a distintos niveles de complejidad empresarial. 

        .row.justify-content-center.mb-5
          .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").tarjeta
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema3/12.png", alt="alt")
              .crd_hover_txt--body
                h4.mb-3 Shopify
                p.mb-0 Destaca por su facilidad de implementación y rapidez de puesta en marcha, lo que la convierte en una alternativa adecuada para emprendedores y pequeñas empresas que buscan agilidad.
        
          .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").tarjeta
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema3/13.png", alt="alt")
              .crd_hover_txt--body
                h4.mb-3 WooCommerce
                p.mb-0 Por su parte, permite una integración natural con sitios desarrollados en WordPress, ofreciendo flexibilidad para negocios que ya cuentan con presencia web y desean ampliar sus funcionalidades comerciales. 
        
          .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").tarjeta
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema3/14.png", alt="alt")
              .crd_hover_txt--body
                h4.mb-3 Magento
                p.mb-0 Ofrece un alto nivel de personalización y robustez técnica, siendo especialmente pertinente para grandes empresas con estructuras más complejas y necesidades avanzadas de configuración.

        .row.justify-content-center.align-items-center.mb-3
          .col-lg-10(data-aos="fade-up")
            .tarjeta.color-primario.bg-color-16.p-3.mb-5
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-auto
                  img(src="@/assets/curso/tema3/15.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Las 5 mejores plataformas de <em>E-commerce</em> para crear tienda <em>online</em>
                      p.mb-0 Aprenda a elegir la plataforma ideal según su tipo de negocio, evaluando facilidad de uso, pagos, inventario y análisis. Conozca casos reales y tome decisiones estratégicas para lanzar su tienda <em>online</em> de forma eficiente y segura.
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=WOXXQuf3jr8" target="_blank")
                        span Ir al video
                        i.fas.fa-file-download

        separador
        
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.4 Marco legal

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/16.png", data-aos="zoom-in")
      .col-lg-8
        p El comercio electrónico en Colombia se desarrolla dentro de un marco normativo que busca garantizar la protección del consumidor y la seguridad de las transacciones digitales. Esta regulación no es un simple requisito formal, sino un elemento estructural para el funcionamiento confiable del entorno digital. Entre las principales disposiciones se encuentra la Ley 527 de 1999, que reconoce la validez jurídica de los mensajes de datos y las firmas digitales, otorgando sustento legal a los contratos celebrados por medios electrónicos. De manera complementaria, la Ley 1581 de 2012 establece el régimen general de protección de datos personales, definiendo obligaciones claras sobre el tratamiento, almacenamiento y uso de la información de los usuarios.
        .bg-color-9.tarjeta.p-4
          p.mb-0 A partir de estas normas, las empresas están obligadas a informar de manera explícita las condiciones de compra, políticas de devolución, términos de garantía y lineamientos sobre el manejo de datos personales, esta exigencia convierte la transparencia digital en un deber legal y no en una práctica opcional. Como consecuencia, el cumplimiento normativo fortalece la confianza del consumidor, reduce riesgos jurídicos y promueve relaciones comerciales más seguras.
    
    .bg-color-1.mb-5.tarjeta.p-3
      .row.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.order-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema3/17.svg").mx-auto
        .col-lg.order-1
          p.mb-0 <b>Clave estratégica</b>. Las empresas que cumplen rigurosamente la normativa no solo reducen riesgos legales y sanciones, sino que fortalecen la confianza jurídica, consolidan su reputación empresarial y proyectan una imagen de transparencia que impacta positivamente en la competitividad del negocio digital.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/18.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.tarjeta.p-4
          p.mb-0 En el sistema moda, el cumplimiento normativo trasciende el ámbito administrativo y se convierte en un componente esencial de la estrategia digital, ya que implica publicar términos y condiciones visibles en la tienda <em>online</em>, garantizar que las políticas de tratamiento de datos cuenten con la autorización expresa del usuario y adoptar la facturación electrónica conforme al marco legal vigente; adicionalmente, las plataformas de pago deben cumplir con estándares de seguridad financiera que protejan la información sensible de los clientes, todo bajo la supervisión de la Superintendencia de Industria y Comercio, entidad que vigila estas prácticas para asegurar el respeto de los derechos del consumidor. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .bg-color-3.p-4.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/3.svg").mx-auto
            .col-lg
              h5.mb-0 Cita de reflexión
              p.mb-0  “La integridad empresarial comienza cuando la legalidad guía cada transacción.”
    


</template>

<script>
export default {
  name: 'Tema3',
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
