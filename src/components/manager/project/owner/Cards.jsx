import Card from "./Card";

const Cards = () => {
  const cards = [
    { name: "tasks", number: 402, color: "#66DC90" },
    { name: "Participants", number: 49, color: "#56A0EA" },
    { name: "Files", number: 1563, color: "#0AE7EF" },
    { name: "Days", number: 8, color: "#BFB7F1" },
  ];
  return (
    <div className="flex items-center justify-center gap-10">
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};

export default Cards;
