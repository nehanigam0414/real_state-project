import { Link } from "react-router-dom";
import "./Properties.css";

const Properties = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Villa",
      price: "$500,000",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      location: "New York",
    },
    {
      id: 2,
      title: "Luxury Apartment",
      price: "$350,000",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      location: "London",
    },
    {
      id: 3,
      title: "Beach House",
      price: "$800,000",
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      location: "Dubai",
    },
  ];

  return (
    <div className="properties-container">
      <h1>Featured Properties</h1>

      <div className="property-grid">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} />

            <div className="property-info">
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <h4>{property.price}</h4>

              <Link to={`/property/${property.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;