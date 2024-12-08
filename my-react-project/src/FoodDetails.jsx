import { useParams } from "react-router-dom";

function FoodDetails ()  {
  const { id } = useParams();

  const foodDetails = {
    1: { name: "Pizza", description: "Delicious pizza with fresh toppings" },
    2: { name: "Burger", description: "Juicy burger with a side of fries" },
    3: { name: "Pasta", description: "Creamy pasta with Italian herbs" },
  };

  const food = foodDetails[id];

  if (!food) {
    return <p>Food item not found!</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-orange-500">{food.name}</h1>
      <p className="text-lg text-gray-700 mt-3">{food.description}</p>
      <a
        href="/menu"
        className="mt-5 px-6 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600"
      >
        Back to Menu
      </a>
    </div>
  );
};

export default FoodDetails;
