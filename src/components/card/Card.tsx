import React, { Fragment, useState } from "react";

import List from "../List";

import {
  Grid,
  GridItem,
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

interface attr {
  name: string;
  todos: { id: number; title: string; owner: string }[];
}

function Card({ name, todos }: attr) {
  const [Text, setText] = useState("");
  const TextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };
  const filtered = todos.filter((itemList) => {
    return itemList.title.toUpperCase().includes(Text.toUpperCase());
  });
  const checkClick = () => {};

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
      <Box overflow="scroll" h="80%">
        {filtered.map((job) => (
          <List key={job.id} job={job} name={name} />
        ))}
      </Box>
    </Fragment>
  );
}

export default Card;
