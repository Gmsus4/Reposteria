// data/privacy.ts

export interface PrivacySection {
  title: string
  items: string[]
}

export const privacy: PrivacySection[] = [
  {
    title: "Responsable de los Datos",
    items: [
      "La empresa responsable del tratamiento de tus datos personales es Tu Postería, con domicilio en Calle Principal #123, Centro, Ciudad.",
      "Para cualquier consulta relacionada con tus datos personales puedes contactarnos en hola@tuposteria.com.",
    ],
  },
  {
    title: "Datos que Recopilamos",
    items: [
      "Nombre completo, para identificarte y personalizar tu pedido.",
      "Correo electrónico, para enviarte confirmaciones y actualizaciones de tu pedido.",
      "Número de teléfono, para coordinar entregas y resolver dudas sobre tu pedido.",
      "Dirección de entrega, únicamente cuando solicitas servicio a domicilio.",
    ],
  },
  {
    title: "Finalidad del Tratamiento",
    items: [
      "Procesar y confirmar tus pedidos de pasteles y postres.",
      "Coordinar la entrega o recogida de tu pedido.",
      "Enviarte información sobre el estado de tu pedido.",
      "Atender dudas, quejas o aclaraciones relacionadas con nuestros productos y servicios.",
      "Cumplir con obligaciones legales y fiscales derivadas de la relación comercial.",
    ],
  },
  {
    title: "Uso Secundario de los Datos",
    items: [
      "Con tu consentimiento, podemos enviarte promociones, descuentos y novedades de temporada.",
      "Puedes retirar tu consentimiento en cualquier momento escribiéndonos a hola@tuposteria.com.",
      "No utilizaremos tus datos para ninguna finalidad distinta a las descritas sin informarte previamente.",
    ],
  },
  {
    title: "Compartición de Datos",
    items: [
      "No vendemos, rentamos ni cedemos tus datos personales a terceros con fines comerciales.",
      "Tus datos pueden ser compartidos con servicios de mensajería o entrega únicamente para coordinar la logística de tu pedido.",
      "En caso de requerimiento legal, podemos divulgar información a autoridades competentes.",
    ],
  },
  {
    title: "Conservación de los Datos",
    items: [
      "Conservamos tus datos durante el tiempo necesario para cumplir con las finalidades descritas.",
      "Los datos fiscales se conservan por el tiempo que establece la legislación mexicana vigente (5 años).",
      "Una vez concluida la relación comercial, tus datos serán eliminados de forma segura.",
    ],
  },
  {
    title: "Derechos TAGB",
    items: [
      "Tienes derecho a Acceder a tus datos personales que conservamos.",
      "Tienes derecho a Rectificar tus datos si son incorrectos o están desactualizados.",
      "Tienes derecho a Cancelar tus datos cuando consideres que no son necesarios para la finalidad del tratamiento.",
      "Tienes derecho a Oponerte al tratamiento de tus datos para fines secundarios.",
      "Para ejercer tus derechos TAGB envía una solicitud a hola@tuposteria.com con tu nombre y la descripción de tu solicitud.",
      "Responderemos tu solicitud en un plazo máximo de 20 días hábiles.",
    ],
  },
  {
    title: "Seguridad de los Datos",
    items: [
      "Implementamos medidas técnicas y organizativas para proteger tus datos contra acceso no autorizado, pérdida o alteración.",
      "El acceso a tus datos está restringido únicamente al personal necesario para procesar tu pedido.",
      "En caso de una brecha de seguridad que afecte tus datos, te notificaremos de inmediato.",
    ],
  },
  {
    title: "Cambios a este Aviso",
    items: [
      "Podemos actualizar este Aviso de Privacidad en cualquier momento.",
      "Te notificaremos cualquier cambio relevante a través de nuestros canales oficiales.",
      "La fecha de última actualización siempre estará visible al inicio de este documento.",
    ],
  },
]