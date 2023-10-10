import Form from '@/components/atom/Form';
import TextInput from '@/components/atom/TextInput';
import Divider from '@/components/atom/Divider';
import ColorPicker from '@/components/feature/AddEventModal/ColorPicker';

import useColors from '@/hooks/feature/days/useColors';

const NameForm = () => {
  const {colorList} = useColors();

  return (
    <Form>
      <Form.Item>
        <TextInput placeholder="제목" />
      </Form.Item>
      <Divider />
      <Form.Item label="컬러">
        <ColorPicker colors={colorList} />
      </Form.Item>
    </Form>
  );
};

export default NameForm;
