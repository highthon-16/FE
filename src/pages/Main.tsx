import { Calendar, TodoBar } from "@/components";
import { useState } from "react";
import styled from "@emotion/styled";
import { Plus } from "@/assets";

export const Main = () => {
  const [selected, setSelected] = useState<Date | undefined>(new Date());
  const [todoList, setTodoList] = useState<
    { id: number; title: string; editing: boolean }[]
  >([]);

  const handleTodoChange = (id: number, newTitle: string) => {
    setTodoList((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, title: newTitle } : todo))
    );
  };

  const handleFinishEdit = (id: number) => {
    setTodoList((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, editing: false } : todo))
    );
  };

  return (
    <Wrapper>
      <Calendar
        selected={selected}
        onSelect={(date) => {
          if (date) setSelected(date);
        }}
      />
      <Todolist>
        <Title>
          일정
          <img
            src={Plus}
            alt="plus"
            onClick={() =>
              setTodoList((prev) => [
                ...prev,
                { id: Date.now(), title: "", editing: true },
              ])
            }
            style={{ cursor: "pointer" }}
          />
        </Title>

        <Contents>
          {todoList.map((todo) => (
            <TodoBar
              key={todo.id}
              title={todo.title}
              complete={false}
              editing={todo.editing}
              onChange={(value) => handleTodoChange(todo.id, value)}
              onFinishEdit={() => handleFinishEdit(todo.id)}
            />
          ))}
        </Contents>
      </Todolist>
    </Wrapper>
  );
};

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 250px;
  overflow-y: scroll;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Pretendard;
  font-weight: 700;
  font-size: 20px;
  line-height: 35px;
`;

const Todolist = styled.div`
  width: 100%;
  border-top: 1px solid #edebeb;
  padding: 18px 31px 3px 31px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Wrapper = styled.div`
  padding: 0px 31px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 29px;
`;
