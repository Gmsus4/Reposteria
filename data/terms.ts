export interface TermSection {
  title: string
  items: string[]
}

export const terms: TermSection[] = [
  {
    title: "Pedidos y Anticipación",
    items: [
      "Todos los pedidos deben realizarse con un mínimo de 48 horas de anticipación.",
      "Pasteles personalizados y mesas de postres requieren un mínimo de 5 días hábiles.",
      "Los pedidos se confirman únicamente al recibir el anticipo correspondiente.",
    ],
  },
  {
    title: "Pagos y Anticipos",
    items: [
      "Se requiere un anticipo del 50% para confirmar el pedido.",
      "El saldo restante debe liquidarse al momento de la entrega o recogida.",
      "Aceptamos transferencia bancaria, tarjeta de crédito/débito y efectivo.",
    ],
  },
  {
    title: "Cancelaciones y Reembolsos",
    items: [
      "Cancelaciones con más de 72 horas de anticipación: reembolso del 80% del anticipo.",
      "Cancelaciones entre 24 y 72 horas: reembolso del 50% del anticipo.",
      "Cancelaciones con menos de 24 horas: sin reembolso.",
      "En caso de cancelación por nuestra parte, se reembolsa el 100% del pago.",
    ],
  },
  {
    title: "Entrega y Recogida",
    items: [
      "El cliente puede recoger su pedido en nuestras sucursales en el horario acordado.",
      "Ofrecemos servicio de entrega a domicilio con costo adicional según la zona.",
      "No nos hacemos responsables por daños ocasionados durante el transporte si el cliente recoge el pedido.",
      "El tiempo de entrega puede variar según tráfico y condiciones externas.",
    ],
  },
  {
    title: "Alérgenos e Ingredientes",
    items: [
      "Todos nuestros productos se elaboran en un espacio donde se manipulan: gluten, lácteos, huevo y frutos secos.",
      "El cliente es responsable de informar alergias o restricciones alimentarias al momento del pedido.",
      "Hacemos nuestro mejor esfuerzo para atender restricciones, pero no garantizamos la ausencia total de trazas.",
    ],
  },
  {
    title: "Personalización",
    items: [
      "Los diseños personalizados están sujetos a disponibilidad y criterio del equipo.",
      "Nos reservamos el derecho de realizar ajustes menores al diseño para garantizar la calidad del producto.",
      "Las imágenes de referencia son orientativas; el resultado final puede variar.",
    ],
  },
  {
    title: "Garantía y Calidad",
    items: [
      "Garantizamos la frescura y calidad de nuestros productos al momento de la entrega.",
      "Cualquier inconformidad debe reportarse dentro de las 2 horas posteriores a la recepción del pedido.",
      "No nos responsabilizamos por el manejo inadecuado del producto una vez entregado.",
      "Recomendamos conservar los productos en refrigeración y consumirlos dentro de las 48 horas.",
    ],
  },
]