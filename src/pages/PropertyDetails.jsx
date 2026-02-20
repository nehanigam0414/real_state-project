import { Link } from "react-router-dom";

const Properties = () => {
  const properties = [
    { id: 1, title: "Modern Villa", price: "$500,000" },
    { id: 2, title: "Luxury Apartment", price: "$350,000" },
    { id: 3, title: "Beach House", price: "$800,000" },
  ];

  return (
    <div style={{ padding: "120px 80px", color: "white" }}>
      <h1>Properties</h1>

      {properties.map((property) => (
        <div key={property.id} style={{ margin: "20px 0" }}>
          <h3>{property.title}</h3>
          <p>{property.price}</p>
          <Link to={`/property/${property.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Properties;