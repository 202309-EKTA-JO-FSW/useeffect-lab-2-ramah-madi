export default function Form({ userName, setUserName}) {
  return (
    <form>
      <h3>Search user Github</h3>
      <div className="mb-3">
        <label>User name</label>
        <input type="text" className="form-control" placeholder="User Name" value={userName}
          onChange={(event) => {
            setUserName(event.target.value);
          }}/>
      </div>
    </form>
  );
}