import './closeFriend.css'

export default function CloseFriend({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
      <li className="sideBarFriend">
            <img src={`${PF}/${user.profilePic}`} alt="friend profile picture" className="sideBarFriendImg" />
            <span className="sideBarFriendName">{user.userName}</span>
          </li>
  )
}
