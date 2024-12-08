import { Link } from "react-router-dom";

function LandingPage ()  {
  return (

        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-500 to-orange-400 text-white">
          <h1 className="text-5xl font-bold mb-5">Welcome to Food Haven!</h1>
          <p className="text-lg mb-10 text-center px-5">
        Explore delicious meals and treat your taste buds to an unforgettable experience.
      </p>
          <Link
            to="/about"
            className="px-6 py-3 bg-white text-orange-500 rounded-lg shadow-md hover:bg-orange-100"
          >
            Learn About Us
          </Link>
        </div>
      );
    };
    
export default LandingPage;


