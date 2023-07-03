import { useState } from "react";

const Mine = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [person, setPerson] = useState([]);

  const handleFirstNameChange = (e) => {
    setfirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setlastName(e.target.value);
  };

  const handleAddPerson = (e) => {
    if (firstName && lastName) {
      const newPerson = {
        firstName: firstName,
        lastName: lastName,
      };
      setPerson([...person, newPerson]);
      setfirstName("");
      setlastName("");
    }
  };

  const handleDelete = (index) => {
    const newPerson = [...person];
    newPerson.splice(index, 1);
    setPerson(newPerson);
  };

  return (
    <div>
      <h3>This is Test Product!</h3>
      <div>
        <input
          type="text"
          value={firstName}
          placeholder="FirstName"
          onChange={handleFirstNameChange}
        ></input>
      </div>
      <div>
        <input
          type="text"
          value={lastName}
          placeholder="LastName"
          onChange={handleLastNameChange}
        ></input>
      </div>
      <div>
        <button onClick={handleAddPerson}>Add Person</button>
      </div>
      <div>
        <ui>
          {person.map((person, index) => (
            <li key={index}>
              <h2>{person.firstName}</h2>
              <p>{person.lastName}</p>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ui>
      </div>
    </div>
  );
};
export default Mine;
