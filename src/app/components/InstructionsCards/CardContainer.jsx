import InstructionsCard from "./InstructionsCard";

export default function CardContainer() {
  const cards = [
    {
        title: '1. Concéntrate en tu pregunta o situación:',
        description: 'Antes de sacar las cartas, concéntrate en lo que quieres saber o en la situación específica sobre la que te gustaría obtener orientación en un tema relaccionado al (Pasado, Presente, y Futuro).',
    },

    {
        title: '2. En la pagina principal selecciona las cartas:',
        description: 'Elige una carta para cada seccion (Pasado, Presente, y Futuro) en un total de 3 cartas por tirada. Para revelar las cartas, haz clic en el botón - Revelar.',
    },

    {
        title: '3. Lee la interpretación de tus cartas:',
        description: 'La interpretación de cada carta es según su sección y su significado general está en el contexto de tu pregunta o situación.',
    },

    {
        title: '4. Reflexiona:',
        description: 'Toma un momento para reflexionar sobre la interpretación proporcionada. A veces, las lecturas pueden ser simbólicas o requerir un análisis más profundo para aplicarlas a tu situación personal.',
    },

    {
      title: '5. Abre una cuenta:',
      description: 'Añade tu nombre para abrir una cuenta y poder guardar y siempre ver tus cartas',
  },

  {
    title: '6. Guardar tus cartas:',
    description: 'Pulsar el botón - Guardar, para tener todas tus cartas guardadas en un sitio',
}
     
  ];
  
    return (
    <div className="grid grid-cols-1 gap-10 px-8 pb-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards.map((card, index) => (
             <InstructionsCard key={index} {...card} />
        ))}
    </div>
  );
}
