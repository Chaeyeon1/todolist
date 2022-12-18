import React, { Fragment, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Card from "../components/card/Card";

import { Grid, GridItem, Box } from "@chakra-ui/react";
import List from "../components/List";
import {
  NameState,
  DoingState,
  BacklogState,
  TodoState,
  DoneState,
} from "../components/atom";

function Main() {
  let [Name, setName] = useRecoilState<string>(NameState);
  let [Backlog, setBacklog] = useRecoilState(BacklogState);
  let [Doing, setDoing] = useRecoilState(DoingState);
  let [Todo, setTodo] = useRecoilState(TodoState);
  let [Done, setDone] = useRecoilState(DoneState);

  return (
    <Box
      bg="blackAlpha.200"
      style={{
        width: "100%",
        height: "100vh",
      }}>
      <Box
        fontSize="60"
        textAlign="center"
        w="100%"
        h="130px"
        padding="20px"
        color="red.600">
        Todo List
      </Box>
      <Grid
        h="80%"
        templateColumns="repeat(4, 1fr)"
        gap={10}
        marginLeft="5%"
        marginRight="5%"
        paddingTop="1%">
        <GridItem w="100%" h="90%" bg="#FF8A73" overflow="hidden">
          <Card name="Backlog" todos={Backlog} />
        </GridItem>
        <GridItem w="100%" h="90%" bg="#FF8A73">
          <Card name="Todo" todos={Todo} />
        </GridItem>
        <GridItem w="100%" h="90%" bg="#FF8A73">
          <Card name="Doing" todos={Doing} />
        </GridItem>
        <GridItem w="100%" h="90%" bg="#FF8A73">
          <Card name="Done" todos={Done} />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Main;
