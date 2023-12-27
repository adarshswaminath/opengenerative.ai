
  function Card({name,image}) {
    return (
      <div className="overflow-hidden shadow-lg rounded-lg flex flex-col items-center p-3">
        <img src={image} alt={name} className="h-24 w-24 object-cover" />
        <div className="p-2">
          <h1 className="text-xl font-semibold">{name}</h1>
        </div>
      </div>
    );
  }
  
  export default Card;
  