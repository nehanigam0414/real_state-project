const AddProperty = () => {
  return (
    <div style={{ padding: "120px 80px", color: "white" }}>
      <h1>Add New Property</h1>
      <form>
        <input type="text" placeholder="Property Title" /><br /><br />
        <input type="text" placeholder="Price" /><br /><br />
        <textarea placeholder="Description"></textarea><br /><br />
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default AddProperty;