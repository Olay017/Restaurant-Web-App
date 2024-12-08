
function AboutUs ()  {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-500 to-orange-400 text-white">
    <h1 className="text-5xl font-bold mb-5">About Us</h1>
    <p className="text-lg mb-10 text-center px-5">
        Welcome to Food Haven! We are passionate about providing fresh, delicious meals 
        made with love. Our chefs combine the best ingredients with creative recipes 
        to offer an unforgettable dining experience.</p>

      <a
        href="/menu"
        className="px-6 py-3 bg-white text-orange-500 rounded-lg shadow-md hover:bg-orange-100"
        >
        Explore Our Menu
      </a>
    </div>
  );
};

export default AboutUs;
