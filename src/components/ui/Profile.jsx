const Profile = ({ avatarUrl, userName }) => {
  return <img className="w-14 h-14 mr-4" src={avatarUrl} alt={userName} />;
};

export default Profile;
