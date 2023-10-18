

const Welcome = () => {
  const scrollToSection = () => {
    const section = document.getElementById('take-a-look');
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#81818168] dark:bg-[#19171e] text-black dark:text-white">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4 transform -skew-y-6 transition-transform hover:rotate-3 hover:scale-105">
          Welcome to FlavorFeast
        </h1>
        <p className="text-lg mb-8 transform skew-y-6 transition-transform hover:rotate-3 hover:scale-105">
          Manage Your Site with Ease!
        </p>
        <button
          className="bg-white text-red-500 px-8 py-3 rounded-full font-semibold transform -skew-y-6 hover:bg-red-700 hover:text-white hover:scale-105 transition duration-300"
          onClick={scrollToSection}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Welcome;
