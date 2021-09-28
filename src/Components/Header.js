export default function Header() {
  return (
    <div>
      <h1>Guest List</h1>
      <form>
        <label>
          First Name:
          <input required />
        </label>

        <br />
        <br />
        <label>
          Last Name:
          <input required />
        </label>
        <button className="btn" onClick={() => console.log('click')}>
          Add Guest
        </button>
      </form>
    </div>
  );
}

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
//   guest: PropTypes.shape({
//     firstName: PropTypes.string.isRequired,
//     lastName: PropTypes.string.isRequired,
//   }).isRequired,
// };
