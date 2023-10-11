import Header from '@/components/feature/AddEventModal/Header';
import Container from '@/components/atom/Container';
import NameForm from '@/components/feature/AddEventModal/NameForm';

import useTodo from '@/hooks/feature/days/useTodo';
import useAuth from '@/hooks/util/useAuth';

const AddEvent = () => {
  const {addTodo, setColor, setName} = useTodo();
  const {useUserInfo} = useAuth();
  const {id, type} = useUserInfo();

  return (
    <>
      <Header addTodo={() => addTodo(id)} />
      <Container padding={30}>
        <NameForm setColor={setColor} setName={setName} />
      </Container>
    </>
  );
};

export default AddEvent;
