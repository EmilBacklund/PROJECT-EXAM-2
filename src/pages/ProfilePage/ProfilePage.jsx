import ProfileHeader from "./ProfileHeader";
import ProfileMain from "./ProfileMain";
import { getItem } from "../../utils/storage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getUserProfile from "../../api/getUserProfile";

const ProfilePage = () => {
  const user = getItem("user");
  const { userName } = useParams();
  const [isLoggedInUser, setIsLoggedInUser] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    document.title = `Holidaze | ${userName || user.name}`;
  }, [userName, user.name]);

  useEffect(() => {
    if (user.name == userName) {
      setIsLoggedInUser(true);
    } else {
      setIsLoggedInUser(false);
    }
  }, [user.name, userName]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const fetchedProfile = await getUserProfile(userName);
        setProfile(fetchedProfile);
      } catch (error) {}
    };
    fetchProfile();
  }, [userName]);

  return (
    <>
      <ProfileHeader
        isLoggedInUser={isLoggedInUser}
        userName={userName}
        user={user}
        profile={profile}
      />
      <ProfileMain profile={profile} />
    </>
  );
};

export default ProfilePage;
