export interface TitleProps {
    title: string;
    subtitle: string;
    isUppercase?: boolean
}

export const Titles: Record<string, TitleProps> = {
    aboutUs: {
        title: "Acerca de nosotros",
        subtitle: "Aprenda quienes somos y para que elaboramos postres."
    },
    locations: {
        title: "Nuestras Ubicaciones",
        subtitle: "Encuéntranos en estos lugares y ven a disfrutar de nuestros postres."
    },
    products: {
        title: "Nuestros Productos",
        subtitle: "Explora nuestra variedad de postres artesanales hechos con los mejores ingredientes."
    },
    contact: {
        title: "Contáctanos",
        subtitle: "Estamos aquí para ayudarte con tu pedido o resolver cualquier duda."
    },
    home: {
        title: "Corounne",
        isUppercase: true,
        subtitle: "Respostería y café"
    }
}