import { CaseScenario, CharacterProfile, Question } from "./types";

// Base of Questions - EXPANDIDO A 50 PREGUNTAS
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
    question: "¿Quién era realmente la culpable en el caso de los billetes en el jarrón?",
    options: ["El sobrino Raimundo", "La empleada Miriam", "Doña Laura", "Un ladrón profesional"],
    correctAnswer: 2,
    explanation: "Fue Doña Laura, quien fingió el robo para escapar de su marido avaro."
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
    question: "¿Qué pista ayudó en el caso de las dos carteras?",
    options: ["La letra", "El matasellos", "El color del papel", "El olor"],
    correctAnswer: 1,
    explanation: "El sobre con matasellos indicaba que ya había pasado por correo, revelando el engaño."
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
  },
  {
    id: 26,
    question: "¿Qué objeto perdió Patricia en el caso 'Con muchos dedos'?",
    options: ["Una pulsera", "Un collar", "Un anillo", "Unos aretes"],
    correctAnswer: 2,
    explanation: "Patricia perdió su anillo durante el té con las amigas de doña Felicia."
  },
  {
    id: 27,
    question: "¿Quién robó el anillo de Patricia?",
    options: ["Ana", "Teresa", "Dorita", "Isadora"],
    correctAnswer: 2,
    explanation: "Dorita robó el anillo, revelado por la frase 'casi se le quedó atascado en el dedo'."
  },
  {
    id: 28,
    question: "¿Qué bebida especial preparaba doña Felicia para el té?",
    options: ["Café turco", "Té inglés", "Mate", "Chocolate caliente"],
    correctAnswer: 1,
    explanation: "Doña Felicia preparaba té inglés especial, en honor a Arthur Henry Williams."
  },
  {
    id: 29,
    question: "¿En qué consistía el concurso de La Serena?",
    options: ["Carrera de autos", "Detective juvenil", "Cantantes", "Poesía"],
    correctAnswer: 1,
    explanation: "Era un concurso para jóvenes detectives con pistas en verso por la ciudad."
  },
  {
    id: 30,
    question: "¿Qué premio ganaron los niños en La Serena?",
    options: ["Dinero", "Viaje a Europa", "Colección de novelas policiales", "Una bicicleta"],
    correctAnswer: 2,
    explanation: "Ganaron una colección completa de las mejores novelas policiales."
  },
  {
    id: 31,
    question: "¿Dónde se encontraba el primer objeto en el concurso de La Serena?",
    options: ["En la playa", "En la Recova", "En una iglesia", "En el museo"],
    correctAnswer: 2,
    explanation: "La primera pista los llevó a la Recova de La Serena."
  },
  {
    id: 32,
    question: "¿Qué significa 'mistral' en el contexto de las pistas?",
    options: ["Un viento", "Una flor", "Una montaña", "Un río"],
    correctAnswer: 0,
    explanation: "Mistral es un viento, pero también el apellido de la poeta Gabriela Mistral."
  },
  {
    id: 33,
    question: "En el caso del supermercado, ¿qué estaba comprando doña Felicia?",
    options: ["Carne", "Un melón tuna", "Pan", "Leche"],
    correctAnswer: 1,
    explanation: "Doña Felicia golpeó un melón tuna para verificar su madurez."
  },
  {
    id: 34,
    question: "¿Quiénes acompañaban a doña Felicia en Valdivia?",
    options: ["Sus hijos", "Sus sobrinos nietos", "Sus vecinas", "Nadie"],
    correctAnswer: 1,
    explanation: "La visitaban sus sobrinos nietos: Sebastián, Valentina y Margarita."
  },
  {
    id: 35,
    question: "¿Qué característica tenía Valentina?",
    options: ["Era desordenada", "Era maniática del orden como su madre", "Era cocinera", "Era detective"],
    correctAnswer: 1,
    explanation: "Valentina heredó la obsesión por el orden de su madre Susana."
  },
  {
    id: 36,
    question: "¿Qué encontró la tía Felicia en el cuarto de Sebastián?",
    options: ["El bizcocho", "Migas", "Una escoba", "Un plato sucio"],
    correctAnswer: 2,
    explanation: "Encontró la escoba que Sebastián usó para barrer las migas del bizcocho que se comió."
  },
  {
    id: 37,
    question: "¿Cuál era el nombre del CENP?",
    options: ["Club de Escritores", "Círculo de Escritores de Novelas Policiales", "Centro de Estudios", "Círculo de Editores"],
    correctAnswer: 1,
    explanation: "CENP significa Círculo de Escritores de Novelas Policiales."
  },
  {
    id: 38,
    question: "¿Qué libro llevó doña Felicia al CENP?",
    options: ["Uno propio", "Uno de Arthur Henry Williams", "Una novela famosa", "Un diccionario"],
    correctAnswer: 1,
    explanation: "Llevó un manual de Arthur Henry Williams sobre cómo escribir novelas policiales."
  },
  {
    id: 39,
    question: "¿Quién se quedó con el libro de Arthur en el CENP?",
    options: ["La presidenta", "El señor flaco", "La cara de laucha", "Nadie"],
    correctAnswer: 2,
    explanation: "La señora con cara de laucha se quedó con el libro y lo escondió."
  },
  {
    id: 40,
    question: "¿Qué frase usó Felicia para descubrir al ladrón del libro?",
    options: ["El que calla otorga", "Quien dice no ver, pero ve mucho, que no ha visto, eche el cucho", "El crimen no paga", "La verdad siempre sale"],
    correctAnswer: 1,
    explanation: "Esta frase hizo que la culpable se delatara mirando hacia donde estaba el libro."
  },
  {
    id: 41,
    question: "¿Quién es Frau Helga?",
    options: ["Una detective", "Dueña de una pensión alemana", "Una cocinera", "Una profesora"],
    correctAnswer: 1,
    explanation: "Frau Helga es la dueña de la pensión Mein Gelbes Land-haus en Frutillar."
  },
  {
    id: 42,
    question: "¿Qué objeto desapareció en la casa amarilla?",
    options: ["Una joya", "Un encendedor de oro", "Un reloj", "Dinero"],
    correctAnswer: 1,
    explanation: "Desapareció el encendedor de oro del señor Donoso."
  },
  {
    id: 43,
    question: "¿Dónde apareció el encendedor perdido?",
    options: ["En el jardín", "En una servilleta", "En el lago", "En la cocina"],
    correctAnswer: 1,
    explanation: "El encendedor apareció envuelto en una servilleta."
  },
  {
    id: 44,
    question: "En el caso del admirador anónimo, ¿qué estudiaba Catalina?",
    options: ["Medicina", "Arquitectura", "Derecho", "Ingeniería"],
    correctAnswer: 1,
    explanation: "Catalina estudiaba arquitectura en Santiago."
  },
  {
    id: 45,
    question: "¿Cómo descubrió Felicia al admirador secreto?",
    options: ["Por la letra", "Por una huella dactilar", "Por el perfume", "Por testigos"],
    correctAnswer: 1,
    explanation: "Por la huella dactilar de tinta del registro electoral en una carta."
  },
  {
    id: 46,
    question: "En el caso de las dos carteras, ¿dónde ocurrió el robo?",
    options: ["En un banco", "En una cafetería", "En el metro", "En un centro comercial"],
    correctAnswer: 1,
    explanation: "El robo ocurrió en una elegante cafetería de Viena."
  },
  {
    id: 47,
    question: "¿Cómo ayudó Arthur en el caso de las carteras?",
    options: ["Persiguió al ladrón", "Señaló al culpable invisible", "Llamó a la policía", "No ayudó"],
    correctAnswer: 1,
    explanation: "Arthur, siendo invisible, pudo seguir al ladrón y señalárselo a Felicia."
  },
  {
    id: 48,
    question: "¿Cuántas viudas había en el caso de las cuatro viudas?",
    options: ["Dos", "Tres", "Cuatro", "Cinco"],
    correctAnswer: 2,
    explanation: "Había cuatro viudas sospechosas: Rosa, Margarita, Hortensia y Violeta."
  },
  {
    id: 49,
    question: "¿Qué robó el empleado en Iquique hace 6 años?",
    options: ["Joyas", "Dinero de una importadora", "Documentos", "Arte"],
    correctAnswer: 1,
    explanation: "Robó varios millones de una importadora de la ZOFRI."
  },
  {
    id: 50,
    question: "¿En qué tren viajaban a España doña Felicia y Arthur?",
    options: ["AVE", "Talgo", "TGV", "Eurostar"],
    correctAnswer: 1,
    explanation: "Viajaban en el Talgo, el tren-cama español que hace el recorrido París-Madrid."
  }
];

