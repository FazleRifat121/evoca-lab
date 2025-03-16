import "./search.css";
const Search = () => {
  return (
    <div>
      <div className="search">
        <input
          placeholder="Enter Your Email"
          type="text"
          className="tracking-wide"
        />
        <button type="submit">Subscribe</button>
      </div>
    </div>
  );
};

export default Search;
