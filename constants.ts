import { CaseScenario, CharacterProfile, Question } from "./types";

// Base of Questions
export const QUESTION_DATABASE: Question[] = [
  {
    id: 1,
    question: "¿Quién es el compañero invisible de Doña Felicia?",
    options: ["Sherlock Holmes", "Arthur Henry Williams", "Hércules Poirot", "Leopoldo"],
    correctAnswer: 1,
    explanation: "Arthur Henry Williams es el fantasma inglés que vive en el closet."
  },
  {
    id: 2,
    question: "¿Qué objeto suele fumar el fantasma Arthur?",
    options: ["Cigarrillos", "Puros", "Una pipa", "No fuma"],
    correctAnswer: 2,
    explanation: "Arthur Henry Williams suele aparecer acompañado de una pipa humeante."
  },
  {
    id: 3,
    question: "¿Dónde vivía Doña Felicia?",
    options: ["En un departamento en el centro", "En un caserón de Ñuñoa", "En una parcela en Pirque", "En Londres"],
    correctAnswer: 1,
    explanation: "Doña Felicia vive en un antiguo caserón en el barrio de Ñuñoa."
  },
  {
    id: 4,
    question: "En 'El caso de los billetes en el jarrón', ¿qué objeto NO se rompió?",
    options: ["La mesa de centro", "El jarrón chino", "Las tazas de té", "La ventana"],
    correctAnswer: 1,
    explanation: "Curiosamente, el jarrón donde estaba el dinero no se rompió, lo que le dio la pista a Felicia."
  },
  {
    id: 5,
    question: "¿Quién era realmente el culpable en el caso de los billetes en el jarrón?",
    options: ["El sobrino Raimundo", "La empleada Miriam", "Doña Laura", "Un ladrón profesional"],
    correctAnswer: 2,
    explanation: "Fue Doña Laura, quien fingió el robo para usar el dinero de su marido tacaño."
  },
  {
    id: 6,
    question: "¿Qué postre prepara Doña Felicia para calmar a sus amigos o sospechosos?",
    options: ["Torta de mil hojas", "Green Apple Pie", "Kuchen de nuez", "Scones de queso"],
    correctAnswer: 1,
    explanation: "El Green Apple Pie (Pastel de manzana verde) es la especialidad de la casa."
  },
  {
    id: 7,
    question: "¿Qué frase usa Felicia para descubrir al culpable del anillo perdido?",
    options: ["El que busca siempre encuentra", "Quien miente se delata, cuando los dedos atan", "Ladrón que roba a ladrón", "El crimen no paga"],
    correctAnswer: 1,
    explanation: "Usó esa frase para ver quién reaccionaba nerviosamente sobre sus manos/dedos."
  },
  {
    id: 8,
    question: "En el caso de 'Las pistas en verso' en La Serena, ¿a qué poeta buscaban?",
    options: ["Pablo Neruda", "Gabriela Mistral", "Vicente Huidobro", "Nicanor Parra"],
    correctAnswer: 1,
    explanation: "La pista hablaba de un 'apellido de viento' del norte, refiriéndose a Mistral (Gabriela)."
  },
  {
    id: 9,
    question: "¿Qué nacionalidad tiene el fantasma Arthur Henry Williams?",
    options: ["Chileno", "Francés", "Alemán", "Inglés"],
    correctAnswer: 3,
    explanation: "Es un detective inglés, muy caballero y refinado."
  },
  {
    id: 10,
    question: "En el 'Caso del robo en el supermercado', ¿quién robó la billetera?",
    options: ["La cajera", "El señor canoso", "La señora del moño tirante", "La joven atropellada"],
    correctAnswer: 2,
    explanation: "Fue la señora del moño tirante. Felicia notó que era tramposa con los precios."
  },
  {
    id: 11,
    question: "¿Cuál era la obsesión de Susana en el 'Caso del bizcocho Arena'?",
    options: ["Cocinar", "El orden y la limpieza", "Leer novelas", "Jugar tenis"],
    correctAnswer: 1,
    explanation: "Susana era una maniática del orden y la limpieza extrema."
  },
  {
    id: 12,
    question: "¿Quién se comió el bizcocho 'Arena'?",
    options: ["Margarita", "Valentina", "Sebastián", "El perro"],
    correctAnswer: 2,
    explanation: "Fue Sebastián. Felicia lo supo porque había llevado la escoba a su cuarto para barrer las migas."
  },
  {
    id: 13,
    question: "¿Qué objeto le robaron a Doña Felicia en el tren a España?",
    options: ["Su pasaporte", "Un broche de brillantes", "Su cartera", "Su sombrero"],
    correctAnswer: 1,
    explanation: "Le robaron un valioso broche de brillantes y platino."
  },
  {
    id: 14,
    question: "En el caso de las 'Cuatro Viudas', ¿quién era la impostora?",
    options: ["Rosa", "Margarita", "Hortensia", "Violeta"],
    correctAnswer: 2,
    explanation: "Hortensia. Se delató al decir que no le gustaría vivir en Rancagua antes de que se supiera el lugar del robo."
  },
  {
    id: 15,
    question: "¿En qué ciudad transcurre el caso de la Casa de Campo Amarilla?",
    options: ["Valdivia", "Frutillar", "Puerto Varas", "Osorno"],
    correctAnswer: 1,
    explanation: "Ocurre en Frutillar, en la pensión de Frau Helga."
  },
  {
    id: 16,
    question: "¿Qué le molestaba a Arthur Henry de París?",
    options: ["La comida", "El idioma", "La pirámide moderna del Louvre", "El clima"],
    correctAnswer: 2,
    explanation: "Como fantasma tradicional, odiaba la arquitectura moderna mezclada con lo antiguo."
  },
  {
    id: 17,
    question: "¿Cómo murió el esposo de Doña Felicia, Leopoldo?",
    options: ["En un accidente", "De un paro cardíaco al ver al fantasma", "De viejo", "Envenenado"],
    correctAnswer: 1,
    explanation: "Murió de un susto (paro cardíaco) cuando abrió el closet y vio a Arthur."
  },
  {
    id: 18,
    question: "¿Qué hobby compartían Felicia y el fantasma?",
    options: ["Jugar ajedrez", "Resolver crucigramas y leer novelas policiales", "Jardinería", "Cocinar"],
    correctAnswer: 1,
    explanation: "Pasaban el tiempo resolviendo crucigramas y viendo películas policiales."
  },
  {
    id: 19,
    question: "En el caso del 'Admirador Anónimo', ¿quién escribió la carta?",
    options: ["Rodrigo", "Diego", "Alejandro", "El joven que se inscribía en el registro"],
    correctAnswer: 3,
    explanation: "Fue el joven que se inscribía en el registro electoral, por la mancha de tinta dactilar."
  },
  {
    id: 20,
    question: "¿Qué significa que Arthur se 'materialice'?",
    options: ["Que desaparece", "Que se vuelve visible", "Que habla", "Que duerme"],
    correctAnswer: 1,
    explanation: "Significa que se hace visible para los humanos, aunque suele hacerlo poco."
  },
  {
    id: 21,
    question: "¿Cuál es el nombre de la pensión en Frutillar?",
    options: ["Mein Gelbes Land-haus", "Das Hotel", "La Casa Alemana", "El Lago Azul"],
    correctAnswer: 0,
    explanation: "Mein Gelbes Land-haus significa 'Mi casa de campo amarilla'."
  },
  {
    id: 22,
    question: "¿Qué pista ayudó en el caso de las cartas de las carteras?",
    options: ["La letra", "El matasellos", "El color del papel", "El olor"],
    correctAnswer: 1,
    explanation: "El matasellos demostraba que una carta ya había pasado por correo, delatando el truco."
  },
  {
    id: 23,
    question: "¿Qué flor había en la plaza de La Serena según la pista?",
    options: ["Una rosa", "Un floripondio", "Un clavel", "Un copihue"],
    correctAnswer: 1,
    explanation: "El floripondio, una flor con forma de campana caída."
  },
  {
    id: 24,
    question: "¿Qué edad aproximada tiene Arthur Henry Williams?",
    options: ["20 años", "50 años", "Es un fantasma centenario", "10 años"],
    correctAnswer: 2,
    explanation: "Es un fantasma antiguo, posiblemente del siglo XIX o principios del XX."
  },
  {
    id: 25,
    question: "¿Qué hace la pantalla cuando te equivocas en este juego?",
    options: ["Se pone azul", "Se pone roja", "Se apaga", "Explota"],
    correctAnswer: 1,
    explanation: "¡Se pone roja para indicarte el error!"
  }
];