// PERSONAJES EXPANDIDOS - Todos los importantes del libro
export const CHARACTER_PROFILES: CharacterProfile[] = [
  {
    id: "arthur",
    name: "Arthur Henry Williams",
    traits: ["Inglés", "Invisible", "Fuma pipa", "Detective fantasma"],
    description: "Un detective fantasma refinado que vive en el closet de doña Felicia."
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
    traits: ["Vecina", "Colecciona porcelana", "Esposa de avaro", "Fingió robo"],
    description: "Vecina que montó una escena para quedarse con los ahorros de su marido."
  },
  {
    id: "belisario",
    name: "Belisario González",
    traits: ["Avaro", "Esposo de Laura", "Guarda dinero en jarrón", "Inspector Soto lo conoce"],
    description: "El esposo tacaño de Laura que escondía dinero en un jarrón chino."
  },
  {
    id: "raimundo",
    name: "Raimundo",
    traits: ["Sobrino", "Jugador de tenis", "Llega siempre a la una", "Portazos"],
    description: "El sobrino desempleado que molesta a su tío pidiéndole dinero."
  },
  {
    id: "miriam",
    name: "Miriam",
    traits: ["Empleada", "Escucha música", "Desafiante", "Usa delantal blanco"],
    description: "La empleada doméstica de los González, algo rebelde."
  },
  {
    id: "ana",
    name: "Ana",
    traits: ["Profesora de castellano", "Flaca", "Colecciona cosas", "Vive en casa llena"],
    description: "Profesora que colecciona desde conchitas hasta llaves abre-nada."
  },
  {
    id: "isadora",
    name: "Isadora",
    traits: ["Viuda reciente", "Problemas económicos", "Madre de Teresa", "Pensión mínima"],
    description: "Viuda con dificultades económicas y una hija frivola."
  },
  {
    id: "teresa",
    name: "Teresa",
    traits: ["20 años", "Frivola", "Aparenta lo que no es", "Usa sedas naturales"],
    description: "Hija de Isadora, vanidosa y preocupada por las apariencias."
  },
  {
    id: "patricia",
    name: "Patricia",
    traits: ["Hermana de Felicia", "Perdió un anillo", "Se pone nerviosa", "Joven"],
    description: "Sobrina de Felicia que perdió su anillo durante el té."
  },
  {
    id: "dorita",
    name: "Dorita",
    traits: ["Ladrona", "Se le atascó el anillo", "Gordita", "Dedos gordos"],
    description: "La culpable del robo del anillo, delatada por sus propias palabras."
  },
  {
    id: "susana",
    name: "Susana",
    traits: ["Maniática del orden", "Sobrina de Felicia", "Vive en Valdivia", "Madre de 3"],
    description: "Se desespera si hay una miga de bizcocho fuera de lugar."
  },
  {
    id: "sebastian",
    name: "Sebastián",
    traits: ["Travieso", "Le gusta el dulce", "Esconde escobas", "Menor de los hermanos"],
    description: "El niño que no pudo resistirse al bizcocho Arena."
  },
  {
    id: "valentina",
    name: "Valentina",
    traits: ["Ordenada como su madre", "Arregla servilletas", "Hermana mayor", "Meticulosa"],
    description: "La hija mayor de Susana, heredó su obsesión por el orden."
  },
  {
    id: "margarita",
    name: "Margarita",
    traits: ["Hermana del medio", "Inocente", "Tranquila", "No comió el bizcocho"],
    description: "Una de las hijas de Susana, la del medio."
  },
  {
    id: "frau_helga",
    name: "Frau Helga",
    traits: ["Alemana", "Dueña de pensión", "Cocina Kuchen", "Gorda y rubicunda"],
    description: "La alegre dueña de la Casa de Campo Amarilla en Frutillar."
  },
  {
    id: "senor_donoso",
    name: "Señor Donoso",
    traits: ["Fumador de puros", "Perdió encendedor de oro", "Se duerme", "Amable"],
    description: "Huésped de Frau Helga que perdió su valioso encendedor."
  },
  {
    id: "senora_fonk",
    name: "Señora Fonk",
    traits: ["Alta", "Mentón fuerte", "Sospechosa", "Casada con Enrique"],
    description: "Una de las huéspedes sospechosas en la casa de campo."
  },
  {
    id: "roberto_carolina",
    name: "Roberto y Carolina",
    traits: ["Pareja joven", "Enamorados", "Se besan mucho", "Van al lago"],
    description: "La pareja de enamorados que estaban más interesados en ellos que en el misterio."
  },
  {
    id: "catalina",
    name: "Catalina",
    traits: ["Estudia arquitectura", "Sobrina de Felicia", "Tiene admiradores", "Cabello castaño"],
    description: "La sobrina que recibía cartas misteriosas de un admirador secreto."
  },
  {
    id: "rodrigo",
    name: "Rodrigo",
    traits: ["Amigo de Catalina", "Barba incipiente", "Bromista", "Sospechoso"],
    description: "Uno de los amigos sospechosos de ser el admirador secreto."
  },
  {
    id: "diego",
    name: "Diego",
    traits: ["Amigo de Catalina", "Acaricia barba", "Estudiante", "Sospechoso"],
    description: "Otro de los posibles admiradores secretos de Catalina."
  },
  {
    id: "alejandro",
    name: "Alejandro",
    traits: ["Amigo de Catalina", "Con otra mujer", "No es el admirador", "Despreocupado"],
    description: "Amigo que tenía otra mujer, descartado como admirador."
  },
  {
    id: "inspector_soto",
    name: "Inspector Heliber-to Soto",
    traits: ["Policía", "Amigo de Felicia", "Orejas grandes", "Santiaguino"],
    description: "El inspector de policía que pide ayuda a doña Felicia en casos difíciles."
  },
  {
    id: "hortensia",
    name: "Hortensia",
    traits: ["Viuda falsa", "Elegante", "Odia Rancagua", "Ladrona de joyas"],
    description: "La impostora que se delató al mencionar Rancagua antes de tiempo."
  },
  {
    id: "rosa",
    name: "Rosa",
    traits: ["Viuda", "Una de las cuatro", "Sospechosa", "Inocente"],
    description: "Una de las cuatro viudas en el caso de la ZOFRI."
  },
  {
    id: "margarita_viuda",
    name: "Margarita (viuda)",
    traits: ["Viuda", "Una de las cuatro", "8 años de soledad", "Inocente"],
    description: "Otra de las viudas investigadas, lleva 8 años de soledad."
  },
  {
    id: "violeta",
    name: "Violeta",
    traits: ["Viuda", "Una de las cuatro", "Boca grande roja", "Inocente"],
    description: "La viuda de boca pintada de rojo, una de las sospechosas."
  },
  {
    id: "leopoldo",
    name: "Leopoldo",
    traits: ["Esposo difunto", "Murió de susto", "Abrió el closet", "Era el marido de Felicia"],
    description: "El difunto esposo de Felicia que murió al ver a Arthur Henry."
  }
];

