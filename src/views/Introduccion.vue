<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La producción de pollos de engorde es una actividad fundamental dentro del sector avícola, que requiere la aplicación de conocimientos técnicos, normativos y de bienestar animal para garantizar resultados eficientes y sostenibles. Este componente formativo se enfoca en el control y la verificación de las actividades de manejo en las diferentes etapas productivas, permitiendo al aprendiz desarrollar competencias para supervisar, evaluar y mejorar los procesos dentro de la granja. 
    .row.mb-10.mt-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/img2.png", data-aos="zoom-in" style="max-width: 458px")
      .col-lg-7
        .row.align-items-start.mb-3.bg-color-3.p-3(data-aos="fade-left")
          .col-lg
          p.mb-0 El curso tiene como objetivo fortalecer la capacidad de controlar el desarrollo de las actividades de manejo y verificar su correcta ejecución, de acuerdo con criterios técnicos establecidos. Asimismo, promueve la implementación de buenas prácticas avícolas, el cumplimiento de medidas de bioseguridad, el análisis de parámetros productivos y la toma de decisiones basadas en datos
        .row.align-items-start.mb-10(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/intro/icono.svg", style="max-width: 90px").mx-auto
          .col-lg
            p(data-aos="fade-left") De esta manera, se busca formar profesionales capaces de garantizar la sanidad, el bienestar animal y la productividad, contribuyendo al cumplimiento de la normatividad vigente y al mejoramiento continuo del sistema productivo avícola.
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
