import { useParams } from "react-router-dom"

function Profile() {
  const { profileId } = useParams();
  return (
    <div>Profile {profileId}</div>
  )
}

export default Profile
