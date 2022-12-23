import { useEffect, useState, useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Card from "../components/card/Card";
import { throttle } from "lodash";

import { Grid, GridItem, Box } from "@chakra-ui/react";
import {
  NameState,
  DoingState,
  BacklogState,
  TodoState,
  DoneState,
} from "../components/atom";
import { getPostList, todoType, firstList } from "../components/card/back";

function Main() {
  let Name = useRecoilValue(NameState);
  let [Backlog, setBacklog] = useRecoilState(BacklogState);
  let Doing = useRecoilValue(DoingState);
  let Todo = useRecoilValue(TodoState);
  let Done = useRecoilValue(DoneState);

  const [page, setPage] = useState<number>(11);
  const [posts, setPosts] = useState<todoType[]>(firstList());
  let count = 0;

  const handleScroll = useCallback((): void => {
    const { innerHeight } = window;
    // 브라우저창 내용의 크기 (스크롤을 포함하지 않음)

    const { scrollHeight } = document.body;
    // 브라우저 총 내용의 크기 (스크롤을 포함한다)

    const { scrollTop } = document.documentElement;
    // 현재 스크롤바의

    const wait = (sec: number) => {
      let start = Date.now(),
        now = start;
      while (now - start < sec * 1000) {
        now = Date.now();
      }
    };

    if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
      // throttle(() => {
      // scrollTop과 innerHeight를 더한 값이 scrollHeight보다 크다면, 가장 아래에 도달했다는 의미이다.
      setPosts((posts) => posts.concat(getPostList(page + 1)));

      // 페이지에 따라서 불러온 배열을 posts 배열과 합쳐줍니다.

      setPage((prevPage: number) => prevPage + 1);
      // 페이지 state 변수의 값도 1씩 늘려줍니다.
      // wait(0.7);
      // count++;
      // }, 10);
    }
  }, [page, posts]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    // 스크롤이 발생할때마다 handleScroll 함수를 호출하도록 추가합니다.
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
      // 해당 컴포넌트가 언마운트 될때, 스크롤 이벤트를 제거합니다.
      console.log(posts);
    };
  }, [handleScroll]);

  useEffect(() => {
    setBacklog(posts);
  }, [posts]);

  return (
    <Box
      bg="blackAlpha.200"
      style={{
        width: "100%",
        height: "100vh",
      }}>
      <Box
        w="95%"
        h="30px"
        textAlign="end"
        paddingTop="10px"
        fontSize="17px"
        fontWeight="bold"
        color="red.800">
        {`현재 나의 이름 : ${Name}`}
      </Box>
      <Box
        fontSize="60"
        textAlign="center"
        w="100%"
        h="110px"
        paddingBottom="20px"
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
