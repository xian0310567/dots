import {ColorPicker} from './lib/styled';
import Form from '@/components/atom/Form';
import TextInput from '@/components/atom/TextInput';

import useColors from '@/hooks/feature/todo/useColors';

import {NameFormProps} from './lib/NameForm';

const NameForm = (props: NameFormProps) => {
  const {colorList, selectedColor, setSelectedColor} = useColors();

  return (
    <>
      <Form>
        <Form.Item>
          <TextInput
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
