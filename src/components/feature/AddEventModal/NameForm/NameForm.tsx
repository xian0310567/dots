import Form from '@/components/atom/Form';
import TextInput from '@/components/atom/TextInput';

const NameForm = () => {
  return (
    <Form>
      <Form.Item>
        <TextInput placeholder="제목" />
      </Form.Item>
      <Form.Item label="컬러"></Form.Item>
    </Form>
  );
};

export default NameForm;
