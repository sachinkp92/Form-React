import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ContactItem from "./components/ContactItem";
const initialContactsList = [
  {
    id: uuidv4(),
    name: "Ram",
    mobileNo: 9999988888,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: "Pavan",
    mobileNo: 8888866666,
    isFavorite: true,
  },
  {
    id: uuidv4(),
    name: "Nikhil",
    mobileNo: 9999955555,
    isFavorite: false,
  },
];

function App() {
  const [contactsList, setContactList] = useState(initialContactsList);
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeMobileNo = (event) => {
    setMobileNo(event.target.value);
  };

  const toggleIsFavorite = (id) => {
    setIsFavorite(!isFavorite);
  };

  const onAddContact = (event) => {
    event.preventDefault();
    const newContact = {
      id: uuidv4(),
      name,
      mobileNo,
      isFavorite: false,
    };
    setContactList([...contactsList, newContact]);
    setName("");
    setMobileNo("");
  };
  return (
    <div className="app-container">
      <div className="responsive-container">
        <h1 className="heading">Contacts</h1>
        <form className="contact-form-container" onSubmit={onAddContact}>
          <input
            value={name}
            onChange={onChangeName}
            className="input"
            placeholder="Name"
          />
          <input
            className="input"
            value={mobileNo}
            onChange={onChangeMobileNo}
            placeholder="Mobile Number"
          />
          <button type="submit" className="button">
            Add Contact
          </button>
        </form>
        <ul className="contacts-table">
          <li className="table-header">
            <p className="table-header-cell name-column">Name</p>
            <hr className="separator" />
            <p className="table-header-cell">Mobile Number</p>
          </li>
          {contactsList.map((eachContact) => (
            <ContactItem
              key={eachContact.id}
              contactDetails={eachContact}
              toggleIsFavorite={toggleIsFavorite}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
