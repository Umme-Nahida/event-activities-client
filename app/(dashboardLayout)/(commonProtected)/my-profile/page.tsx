import { getUserInfo } from '@/services/auth/getUserInfo';
import React from 'react'

const MyProfile = async() => {
    const userInfo = await getUserInfo();
    console.log("userInfo",userInfo)
  return (
    <div>MyProfile</div>
  )
}

export default MyProfile