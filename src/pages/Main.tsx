import React, { Fragment } from "react";
import {
  Grid,
  GridItem,
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
} from "@chakra-ui/react";
import List from "../components/list";

function Main() {
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
          <Box
            h="10%"
            bg="#FF5647"
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="white"
            fontSize="30px">
            Backlog
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
            <List />
          </Box>
        </GridItem>
        <GridItem w="100%" h="90%" bg="#FF8A73">
          <Box
            h="10%"
            bg="#FF5647"
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="white"
            fontSize="30px">
            To do
          </Box>
        </GridItem>
        <GridItem w="100%" h="90%" bg="#FF8A73">
          <Box
            h="10%"
            bg="#FF5647"
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="white"
            fontSize="30px">
            Doing
          </Box>
        </GridItem>
        <GridItem w="100%" h="90%" bg="#FF8A73">
          <Box
            h="10%"
            bg="#FF5647"
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="white"
            fontSize="30px">
            Done
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Main;
