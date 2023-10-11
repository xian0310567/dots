import Form from '@/components/atom/Form';
import TextInput from '@/components/atom/TextInput';
import Divider from '@/components/atom/Divider';
import ColorPicker from '@/components/feature/AddEventModal/ColorPicker';

import useColors from '@/hooks/feature/days/useColors';

const NameForm = () => {
  const {colorList, selectedColor, setSelectedColor} = useColors();

  return (
    <Form>
      <Form.Item>
        <TextInput placeholder="제목" />
      </Form.Item>
      <Divider color={selectedColor} />
      <Form.Item label="컬러">
        <ColorPicker colors={colorList} setSelectedColor={setSelectedColor} />
      </Form.Item>
    </Form>
  );
};

export default NameForm;
