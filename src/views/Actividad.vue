<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Conceptos estratégicos del <em>marketing</em> en el sistema moda.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de los fundamentos del <em>marketing</em> en el sistema moda mediante la resolución de preguntas de verdadero o falso aplicadas a contextos empresariales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!.',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el principal objetivo del mercadeo dentro del sistema moda empresarial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar necesidades del consumidor y generar valor mediante productos y estrategias comerciales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituyir completamente los procesos de producción y diseño de colecciones empresariales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar la interacción entre consumidores y plataformas digitales comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir totalmente la importancia del análisis de mercados y audiencias digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Identificar necesidades del consumidor y generar valor mediante productos y estrategias comerciales constituye la esencia fundamental del mercadeo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué caracteriza principalmente a las estrategias digitales aplicadas al sistema moda?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Uso exclusivo de medios impresos y comunicación tradicional física empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Integración de plataformas digitales para alcanzar objetivos comerciales específicos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminación de contenidos audiovisuales dentro de campañas promocionales digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustitución total de las audiencias segmentadas en entornos comerciales digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se caracterizan por la integración de plataformas digitales para alcanzar objetivos comerciales específicos de la marca.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué elemento debe analizarse al estudiar los competidores dentro del mercado digital?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Exclusivamente la ubicación física de las empresas del sector comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Únicamente el número de empleados vinculados a la organización empresarial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Estrategias, posicionamiento y propuesta de valor de las marcas competidoras.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Solamente la cantidad de publicaciones impresas realizadas mensualmente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Es indispensable analizar las estrategias, el posicionamiento y la propuesta de valor de las marcas competidoras en el entorno virtual.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la función principal de la mezcla de mercadeo dentro del <em>marketing</em>?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar completamente las decisiones relacionadas con productos y consumidores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir las estrategias digitales por acciones exclusivamente presenciales tradicionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducir la importancia de la comunicación en plataformas comerciales digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Integrar variables estratégicas como producto, precio, plaza y promoción empresarial.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Su función consiste en integrar de forma coherente las variables estratégicas de producto, precio, plaza y promoción empresarial.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué ventaja ofrece el <em>email marketing</em> dentro de las estrategias digitales empresariales?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite comunicación directa y personalizada con clientes y consumidores digitales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituye completamente las plataformas de comercio electrónico utilizadas por las marcas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Elimina la necesidad de segmentar audiencias y analizar comportamientos digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reduce totalmente la interacción entre usuarios y contenidos promocionales digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Esta herramienta destaca porque permite establecer una comunicación directa y totalmente personalizada con clientes y consumidores digitales.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el propósito principal de la planeación estratégica empresarial?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Diseñar publicaciones digitales sin objetivos organizacionales claramente establecidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar las metodologías aplicadas al desarrollo de estrategias digitales comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente los procesos de evaluación y control de resultados empresariales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Definir objetivos, recursos and acciones para alcanzar metas organizacionales futuras.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Su fin primordial es definir de forma clara los objetivos, recursos y acciones requeridas para alcanzar las metas organizacionales futuras.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué característica poseen los ecosistemas digitales empresariales modernos?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Funcionan únicamente mediante procesos manuales y herramientas físicas tradicionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminan completamente la interacción entre plataformas digitales y usuarios empresariales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Integran herramientas, plataformas y canales conectados para gestionar información digital.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituyen las redes sociales por sistemas cerrados de comunicación organizacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se caracterizan por integrar diferentes herramientas, plataformas y canales conectados para gestionar eficientemente la información digital.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es la principal función de una plataforma de comercio electrónico empresarial?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Impedir la interacción entre consumidores y productos digitales disponibles en línea.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar completamente el uso de herramientas tecnológicas en procesos comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Facilitar transacciones comerciales y ventas mediante medios digitales especializados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituir todas las estrategias de <em>marketing</em> aplicadas al sistema moda empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Su infraestructura está diseñada específicamente para facilitar transacciones comerciales y procesar ventas mediante medios digitales especializados.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué función cumplen los protocolos digitales dentro de los ecosistemas empresariales?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar seguridad y transmisión adecuada de la información digital empresarial.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituir completamente las políticas de ciberseguridad organizacionales actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar la necesidad de actualizar sistemas tecnológicos y plataformas digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir totalmente la importancia de la protección de datos de consumidores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Son los encargados de garantizar tanto la seguridad como la transmisión óptima y adecuada de la información digital empresarial.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué aspecto debe considerarse al realizar cargue de información digital empresarial?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente el diseño visual de los archivos utilizados en la plataforma digital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La estructura y funcionamiento específico del sistema donde se integrarán los datos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Exclusivamente la cantidad de usuarios registrados dentro del sistema empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminación de procedimientos de validación relacionados con plataformas digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Es fundamental estudiar con precisión la estructura interna y el funcionamiento específico del sistema informático donde se integrarán dichos datos.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué característica define principalmente la omnicanalidad digital empresarial moderna?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducción de la interacción entre clientes y marcas dentro del entorno digital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminación total de las plataformas virtuales utilizadas por consumidores actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustitución de redes sociales por medios impresos tradicionales empresariales físicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Integración coherente entre canales físicos y digitales para mejorar la experiencia.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se define a través de la integración coherente y sin fricciones entre los canales físicos y digitales para optimizar la experiencia global del usuario.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué propósito tienen los testeos de funcionamiento en plataformas digitales empresariales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Diseñar campañas publicitarias sin validar procesos operativos digitales empresariales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir completamente los procesos de monitoreo y control tecnológico empresarial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Verificar que sistemas y herramientas funcionen correctamente antes de su implementación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Eliminar las estrategias de seguridad aplicadas dentro del ecosistema digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Tienen como finalidad verificar exhaustivamente que todos los sistemas y herramientas operen correctamente antes de su lanzamiento o implementación definitiva.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué característica poseen las estrategias de <em>branding</em> digital dentro del sistema moda?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Construyen identidad y diferenciación mediante contenidos y experiencias coherentes digitales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminan completamente el uso de <em>storytelling</em> y contenidos emocionales empresariales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituyen las estrategias de posicionamiento utilizadas en plataformas digitales comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducen totalmente la importancia de la experiencia del consumidor moderno actual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Logran construir una sólida identidad y una diferenciación clara en el mercado mediante el desarrollo de contenidos y experiencias virtuales coherentes.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es la función principal de los arquetipos digitales en estrategias de marca?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar la personalidad comunicativa de las marcas dentro del entorno digital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Definir rasgos narrativos y emocionales que conecten con las audiencias digitales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente la identidad visual aplicada al <em>marketing</em> empresarial moderno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir la coherencia entre campañas digitales y posicionamiento estratégico comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Su función consiste en estructurar de manera nítida los rasgos narrativos, psicológicos y emocionales de la marca para conectar con sus audiencias en internet.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué objetivo cumplen las técnicas publicitarias dentro del <em>marketing digital</em> empresarial?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar completamente la medición de resultados dentro de campañas comerciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir las plataformas tecnológicas utilizadas por consumidores y organizaciones actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mejorar visibilidad, conversión y posicionamiento mediante estrategias promocionales digitales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reducir la importancia de la creatividad aplicada a contenidos promocionales digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Están orientadas a potenciar significativamente la visibilidad, los niveles de conversión y el posicionamiento de marca mediante acciones promocionales en entornos virtuales.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué función cumplen los <em>hashtags</em> dentro de las publicaciones digitales elegantes?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir completamente las estrategias de contenido utilizadas en redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar clasificación, alcance y descubrimiento de contenidos digitales relacionados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar la necesidad de interacción entre usuarios y comunidades virtuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir totalmente la visibilidad de publicaciones en plataformas digitales modernas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Sirven como etiquetas de indexación para facilitar la correcta clasificación, expandir el alcance orgánico y promover el descubrimiento de contenidos relacionados en las plataformas sociales.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué característica poseen las publicaciones efectivas en redes sociales empresariales?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducen la interacción entre consumidores y contenidos promocionales empresariales actuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminan completamente los elementos visuales utilizados dentro de la comunicación digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituyen las estrategias de segmentación desarrolladas por las organizaciones modernas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Integran creatividad, claridad y adaptación al comportamiento de la audiencia digital.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Logran un impacto real porque consiguen integrar altos niveles de creatividad, mensajes claros y una sólida adaptación a las dinámicas de comportamiento de la audiencia digital.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es una ventaja importante de las herramientas de automatización digital empresarial?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar procesos manuales relacionados con publicaciones y campañas comerciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Optimizar tiempo, programación y gestión de contenidos digitales estratégicos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar completamente el análisis de métricas y resultados de campañas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir las plataformas sociales utilizadas por consumidores digitales actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Su principal beneficio radica en optimizar los tiempos de ejecución, permitiendo la programación inteligente y una gestión centralizada de los contenidos estratégicos.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué finalidad tiene el <em>marketing digital</em> aplicado específicamente al sistema moda?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Fortalecer visibilidad, posicionamiento y ventas mediante medios digitales especializados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar completamente las estrategias de comunicación desarrolladas por las marcas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir el análisis del consumidor por procesos administrativos exclusivamente internos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir la presencia digital de las organizaciones dentro del comercio electrónico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Busca robustecer la visibilidad online, consolidar el posicionamiento competitivo de la firma y acelerar los flujos de ventas por medio de canales virtuales especializados.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué característica poseen las redes sociales dentro del ecosistema digital empresarial?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Funcionan únicamente como espacios informativos sin interacción entre usuarios digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminan la necesidad de implementar estrategias de contenido y posicionamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituyen completamente las plataformas de comercio electrónico y <em>marketplaces</em> digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Permiten comunicación, construcción de comunidad y promoción de marcas comerciales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Actúan como plataformas idóneas para entablar comunicación bidireccional, forjar comunidades de marca sólidas y desplegar campañas de promoción comercial efectivas.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
