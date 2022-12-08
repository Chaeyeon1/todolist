import React from "react";
import { Box, Flex, Spacer, Checkbox } from "@chakra-ui/react";

function list() {
  return (
    <Flex>
      <Checkbox
        colorScheme="blackAlpha"
        marginLeft="4%"
        color="blackAlpha.700"
        h="60px"
        w="80%"
        fontWeight="bold"
        defaultChecked>
        Checkbox
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
        marginRight="1%">
        ❌
      </Box>
    </Flex>
  );
}

export default list;
