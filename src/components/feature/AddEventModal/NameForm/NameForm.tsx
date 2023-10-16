import Form from '@/components/atom/Form';
import TextInput from '@/components/atom/TextInput';
import Divider from '@/components/atom/Divider';
import ColorPicker from '@/components/feature/AddEventModal/ColorPicker';

import useColors from '@/hooks/feature/todo/useColors';

import {NameFormProps} from './lib/NameForm';

const NameForm = (props: NameFormProps) => {
  const {colorList, selectedColor, setSelectedColor} = useColors();

  return (
    <Form>
      <Form.Item>
        <TextInput
          placeholder="제목"
          onChange={e => {
            props.setName(e.nativeEvent.text);
          }}
        />
      </Form.Item>
      <Divider color={selectedColor} />
      <Form.Item label="컬러">
        <ColorPicker
          colors={colorList}
          onPressChip={color => {
            setSelectedColor(color);
            props.setColor(color);
          }}
        />
      </Form.Item>
    </Form>
  );
};

export default NameForm;
