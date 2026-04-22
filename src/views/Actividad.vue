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
      tema:
        'Evaluación integral del manejo técnico en la producción de pollos de engorde.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión de los conocimientos relacionados con el manejo productivo, sanitario, ambiental y de bioseguridad en la producción de pollos de engorde, con el fin de verificar la aplicación de criterios técnicos y normativos en el sistema avícola.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el objetivo del plan de mejoramiento?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar ventas y costos productivos altos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Garantizar eficiencia y sanidad aviar total.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir inversión y manejo técnico básico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar registros y controles productivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué buscan las acciones preventivas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Corregir fallas después de su aparición.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar registros en producción avícola.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar problemas sanitarios y productivos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir el control técnico en granjas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Quién debe supervisar el programa sanitario?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Operario sin formación técnica específica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Médico veterinario responsable del sistema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Administrador sin conocimiento sanitario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Visitantes ocasionales de la explotación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué elemento es obligatorio en bioseguridad?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminación total de controles sanitarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducción del manejo de instalaciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Uso de elementos de protección personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumento del ingreso libre de visitantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué permite el monitoreo permanente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la necesidad de registros técnicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Detectar desviaciones en el sistema productivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la observación del comportamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el uso de protocolos establecidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es un parámetro ambiental clave?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cantidad de operarios en la granja.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Número de visitas al sistema productivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tipo de uniforme del trabajador rural.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Temperatura adecuada según edad del ave.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué rango de humedad es recomendado?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener niveles entre cincuenta y setenta.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mantener los niveles entre diez y veinte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantener niveles entre ochenta y noventa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mantener los niveles entre cero y veinticinco.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es el nivel máximo de amoníaco?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor a cincuenta partes por millón ideal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Igual a cien partes por millón adecuado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Menor a veinte partes por millón permitido.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Superior a doscientos partes por millón.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué indica aves agrupadas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alta temperatura en el ambiente interno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Excelente manejo del sistema productivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Condiciones ideales de ventilación total.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Baja temperatura o corrientes de aire.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué mide la densidad de aves?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cantidad de alimento por ave diaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Número de operarios por galpón activo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cantidad de aves por metro cuadrado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cantidad de equipos en la granja.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué ocurre con alta densidad?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuye completamente el consumo diario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejora el bienestar animal constantemente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elimina riesgos sanitarios en granja avícola.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementa estrés y enfermedades en aves.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: 'Actividades opcionales sin control técnico.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Actividades opcionales sin control técnico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registros informales sin seguimiento ni control.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Procedimiento estandarizado para actividades.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Norma eliminada del sistema productivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué permite la estandarización?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Unificar procesos y reducir variabilidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar controles técnicos en granjas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar errores humanos constantes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la eficiencia productiva total.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué mide la mortalidad?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cantidad de alimento consumido diario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Niveles de ventilación del galpón.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cantidad de operarios en la granja.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porcentaje de aves muertas en el ciclo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué es una contingencia?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Actividad programada en el sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evento inesperado que afecta producción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Proceso normal dentro del manejo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registros obligatorios del sistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué incluye el manejo de contingencias?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminación total de registros productivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Suspensión del control sanitario general.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Detección evaluación acción reporte seguimiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducción de protocolos en granjas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué es el bienestar animal?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Procesos para eliminar la producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Actividades sin control técnico definido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Métodos para reducir bioseguridad total.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Normas para garantizar sanidad y bienestar.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Para qué sirven los registros?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permiten trazabilidad y control técnico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminan la necesidad de auditorías.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducen la información productiva.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitan la toma de decisiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué incluye la SST?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminación de riesgos en producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducción de equipos de protección.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Protección de salud y seguridad laboral.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Suspensión de normas laborales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué es la bioseguridad?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proceso para eliminar registros técnicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Método para reducir control sanitario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estrategia para aumentar riesgos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sistema para prevenir enfermedades aviares.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
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