// CASOS EXPANDIDOS - TODOS los casos del libro (11 casos completos)
export const CASE_SCENARIOS: CaseScenario[] = [
  {
    title: "El Caso de los Billetes en el Jarrón",
    description: "Un robo en casa de los González que resultó ser una farsa.",
    events: [
      { id: "e1", text: "El vecino Belisario llega sudando a buscar a Doña Felicia.", order: 1 },
      { id: "e2", text: "Doña Felicia ve todo desordenado pero el jarrón chino intacto.", order: 2 },
      { id: "e3", text: "Aparece el sobrino Raimundo con una raqueta de tenis.", order: 3 },
      { id: "e4", text: "La empleada Miriam dice que escuchó música fuerte.", order: 4 },
      { id: "e5", text: "Felicia deduce que fue un montaje por el jarrón intacto.", order: 5 },
      { id: "e6", text: "Doña Laura confiesa que fingió el robo para escapar.", order: 6 },
    ]
  },
  {
    title: "El Caso con Muchos Dedos",
    description: "El misterioso robo de un anillo durante el té de las amigas.",
    events: [
      { id: "d1", text: "Patricia llega al té mostrando su nuevo anillo.", order: 1 },
      { id: "d2", text: "Las amigas se pasan el anillo para admirarlo.", order: 2 },
      { id: "d3", text: "Patricia se da cuenta de que el anillo desapareció.", order: 3 },
      { id: "d4", text: "Todas empiezan a acusarse mutuamente.", order: 4 },
      { id: "d5", text: "Felicia usa la frase sobre 'dedos que atan'.", order: 5 },
      { id: "d6", text: "Dorita se delata al mencionar que 'casi se le atascó'.", order: 6 },
    ]
  },
  {
    title: "El Caso de las Pistas en Verso",
    description: "Un concurso de detectives juveniles en La Serena.",
    events: [
      { id: "v1", text: "Los niños se inscriben en el concurso de jóvenes detectives.", order: 1 },
      { id: "v2", text: "Reciben la primera pista en verso sobre 'desde arriba el santo'.", order: 2 },
      { id: "v3", text: "Descifran que deben ir a las campanas de una iglesia.", order: 3 },
      { id: "v4", text: "Encuentran la pista del 'apellido de viento' - Mistral.", order: 4 },
      { id: "v5", text: "Resuelven el acertijo del faro y su ojo que guiña.", order: 5 },
      { id: "v6", text: "Ganan el concurso con la colección de novelas policiales.", order: 6 },
    ]
  },
  {
    title: "El Caso del Robo en el Supermercado",
    description: "Un robo de billetera en el supermercado del Día de la Verdura.",
    events: [
      { id: "s1", text: "Felicia y Arthur van de compras al supermercado.", order: 1 },
      { id: "s2", text: "Una señora del moño tropezó el carro de otra joven.", order: 2 },
      { id: "s3", text: "Cayeron productos incluida una caja de detergente.", order: 3 },
      { id: "s4", text: "La joven grita que le robaron la billetera.", order: 4 },
      { id: "s5", text: "Felicia recuerda que la señora era tramposa con precios.", order: 5 },
      { id: "s6", text: "Encuentran la billetera en el bolso de la señora del moño.", order: 6 },
    ]
  },
  {
    title: "El Misterio del Bizcocho Arena",
    description: "La escena del crimen culinario en casa de Susana.",
    events: [
      { id: "b1", text: "Susana prepara un perfecto bizcocho Arena.", order: 1 },
      { id: "b2", text: "Susana sale a comprar y deja el bizcocho enfriando.", order: 2 },
      { id: "b3", text: "Al volver, solo quedan migas en el plato.", order: 3 },
      { id: "b4", text: "Interrogan a Margarita, Valentina y Sebastián.", order: 4 },
      { id: "b5", text: "Felicia encuentra la escoba en el cuarto de Sebastián.", order: 5 },
      { id: "b6", text: "Sebastián confiesa que barrió las migas de su crimen.", order: 6 },
    ]
  },
  {
    title: "El Caso de los Escritores Confundidos",
    description: "Un libro desaparece misteriosamente en la reunión del CENP.",
    events: [
      { id: "c1", text: "Felicia llega al CENP con el libro de Arthur Henry.", order: 1 },
      { id: "c2", text: "Los escritores se pasan el libro para examinarlo.", order: 2 },
      { id: "c3", text: "Interrumpen la reunión para buscar más sillas.", order: 3 },
      { id: "c4", text: "Al regresar, el libro ha desaparecido.", order: 4 },
      { id: "c5", text: "Felicia usa la frase 'quien no ve pero ve mucho'.", order: 5 },
      { id: "c6", text: "La señora 'cara de laucha' mira involuntariamente donde escondió el libro.", order: 6 },
    ]
  },
  {
    title: "El Caso de la Casa de Campo Amarilla",
    description: "Un valioso encendedor desaparece en la pensión de Frutillar.",
    events: [
      { id: "a1", text: "Los huéspedes almuerzan en la Casa de Campo Amarilla.", order: 1 },
      { id: "a2", text: "El señor Donoso saca su encendedor de oro para fumar.", order: 2 },
      { id: "a3", text: "Todos salen al jardín después del almuerzo.", order: 3 },
      { id: "a4", text: "El señor Donoso no encuentra su encendedor.", order: 4 },
      { id: "a5", text: "Frau Helga sirve té y kuchen mientras buscan.", order: 5 },
      { id: "a6", text: "El encendedor aparece envuelto en una servilleta limpia.", order: 6 },
    ]
  },
  {
    title: "El Caso del Admirador Anónimo",
    description: "Catalina recibe cartas misteriosas de un admirador secreto.",
    events: [
      { id: "ad1", text: "Catalina recibe su primera carta de amor anónima.", order: 1 },
      { id: "ad2", text: "Llegan más cartas con flores pintadas en la puerta.", order: 2 },
      { id: "ad3", text: "Catalina sospecha de sus tres amigos.", order: 3 },
      { id: "ad4", text: "Felicia examina las cartas buscando pistas.", order: 4 },
      { id: "ad5", text: "Descubre una huella dactilar de tinta en una carta.", order: 5 },
      { id: "ad6", text: "Identifica al joven del registro electoral como el admirador.", order: 6 },
    ]
  },
  {
    title: "El Caso de las Dos Carteras",
    description: "Un robo en una elegante cafetería de Viena.",
    events: [
      { id: "ca1", text: "Felicia y Arthur entran a una cafetería en Viena.", order: 1 },
      { id: "ca2", text: "Una señora rubia deja su cartera en la mesa.", order: 2 },
      { id: "ca3", text: "Un señor de pelo canoso pide permiso para sacar palmitos.", order: 3 },
      { id: "ca4", text: "Hay un tropezón y caen productos.", order: 4 },
      { id: "ca5", text: "La señora grita que le robaron la billetera.", order: 5 },
      { id: "ca6", text: "Arthur invisible señala al ladrón que huye.", order: 6 },
    ]
  },
  {
    title: "El Caso de las Cuatro Viudas",
    description: "Inspector Soto busca a la cómplice de un robo en la ZOFRI.",
    events: [
      { id: "vi1", text: "El inspector Soto visita a Felicia con un caso difícil.", order: 1 },
      { id: "vi2", text: "Explica sobre el robo de hace 6 años en Iquique.", order: 2 },
      { id: "vi3", text: "Invita a las cuatro viudas sospechosas a tomar té.", order: 3 },
      { id: "vi4", text: "Las viudas hablan de sus vidas y dónde han estado.", order: 4 },
      { id: "vi5", text: "Hortensia menciona Rancagua antes de tiempo.", order: 5 },
      { id: "vi6", text: "Felicia la identifica como la cómplice por conocer el dato secreto.", order: 6 },
    ]
  },
  {
    title: "El Caso del Robo en el Tren Español",
    description: "Un valioso broche desaparece en el Talgo a España.",
    events: [
      { id: "t1", text: "Felicia y Arthur abordan el Talgo rumbo a Madrid.", order: 1 },
      { id: "t2", text: "Conocen a señoras con joyas valiosas en el vagón.", order: 2 },
      { id: "t3", text: "El tren entra en un túnel largo y oscuro.", order: 3 },
      { id: "t4", text: "Al salir del túnel, una señora grita que le robaron su broche.", order: 4 },
      { id: "t5", text: "Arthur detecta olor a tabaco cerca de un camarote.", order: 5 },
      { id: "t6", text: "Descubren al revisor con el broche escondido.", order: 6 },
    ]
  }
];

// Pool of words - MISMO, ya tiene buena variedad
export const WORD_POOL = [
  "FANTASMA", "LUPA", "FELICIA", "PIPA", "CASOS", 
  "INGLES", "ÑUÑOA", "MISTERIO", "ROBO", "JOYA", 
  "TREN", "ARTHUR", "DETECTIVE", "HUELLA", "PISTA",
  "SECRETO", "SOMBRERO", "LONDRES", "CRIMEN", "CULPABLE",
  "SUSANA", "KUCHEN", "ANILLO", "CARTA", "INVISIBLE"
];
