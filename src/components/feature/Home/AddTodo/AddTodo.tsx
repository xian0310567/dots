import {TouchableOpacity, View, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorCallback} from '@/components/layout/Navigator';

import styled from './lib/styled';

const AddTodo = () => {
  const router =
    useNavigation<NativeStackNavigationProp<NavigatorCallback, 'AddEvent'>>();

  return (
    <TouchableOpacity onPress={() => router.navigate('AddEvent')}>
      <View style={styled.container}>
        <Text style={styled.text}>할일 추가하기</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddTodo;