export const CHARACTER_PROFILES: CharacterProfile[] = [
  {
    id: "arthur",
    name: "Arthur Henry Williams",
    traits: ["Inglés", "Invisible", "Fuma Pipa", "Usa sombrero"],
    description: "Un detective fantasma refinado que vive en el closet."
  },
  {
    id: "felicia",
    name: "Doña Felicia",
    traits: ["Curiosa", "Cocina bien", "Vive en Ñuñoa", "Resuelve casos"],
    description: "Una anciana adorable pero astuta que ama los misterios."
  },
  {
    id: "laura",
    name: "Doña Laura",
    traits: ["Vecina", "Colecciona porcelana", "Esposa de avaro", "Fingió un robo"],
    description: "Una vecina que montó una escena para quedarse con los ahorros de su marido."
  },
  {
    id: "susana",
    name: "Susana",
    traits: ["Maniática del orden", "Sobrina de Felicia", "Vive en Valdivia", "Madre de 3"],
    description: "Se desespera si hay una miga de bizcocho fuera de lugar."
  },
  {
    id: "hortensia",
    name: "Hortensia",
    traits: ["Viuda", "Elegante", "Odia Rancagua", "Ladrona de joyas"],
    description: "Una de las viudas falsas que intentó engañar a todos en el tren."
  },
  {
    id: "sebastian",
    name: "Sebastián",
    traits: ["Travieso", "Le gusta el dulce", "Sobrino nieto", "Esconde escobas"],
    description: "El niño que no pudo resistirse al bizcocho Arena."
  },
  {
    id: "frau_helga",
    name: "Frau Helga",
    traits: ["Alemana", "Dueña de pensión", "Cocina Kuchen", "Vive en el sur"],
    description: "La dueña de la Casa de Campo Amarilla en Frutillar."
  }
];

