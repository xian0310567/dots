import {useEffect} from 'react';

import {ColorPicker, Input} from './lib/styled';
import Form from '@/components/atom/Form';

import useColors from '@/hooks/feature/todo/useColors';
import useGetTextColorByBackgroundColor from '@/hooks/util/useGetTextColorByBackgroundColor';

import {NameFormProps} from './lib/NameForm';
import React from 'react';

const NameForm = (props: NameFormProps) => {
  const {colorList, selectedColor, setSelectedColor} = useColors();

  const color = useGetTextColorByBackgroundColor(selectedColor);

  useEffect(() => {
    setSelectedColor(props.color);
  }, [props.color]);

  return (
    <>
      <Form style={{backgroundColor: selectedColor}}>
        <Form.Item>
          <Input
            value={props.name}
            color={color}
            placeholderTextColor={color}
            placeholder="제목"
            onChange={e => {
              props.setName(e.nativeEvent.text);
            }}
          />
        </Form.Item>
      </Form>
      <ColorPicker
        colors={colorList}
        onPressChip={color => {
          setSelectedColor(color);
          props.setColor(color);
        }}
      />
    </>
  );
};

export default NameForm;
