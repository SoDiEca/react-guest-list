const baseUrl = 'https://fast-temple-67958.herokuapp.com';

//  getting the guest list from server using 'GET' method

export default async function getAllGuestFromServer() {
  const response = await fetch(`${baseUrl}/`);
  const allGuests = await response.json();

  return allGuests;
}

// adding new guests to the guest list on server using 'POST' method

export default async function createNewGuest() {
  const response = await fetch(`${baseUrl}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstName: '', lastName: '' }),
  });

  const createdGuest = await response.json();
  return createdGuest;
}
//  update guest's attending status using 'PATCH' method

export default async function updateGuestAttendingStatus() {
  const response = await fetch(`${baseUrl}/1`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ attending: true }),
  });
  const updatedGuest = await response.json();
  return updatedGuest;
}

//  delete guest from guest list on the server using 'DELETE' method

export default async function deleteGuestOnServer() {
  const response = await fetch(`${baseUrl}/1`, {
    method: 'DELETE',
  });
  const deletedGuest = await response.json();
  return deletedGuest;
}

// import { useEffect, useState } from 'react';

// // function to get all guests from server

// export default function AllGuests() {
//   const baseUrl = 'https://fast-temple-67958.herokuapp.com';

//   const [allGuests, setAllGuest] = useState();

//   async function getAllGuest() {
//     const response = await fetch(`${baseUrl}/`);
//     const allGuestsFromServer = await response.json();
//     setAllGuest(allGuestsFromServer);
//     console.log(allGuestsFromServer);
//   }

//   useEffect(() => {
//     getAllGuest();
//   }, []);

//   return !allGuests?.results ? (
//     <div>Loading ...</div>
//   ) : (
//     <div>
//       <div>name: {allGuests.results.name.first}</div>
//       <div>last name: {allGuests.results.name.last}</div>
//     </div>
//   );

// async function createGuest() {
//   const response = await fetch(`${baseUrl}/`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ firstName: 'Karl', lastName: 'Horky' }),
//   });
//   return createGuest(response);
// }

// import PropTypes from 'prop-types';

// //const guests = [];

// const GuestList = (props) => {
//   return (
//     <ul>
//       <li>Name: {props.guest.name}</li>
//       <li>Last Name: {props.guest.lastName}</li>
//     </ul>
//   );
// };

// GuestList.propTypes = {
//   guest: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     lastName: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default GuestList;
