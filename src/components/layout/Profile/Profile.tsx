import React from 'react';
import profileImage from '@/assets/profile.png';

import {Image} from 'react-native';

import style from './lib/styled';

const Profile = () => {
  const styled = style();

  return <Image source={profileImage} style={styled.profile} />;
};

export default Profile;
