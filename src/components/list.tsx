import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
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
        setBacklog((backlog) => {
          let newBacklog = backlog.map((back) =>
            back.id === id ? { ...back, owner: Name } : back
          );

          newTodo = newBacklog.filter((back) => back.id === id)[0];
          console.log(newTodo);
          newBacklog = newBacklog.filter((back) => back.id !== id);
          return newBacklog;
        });
        setTodo((oldTodoList) => [...oldTodoList, newTodo]);
      } else if (name === "Todo") {
        const af = Todo.filter((back) => back.id === id)[0];

        console.log(af);
        console.log(Name);
        // if (job.owner === Name) {
        setDoing((oldTodoList) => [
          ...oldTodoList,
          Todo.filter((back) => back.id === id)[0],
        ]);
        setTodo(Todo.filter((back) => back.id !== id));
        // } else {
        //   alert("사용자가 다릅니다.");
        // }
      } else if (name === "Doing") {
        setDone((oldTodoList) => [
          ...oldTodoList,
          Doing.filter((back) => back.id === id)[0],
        ]);
        setDoing(Doing.filter((back) => back.id !== id));
      }
    }
    setchecked(!checked);

    // console.log(newBacklog);

    // });

    // setBacklog((backlog) => {
    //   const Backlog = backlog.map((back) =>
    //     back.id === id ? { ...back, owner: Name } : back
    //   );

    //   console.log(Backlog);
    //   return Backlog;
    // });

    // if (checked === false) {
    //   if (name === "Backlog") {
    //     setTodo((oldTodoList) => [
    //       ...oldTodoList,
    //       Backlog.filter((back) => back.id === id)[0],
    //     ]);
    //     setBacklog(Backlog.filter((back) => back.id !== id));
    //   } else if (name === "Todo") {
    //     const af = Todo.filter((back) => back.id === id)[0];

    //     console.log(af);
    //     console.log(Name);
    //     // if (job.owner === Name) {
    //     setDoing((oldTodoList) => [
    //       ...oldTodoList,
    //       Todo.filter((back) => back.id === id)[0],
    //     ]);
    //     setTodo(Todo.filter((back) => back.id !== id));
    //     // } else {
    //     //   alert("사용자가 다릅니다.");
    //     // }
    //   } else if (name === "Doing") {
    //     setDone((oldTodoList) => [
    //       ...oldTodoList,
    //       Doing.filter((back) => back.id === id)[0],
    //     ]);
    //     setDoing(Doing.filter((back) => back.id !== id));
    //   }
    // }
    // setchecked(!checked);
  };

  const delClick = (id: number) => {
    if (name === "Done") {
      setDoing((oldTodoList) => [
        ...oldTodoList,
        Done.filter((back) => back.id === id)[0],
      ]);
      setDone(Done.filter((back) => back.id !== id));
    } else if (name === "Doing") {
      setTodo((oldTodoList) => [
        ...oldTodoList,
        Doing.filter((back) => back.id === id)[0],
      ]);
      setDoing(Doing.filter((back) => back.id !== id));
    } else if (name === "Todo") {
      alert("다시 돌아갈 수 없습니다.");
    } else {
      setBacklog(Done.filter((back) => back.id !== id));
    }
  };

  return (
    <Flex>
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
