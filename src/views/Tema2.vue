<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Verificar la ejecución de las actividades de manejo
    p(data-aos="fade-left") La verificación de las actividades de manejo es un proceso sistemático que permite comprobar que las tareas en la granja avícola se ejecutan conforme a los protocolos establecidos, garantizando el bienestar animal, la eficiencia productiva y el cumplimiento de la normatividad vigente.
    .row.justify-content-center.align-items-stretch.mb-2.g-0
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema2/img1.png', style="object-fit: cover;")
      .col-lg-7.d-flex.align-items-center.p-4.p-lg-5.bg-color-4
        p.mb-0 Este proceso integra la observación directa en campo, la revisión de registros, el análisis de indicadores productivos y sanitarios, así como la toma de decisiones correctivas oportunas. Además, se articula directamente con los sistemas de bioseguridad, bienestar animal y control ambiental, constituyéndose en un eje fundamental para la certificación como granja biosegura.
    Separador
    //- Inicio Tema2.1
    .row.mt-5
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Contingencias: tipos y características
    .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade-left")
      .col-lg-1.d-flex.align-items-center.justify-content-center
        figure
          img(src="@/assets/curso/tema1/img4.svg", data-aos="zoom-in", style="width: 80px").mx-auto
      .col-lg-11.mb-0.d-flex.align-items-center
        p.mb-0 Las contingencias son eventos inesperados que afectan el normal desarrollo del proceso productivo y requieren atención inmediata para evitar pérdidas económicas, sanitarias o productivas.
    p Mediante el siguiente pódcast se conocerán las contingencias que existen en las actividades de manejo.
    //- Inicio Podcast
    .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-2
      .row.align-items-stretch
        .col-lg-7.mb-3
          .p-4.p-md-5.bg-custom-dark-teal.h-100.rounded-4
            .row.align-items-center
              .col-md-5.text-center.mb-4.mb-md-0
                img(src="@/assets/curso/fondos/podcast.svg" style="max-width: 200px;").img-fluid
              .col-md-7.ps-md-4
                h2.mb-3.fw-bold(style="color:#fff") Pódcast
                .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                  h5.mb-3.fw-bold Contingencias en la producción avícola: tipos y manejo
                  TarjetaAudio.color-primario(
                    texto="" 
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")        
        .col-lg-5
          figure.mb-0
            img(src='@/assets/curso/tema2/img2.png')
    //- Fin Podcast  
    Separador
    //- Inicio Tema2.2
    .row.mt-5
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Protocolos: cumplimiento
    p La verificación del cumplimiento de protocolos asegura la estandarización de los procesos productivos, reduciendo la variabilidad y garantizando resultados consistentes. En esta sección se analizarán los aspectos a evaluar y verificación de aplicación en campo.
    //- Inicio Tarjetas
    .row.justify-content-center.g-0(data-aos="fade-right")
      .col-lg-6.col-md-6
        .tarjeta.p-5.h-100.bg-color-9(style="border-radius: 25px 0 0 25px; background-color: #4d6666;")
          .row.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/tema2/slide01_1.png', alt='' style="width:100px").m-auto
          h4.text-white Aspectos a evaluar
          p.text-white Los aspectos a evaluar son:
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0.text-white Cumplimiento de procedimientos.
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0.text-white Uso adecuado de insumos.
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0.text-white Frecuencia de actividades.
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0.text-white Registro de ejecución.
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0.text-white Condiciones de bioseguridad.           
      .col-lg-6.col-md-6
        .tarjeta.p-5.h-100.bg-color-10(style="border-radius: 0 25px 25px 0; background-color: #d8f0f0;")
          .row.mb-4
            .col-auto
              figure
                img(src='@/assets/curso/tema2/slide01_1.png', style="width:100px").m-auto
          h4.card-title.mb-4 Verificación de aplicación en campo
          p Los aspectos a evaluar son:
          ul.lista-ul.mb-3
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 El operario sigue el protocolo. 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Se utilizan los elementos definidos. 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Se registran las actividades. 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Se cumplen los tiempos establecidos.
          p El diagrama de verificación comprende una secuencia de pasos que inicia con la revisión del protocolo, seguida de la observación en campo y la comparación de las actividades realizadas. A partir de esto, se determina el cumplimiento o no cumplimiento y se establecen las acciones correctivas necesarias.
    //- Fin Tarjetas
    Separador
    //- Inicio Tema2.3
    .row.mt-5
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3	Buenas prácticas avícolas y bienestar animal verificación
    .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")
      .col-lg-7.d-flex.align-items-center.p-4.p-lg-5.bg-color-4
        p.mb-0 Las Buenas Prácticas Avícolas (BPA) constituyen el conjunto de principios, normas y recomendaciones técnicas que garantizan la inocuidad del producto, la sanidad animal, la sostenibilidad ambiental y el bienestar de las aves.
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema2/img3.png', style="object-fit: cover;")
    p.mt-5(data-aos="fade-left") En el presente apartado se examinará  los componentes de verificación y la evaluación de cumplimiento
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-right")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide01_1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Componentes de verificación
              p Los aspectos a evaluar son:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Cumplimiento de procedimientos.
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Uso adecuado de insumos.
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Frecuencia de actividades.
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Registro de ejecución.
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Condiciones de bioseguridad.
              p Los componentes de verificación en BPA incluyen bioseguridad, alimentación, sanidad, bienestar animal e infraestructura, evaluando el control de ingreso, calidad del alimento, plan sanitario, condiciones del lote y estado del galpón.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide01_2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Componentes de BPA
              p Los componentes de las Buenas Prácticas Avícolas (BPA) incluyen la bioseguridad, enfocada en el control de ingreso; la alimentación, relacionada con la calidad y el suministro; la sanidad, basada en el plan sanitario; el bienestar animal, según las condiciones del lote; y la infraestructura, evaluando el estado del galpón.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide01_3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Evaluación de cumplimiento              
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Cumple: se ejecuta correctamente.
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Parcial: requiere mejora.
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 No cumple: incumplimiento total.                
    //- Fin Slideshow
    .row.bg-color-1
      .col-12
        .p-5
          Separador
          //- Inicio Tema2.4
          .row.mt-5
              #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 2.4	Registro y control de procesos
          p(data-aos="fade-left") El registro de información en la producción avícola es clave para controlar y hacer seguimiento a las actividades mediante formatos establecidos. Permite garantizar trazabilidad, facilitar auditorías, apoyar la toma de decisiones y evidenciar el cumplimiento normativo. Los aspectos fundamentales son:
          //- Accordeon Pasos
          .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
            .row.justify-content-center.align-items-center
              .col-lg-8.mb-4.mb-lg-0          
                LineaTiempoD.color-primario
                  .row(numero="1" titulo="Registro de información en formatos establecidos")
                    .col-md-12.mb-4.mb-md-0
                      p El registro de información en formatos establecidos consiste en documentar de manera organizada las actividades y datos generados en la producción avícola, utilizando formatos físicos o digitales definidos por la granja o la normativa vigente. Este proceso permite llevar un control adecuado de la información, facilitar su análisis y garantizar la trazabilidad, el cumplimiento normativo y la toma de decisiones oportunas.
                  .row(numero="2" titulo="Tipos de registro")              
                    .col-md-12
                      ul.lista-ul.mb-0
                        li.d-flex
                          i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                          span.ms-2 <b>Productivo:</b> peso, consumo, mortalidad. 
                        li.d-flex
                          i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                          span.ms-2 <b>Sanitario:</b> vacunación, tratamientos. 
                        li.d-flex
                          i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                          span.ms-2 <b>Ambiental:</b> temperatura, ventilación. 
                        li.d-flex
                          i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                          span.ms-2 <b>Operativo:</b> actividades diarias.
                  .row(numero="3" titulo="Importancia del registro")
                    .col-md-12
                      p El registro de información permite garantizar la trazabilidad, facilita la realización de auditorías, apoya la toma de decisiones y evidencia el cumplimiento de la normatividad. Como principio clave, sin registros no es posible demostrar cumplimiento normativo ni acceder a procesos de certificación.
              .col-8.col-lg-4
                figure
                  img(src="@/assets/curso/tema2/img4.png")
          //- Fin Accordeon Pasos
    Separador
    //- Inicio Tema2.5
    .row.mt-5
        #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.5 Evaluación de parámetros productivos
    p(data-aos="fade-right") La evaluación de parámetros productivos permite analizar indicadores como mortalidad, consumo, peso y conversión alimenticia, con el fin de medir el desempeño del sistema y tomar decisiones oportunas para mejorar la eficiencia. Para el control y el análisis del desempeño productivo se debe tener en cuenta:
    //- Inicio Accordion
    .bg--img_03.mt-5
      .row.justify-content-center
        .col-lg-3 
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema2/img5.png").img400.m-auto
        .col-lg-9
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Parámetros productivos")
                p.mb-4 Los parámetros productivos en pollos de engorde incluyen la mortalidad, el consumo de alimento, la ganancia de peso y la conversión alimenticia, los cuales permiten evaluar el desempeño del sistema productivo.                
            .row(titulo="Verificación de resultados")
                p.mb-4 La verificación de resultados consiste en comparar los datos obtenidos con los estándares productivos establecidos para cada línea genética, con el fin de identificar posibles desviaciones.
            .row(titulo="Análisis técnico")
                p.mb-4 El análisis técnico de los resultados permite interpretar la información y tomar decisiones. Por ejemplo, un alto consumo indica buen desempeño; un bajo peso sugiere problemas nutricionales que requieren ajustar la dieta; y una alta mortalidad señala problemas sanitarios que exigen intervención inmediata.                                
      //- Fin Accordion
    Separador
    //- Inicio Tema2.6
    .row.mt-5
        #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.6 Seguridad y Salud en el Trabajo (SST) en la verificación
    .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade-left")
      .col-lg-1.d-flex.align-items-center.justify-content-center
        figure
          img(src="@/assets/curso/tema1/img4.svg", data-aos="zoom-in", style="width: 80px").mx-auto
      .col-lg-11.mb-0.d-flex.align-items-center
        p.mb-0 La Seguridad y Salud en el Trabajo en la verificación busca proteger al personal mediante el uso de medidas preventivas, garantizando condiciones seguras durante las actividades de control, inspección y manejo en granjas avícolas.
    p(data-aos="fade-right") A continuación, se detallan los elementos esenciales para realizar la verificación en torno a la seguridad y salud en el trabajo:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-right")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide02_1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Verificación del uso de EPP
              p La verificación del uso de EPP incluye guantes, tapabocas, botas y overol, garantizando la protección del trabajador durante actividades avícolas.              
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide02_2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Evaluación del cumplimiento de normas SST
              p El uso correcto de los elementos de protección personal, la aplicación adecuada de protocolos y el mantenimiento de condiciones seguras son fundamentales para garantizar la seguridad y eficiencia en las actividades productivas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide02_3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Reporte de incidentes
              p Debe incluir:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Fecha.
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Descripción.
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Causa.
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Acción correctiva.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide02_4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Registro de condiciones de seguridad
              p Se registran los riesgos identificados y las medidas de control implementadas para prevenir accidentes y garantizar condiciones seguras en las actividades productivas.
    //- Fin Slideshow
    .row.bg-color-1
      .col-12
        .p-5
          Separador
          //- Inicio Tema2.7
          .row.mt-5
              #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 2.7	Manejo de residuos y condiciones sanitarias
          p(data-aos="fade-left") Te generé una imagen con cuatro ilustraciones simples que representan el uso de EPP, cumplimiento SST, reporte de incidentes y condiciones de seguridad, todo sin texto y listo para usar.
          //- Inicio Accordion
          .bg--img_03.mt-5
            .row.justify-content-center        
              .col-lg-9
                AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                  .row(titulo="Disposición de residuos")
                      p.mb-4 Los residuos que se generan son:
                      ul.lista-ul.mb-0
                        li.d-flex
                          i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                          span.ms-2 <b>Residuos orgánicos:</b> restos de alimento, excretas y materia vegetal, que pueden descomponerse o aprovecharse. 
                        li.d-flex
                          i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                          span.ms-2 <b>Residuos biológicos:</b> aves muertas o material contaminado, con riesgo sanitario y manejo especializado. 
                        li.d-flex
                          i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                          span.ms-2 <b>Residuos químicos:</b> desinfectantes, medicamentos o plaguicidas, que requieren manejo seguro.
                  .row(titulo="Manejo de cama de galpones")
                    p.mb-4 Para el manejo de cama de galpones se debe realizar:
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 <b>Reemplazo periódico:</b> cambio regular de materiales para evitar contaminantes. 
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 <b>Control de humedad:</b> regulación para prevenir microorganismos y gases. 
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 <b>Disposición adecuada:</b> manejo correcto de residuos según normas sanitarias.                      
                  .row(titulo="Control sanitario")
                    p.mb-4 El control sanitario consiste en realizar:
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 <b>Limpieza:</b> eliminación de suciedad y residuos. 
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 <b>Desinfección:</b> reducción de microorganismos con químicos. 
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 <b>Vacío sanitario:</b> periodo sin aves para prevenir enfermedades.                      
            //- Fin Accordion
    Separador
    //- Inicio Tema2.8
    .row.mt-5
        #t_2_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.8	Manejo operativo de aves
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-5.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El manejo operativo de aves comprende el conjunto de actividades técnicas realizadas durante el proceso productivo, orientadas a garantizar el bienestar animal, la sanidad y la eficiencia del sistema, mediante prácticas adecuadas de alimentación, ambiente, bioseguridad y control del lote.
    p(data-aos="fade-right") A lo largo de este segmento, se presentarán las actividades que forman parte del manejo operativo de las aves.
    //- Pestanas horizontales
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Captura de aves")
            .row
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/pestana01_1.png')
              .col-md-7.mb-4.mb-md-0
                h4 Captura de aves
                p Debe realizarse evitando estrés, golpes y lesiones, aplicando principios de bienestar animal.
          .py-3.py-md-4(titulo="Enjaulado o enguacalado")
            .row
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema2/pestana01_2.png')
              .col-md-7
                h4 Enjaulado o enguacalado
                p Las recomendaciones incluyen no sobrecargar a las aves, realizar una manipulación suave y evitar golpes, con el fin de garantizar su bienestar y prevenir lesiones durante el manejo.
          .py-3.py-md-4(titulo="Buenas prácticas de manipulación")
            .row
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema2/pestana01_3.png')
              .col-md-7
                h4 Buenas prácticas de manipulación
                p Las buenas prácticas de manipulación de aves son:
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    span.ms-2 Sujetar correctamente.
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    span.ms-2 Evitar presión excesiva.
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    span.ms-2 Reducir tiempos de manejo.
          .py-3.py-md-4(titulo="Manejo operativo")
            .row
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema2/pestana01_4.png')
              .col-md-7
                h4 Manejo operativo
                p El proceso de manejo de aves comprende una secuencia que inicia con la captura, continúa con la manipulación, seguido del enjaulado y finaliza con el transporte, garantizando un manejo adecuado en cada etapa.
    //- Pestanas horizontales
    Separador
    //- Inicio Tema2.9
    .row.mt-5
        #t_2_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.9	Verificación del proceso de transporte
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-5.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La verificación del proceso de transporte consiste en evaluar que el traslado de las aves se realice en condiciones adecuadas, garantizando su bienestar, evitando estrés y lesiones, y cumpliendo con los protocolos de manejo, bioseguridad y normatividad vigente.
    p(data-aos="fade-right") Las condiciones de transporte, el bienestar animal en traslado, el control y seguimiento del proceso son los siguientes:
    //- Inicio Accordion
    .bg--img_03.mt-5
      .row.justify-content-center
        .col-lg-3 
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema2/img8.png").img400.m-auto
        .col-lg-9
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Condiciones de transporte")
                p.mb-4 El transporte de aves requiere condiciones adecuadas para garantizar bienestar, seguridad y eficiencia durante todo el proceso.
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    span.ms-2 Equipos funcionando correctamente. 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    span.ms-2 Ventilación adecuada. 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    span.ms-2 Densidad controlada. 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    span.ms-2 Protección climática.
            .row(titulo="Bienestar animal en traslado")
                p.mb-4 En el transporte de aves se debe minimizar el estrés, evitar el hacinamiento y reducir el tiempo de traslado, garantizando así su bienestar y disminuyendo riesgos sanitarios y productivos.
            .row(titulo="Control y seguimiento del proceso")
                p.mb-4 La verificación del transporte de aves incluye evaluar que el vehículo cuente con condiciones adecuadas, que el tiempo de traslado esté dentro del rango permitido, que las aves se encuentren sin lesiones ni mortalidad y que la documentación esté completa.
      //- Fin Accordion
    Separador
    //- Inicio Tema2.10
    .row.mt-5
        #t_2_10.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.10 Contingencias: tipos y características
    p(data-aos="fade-left") El sistema de bioseguridad en la producción avícola es un conjunto de medidas preventivas, organizadas y obligatorias que buscan evitar la entrada y propagación de enfermedades en la granja. Su correcta implementación, mediante planes, controles, infraestructura adecuada y manejo de insumos y residuos, garantiza la sanidad, el bienestar animal, el cumplimiento normativo y la sostenibilidad del sistema productivo.
    //- Inicio Video
    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nHjl83QvSUw?si=PYOSxqLdAk88V5nb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    //- Fin Video
    p(data-aos="fade-left") Para complementar los conocimientos adquiridos, se presenta el siguiente documento anexo:
    .row.justify-content-center.mb-4
      .col-lg-12
        .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-5.p-4.rounded-4           
          .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
            img(src='@/assets/curso/tema1/img3.svg', style="width: 80px")          
          .flex-grow-1.text-center.text-lg-start
            h4.mb-2 Plan de bioseguridad
            p.mb-0 Se invita a consultar el documento Plan de Bioseguridad, el cual presenta de manera estructurada las medidas, procedimientos y lineamientos necesarios para garantizar la prevención de riesgos y el adecuado manejo sanitario en los diferentes entornos.
          .mt-3.mt-lg-0.ps-lg-4            
            a.btn.btn-danger.w-buttons.d-flex.align-items-center.justify-content-center.p-3(:href="obtenerLink('/downloads/Lectura-Plan-de-bioseguridad.docx')" target="_blank")
              span.fw-bold.me-2 Descargar
              i.fas.fa-file-download



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
