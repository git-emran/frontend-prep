const Interests = ({ data, setData }) => {
  const { interests } = data;
  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            name="music"
            type="checkbox"
            checked={interests.includes("music")}
            onChange={handleChange}
          />
          Music
        </label>
      </div>
      <div>
        <label>
          <input
            name="coding"
            type="checkbox"
            checked={interests.includes("coding")}
            onChange={handleChange}
          />
          Coding
        </label>
      </div>
    </div>
  );
};

export default Interests;
