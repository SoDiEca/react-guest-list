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
      const res = await fetch(`${baseUrl}/`);
      const data = await res.json();
      console.log(data);

      setGuests(data);
    };
    getGuests();
  }, []);

  const createGuest = async () => {
    const res = await fetch(`${baseUrl}/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ firstName: firstName, lastName: lastName }),
    });
    const data = await res.json();
    console.log('full object', data);
    console.log('id', data.id);
    setGuests([...guests, data]);
  };

  const deleteGuest = async (guest) => {
    const res = await fetch(`${baseUrl}/${guest.id}`, {
      method: 'DELETE',
    });

    const deletedGuest = await res.json();

    console.log(deletedGuest);
    /* filtering the deleted guest out, and showing the remaining guests */
    const guestsRemaining = guests.filter((g) => g.id !== deletedGuest.id);
    console.log(guestsRemaining);

    setGuests(guestsRemaining);
  };

  const updatedGuest = async () => {
    const res = await fetch(`${baseUrl}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attending: true }),
    });
    const data = await res.json();
    console.log(data);
    setGuests([...guests, data]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
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
      </form>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="true">Last Name</label>
          <input
            required
            id="lastName"
            value={lastName}
            disabled={disable}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </form>
      <div>
        <button
          className="add guest btn"
          onClick={() => {
            setFirstName(firstName);
            setLastName(lastName);
            createGuest();
          }}
        >
          Add Guest
        </button>

        <div className="form-control-checkbox">
          <label htmlFor="true">Attending Guests</label>
          <input
            type="checkbox"
            checked={attendingGuests}
            onChange={(e) => setAttendingGuests(e.currentTarget.checked)}
          />
        </div>
        <div>
          Guest List
          {console.log('list', guests)}
          <ul>
            {guests.map((guest) => {
              return (
                <li key={guest.id}>
                  {guest.firstName} {guest.lastName}
                  <button
                    className="remove guest btn"
                    onClick={() => {
                      deleteGuest(guest);
                    }}
                  >
                    delete Guest
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
