import { Link } from "react-router-dom";

function Menu ()  {
const menu = [
      { id: 1, name: "Pizza", description: "Cheesy and delicious", img: "/pizza image.avif" },
      { id: 2, name: "Burger", description: "Juicy and filling", img: "/burger image.avif" },
      { id: 3, name: "Pasta", description: "Creamy and flavorful", img: "/pasta image.avif" },
    ];
  
    return (
      <div className="min-h-screen bg-white p-5">
        <h1 className="text-4xl font-bold text-orange-500 text-center mb-10">Menu</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {menu.map((item) => (
            <div
              key={item.id}
              className="p-5 border rounded-lg shadow-md bg-gray-50 hover:shadow-lg"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              {/* Text */}
              <h2 className="text-2xl font-bold">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
              <Link
                to={`/menu/${item.id}`}
                className="text-orange-500 underline mt-3 inline-block"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };
    
  export default Menu;
