import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Box, Flex, Spacer, Checkbox } from "@chakra-ui/react";
import {
  NameState,
  DoingState,
  BacklogState,
  TodoState,
  DoneState,
} from "../components/atom";

interface todoProps {
  name: string;
  job: {
    id: number;
    title: string;
    owner: string;
  };
}

function List({ job, name }: todoProps) {
  const [checked, setchecked] = useState(false);
  let [Backlog, setBacklog] = useRecoilState(BacklogState);
  let [Todo, setTodo] = useRecoilState(TodoState);
  let [Doing, setDoing] = useRecoilState(DoingState);
  let [Done, setDone] = useRecoilState(DoneState);
  let [Name, setName] = useRecoilState(NameState);

  const ClickList = async (id: number) => {
    if (checked === false) {
      let newTodo = {
        id: 0,
        title: "",
        owner: "",
      };
      if (name === "Backlog") {
        // 만약에 카드가 Backlog 카드라면
        setBacklog((backlog) => {
          let newBacklog = backlog.map(
            (back) => (back.id === id ? { ...back, owner: Name } : back)
            // Backlog를 클릭했을 때 그 소유주로 이름을 바꿔줌
          );

          newTodo = newBacklog.filter((back) => back.id === id)[0];
          // Todo 카드에 넣기 위해서 내가 클릭한 아이디의 리스트를 newTodo에 저장
          newBacklog = newBacklog.filter((back) => back.id !== id);
          // Backlog 카드에서는 지우기 위해서 Backlog를 이렇게 저장
          return newBacklog;
        });
        setTodo((oldTodoList) => [...oldTodoList, newTodo]);
        // Todo 카드에 위에서 클릭한 거 저장한 변수로 setTodo 해줌
        setchecked(!checked);
      } else if (name === "Todo") {
        // 만약에 카드가 Todo 카드라면
        if (job.owner === Name) {
          // 할 일의 owner와 자신의 이름이 같은지 판별
          setDoing((oldTodoList) => [
            // 같다면 Todo에서 클릭한 리스트를 Doing 카드에 저장
            ...oldTodoList,
            Todo.filter((back) => back.id === id)[0],
          ]);
          setTodo(Todo.filter((back) => back.id !== id)); // Todo에서는 없애줌
          setchecked(!checked);
        } else {
          alert("사용자가 다릅니다."); // 사용자가 다르다면 다르다는 문구 출력
        }
      } else if (name === "Doing") {
        // 만약 카드가 Doing 카드라면
        if (job.owner === Name) {
          // 할 일의 owner와 자신의 이름이 같은지 판별

          setDone((oldTodoList) => [
            ...oldTodoList,
            Doing.filter((back) => back.id === id)[0],
          ]);
          setDoing(Doing.filter((back) => back.id !== id));
          setchecked(!checked);
        } else {
          alert("사용자가 다릅니다."); // 사용자가 다르다면 다르다는 문구 출력
        }
      }
    }
  };

  const delClick = (id: number) => {
    if (name === "Done") {
      if (job.owner === Name) {
        setDoing((oldTodoList) => [
          ...oldTodoList,
          Done.filter((back) => back.id === id)[0],
        ]);
        setDone(Done.filter((back) => back.id !== id));
      } else {
        alert("사용자가 다릅니다."); // 사용자가 다르다면 다르다는 문구 출력
      }
    } else if (name === "Doing") {
      if (job.owner === Name) {
        setTodo((oldTodoList) => [
          ...oldTodoList,
          Doing.filter((back) => back.id === id)[0],
        ]);
        setDoing(Doing.filter((back) => back.id !== id));
      } else {
        alert("사용자가 다릅니다."); // 사용자가 다르다면 다르다는 문구 출력
      }
    } else if (name === "Todo") {
      if (job.owner === Name) {
        alert("다시 돌아갈 수 없습니다.");
      } else {
        alert("사용자가 다릅니다."); // 사용자가 다르다면 다르다는 문구 출력
      }
    } else {
      setBacklog(Backlog.filter((back) => back.id !== id));
    }
  };

  return (
    <Flex _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
      <Checkbox
        colorScheme="blackAlpha"
        marginLeft="4%"
        color="blackAlpha.700"
        h="60px"
        w="80%"
        isChecked={checked}
        fontWeight="bold"
        onChange={() => {
          ClickList(job.id);
        }}>
        {job.title}
      </Checkbox>
      <Spacer />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        as="button"
        w="15%"
        h="60px"
        paddingBottom="1%"
        // backgroundColor="rgba(255,255,255,0)"
        marginRight="1%"
        onClick={() => delClick(job.id)}>
        ❌
      </Box>
    </Flex>
  );
}

export default List;
