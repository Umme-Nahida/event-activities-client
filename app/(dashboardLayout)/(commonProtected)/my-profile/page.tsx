import MyProfilePage from '@/components/modules/MyProfile/MyProfile';
import { getMyProfile } from '@/services/auth/auth.service';

const MyProfile = async() => {
    const userInfo = await getMyProfile();
  return (
    <div>
      <MyProfilePage myInfo={userInfo.data}></MyProfilePage>
    </div>
  )
}

export default MyProfile

// import MyProfile from "@/components/modules/MyProfile/MyProfile";
// import { getUserInfo } from "@/services/auth/getUserInfo";

// const MyProfilePage = async () => {
//   const userInfo = await getUserInfo();
//   return <MyProfile userInfo={userInfo} />;
// };

// export default MyProfilePage;