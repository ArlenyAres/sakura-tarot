import InstructionsCard from "./InstructionsCard";

export default function CardContainer() {
  const cards = [
    {
        title: '1.Concéntrate en tu pregunta o situación:',
        image: 'assets/past-icon.png',
        description: 'Antes de sacar las cartas, concéntrate en lo que quieres saber o en la situación específica sobre la que te gustaría obtener orientación en un tema relaccionado al (Pasado, Presente, y Futuro).',
        altText: 'ilustración con una bola de cristal',
    },

    {
        title: '2.En la pagina principal selecciona las cartas:',
        image: 'assets/future-icon.png',
        description: 'Elige una carta para cada seccion (Pasado, Presente, y Futuro) en un total de 3 cartas por tirada. Para revelar las cartas, haz clic en el botón - Revelar.',
        altText: 'ilustración con un abanico de cartas sakura',
    },

    {
        title: '3.Lee la interpretación:',
        image: 'assets/present-icon.png',
        description: 'La interpretación de cada carta es según su sección y su significado general está en el contexto de tu pregunta o situación.',
        altText: 'ejemplos de las cartas sakura',
    },

    {
        title: '4.Reflexiona:',
        image: 'assets/future-icon.png',
        description: 'Toma un momento para reflexionar sobre la interpretación proporcionada. A veces, las lecturas pueden ser simbólicas o requerir un análisis más profundo para aplicarlas a tu situación personal.',
        altText: 'ilustración con un ojo dentro de una lágrima',
    }
     
  ];
  
    return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, index) => (
             <InstructionsCard key={index} {...card} />
        ))}
    </div>
  );
}
