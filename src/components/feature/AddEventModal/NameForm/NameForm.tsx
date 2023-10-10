import Form from '@/components/atom/Form';
import TextInput from '@/components/atom/TextInput';
import Divider from '@/components/atom/Divider';

const NameForm = () => {
  return (
    <Form>
      <Form.Item>
        <TextInput placeholder="제목" />
      </Form.Item>
      <Divider />
      <Form.Item label="컬러"></Form.Item>
    </Form>
  );
};

export default NameForm;
