import Header from '@/components/feature/AddEventModal/Header';
import Container from '@/components/atom/Container';
import NameForm from '@/components/feature/AddEventModal/NameForm';

import useTodo from '@/hooks/feature/days/useTodo';

const AddEvent = () => {
  const {addTodo, setColor, setName} = useTodo();

  return (
    <>
      <Header addTodo={() => addTodo()} />
      <Container padding={30}>
        <NameForm setColor={setColor} setName={setName} />
      </Container>
    </>
  );
};

export default AddEvent;
