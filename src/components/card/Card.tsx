import React, { Fragment, useState, useEffect } from "react";
import List from "../List";

import {
  Grid,
  GridItem,
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

// type todo = ;
interface attr {
  name: string;
  todos: { id: number; title: string; owner: string }[];
}

function Card({ name, todos }: attr) {
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
            w="88%"
            type="text"
            focusBorderColor="white"
          />
          <Box
            bg="black"
            as="button"
            w="10%"
            border="none"
            backgroundColor="rgba(255,255,255,0)">
            🗸
          </Box>
        </InputGroup>
      </Flex>
      <Box overflow="scroll" h="80%">
        {todos.map((job) => (
          <List key={job.id} job={job} name={name} />
        ))}
      </Box>
    </Fragment>
  );
}

export default Card;
