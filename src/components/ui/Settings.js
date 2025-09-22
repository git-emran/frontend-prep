function Settings({ data, setData }) {
  const { theme } = data;

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      theme: e.target.name,
    }));
  };
  return (
    <div>
      <div>
        <h3>Choose your Theme</h3>
      </div>
      <div>
        <label>
          <input
            type="radio"
            onChange={handleChange}
            name="Light"
            checked={theme === "Light"}
          />
          Light
        </label>
      </div>
      <div>
        <label>
          <input
            onChange={handleChange}
            checked={theme === "Dark"}
            type="radio"
            name="Dark"
          />
          Dark
        </label>
      </div>
    </div>
  );
}

export default Settings;
