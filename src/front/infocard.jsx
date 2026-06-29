// where we will make the basic info of the profile card

export default function Infocard({ user }) {
  const username = user.url?.split("/").pop();

  return (
    <section className="profile-card">
      <img className="profile-avatar" src={user.avatar} alt={username} />

      <h2>{user.name || username}</h2>
      <p className="profile-username">@{username}</p>

      {user.bio && <p className="profile-bio">{user.bio}</p>}
      <div className="profile-meta">
        <p>Github</p>
        {user.location && <p>{user.location}</p>}
        <p>{user.url}</p>

        {user.dateJoined && (
          <p>Joined {new Date(user.dateJoined).toLocaleDateString()}</p>
        )}
      </div>

      <a className="profile-button" href={user.url} target="_blank">
        View Profile
      </a>
    </section>
  );
}
