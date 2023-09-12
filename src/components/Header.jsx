const Header = ({ setCity, fetchData }) => {
  return (
    <div>
      <input
        placeholder="Enter city name"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchData}>Find Weather</button>
    </div>
  );
};

export default Header;
