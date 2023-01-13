import React, { useState } from "react";
import { Box, Flex, Spacer, Checkbox, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodo, changeTodo } from "../store/todoSlice";
import { selectName } from "../store/nameSlice";

interface todoProps {
  name: string;
  job: {
    id: number;
    title: string;
    owner: string;
  };
}

function List({ job, name }: todoProps) {
  const dispatch = useDispatch();
  console.log(job.title);
  return (
    <Flex h="60px" _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
      <Checkbox
        colorScheme="blackAlpha"
        marginLeft="4%"
        color="blackAlpha.700"
        h="60px"
        w="80%"
        fontWeight="bold"
        onChange={() => {
          dispatch(changeTodo("asd"));
          console.log("s");
        }}
      >
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
        >
          ❌
        </Box>
      )}
    </Flex>
  );
}
export default React.memo(List);
