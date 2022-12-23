import React, { Fragment, useState } from "react";
import List from "../List";
import { todoType } from "./back";

import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

interface attr {
  name: string;
  todos: { id: number; title: string; owner: string }[];
}

const Card = ({ name, todos }: attr) => {
  const [Text, setText] = useState("");

  const TextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };
  const filtered = todos.filter((itemList) => {
    return itemList.title.toUpperCase().includes(Text.toUpperCase());
  });

  return (
    <Fragment>
      <Box
        h="10%"
        bg="#FF5647"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
        fontSize="30px">
        {name}
      </Box>
      <Flex h="10%">
        <InputGroup w="100%">
          <InputLeftElement
            pointerEvents="none"
            display="flex"
            alignItems="center"
            paddingTop="2%">
            🔍
          </InputLeftElement>
          <Input
            marginLeft="1%"
            marginTop="1%"
            w="98%"
            type="text"
            focusBorderColor="white"
            value={Text}
            onChange={TextHandler}></Input>
        </InputGroup>
      </Flex>
      <Box overflowY="scroll" h="55vh">
        {filtered.map((job: todoType, idx: number) => (
          <List key={idx} job={job} name={name} />
        ))}
      </Box>
    </Fragment>
  );
};

export default React.memo(Card);
