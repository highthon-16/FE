import { Calendar, TodoBar, CalendarModal } from "@/components";
import { useState } from "react";
import styled from "@emotion/styled";
import { Plus } from "@/assets";

export const Main = () => {
  const [selected, setSelected] = useState<Date | undefined>(new Date());
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth() + 1
  );
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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

  const handleDateSelect = (month: number, year: number) => {
    setCurrentMonth(month);
    setCurrentYear(year);
    // 선택된 월/년의 1일로 설정
    setSelected(new Date(year, month - 1, 1));
  };

  const currentYearMonth = `${currentYear}.${String(currentMonth).padStart(
    2,
    "0"
  )}`;

  return (
    <Wrapper>
      <SelectDate onClick={() => setIsModalOpen(true)}>
        {currentYearMonth}
      </SelectDate>
      <Calendar
        selected={selected}
        currentMonth={currentMonth}
        currentYear={currentYear}
        onSelect={(date: Date) => {
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

      <CalendarModal
        isClick={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDateSelect}
        initialMonth={currentMonth}
        initialYear={currentYear}
      />
    </Wrapper>
  );
};

const SelectDate = styled.div`
  margin-right: auto;
  font-size: 25px;
  font-weight: 700;
`;

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