export const CASE_SCENARIOS: CaseScenario[] = [
  {
    title: "El Caso de los Billetes en el Jarrón",
    description: "Ordena los sucesos cronológicamente para descubrir quién fingió el robo.",
    events: [
      { id: "e1", text: "El vecino Belisario llega sudando a buscar a Doña Felicia.", order: 1 },
      { id: "e2", text: "Doña Felicia ve todo desordenado pero nada roto en la casa.", order: 2 },
      { id: "e3", text: "Aparece el sobrino Raimundo con una raqueta de tenis.", order: 3 },
      { id: "e4", text: "La empleada Miriam dice que escuchó música fuerte.", order: 4 },
      { id: "e5", text: "Felicia nota que el jarrón chino frágil está intacto.", order: 5 },
      { id: "e6", text: "Doña Laura confiesa que fingió el robo.", order: 6 },
    ]
  },
  {
    title: "El Robo del Broche en el Tren",
    description: "Pon en orden los hechos que ocurrieron en el viaje a España.",
    events: [
      { id: "t1", text: "Doña Felicia sube al tren rumbo a Sevilla.", order: 1 },
      { id: "t2", text: "Conoce a una marquesa que luce un valioso broche.", order: 2 },
      { id: "t3", text: "El tren entra en un túnel largo y oscuro.", order: 3 },
      { id: "t4", text: "Se oye un grito y al salir del túnel el broche no está.", order: 4 },
      { id: "t5", text: "Arthur detecta olor a tabaco barato cerca de la puerta.", order: 5 },
      { id: "t6", text: "Encuentran la joya en el bolsillo del revisor.", order: 6 },
    ]
  },
  {
    title: "El Misterio del Bizcocho Desaparecido",
    description: "Reconstruye la escena del crimen culinario en casa de Susana.",
    events: [
      { id: "b1", text: "Susana prepara un perfecto bizcocho Arena.", order: 1 },
      { id: "b2", text: "Susana sale a comprar y deja el bizcocho enfriando.", order: 2 },
      { id: "b3", text: "Al volver, solo quedan migas en el plato.", order: 3 },
      { id: "b4", text: "Interrogan a Margarita, Valentina y Sebastián.", order: 4 },
      { id: "b5", text: "Felicia encuentra la escoba en el cuarto de Sebastián.", order: 5 },
      { id: "b6", text: "Sebastián confiesa que barrió las migas de su crimen.", order: 6 },
    ]
  }
];

// Pool of words to randomly select from for the Word Search generator
export const WORD_POOL = [
  "FANTASMA", "LUPA", "FELICIA", "PIPA", "CASOS", 
  "INGLES", "ÑUÑOA", "MISTERIO", "ROBO", "JOYA", 
  "TREN", "ARTHUR", "DETECTIVE", "HUELLA", "PISTA",
  "SECRETO", "SOMBRERO", "LONDRES", "CRIMEN", "CULPABLE",
  "SUSANA", "KUCHEN", "ANILLO", "CARTA", "INVISIBLE"
];