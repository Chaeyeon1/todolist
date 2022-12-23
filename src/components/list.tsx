import React, { useState } from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { Box, Flex, Spacer, Checkbox, useToast } from "@chakra-ui/react";
import {
  NameState,
  DoingState,
  BacklogState,
  TodoState,
  DoneState,
} from "./atom";

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
  let setBacklog = useSetRecoilState(BacklogState);
  let [Todo, setTodo] = useRecoilState(TodoState);
  let [Doing, setDoing] = useRecoilState(DoingState);
  let [Done, setDone] = useRecoilState(DoneState);
  let Name = useRecoilValue(NameState);

  const toast = useToast();

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
          setTodo((todos) => todos.filter((back) => back.id !== id)); // Todo에서는 없애줌
        } else {
          toast({
            title: "Owner 에러",
            description: `${job.owner}님의 소유 todo입니다.`,
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "bottom-right",
          });
        }
      } else if (name === "Doing") {
        // 만약 카드가 Doing 카드라면
        if (job.owner === Name) {
          // 할 일의 owner와 자신의 이름이 같은지 판별

          setDone((oldTodoList) => [
            ...oldTodoList,
            Doing.filter((back) => back.id === id)[0],
          ]);
          setDoing((doing) => doing.filter((back) => back.id !== id));
          // setchecked(!checked);
        } else {
          toast({
            title: "Owner 에러",
            description: `${job.owner}님의 소유 todo입니다.`,
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "bottom-right",
          });
        }
      } else {
        setchecked(!checked);
      }
    } else {
      if (name !== "Backlog") {
        setchecked(!checked);
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
        setDone((done) => done.filter((back) => back.id !== id));
      } else {
        toast({
          title: "Owner 에러",
          description: `${job.owner}님의 소유 todo입니다.`,
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "bottom-right",
        });
      }
    } else if (name === "Doing") {
      if (job.owner === Name) {
        setTodo((oldTodoList) => [
          ...oldTodoList,
          Doing.filter((back) => back.id === id)[0],
        ]);
        setDoing((doing) => doing.filter((back) => back.id !== id));
      } else {
        toast({
          title: "Owner 에러",
          description: `${job.owner}님의 소유 todo입니다.`,
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "bottom-right",
        });
      }
    } else if (name === "Todo") {
      if (job.owner === Name) {
        toast({
          title: "Backlog 에러",
          description: "한 번 꺼낸 Todo는 다시 Backlog로 이동할 수 없습니다.",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "bottom-right",
        });
      } else {
        toast({
          title: "Owner 에러",
          description: `${job.owner}님의 소유 todo입니다.`,
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "bottom-right",
        });
      }
    } else {
      setBacklog((backlog) => backlog.filter((back) => back.id !== id));
    }
  };

  return (
    <Flex h="60px" _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
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
        {name === "Backlog"
          ? `${job.title}`
          : `${job.title} / 소유자 : ${job.owner}`}
      </Checkbox>
      <Spacer />
      {name === "Backlog" ? (
        <div></div>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          as="button"
          w="15%"
          h="60px"
          paddingBottom="1%"
          marginRight="1%"
          onClick={() => delClick(job.id)}>
          ❌
        </Box>
      )}
    </Flex>
  );
}

export default React.memo(List);
