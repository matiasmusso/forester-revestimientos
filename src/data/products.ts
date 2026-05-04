export interface ProductItem {
  nombre: string;
  filtro: string;
  descripcion: string[];
  imagenes: string[];
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string[];
  items: ProductItem[];
}

export const productsData: Record<string, ProductCategory> = {
  "madera-maciza": {
    id: "madera-maciza",
    title: "Madera Maciza",
    description: [
      "Los pisos de madera maciza están fabricados a partir de una única pieza de madera.Son conocidos por su durabilidad y belleza natural, aportan un aspecto cálido y de elegancia a cualquier espacio.",
      "Disponibles en una amplia gama de maderas, cada una con sus propias características de color y tamaño."
    ],
    items: [
      {
        nombre: "Grapia",
        filtro: "grapia",
        descripcion: [
          "La grapia, es una madera originaria de América del Sur, especialmente de Brasil. La grapia es una madera dura y resistente que la hace adecuada para pisos de alto tráfico. Tiene un color amarillo a dorado pálido con veteado oscuro, lo que le da un aspecto atractivo y natural a los pisos, es conocida por su resistencia natural a insectos y hongos, lo que la hace adecuada para entornos donde la humedad es un factor.",
          "Puedes encontrar pisos de grapia en diferentes anchos y grosores, lo que te permite personalizar el diseño de tus espacios."
        ],
        imagenes: ["grapia.jpg"]
      },
      {
        nombre: "Guatambú",
        filtro: "guatambu",
        descripcion: [
          "El piso de madera maciza de Guatambu es una opción popular para revestir pisos debido a su belleza y durabilidad. Guatambu es una madera dura y resistente, lo que la hace ideal para su uso en pisos. Tiene un color que varía desde un tono amarillo pálido a un marrón claro. Puede tener vetas y un grano visible que le da un aspecto natural y cálido."
        ],
        imagenes: ["guatambu.jpg"]
      },
      {
        nombre: "Guatambú Vaporizado",
        filtro: "guatambu-vaporizado",
        descripcion: [
          "El piso de madera maciza de Guatambu vaporizado es una variante que ha sido tratada mediante un proceso de vaporización, durante un mes, dandole el color característico. La ventaja de ese color contra las tinturas que suelen utilizarse, es que perdura en el tiempo, y siempre de manera uniforme por mas que se pula varias veces el piso.",
          "La vaporización es un proceso que implica exponer la madera a vapor de agua a alta temperatura. Esto ayuda a mejorar la estabilidad de la madera y la hace menos susceptible a la expansión y contracción causada por cambios en la humedad. Como resultado, el piso de madera de Guatambu vaporizado es más adecuado para ambientes con variaciones de humedad.El aspecto y la apariencia de la madera Guatambu vaporizada es similar al lapacho, con su color variable que puede ir desde amarillo pálido a marrón claro y un grano natural y cálido."
        ],
        imagenes: ["guatambu-vaporizado.jpg"]
      },
      {
        nombre: "Incienzo",
        filtro: "incienzo",
        descripcion: [
          "El incienso,  es una madera proveniente de árboles tropicales que se encuentra principalmente en América Central y del Sur. La madera de incienso es conocida por ser extremadamente dura y duradera. Es una especie  adecuada para áreas de alto tráfico.",
          "Tiene un color característico que varía desde un púrpura oscuro hasta un marrón oscuro con vetas más oscuras. La madera de incienso tiene una resistencia natural a la humedad y la putrefacción, lo que la hace adecuada para aplicaciones en entornos húmedos.",
          "Podes encontrar pisos de madera de incienso en diferentes anchos y grosores, lo que te permite personalizar el diseño de tus espacios."
        ],
        imagenes: ["incienzo.jpg"]
      },
      {
        nombre: "Kurupay",
        filtro: "kurupay",
        descripcion: [
          "El kurupay es una madera originaria de América del Sur, especialmente de países como Paraguay, Brasil y Argentina.  Es una madera extremadamente dura y duradera. Es conocida por su resistencia al desgaste y la abrasión, lo que la hace adecuada para áreas de alto tráfico. Tiene un color que varía desde un marrón dorado a un marrón oscuro con vetas oscuras y contrastantes. Su veteado atractivo agrega un toque de elegancia a los espacios.",
          "Podes encontrar pisos de kurupay en diferentes anchos y grosores, lo que te permite personalizar el diseño de tus espacios.",
          "El kurupay es valorado por su belleza natural y su capacidad para resistir el desgaste."
        ],
        imagenes: ["kurupay.jpg"]
      },
      {
        nombre: "Lapacho",
        filtro: "lapacho",
        descripcion: [
          "El lapacho, es una madera dura originaria de América del Sur, particularmente de países como Brasil y Argentina. El lapacho es  altamente resistente al desgaste y la abrasión, lo que lo hace adecuado para áreas de alto tráfico.",
          "Tiene un color que varía desde un marrón oscuro a un marrón claro, con vetas oscuras. Con el tiempo, su color puede volverse más oscuro debido a la exposición a la luz. Podes encontrar pisos de lapacho en diferentes anchos y grosores, lo que te permite personalizar el diseño de tus espacios.El lapacho es conocido por su belleza natural y su capacidad para agregar elegancia y calidez a los interiores."
        ],
        imagenes: ["lapacho.jpg"]
      },
      {
        nombre: "Sirari/Kuruñay",
        filtro: "sirari",
        descripcion: [
          "El sirari es una madera originaria de América del Sur, y es ampliamente utilizado en países como Brasil, Perú y Venezuela. El sirari es una madera moderadamente dura y duradera.",
          "La madera de sirari generalmente tiene un color que varía desde un tono amarillo pálido a un marrón claro con vetas sutiles. Su aspecto es natural y cálido, lo que lo hace adecuado para diferentes estilos de decoración.",
          "Los pisos de sirari están disponibles en diferentes anchos y grosores, lo que permite una personalización en el diseño de tus espacios."
        ],
        imagenes: ["sirari.jpg"]
      },
      {
        nombre: "Yviraro",
        filtro: "yviraro",
        descripcion: [
          "El yviraro, es una madera originaria de América del Sur, particularmente de países como Brasil. Es una madera dura y duradera. Ofrece una buena resistencia al desgaste y al impacto, lo que lo hace adecuado para áreas de tráfico moderado a alto.",
          "La madera de yviraro generalmente tiene un color que varía desde un marrón claro a un marrón oscuro con vetas atractivas y variadas. Su aspecto es cálido y natural.",
          "Los pisos de yviraro están disponibles en diferentes anchos y grosores, lo que te permite personalizar el diseño de tus espacios.",
          "Es valorado por su belleza natural y durabilidad, lo que lo hace adecuado para diversos proyectos de construcción y decoración de interiores."
        ],
        imagenes: ["sirari.jpg"]
      }
    ]
  },
  "pisos-melaminicos": {
    id: "pisos-melaminicos",
    title: "Pisos Melamínicos",
    description: [
      "Los pisos melamínicos, también conocidos como pisos laminados o suelos laminados, son una opción popular para revestir suelos en interiores.",
      "Los pisos melamínicos están compuestos por varias capas. La capa superior es una lámina decorativa impresa que puede imitar la apariencia de madera, piedra, cerámica u otros materiales. Debajo de estas capas decorativas, hay una capa base de tablero de fibra de alta densidad (HDF) y un overlay de resistencia a la abrasión, , que proporciona estabilidad y durabilidad.",
      "Los pisos melamínicos vienen en una amplia variedad de diseños, colores y texturas.",
      "Son conocidos por su resistencia al desgaste y la decoloración. La capa superior de melamina actúa como una barrera protectora, lo que los hace adecuados para áreas de alto tráfico."
    ],
    items: [
      {
        nombre: "Roble Mixto de Estonia",
        filtro: "mixto-estonia",
        descripcion: [
          "Contenido por Caja: 1.91 m2",
          "Resistente al agua: NO",
          "Repulible: NO",
          "Material: Laminado Melaminico",
          "Tamaño: 8x196x1218 mm"
        ],
        imagenes: ["mixto-estonia.jpg"]
      },
      {
        nombre: "Acacia Clara",
        filtro: "acacia-clara",
        descripcion: [
          "Contenido por Caja: 1.91 m2",
          "Resistente al agua: NO",
          "Repulible: NO",
          "Material: Laminado Melaminico",
          "Tamaño: 8x196x1218 mm"
        ],
        imagenes: ["acacia.jpg"]
      },
      {
        nombre: "Roble Quercus",
        filtro: "roble-quercus",
        descripcion: [
          "Contenido por Caja: 1.91 m2",
          "Resistente al agua: NO",
          "Repulible: NO",
          "Material: Laminado Melaminico",
          "Tamaño: 8x196x1218 mm"
        ],
        imagenes: ["roble-quercus.jpg"]
      },
      {
        nombre: "Roble Nórdico",
        filtro: "roble-nordico",
        descripcion: [
          "Contenido por Caja: 1.91 m2",
          "Resistente al agua: NO",
          "Repulible: NO",
          "Material: Laminado Melaminico",
          "Tamaño: 8x196x1218 mm"
        ],
        imagenes: ["roble-nordico.jpg"]
      },
      {
        nombre: "Merbau",
        filtro: "merbau",
        descripcion: [
          "Contenido por Caja: 1.91 m2",
          "Resistente al agua: NO",
          "Repulible: NO",
          "Material: Laminado Melaminico",
          "Tamaño: 8x196x1218 mm"
        ],
        imagenes: ["merbau.jpg"]
      }
    ]
  },
  "pisos-vinilicos": {
    id: "pisos-vinilicos",
    title: "Pisos Vinílicos",
    description: [
      "Los pisos vinílicos SPC (policloruro de piedra) son una opción de revestimiento de suelos moderna y versátil. Los pisos SPC están formados por un núcleo de SPC, que es un compuesto de piedra y polietileno sobre el que se aplica un papel decorativo y una capa de resistencia a la abrasión",
      "Vienen en una amplia variedad de diseños, desde imitaciones de madera natural hasta patrones de piedra, cerámica y más. Puedes encontrar una amplia gama de colores y texturas para adaptarse a tu estilo y decoración.Son conocidos por su resistencia al desgaste, a las manchas y a la humedad. Esto los hace ideales para áreas de alto tráfico y ambientes húmedos, como cocinas y baños",
      "Los pisos SPC cuentan con sistemas de clic o encaje que permiten una instalación rápida y sencilla, sin necesidad de adhesivos. También son adecuados para la instalación en áreas con calefacción radiante. La mayoría de los pisos SPC son resistentes al agua, lo que los convierte en una elección excelente para áreas propensas a la humedad.",
      "Los pisos vinílicos SPC son una buena elección debido a su durabilidad, versatilidad y facilidad de instalación. Son una excelente opción para aquellos que buscan un suelo atractivo y resistente que se adapte a una variedad de entornos."
    ],
    items: [
      {
        nombre: "EuroTec Next Palace",
        filtro: "palace",
        descripcion: [
          "Esta linea tiene una capa de resistencia de 0.5mm apto para transito comercial. Espesor de 6 mm incluyendo la manta aislante, es mas larga, mas ancha y con textura sincronizada.",
          "Contenido por caja: 2.43 m2",
          "Resistente al agua: SI",
          "Material: SPC (Compuesto piedra y polietileno)",
          "Tamaño: 6x228x1520mm",
          "Incluye manta aislante.",
          "Opciones Disponibles: Olmo Dover, Abedul Chambord, Castaño Aragon, Roble Versalles, Alerce Stirling"
        ],
        imagenes: ["palace1.png", "palace2.png", "palace3.png", "palace4.png", "palace5.png"]
      },
      {
        nombre: "EuroTec Original Next Wood",
        filtro: "next-wood",
        descripcion: [
          "La línea Original tiene una capa de resistencia de 0.5mm apto para tránsito comercial. Espesor 5.2mm incluyendo la manta aislante. El formato WOOD remite a tablones de madera.",
          "Contenido por caja: 2.22 m2",
          "Resistente al agua: SI",
          "Material: SPC (Compuesto piedra t polietileno)",
          "Tamaño: 5.2x182x1220mm",
          "Incluye manta aislante."
        ],
        imagenes: ["wood.png", "wood1.png", "wood2.png", "wood3.png", "wood4.png", "wood5.png", "wood6.png", "wood7.png", "wood8.png", "wood9.png", "wood10.png"]
      },
      {
        nombre: "EuroTec Next Original Stone",
        filtro: "stone",
        descripcion: [
          "La linea Original tiene una capa de resistencia de 0.5mm apto para tránsito comercial. Espesor 5.5mm incluyendo la manta aislante. El formato STONE remite a piedras/baldosas.",
          "Contenido por caja:  1.67m2",
          "Resistente al agua: SI",
          "Material: SPC (Compuesto piedra t polietileno)",
          "Tamaño: 5.5x610x305 mm",
          "Incluye manta aislante."
        ],
        imagenes: ["stone.png", "stone1.png", "stone2.png"]
      },
      {
        nombre: "EuroTec Next Entry",
        filtro: "entry",
        descripcion: [
          "La linea Entry tiene una capa de resistencia de 0.3mm apto para tránsito residencial.",
          "Resistente al agua: SI",
          "Material: SPC (Compuesto piedra y polietileno)"
        ],
        imagenes: ["entry.png", "entry2.png", "entry3.png", "entry4.png", "entry5.png", "entry6.png", "entry7.png", "entry8.png"]
      },
      {
        nombre: "EuroTec DRY BACK",
        filtro: "black",
        descripcion: [
          "Piso formado por un núcleo de PVC virgen sobre el que se aplica un papel decorativo y una capa de resistencia a la abrasión de 0.3mm. Estos pisos se pegan directo a la carpeta.",
          "Contenido por caja:  3.85m2",
          "Resistente al agua: SI",
          "Material: PVC Virgen Sólido",
          "Tamaño: 2.5x184x950 mm"
        ],
        imagenes: ["black.png", "black2.png", "black3.png", "black4.png"]
      }
    ]
  },
  "revestimientos-interior": {
    id: "revestimientos-interior",
    title: "Revestimientos Interior",
    description: [
      "Los revestimientos de paredes son materiales utilizados para cubrir y decorar superficies verticales en interiores y exteriores."
    ],
    items: [
      {
        nombre: "Machimbre PVC Dumapan",
        filtro: "machimbre",
        descripcion: [
          "Revestimiento/cielorraso para obra en seco, los revestimientos Dumaplast son ideales para solucionar el problema de las paredes con humedad como así también para renovar baños y cocinas sin ruidos, escombros ni suciedad.",
          "Contenido por caja: 2.60m2",
          "Resistente al agua: SI",
          "Material: PVC Virgen Alveolar",
          "Tamaño: 10x250x2600mm"
        ],
        imagenes: ["machimbre.jpg"]
      },
      {
        nombre: "Compacto EuroTec Quick Panel",
        filtro: "compacto",
        descripcion: [
          "Es una placa sólida laminada para pegado directo sobre paredes, placas, superficies metálicas, madera, aglomerados, MDF, multilaminados, cerámica, porcelanato, azulejos, revoque, etc."
        ],
        imagenes: ["quickpanel.png", "quickpanel2.png", "quickpanel3.png", "quickpanel4.png", "quickpanel5.png", "quickpanel6.png", "quickpanel7.png", "quickpanel8.png"]
      },
      {
        nombre: "3D EuroTec Quick Panel",
        filtro: "3d",
        descripcion: [
          "Contenido por caja: 4.10 m2",
          "Resistente al agua: SI",
          "Material: EPS - Poliestireno",
          "Tamaño: 21x120x2850mm"
        ],
        imagenes: ["3d.png", "3d2.png", "3d3.png", "3d4.png", "3d5.png", "3d6.png"]
      },
      {
        nombre: "3D Melamínico",
        filtro: "3d-melaminico",
        descripcion: [
          "Los productos KRONOWALL 3D permiten la creación de revestimientos que simulan madera en 3D colocando las tablas en 3 posibles posiciones, dando relieve y originalidad.",
          "Contenido por caja: 1.37 m2",
          "Resistente al agua: NO",
          "Material: Laminado Melaminico",
          "Tamaño: 12x132x1296 mm"
        ],
        imagenes: ["3dmelaminico.png", "3dmelaminico2.png"]
      }
    ]
  },
  "revestimientos-exterior": {
    id: "revestimientos-exterior",
    title: "Revestimientos Exterior",
    description: [
      "Los revestimientos de paredes son materiales utilizados para cubrir y decorar superficies verticales en interiores y exteriores."
    ],
    items: [
      {
        nombre: "3D WPC",
        filtro: "3d-wpc",
        descripcion: [
          "Contenido por caja: 2.32 m2",
          "Resistente al agua: SI",
          "Material: WPC (Compuesto madera y polietileno)",
          "Tamaño: 22x200x2900 mm (cerrado)"
        ],
        imagenes: ["1.png", "2.png", "3.png", "4.png", "5.png"]
      },
      {
        nombre: "Perfiles PHR",
        filtro: "phr",
        descripcion: [
          "El WPC es un compuesto de aserrin y PVC logrando así un material con la textura de la madera y la resistencia del PVC. No requiere ningún tratamiento de superficie. Los perfiles PHR pueden ser utilizados en reemplazo de la tirantería clásica de madera para el armado de pérgolas, parasoles, cercas, etc."
        ],
        imagenes: ["phr.jpg"]
      }
    ]
  },
  "deck": {
    id: "deck",
    title: "Deck",
    description: [
      "Los decks son estructuras elevadas al aire libre, generalmente construidas con madera o materiales compuestos. Ofrecen un espacio funcional y estético para relajarse, socializar y disfrutar del aire libre."
    ],
    items: [
      {
        nombre: "Decks de Madera",
        filtro: "deck-madera",
        descripcion: [
          "Los decks de madera natural deben ser protegidos con un barniz adecuado para exteriores a fin de preservar su belleza, no obstante, los decks de madera dura resistirán perfectamente sin protección aunque se pondran grises."
        ],
        imagenes: ["madera.png", "madera2.png", "madera3.png", "madera4.png", "madera5.png", "madera6.png", "madera7.png", "madera8.png", "madera9.png"]
      },
      {
        nombre: "Decks de WPC",
        filtro: "wpc",
        descripcion: [
          "El WPC es un compuesto de aserrin y PVC logrando así un material con la textura de la madera y la resistencia del PVC. No requiere ningún tratamiento de superficie.",
          "Los decks de WPC son de fácil instalación, resistentes para exteriores (lluvia, nieve, frío, calor), resistentes a la humedad, no crea mohos, no requieren ser pintados, no produce astillas ni grietas y es resistente contra los Insectos (carcoma, termitas). Además el WPC es totalmente reciclable."
        ],
        imagenes: ["wpc.png", "wpc2.png", "wpc3.png", "wpc4.png", "wpc5.png", "wpc6.png", "wpc7.png", "wpc8.png"]
      }
    ]
  },
  "zocalos": {
    id: "zocalos",
    title: "Zócalos",
    description: [
      "Los zócalos son molduras que se instalan en la base de las paredes, cubriendo la unión entre la pared y el suelo. Su función principal es proporcionar un acabado estético y proteger la parte inferior de las paredes de posibles golpes o roces."
    ],
    items: [
      {
        nombre: "Zócalos EPS/PBV Redondo",
        filtro: "redondo",
        descripcion: [
          "Resisten agua y humedad, son el complemento perfecto de los pisos EurotecNext o para instalaciones en cerámicos o porcelanatos. Se presentan en colores madera y blanco para ser usados así o fácilmente pintados a gusto."
        ],
        imagenes: ["redondo2.png", "redondo3.png", "redondo4.png", "redondo5.png", "redondo6.png", "redondo7.png", "redondo8.png", "redondo9.png"]
      },
      {
        nombre: "Zócalo EPS Recto",
        filtro: "recto",
        descripcion: [
          "Resisten agua y humedad, son el complemento perfecto de los pisos EurotecNext,los revestimiento de pared Duma o para instalaciones en cerámicos o porcelanatos. Se presentan en colores madera y blanco para ser usados así o fácilmente pintados a gusto."
        ],
        imagenes: ["recto.png", "recto2.png", "recto3.png", "recto4.png", "recto5.png", "recto6.png"]
      },
      {
        nombre: "Zócalo EPS Facetado",
        filtro: "facetado",
        descripcion: [
          "Resisten agua y humedad, son el complemento perfecto de los pisos EurotecNext,los revestimiento de pared Duma o para instalaciones en cerámicos o porcelanatos. Se presentan en colores madera y blanco para ser usados así o fácilmente pintados a gusto."
        ],
        imagenes: ["facetado.png", "facetado2.png", "facetado3.png", "facetado4.png", "facetado5.png", "facetado6.png"]
      },
      {
        nombre: "Zócalo EPS Acanalado",
        filtro: "acanalado",
        descripcion: [
          "Resisten agua y humedad, son el complemento perfecto de los pisos EurotecNext,los revestimiento de pared Duma o para instalaciones en cerámicos o porcelanatos. Se presentan en colores madera y blanco para ser usados así o fácilmente pintados a gusto."
        ],
        imagenes: ["acanalado.png", "acanalado2.png", "acanalado3.png", "acanalado4.png", "acanalado5.png"]
      }
    ]
  }
};
