import { useEffect, useState } from 'react';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [disable, setDisable] = useState(false);
  const [attendingGuests, setAttendingGuests] = useState(false);
  const baseUrl = 'https://fast-temple-67958.herokuapp.com';
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    const getGuests = async () => {
      const allGuests = await fetch(`${baseUrl}/`);
      setGuests(allGuests);
    };
    getGuests();
  }, [guests]);

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="true">First Name</label>
        <input
          required
          id="firstName"
          value={firstName}
          disabled={disable}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="true">Last Name</label>
        <input
          required
          id="lastName"
          value={lastName}
          disabled={disable}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <button
          className="add guest btn"
          onClick={() => {
            setFirstName('');
            setLastName('');
          }}
        >
          Add Guest
        </button>
        <div>
          <p>List loading ...</p>
        </div>

        <div className="form-control-checkbox">
          <label htmlFor="true">Attending Guests</label>
          <input
            type="checkbox"
            checked={attendingGuests}
            onChange={(e) => setAttendingGuests(e.currentTarget.checked)}
          />
        </div>
      </div>
    </form>
  );
};

export default App;
