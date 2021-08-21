import React, { useState } from "react";

const ChangeName = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      ></input>
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      ></input>

      <h2>your first name is-{name.firstName}</h2>
      <h2>your first name is-{name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
};

export default ChangeName;
