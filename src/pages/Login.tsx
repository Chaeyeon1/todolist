import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  GridItem,
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { changeName } from "../store/nameSlice";

function Login() {
  const [Name, setName] = useState("");
  const [Pw, setPw] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const NameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  useEffect(() => {
    dispatch(changeName({ name: Name }));
  }, [Name]);

  const PwChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPw(event.currentTarget.value);
  };

  return (
    <Box
      w="100%"
      h="100vh"
      bg="blackAlpha.200"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="30%" h="50%" bg="white">
        <Box
          fontSize="30px"
          marginTop="15%"
          color="blackAlpha.900"
          display="flex"
          justifyContent="center"
        >
          로그인
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Input
            value={Name}
            placeholder="이름"
            onChange={NameChangeHandler}
            w="80%"
            variant="flushed"
            marginTop="5%"
          ></Input>
          <Input
            type="password"
            value={Pw}
            onChange={PwChangeHandler}
            placeholder="비밀번호"
            w="80%"
            variant="flushed"
            marginTop="5%"
          ></Input>
          <Button
            disabled={Name === "" || Pw === ""}
            w="80%"
            marginTop="6%"
            h="40px"
            _hover={{
              background: "red.400",
              // bg:"blackAlpha.900"
            }}
            fontWeight="bold"
            backgroundColor="red.200"
            onClick={() => {
              navigate("/main");
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
