function Interests({ data, setData }) {
  const { interests } = data;
  return (
    <div>
      <div>
        <label>
          <input
            name="music"
            type="checkbox"
            checked={interests.includes("music")}
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
          />
          Coding
        </label>
      </div>
    </div>
  );
}

export default Interests;
