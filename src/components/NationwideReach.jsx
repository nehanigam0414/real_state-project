const locations = [
  {
    name: "Crystalshore",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  },
  {
    name: "Goulcrest",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
  },
  {
    name: "Talens",
    image:
      "https://images.unsplash.com/photo-1472224371017-08207f84aaae",
  },
];

const NationwideReach = () => {
  return (
    <section className="bg-[#0F3558] py-20 fade-in">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif text-[#D8A44A] mb-4">
          Our nationwide reach
        </h2>

        <p className="text-white text-lg max-w-2xl mx-auto mb-12">
          Share your credentials, locations, or awards here. You can use
          the spaces below for offices or logos you want to highlight.
        </p>

        <h3 className="tracking-[6px] text-white text-sm mb-10 uppercase">
          Our Locations
        </h3>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {locations.map((loc, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="overflow-hidden">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-72 object-cover transform transition duration-500 group-hover:scale-110"
                />
              </div>

              <p className="mt-4 text-[#D8A44A] tracking-[3px] text-lg">
                {loc.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NationwideReach;
