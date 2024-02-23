const Card = ({ card }) => {
  return (
    <div
      style={{ borderColor: card.color }}
      className="w-[25%] px-3 py-5 h-[140px] bg-white shadow-md drop-shadow-lg flex flex-col gap-5 border-l-[12px] rounded-lg"
    >
      <h2
        style={{ color: card.color }}
        className="text-xl font-bold capitalize"
      >
        {card.name}
      </h2>

      <h4 className="text-[#0B3558] font-bold text-4xl">{card.number}</h4>
    </div>
  );
};

export default Card;
