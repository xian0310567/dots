import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {View, Text, TouchableOpacity} from 'react-native';
import CheckBox from '@/components/atom/CheckBox';

import useGetTextColorByBackgroundColor from '@/hooks/util/useGetTextColorByBackgroundColor';
import useClearTodo from '@/hooks/feature/todo/useClearTodo';

import {TodoProps} from './lib/Todo';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorCallback} from '@/components/layout/Navigator';

import style from './lib/styled';

const Todo = (props: TodoProps) => {
  const todo = props.todo.item;

  const {addClearTodo, deleteClearTodo} = useClearTodo();

  const router = useNavigation<NativeStackNavigationProp<NavigatorCallback>>();

  const textColor = useGetTextColorByBackgroundColor(todo.color);
  const styled = style(todo.color, textColor);

  return (
    <TouchableOpacity
      style={styled.container}
      onPress={() => router.navigate('SetTodo', {todoId: props.todo.item.id})}>
      <View style={styled.todo}>
        <CheckBox
          defaultColor={textColor}
          value={props.clear}
          onPress={() => {
            if (props.clear) deleteClearTodo(todo.id);
            if (!props.clear) addClearTodo(todo.id);
          }}
        />
        <Text style={styled.text}>{todo.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Todo;
