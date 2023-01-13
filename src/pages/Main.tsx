import { useEffect, useState } from "react";
import Card from "../components/Card";

import { Grid, GridItem, Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodo, changeTodo } from "../store/todoSlice";
import { selectName } from "../store/nameSlice";

const Main = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  console.log(name);

  const Todo = useSelector(selectTodo);
  console.log(Todo);

  return (
    <Box
      bg="blackAlpha.200"
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        w="95%"
        h="30px"
        textAlign="end"
        paddingTop="10px"
        fontSize="17px"
        fontWeight="bold"
        color="red.800"
      >
        {`현재 나의 이름 : ${name.name}`}
      </Box>
      <Box
        fontSize="60"
        textAlign="center"
        w="100%"
        h="110px"
        paddingBottom="20px"
        color="red.600"
      >
        Todo List
      </Box>
      <Grid
        h="80%"
        templateColumns="repeat(4, 1fr)"
        gap={10}
        marginLeft="5%"
        marginRight="5%"
        paddingTop="1%"
      >
        <GridItem w="100%" h="90%" bg="#FF8A73" overflow="hidden">
          <Card name="Backlog" todos={Todo.Backlog} />
        </GridItem>
        <GridItem w="100%" h="90%" bg="#FF8A73">
          <Card name="Todo" todos={Todo.Todo} />
        </GridItem>
        <GridItem w="100%" h="90%" bg="#FF8A73">
          <Card name="Doing" todos={Todo.Doing} />
        </GridItem>
        <GridItem w="100%" h="90%" bg="#FF8A73">
          <Card name="Done" todos={Todo.Done} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Main;
