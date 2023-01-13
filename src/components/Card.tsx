import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "./List";

import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { selectTodo, changeTodo } from "../store/todoSlice";

interface attr {
  name: string;
  todos: { id: number; title: string; owner: string }[];
}

const Card = ({ name, todos }: attr) => {
  console.log(changeTodo);
  console.log(todos[0]);
  return (
    <Fragment>
      <Box
        h="10%"
        bg="#FF5647"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
        fontSize="30px"
      >
        {name}
      </Box>
      <Flex h="10%">
        <InputGroup w="100%">
          <InputLeftElement
            pointerEvents="none"
            display="flex"
            alignItems="center"
            paddingTop="2%"
          >
            🔍
          </InputLeftElement>
          <Input
            marginLeft="1%"
            marginTop="1%"
            w="98%"
            type="text"
            focusBorderColor="white"
          ></Input>
        </InputGroup>
      </Flex>
      <Box overflowY="scroll" h="55vh">
        <List name={name} job={todos[0]}></List>
      </Box>
    </Fragment>
  );
};

// <List
// name={name}
// job={job}
// ></List>

export default React.memo(Card);
