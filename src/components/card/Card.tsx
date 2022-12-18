// import React, { Fragment, useState } from "react";

// import List from "../List";

// import {
//   Grid,
//   GridItem,
//   Box,
//   Flex,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   InputRightElement,
// } from "@chakra-ui/react";
// import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

// interface attr {
//   name: string;
//   todos: { id: number; title: string; owner: string }[];
// }

// function Card({ name, todos }: attr) {
//   const [Text, setText] = useState("");
//   const TextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { value } = e.target;
//     setText(value);
//   };
//   const filtered = todos.filter((itemList) => {
//     return itemList.title.toUpperCase().includes(Text.toUpperCase());
//   });
//   const checkClick = () => {};

//   return (
//     <Fragment>
//       <Box
//         h="10%"
//         bg="#FF5647"
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         color="white"
//         fontSize="30px">
//         {name}
//       </Box>
//       <Flex h="10%">
//         <InputGroup w="100%">
//           <InputLeftElement
//             pointerEvents="none"
//             display="flex"
//             alignItems="center"
//             paddingTop="2%">
//             🔍
//           </InputLeftElement>
//           <Input
//             marginLeft="1%"
//             marginTop="1%"
//             w="98%"
//             type="text"
//             focusBorderColor="white"
//             value={Text}
//             onChange={TextHandler}></Input>
//         </InputGroup>
//       </Flex>
//       <Box overflow="scroll" h="80%">
//         {filtered.map((job) => (
//           <List key={job.id} job={job} name={name} />
//         ))}
//       </Box>
//     </Fragment>
//   );
// }

// export default React.memo(Card);

import React, { Fragment, useState, useEffect, useCallback } from "react";
import List from "../List";
import { getPostList, firstList, todoType } from "./back";

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
import {
  NameState,
  DoingState,
  BacklogState,
  TodoState,
  DoneState,
} from "../atom";
import { useRecoilState } from "recoil";

interface attr {
  name: string;
  todos: { id: number; title: string; owner: string }[];
}

type todo = { id: number; title: string; owner: string };

function Card({ name, todos }: attr) {
  const [page, setPage] = useState<number>(11);
  // const [posts, setPosts] = useState<todoType[]>(firstList());
  let [Backlog, setBacklog] = useRecoilState(BacklogState);
  useEffect(() => {
    setBacklog(firstList());
  }, []);

  const handleScroll = useCallback((): void => {
    const { innerHeight } = window;
    // 브라우저창 내용의 크기 (스크롤을 포함하지 않음)

    const { scrollHeight } = document.body;
    // 브라우저 총 내용의 크기 (스크롤을 포함한다)

    const { scrollTop } = document.documentElement;
    // 현재 스크롤바의 위치

    if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
      // scrollTop과 innerHeight를 더한 값이 scrollHeight보다 크다면, 가장 아래에 도달했다는 의미이다.

      setBacklog(
        Backlog.concat(
          getPostList(page + 1),
          getPostList(page + 2),
          getPostList(page + 3),
          getPostList(page + 4),
          getPostList(page + 5),
          getPostList(page + 6),
          getPostList(page + 7),
          getPostList(page + 8),
          getPostList(page + 9),
          getPostList(page + 10),
          getPostList(page + 11)
        )
      );

      // setPosts(posts.concat(getPostList(page + 1)));
      // 페이지에 따라서 불러온 배열을 posts 배열과 합쳐줍니다.

      setPage((prevPage: number) => prevPage + 11);
      // 페이지 state 변수의 값도 1씩 늘려줍니다.
    }
  }, [page, Backlog]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    // 스크롤이 발생할때마다 handleScroll 함수를 호출하도록 추가합니다.
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
      // 해당 컴포넌트가 언마운트 될때, 스크롤 이벤트를 제거합니다.
      console.log(Backlog);
    };
  }, [handleScroll]);

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
      <Box overflow="scroll" h="80%">
        {filtered.map((job: todo) => (
          <List key={job.id} job={job} name={name} />
          // <div key={idx}>{job.id}</div>
        ))}
      </Box>
    </Fragment>
  );
}

export default React.memo(Card);
