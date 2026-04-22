<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Controlar el desarrollo de las actividades de manejo
    .row.justify-content-center.align-items-stretch.mb-2.g-0
      .col-lg-7.d-flex.align-items-center.p-4.p-lg-5.bg-color-4
        p.mb-0 Controlar el manejo en la producción de pollos de engorde consiste en planificar, supervisar y ajustar las prácticas técnicas para garantizar la sanidad, el bienestar animal y la eficiencia, mediante monitoreo, control sanitario y cumplimiento de protocolos.
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema1/img1.png', style="object-fit: cover;")
    Separador
    //- Inicio Tema1.1
    .row.mt-5
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Plan de mejoramiento: acciones preventivas y correctivas
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-5.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El plan de mejoramiento en avicultura garantiza eficiencia, sanidad, bienestar animal y cumplimiento normativo, mediante acciones preventivas y correctivas, apoyadas en procedimientos, registros y contingencias para controlar y corregir desviaciones.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Acciones preventivas
    //- Título con imagen
    p(data-aos="fade-left") Las acciones preventivas buscan anticipar enfermedades, fallas productivas y riesgos sanitarios mediante programas técnicos estructurados, basados en criterios científicos, normativos y de bienestar animal, que garanticen control y eficiencia. Los principales programas son:
    //- Inicio Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
      .p-4.p-md-5
        .tarjeta.tarjeta--gris.p-4
          PasosB.color-acento-contenido
            .row(titulo="")
              .col-md-6.mb-4.mb-md-0
                h3 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                p XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              .col-md-6
                figure
                  img(src='@/assets/template/img-placeholder.svg')
    //- Fin Slideshow


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
