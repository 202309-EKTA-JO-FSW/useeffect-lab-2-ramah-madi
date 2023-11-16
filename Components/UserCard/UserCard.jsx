export default function UserCard({ userInfo }) {
  return (
    <div className="user-card">
      <div>
        <img alt="avatar" src={userInfo.avatar_url}/>
      </div>
      <div>
        <h5> Name: {userInfo.name}</h5>

        <p> Username: {userInfo.login}</p>
      </div>
    </div>
  );
}