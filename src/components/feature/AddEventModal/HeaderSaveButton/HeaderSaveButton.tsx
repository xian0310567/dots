import React from 'react';
import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

const HeaderSaveButton = () => {
  return (
    <TouchableOpacity>
      <Icon name="check" size={20} color="#888" />
    </TouchableOpacity>
  );
};

export default HeaderSaveButton;
