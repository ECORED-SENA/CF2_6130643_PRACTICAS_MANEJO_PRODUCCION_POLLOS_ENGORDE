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
    .bg-full-width.bg-fondo-slider.mb-3(data-aos="fade-left")
      .p-4.p-md-5
        .tarjeta.tarjeta--gris.p-4
          PasosB.color-acento-contenido
            .row(titulo="")
              .col-md-7.mb-4.mb-md-0
                h3 Programa Sanitario y de Vacunación
                p Las acciones preventivas buscan anticipar enfermedades, fallas productivas y riesgos sanitarios mediante programas técnicos estructurados.
                p Estos programas se basan en criterios científicos, normativos y de bienestar animal, garantizando el control adecuado de los procesos y la eficiencia del sistema productivo.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema1/slide01_1.png')
            .row(titulo="")
              .col-md-7.mb-4.mb-md-0
                h3 Bioseguridad como acción preventiva
                p El programa sanitario debe complementarse con estrictas medidas de bioseguridad como control de ingreso, uso de EPP, desinfección, manejo de visitantes, pediluvios, control de plagas y vacío sanitario.
                p Estas acciones previenen enfermedades, mantienen el estatus sanitario y garantizan la bioseguridad de la granja.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema1/slide01_2.png')
            .row(titulo="")
              .col-md-7.mb-4.mb-md-0
                h3 Monitoreo y seguimiento preventivo
                p El monitoreo permanente permite detectar desviaciones mediante la observación del lote, el control de consumo, la mortalidad y la calidad de la cama.
                p Este seguimiento facilita decisiones oportunas y garantiza productividad y bienestar animal.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema1/slide01_3.png')
    //- Fin Slideshow
    .row.justify-content-center.mb-4
      .col-lg-11         
        .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-5.p-4.rounded-4           
          .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
            img(src='@/assets/curso/tema1/img3.svg', style="width: 80px")          
          .flex-grow-1.text-center.text-lg-start
            h4.mb-2 Programas técnicos para la prevención sanitaria
            p.mb-0 Se invita a leer el documento, donde se aborda los principales programas para anticipar la aparición de enfermedades, fallas productivas y riesgos sanitarios.
          .mt-3.mt-lg-0.ps-lg-4            
            a.btn.btn-danger.w-buttons.d-flex.align-items-center.justify-content-center.p-3(:href="obtenerLink('/downloads/Lectura-Programas-técnicos-para-la-prevención-sanitaria.docx')" target="_blank")
              span.fw-bold.me-2 Descargar
              i.fas.fa-file-download
    .row.justify-content-center.mb-4
      .col-lg-11         
        .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-5.p-4.rounded-4           
          .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
            img(src='@/assets/curso/tema1/img3.svg', style="width: 80px")          
          .flex-grow-1.text-center.text-lg-start
            h4.mb-2 Proceso de la producción avícola
            p.mb-0 Como apoyo a este tema, se recomienda revisar el video “Proceso de la producción avícola”, en el cual informan las acciones preventivas en el proceso productivo. 
          .mt-3.mt-lg-0.ps-lg-4            
            a.btn.btn-danger.w-buttons.d-flex.align-items-center.justify-content-center.p-3(href="https://www.youtube.com/watch?v=7ra1cKWHu1M&t=15s" target="_blank")             
              span.fw-bold.me-2 Abrir web
              i.fas.fa-link
    .row.bg-color-1
      .col-12
        .p-5
          Separador
          //- Inicio Tema1.2
          .row.mt-5
              #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 1.2	Manejo ambiental: control y seguimiento
          p(data-aos="fade-left") El manejo ambiental en pollos de engorde es clave para sanidad, bienestar y productividad, mediante control de temperatura, humedad, ventilación e iluminación, con seguimiento permanente y cumplimiento normativo para garantizar eficiencia productiva.
          //- Título con imagen
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3
            .titulo-con-imagen.mb-5(data-aos="fade-right")
              .titulo-con-imagen__fondo
                img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
                h3.titulo-con-imagen__texto Control ambiental
          //- Título con imagen
          .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade-left")
            .col-lg-1.d-flex.align-items-center.justify-content-center
              figure
                img(src="@/assets/curso/tema1/img4.svg", data-aos="zoom-in", style="width: 80px").mx-auto
            .col-lg-11.mb-0.d-flex.align-items-center
              p.mb-0 El control ambiental consiste en la implementación de estrategias y prácticas que permitan regular las condiciones internas del galpón, garantizando el confort térmico y fisiológico de las aves.
          p(data-aos="fade-right") Entre las principales variables a controlar se encuentran:
        //- Pestanas horizontales
        .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
            TabsC.color-acento-contenido.mt-1
              .py-3.py-md-4(titulo="Temperatura")
                .row
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/pestana01_1.png')
                  .col-md-7.mb-4.mb-md-0
                    h4 Temperatura
                    p Debe ajustarse según la edad de las aves. En pollitos recién nacidos se requieren temperaturas entre 32 °C y 34 °C, disminuyendo progresivamente hasta alcanzar entre 20 °C y 24 °C en etapas finales. Un manejo inadecuado puede generar estrés térmico, disminución del consumo y aumento de mortalidad.
              .py-3.py-md-4(titulo="Ventilación")
                .row
                  .col-md-5.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/pestana01_2.png')
                  .col-md-7
                    h4 Ventilación
                    p Es fundamental para el suministro de oxígeno y la eliminación de gases nocivos como amoníaco y dióxido de carbono. Puede ser natural o mecánica, y debe garantizar una adecuada renovación del aire sin generar corrientes directas sobre las aves.
              .py-3.py-md-4(titulo="Humedad relativa")
                .row
                  .col-md-5.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/pestana01_3.png')
                  .col-md-7
                    h4 Humedad relativa
                    p Debe mantenerse entre 50% y 70%. Niveles altos favorecen enfermedades respiratorias y deterioro de la cama, mientras que niveles bajos generan polvo y problemas respiratorios.
              .py-3.py-md-4(titulo="Calidad del aire")
                .row
                  .col-md-5.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/pestana01_4.png')
                  .col-md-7
                    h4 Calidad del aire
                    p Se debe controlar la concentración de gases, especialmente amoníaco (NH₃), que no debe superar 20 ppm. Altos niveles afectan el sistema respiratorio, el rendimiento productivo y el bienestar animal.
              .py-3.py-md-4(titulo="Iluminación")
                .row
                  .col-md-5.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/pestana01_5.png')
                  .col-md-7
                    h4 Iluminación
                    p Debe ser uniforme y controlada, con programas de luz que favorezcan el consumo de alimento, el crecimiento y el descanso de las aves. La intensidad y duración deben ajustarse según la etapa productiva.
              .py-3.py-md-4(titulo="Manejo de la cama")
                .row
                  .col-md-5.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/pestana01_6.png')
                  .col-md-7
                    h4 Manejo de la cama
                    p La cama debe mantenerse seca, suelta y libre de acumulación excesiva de humedad. Una mala calidad de cama genera lesiones, enfermedades y afecta el bienestar animal.
              .py-3.py-md-4(titulo="Densidad poblacional")
                .row
                  .col-md-5.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema1/pestana01_6.png')
                  .col-md-7
                    h4 Densidad poblacional
                    p Debe ajustarse a los lineamientos técnicos y normativos, evitando el hacinamiento, el cual incrementa el estrés, la competencia por recursos y la propagación de enfermedades.    
            .row.justify-content-center.align-items-stretch.g-0.mb-5.mt-5.bg-color-7(data-aos="fade-left")
              .col-lg-1.d-flex.align-items-center.justify-content-center
                figure
                  img(src="@/assets/curso/tema1/img5.svg", data-aos="zoom-in", style="width: 80px").mx-auto
              .col-lg-11.mb-0.d-flex.align-items-center
                p.mb-0 El control ambiental requiere el uso de equipos como termómetros, higrómetros, ventiladores, extractores y sistemas de calefacción, así como la capacitación del personal para interpretar las condiciones del ambiente y el comportamiento de las aves.
            //- Título con imagen
            .bg-full-width.mt-5
              .px-4.px-md-5.pb-md-3
              .titulo-con-imagen.mb-5(data-aos="fade-right")
                .titulo-con-imagen__fondo
                  img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
                  h3.titulo-con-imagen__texto Seguimiento
            //- Título con imagen
    .row.mb-10
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg.bg-color-3.p-4
            p.mb-0 El seguimiento consiste en la verificación sistemática de las condiciones ambientales y en la evaluación de la eficacia de las acciones implementadas para su control.
        .row.align-items-start.mb-10(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/tema1/img4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p(data-aos="fade-left") Este proceso incluye la recolección, registro y análisis de información en tiempo real, permitiendo la toma de decisiones oportunas frente a posibles desviaciones.
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img6.png", data-aos="zoom-in" style="max-width: 458px") 
    p.mt-5.text-center(data-aos="fade-left") Las actividades de seguimiento incluyen:
    .row.bg-color-1
      .col-12
        .p-5
          //- Carrusel
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-12.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-4 col-lg-4")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta01_1.svg', style="max-width: 90px").mx-auto.mb-3                        
                        p.card-text.text-center
                        | Registro diario de temperatura, humedad y ventilación.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta01_2.svg', style="max-width: 90px").mx-auto.mb-3                        
                        p.card-text.text-center
                        | Observación del comportamiento de las aves (distribución, jadeo, agrupamiento).
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta01_3.svg', style="max-width: 90px").mx-auto.mb-3                        
                        p.card-text.text-center
                        | Control del consumo de alimento y agua.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta01_4.svg', style="max-width: 90px").mx-auto.mb-3                        
                        p.card-text.text-center
                        | Evaluación de la calidad de la cama.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta01_5.svg', style="max-width: 90px").mx-auto.mb-3                        
                        p.card-text.text-center
                        | Monitoreo de niveles de amoníaco.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta01_6.svg', style="max-width: 90px").mx-auto.mb-3                        
                        p.card-text.text-center
                        | Registro de mortalidad y morbilidad
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta01_7.svg', style="max-width: 90px").mx-auto.mb-3                        
                        p.card-text.text-center
                        | Verificación del funcionamiento de equipos
          //- Fin Carrusel
          p(data-aos="fade-right") El seguimiento permite verificar la correcta ejecución de las actividades de manejo y el cumplimiento de protocolos, mediante auditorías e indicadores productivos. Además, el registro de la información garantiza trazabilidad y facilita la toma de decisiones.
          //- Título con imagen
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3
            .titulo-con-imagen.mb-5(data-aos="fade-right")
              .titulo-con-imagen__fondo
                img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
                h3.titulo-con-imagen__texto Importancia
          //- Título con imagen
          p(data-aos="fade-right") El manejo ambiental adecuado es fundamental para garantizar el éxito del sistema de producción de pollo de engorde, ya que impacta directamente en la sanidad, productividad, bienestar animal y rentabilidad.
    .row.mb-10
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg.bg-color-3.p-4
            p.mb-3 Un buen control y seguimiento ambiental permite:
            h4 Beneficios
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check-circle.me-3(style="color:#AD9721")
                p.mb-0 Reducir el estrés térmico en las aves.
              li.d-flex
                i.fas.fa-check-circle.me-3(style="color:#AD9721")
                p.mb-0 Prevenir enfermedades respiratorias y metabólicas.
              li.d-flex
                i.fas.fa-check-circle.me-3(style="color:#AD9721")
                p.mb-0 Mejorar la conversión alimenticia y ganancia de peso.
              li.d-flex
                i.fas.fa-check-circle.me-3(style="color:#AD9721")
                p.mb-0 Disminuir la mortalidad.
              li.d-flex
                i.fas.fa-check-circle.me-3(style="color:#AD9721")
                p.mb-0 Optimizar el uso de recursos (alimento, agua, energía).
              li.d-flex
                i.fas.fa-check-circle.me-3(style="color:#AD9721")
                p.mb-0 Cumplir con la normatividad vigente.
              li.d-flex
                i.fas.fa-check-circle.me-3(style="color:#AD9721")
                p.mb-0 Garantizar condiciones adecuadas de bienestar animal.
        .row.align-items-start.mb-10(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/tema1/img5.svg", style="max-width: 90px").mx-auto
          .col-lg
            p(data-aos="fade-left") El manejo ambiental garantiza el bienestar animal al proporcionar condiciones de confort, favorece el cumplimiento normativo para certificaciones y mejora la sostenibilidad del sistema productivo al optimizar recursos y reducir impactos ambientales.             
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img7.png", data-aos="zoom-in" style="max-width: 458px") 
    Separador
    //- Inicio Tema1.3
    .row.mt-5
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3	Condiciones ambientales: monitoreo
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El monitoreo ambiental en pollos de engorde permite evaluar y controlar variables del galpón mediante medición y seguimiento continuo, facilitando decisiones oportunas, previniendo problemas sanitarios y mejorando el bienestar animal y la productividad.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Parámetros a controlar
    //- Título con imagen
    .row.bg-color-1
      .col-12
        .p-5          
          p.mb-5(data-aos="fade-left") A continuación, se presentan los principales parámetros ambientales que deben ser monitoreados en granjas de pollo de engorde:
          //- Inicio Tabla
          .row.justify-content-center(data-aos="fade-left")
            .col-md-10
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 1.
                span  Parámetros ambientales en producción avícola.
              .tabla-a
                table
                  thead
                    tr
                      th(style="width: 20%") Parámetro
                      th(style="width: 30%") Rango recomendado
                      th(style="width: 30%") Impacto en las aves
                      th(style="width: 20%") Frecuencia de control
                  tbody
                    tr
                      td Temperatura
                      td 32–34 °C (inicio) / 20–24 °C (final)
                      td Estrés térmico, consumo, crecimiento
                      td Diario (varias veces)
                    tr
                      td Humedad relativa
                      td 50 % – 70 %
                      td Problemas respiratorios, calidad de cama
                      td Diario
                    tr
                      td Amoníaco (NH₃)
                      td < 20 ppm
                      td Irritación, enfermedades respiratorias
                      td Diario
                    tr
                      td Ventilación
                      td Flujo constante sin corrientes
                      td Oxigenación, eliminación de gases
                      td Permanente
                    tr
                      td Iluminación
                      td Según programa (lux/horas)
                      td Consumo, comportamiento, descanso
                      td Diario
                    tr
                      td Calidad de cama
                      td Seca y suelta
                      td Lesiones, infecciones, bienestar
                      td Diario
                    tr
                      td Densidad poblacional
                      td Según kg/m² normativo
                      td Estrés, competencia, mortalidad
                      td Por lote                    
          //- FinTabla
        .row.justify-content-center(data-aos="fade-left")
          .col-9
            p.mb-5.bg-color-3.p-4 La temperatura influye directamente en el consumo de alimento, el crecimiento y el confort térmico de las aves. Asimismo, la humedad relativa regula la calidad del aire y de la cama. Por su parte, el amoníaco (NH₃), generado por la descomposición de la pollinaza, afecta el sistema respiratorio de las aves.
    p.mb-5(data-aos="fade-left") En la siguiente tabla, se presentan los parámetros ambientales de pollos de engorde.
    //- Inicio Tabla
    .row.justify-content-center(data-aos="fade-left")
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 2.
          span  Cuadro Técnico de Parámetros Ambientales en Pollos de Engorde.
        .tabla-a
          table
            thead
              tr
                th(style="width: 10%") Edad (días)
                th(style="width: 10%") Temperatura (°C)
                th(style="width: 10%") Humedad Relativa (%)
                th(style="width: 10%") Amoníaco (ppm)
                th(style="width: 30%") Observaciones Técnicas
                th(style="width: 30%") Acción Correctiva
            tbody
              tr
                td 1 – 3
                td 30 – 32
                td 65 – 70
                td 0 – 5
                td Pollitos sensibles
                td Ajustar calefacción
              tr
                td 4 – 7
                td 28 – 30
                td 60 – 70
                td < 10
                td Inicio adaptación
                td Ventilación leve
              tr
                td 8 – 14
                td 26 – 28
                td 55 – 65
                td < 10
                td Mayor consumo
                td Ajustar ventilación
              tr
                td 15 – 21
                td 24 – 26
                td 50 – 60
                td < 15
                td Crecimiento acelerado
                td Revisar humedad
              tr
                td 22 – 28
                td 22 – 24
                td 50 – 60
                td < 15
                td Producción de calor
                td Aumentar ventilación
              tr
                td 29 – 35
                td 20 – 22
                td 50 – 60
                td < 20
                td Etapa final
                td Control gases
              tr
                td 36 – sacrificio
                td 18 – 22
                td 50 – 70
                td ≤ 20
                td Peso final
                td Evitar estrés                    
    //- FinTabla
    .row.justify-content-center.mt-5(data-aos="fade-left")
      .col-9
        p.mb-5.bg-color-3.p-4 La interpretación del cuadro indica que las temperaturas altas al inicio son necesarias para la supervivencia de las aves, mientras que su reducción gradual evita el estrés térmico. Asimismo, niveles bajos de amoníaco reflejan una buena ventilación y una humedad controlada previene enfermedades.
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Métodos de monitoreo
    //- Título con imagen
    .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade-left")
      .col-lg-1.d-flex.align-items-center.justify-content-center
        figure
          img(src="@/assets/curso/tema1/img4.svg", data-aos="zoom-in", style="width: 80px").mx-auto
      .col-lg-11.mb-0.d-flex.align-items-center
        p.mb-0 El monitoreo ambiental debe realizarse mediante métodos técnicos, observacionales y registros sistemáticos que permitan evaluar las condiciones del galpón en tiempo real.
    p(data-aos="fade-right") Los métodos de monitoreo ambiental se presentan en la siguiente tabla:
    //- Inicio Tabla
    .row.justify-content-center(data-aos="fade-left")
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 3.
          span  Métodos de monitoreo ambiental
        .tabla-a
          table
            thead
              tr
                th(style="width: 10%") Variable
                th(style="width: 10%") Método de medición
                th(style="width: 10%") Instrumento utilizado
                th(style="width: 10%") Tipo de monitoreo
            tbody
              tr
                td Temperatura
                td Lectura directa
                td Termómetro digital
                td Cuantitativo
              tr
                td Humedad
                td Medición relativa
                td Higrómetro
                td Cuantitativo
              tr
                td Amoníaco
                td Sensor o detector
                td Medidor de gases
                td Cuantitativo
              tr
                td Ventilación
                td Observación de flujo de aire
                td Anemómetro / observación
                td Mixto
              tr
                td Iluminación
                td Medición de intensidad
                td Luxómetro
                td Cuantitativo
              tr
                td Comportamiento
                td Observación del lote
                td Lista de chequeo
                td Cualitativo
              tr
                td Consumo
                td Registro diario
                td Formatos de control
                td Cuantitativo
    //- Fin Tabla
    p.mt-5(data-aos="fade-right") Para realizar el monitoreo ambiental en avicultura, se requieren los siguientes pasos:
    .row.bg-color-1
      .col-12
        .p-5
          .row.justify-content-center.align-items-center(data-aos="fade-left")
            .col-lg-4.col-md-8.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/img10.png")
            .col-lg-4.col-md-6
              .row
                .col-12.mb-4
                  .card-custom
                    .card-custom__side-icon
                      img(src="@/assets/curso/tema1/icono-tarjeta.svg")
                    .card-custom__content
                      p.mb-0 Medición de variables.          
                .col-12.mb-4
                  .card-custom
                    .card-custom__side-icon
                      img(src="@/assets/curso/tema1/icono-tarjeta.svg")
                    .card-custom__content
                      p.mb-0 Análisis de información.
                .col-12.mb-4
                  .card-custom
                    .card-custom__side-icon
                      img(src="@/assets/curso/tema1/icono-tarjeta.svg")
                    .card-custom__content
                      p.mb-0 Toma de decisiones.
            .col-lg-4.col-md-6
              .row
                .col-12.mb-4
                  .card-custom
                    .card-custom__side-icon
                      img(src="@/assets/curso/tema1/icono-tarjeta.svg")
                    .card-custom__content
                      p.mb-0 Registro de datos.
                .col-12.mb-4
                  .card-custom
                    .card-custom__side-icon
                      img(src="@/assets/curso/tema1/icono-tarjeta.svg")
                    .card-custom__content
                      p.mb-0 Identificación de desviaciones.
                .col-12.mb-4
                  .card-custom
                    .card-custom__side-icon
                      img(src="@/assets/curso/tema1/icono-tarjeta.svg")
                    .card-custom__content
                      p.mb-0 Implementación de acciones
          p.mt-3(data-aos="fade-right") Prosiguiendo con el análisis, se presenta la lista de chequeo:
          //- Slideshow
          .bg-full-width.bg-fondo-slider.mb-3
                  .p-4.p-md-5
                    .bg-white.p-4.tarjeta(data-aos="fade-left")
                      .row.align-items-center.p-4.p-md-5
                        .col-lg-5.order-2
                          figure
                            img(src="@/assets/curso/tema1/img11.png")
                        .col-lg-7.order-1.mb-3.mb-lg-0
                          h4 Lista de chequeo
                          ul.lista-ul.mb-0
                            li.d-flex
                              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                              p.mb-0 Temperatura dentro del rango.
                            li.d-flex
                              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                              p.mb-0 Aves distribuidas uniformemente.
                            li.d-flex
                              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                              p.mb-0 Ausencia de jadeo o amontonamiento.
                            li.d-flex
                              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                              p.mb-0 Cama seca y sin olores fuertes.
                            li.d-flex
                              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                              p.mb-0 Buena ventilación (sin gases acumulados).
                            li.d-flex
                              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                              p.mb-0 Equipos funcionando correctamente.                      
          //- Fin Slideshow
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Acciones de control
    //- Título con imagen
    p(data-aos="fade-right") Cuando el monitoreo evidencia desviaciones en las condiciones ambientales, se deben implementar acciones de control inmediatas para restablecer el equilibrio del sistema. Las acciones de control ambiental son:
    .row.bg-color-1
      .col-12
        .p-5
          //- Inicio Tabla
          .row.justify-content-center(data-aos="fade-left")
            .col-md-10
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 4.
                span  Acciones de control ambiental.
              .tabla-a
                table
                  thead
                    tr
                      th(style="width: 30%") Problema detectado
                      th(style="width: 35%") Acción de control
                      th(style="width: 35%") Resultado esperado                      
                  tbody
                    tr
                      td Alta temperatura
                      td Aumentar ventilación, reducir densidad
                      td Disminución de estrés térmico                      
                    tr
                      td Baja temperatura
                      td Ajustar calefacción
                      td Confort térmico
                    tr
                      td Alta humedad
                      td Mejorar ventilación, cambiar cama
                      td Reducción de humedad y patógenos
                    tr
                      td Exceso de amoníaco
                      td Ventilar, renovar cama
                      td Mejor calidad del aire  
                    tr
                      td Mala ventilación
                      td Revisar extractores/ventiladores
                      td Flujo de aire adecuado  
                    tr
                      td Cama húmeda
                      td Reemplazo o volteo de cama
                      td Mejor bienestar y sanidad  
                    tr
                      td Mala distribución aves
                      td Ajustar temperatura/ventilación
                      td Uniformidad del lote             
          //- Fin Tabla
          .row.justify-content-center.align-items-center.mb-5.mt-5
            .col-lg-5.mb-4.mb-lg-0
              .image-deco-container                
                .deco-bar-top
                .deco-dots
                figure.mb-0
                  img(src="@/assets/curso/tema1/img12.png", alt="Persona sosteniendo un pollito")            
            .col-lg-7
              .bg-color-soft-blue.p-4.rounded-4.mb-4.bg-color-3
                p.mb-3 Para aplicar los conocimientos adquiridos, se presenta un ejemplo práctico en un control ambiental:
                .practical-focus.p-4
                  h4.mb-3.text-center Enfoque práctico
                  .bg-white.p-3.rounded-3
                    p.mb-1 Tipo flujo de acción:
                    p.mb-0 Detectar problema → Registrar → Analizar causa → Aplicar acción → Verificar resultado → Ajustar manejo
              p.mb-0 El monitoreo ambiental es fundamental porque permite garantizar el bienestar animal, prevenir enfermedades, mejorar la productividad y reducir pérdidas económicas. Además, facilita el cumplimiento de la normatividad del ICA y la toma de decisiones basadas en datos, fortaleciendo la capacidad de control y verificación de las actividades de manejo para asegurar un proceso técnico, eficiente y sostenible.
    Separador
    //- Inicio Tema1.4
    .row.mt-5
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4	Densidad de aves: ajuste técnico
    .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade-left")
      .col-lg-1.d-flex.align-items-center.justify-content-center
        figure
          img(src="@/assets/curso/tema1/img4.svg", data-aos="zoom-in", style="width: 80px").mx-auto
      .col-lg-11.mb-0.d-flex.align-items-center
        p.mb-0 La densidad en pollos de engorde influye en bienestar, sanidad y productividad. Su adecuado manejo garantiza espacio, confort y eficiencia, mientras que una densidad inadecuada genera estrés, enfermedades y pérdidas económicas.
    p(data-aos="fade-right") En esta sección se abordarán los criterios, rangos técnicos, ajustes, importancia y beneficios del manejo adecuado de la densidad de aves.
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide02_1.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Criterios técnicos
                    p La densidad de aves se define según criterios como el peso final, tipo de galpón, ventilación, clima, calidad de la cama, equipos disponibles, edad de las aves y bienestar animal.                    
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide02_2.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Rangos técnicos de densidad en pollo de engorde
                    p La densidad en pollo de engorde varía según el sistema y el clima: menor en climas cálidos y galpones abiertos, y mayor en ambientes controlados y climas fríos para mantener el confort térmico. 
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide02_3.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Ajustes de densidad
                    p El ajuste de densidad es un proceso dinámico basado en el monitoreo ambiental y productivo. Incluye reducir densidad en altas temperaturas, redistribuir aves, separar por tamaño, ampliar espacio, ajustar el lote y mejorar ventilación para garantizar bienestar y eficiencia.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide02_4.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Importancia
                    p El manejo adecuado de la densidad de aves es fundamental para garantizar la sostenibilidad y eficiencia del sistema productivo.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide02_5.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Beneficios de una densidad adecuada
                     ul.lista-ul.mb-0.mt-5
                      li.d-flex
                        i.fas.fa-check-circle.me-3(style="color:#AD9721")
                        p.mb-0 Mejora el bienestar animal (menos estrés y agresividad).
                      li.d-flex
                        i.fas.fa-check-circle.me-3(style="color:#AD9721")
                        p.mb-0 Reduce la incidencia de enfermedades
                      li.d-flex
                        i.fas.fa-check-circle.me-3(style="color:#AD9721")
                        p.mb-0 Optimiza el consumo de alimento y agua.
                      li.d-flex
                        i.fas.fa-check-circle.me-3(style="color:#AD9721")
                        p.mb-0 Mejora la conversión alimenticia.
                      li.d-flex
                        i.fas.fa-check-circle.me-3(style="color:#AD9721")
                        p.mb-0 Disminuye la mortalidad.
                      li.d-flex
                        i.fas.fa-check-circle.me-3(style="color:#AD9721")
                        p.mb-0 Favorece la uniformidad del lote.
                      li.d-flex
                        i.fas.fa-check-circle.me-3(style="color:#AD9721")
                        p.mb-0 Facilita el manejo y control sanitario
    //- Fin Slideshow
    .row.justify-content-center.align-items-stretch.g-0.mb-5.mt-5.bg-color-7(data-aos="fade-left")
      .col-lg-1.d-flex.align-items-center.justify-content-center
        figure
          img(src="@/assets/curso/tema1/img5.svg", data-aos="zoom-in", style="width: 80px").mx-auto
      .col-lg-11.mb-0.d-flex.align-items-center
        p.mb-0 Una densidad adecuada favorece el bienestar animal, el acceso a recursos y el confort de las aves. Además, permite cumplir la normatividad, facilita la comercialización y fortalece la toma de decisiones para un manejo eficiente.
    Separador
    //- Inicio Tema1.5
    .row.mt-5
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.5	Control del estado y comportamiento de las aves
    .row.mb-10
      .col-lg-7
        .row.align-items-start.mb-10(data-aos="fade-left")  
          p(data-aos="fade-left") El control del estado y comportamiento de las aves permite evaluar su salud, bienestar y manejo mediante observación y análisis de indicadores, facilitando la detección temprana de problemas y la toma de decisiones oportunas. 
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg.bg-color-3.p-4
            p.mb-0 En el presente apartado se conocerá la verificación del comportamiento, la evaluación del estado sanitario y las acciones de intervención.   
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img13.png", data-aos="zoom-in" style="max-width: 458px") 
    //- Pestanas horizontales
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Verificación del comportamiento")
            .row
              .col-md-5
                figure
                  img(src='@/assets/curso/tema1/pestana02_1.png')
              .col-md-7.mb-4.mb-md-0
                h4 Verificación del comportamiento
                p La verificación del comportamiento se basa en la observación de la distribución, actividad y consumo de las aves para identificar su estado sanitario y ambiental.
                p Indicadores como agrupamiento, jadeo o baja actividad permiten detectar problemas. Este proceso incluye observación, análisis, detección de desviaciones y reporte.
          .py-3.py-md-4(titulo="Evaluación del estado sanitario")
            .row
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/pestana02_2.png')
              .col-md-7
                h4 Evaluación del estado sanitario
                p La evaluación sanitaria permite determinar la salud del lote mediante observación clínica, análisis de registros y monitoreo de indicadores productivos como mortalidad, consumo, ganancia de peso y conversión alimenticia.
                p Signos como secreciones, diarrea, cojeras o pérdida de apetito alertan problemas. El proceso incluye observación, registro, análisis, diagnóstico e intervención.
          .py-3.py-md-4(titulo="Acciones de intervención")
            .row
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/pestana02_3.png')
              .col-md-7
                h4 Acciones de intervención
                p Las acciones de intervención se aplican ante alteraciones en el comportamiento o estado sanitario de las aves, con el fin de corregir problemas y evitar su propagación, mediante ajustes en ventilación, temperatura, manejo, alimentación o atención veterinaria.
                p El proceso incluye detectar, registrar, analizar, intervenir y verificar resultados. Estas acciones permiten prevenir enfermedades, mejorar el bienestar, optimizar la productividad y fortalecer la toma de decisiones.
    //- Pestanas horizontales
    Separador
    //- Inicio Tema1.6
    .row.mt-5
        #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.6	Protocolos: concepto y aplicación
    p(data-aos="fade-right") Los protocolos son procedimientos estandarizados que orientan las actividades en la producción avícola, garantizando uniformidad, trazabilidad, bioseguridad y cumplimiento normativo, en áreas como alimentación, limpieza, manejo sanitario y control ambiental. A continuación, se detallarán los aspectos fundamentales.
        //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide03_1.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Aplicación de protocolos establecidos
                    p La aplicación de protocolos consiste en seguir procedimientos definidos para realizar las actividades de forma uniforme y controlada, incluyendo alimentación, limpieza, bioseguridad, vacunación y control ambiental.
                    p El proceso implica identificar la actividad, aplicar el protocolo, ejecutar, registrar y verificar su cumplimiento.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide03_2.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Importancia de los protocolos
                    p Los protocolos son esenciales porque:
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 Garantizan la calidad del proceso productivo. 
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 Reducen errores humanos. 
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 Facilitan la capacitación del personal. 
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 Permiten el cumplimiento de normativas sanitarias. 
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 Mejoran la trazabilidad y control.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide03_3.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Estandarización de procesos
                    p La estandarización consiste en unificar criterios y procedimientos para que todas las actividades se ejecuten de la misma forma, independientemente del operario.
                    h5 Beneficios de la estandarización
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 Mayor eficiencia productiva.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 Reducción de variabilidad.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 Mejor control sanitario.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 Facilita auditorías.
    //- Fin Slideshow
    Separador
    //- Inicio Tema1.7
    .row.mt-5
        #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.7	Cálculo de parámetros de producción
    p(data-aos="fade-right") El cálculo de parámetros productivos permite evaluar el desempeño del lote y tomar decisiones técnicas basadas en datos. La fundamentación básica se detalla a continuación:
    //- Accordeon Pasos
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center
        .col-lg-8.mb-4.mb-lg-0          
          LineaTiempoD.color-primario
            .row(numero="1" titulo="Parámetros productivos básicos")
              .col-md-12.mb-4.mb-md-0
                p Los parámetros productivos básicos en pollos de engorde permiten evaluar el desempeño del sistema mediante indicadores como la mortalidad, que refleja el porcentaje de aves muertas; la ganancia de peso, que mide el crecimiento; el consumo de alimento, que indica la cantidad ingerida; la conversión alimenticia, que relaciona alimento y peso ganado; y el índice de eficiencia, que evalúa el rendimiento global del lote.              
            .row(numero="2" titulo="Métodos de cálculo")              
              .col-md-12
                p A continuación, los principales cálculos:
                p Mortalidad (%)
                figure.ps-md-5.mb-3
                  img(src="@/assets/curso/tema1/formula1.svg",  style="max-width: 370px")
                p Conversión alimenticia (CA)
                figure.ps-md-5
                  img(src="@/assets/curso/tema1/formula2.svg", style="max-width: 250px")
            .row(numero="3" titulo="Interpretación de resultados")
              .col-md-12
                p La interpretación de los parámetros productivos permite evaluar el sistema. Alta mortalidad indica problemas sanitarios; conversión alta, baja eficiencia; bajo peso, manejo inadecuado; y consumo bajo, posible estrés o enfermedad.
        .col-8.col-lg-4
          figure
            img(src="@/assets/curso/tema1/img15.png")
    //- Fin Accordeon Pasos
    Separador
    //- Inicio Tema1.8
    .row.mt-5
        #t_1_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.8	Reporte de novedades y contingencias
    p(data-aos="fade-right") El reporte de novedades es un proceso fundamental para la comunicación efectiva dentro de la granja, permitiendo registrar y actuar frente a situaciones anormales. Dentro de este marco, se analizarán los tipos de novedades, el manejo de contingencias y los canales de reporte.
    //- Inicio Accordion
    .bg--img_03.mt-5
      .row.justify-content-center
        .col-lg-3 
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema1/img16.png", alt="").img400.m-auto
        .col-lg-9
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Tipos de novedades")
                p.mb-4 Las novedades se clasifican en:    
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    span.ms-2 <b>Sanitaria:</b> enfermedades, mortalidad.
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    span.ms-2 <b>Ambiental:</b> temperatura inadecuada. 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    span.ms-2 <b>Operativa:</b> fallas en equipos. 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    span.ms-2 <b>Alimenticia:</b> falta de alimento o agua.
            .row(titulo="Manejo de contingencias")
                p.mb-4 El manejo de contingencias consiste en responder rápidamente a eventos inesperados mediante detección, evaluación, acción, reporte y seguimiento. Ejemplos incluyen activar planta eléctrica, aislar lotes o ajustar la ventilación.
            .row(titulo="Canales de reporte")
                p.mb-4 Los reportes deben realizarse mediante canales definidos:
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    span.ms-2 Registro en formatos físicos o digitales. 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    span.ms-2 Comunicación al encargado o veterinario. 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    span.ms-2 Reporte a sistemas de trazabilidad. 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    span.ms-2 Notificación a entidades si aplica.
      //- Fin Accordion
    .row.bg-color-1
      .col-12
        .p-5      
          Separador
          //- Inicio Tema1.9
          .row.mt-5
              #t_1_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 1.9	Seguridad y Salud en el Trabajo (SST) en el control
          p(data-aos="fade-right") La seguridad y la salud en el trabajo (SST) busca proteger la integridad física y la salud de los trabajadores dentro de la granja.
          //- Inicio Accordion
          .bg--img_03.mt-5
            .row.justify-content-center        
              .col-lg-9
                AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                  .row(titulo="Identificación de riesgos")
                      p.mb-4 En la producción avícola se identifican diferentes tipos de riesgos, como los biológicos, relacionados con virus y bacterias; los físicos, asociados a temperaturas extremas; los químicos, vinculados al uso de desinfectantes; y los ergonómicos, derivados de la manipulación de cargas.                      
                  .row(titulo="Aplicación de protocolos de control")
                    p.mb-4 Medidas de control:
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 Uso de elementos de protección personal (EPP).
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 Lavado de manos. D
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 Desinfección constante.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 Manejo adecuado de químicos.
                  .row(titulo="Supervisión de condiciones seguras")
                    p.mb-4 Incluye
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 Inspección de instalaciones 
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 Verificación de equipos 
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 Control del ambiente laboral 
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 Evaluación del cumplimiento de normas.
                  .row(titulo="Cumplimiento normativo")
                    p.mb-4 En Colombia, la SST en el sector avícola se rige por normas como:
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 Decreto 1072 de 2015 
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 Resoluciones del ICA 
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        span.ms-2 Normativa del Ministerio de Trabajo.                      
            //- Fin Accordion
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
