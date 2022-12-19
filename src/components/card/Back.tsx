export type todoType = { id: number; title: string; owner: string };

export const getPostList = (page: number): todoType[] => {
  return postList().filter((post: todoType) => post.id === page);
};

export const firstList = (): todoType[] => {
  return postList().filter((post: todoType) => post.id <= 11);
};

const postList = () => {
  const array = [];
  for (let i = 0; i <= 50; i++) {
    array.push({
      id: i,
      title: `할일 ${i}`,
      owner: "",
    });
  }
  // array.push({
  //   id: 1,
  //   title: "할일 1",
  //   owner: "",
  // });
  // array.push({
  //   id: 1,
  //   title: "할일 2",
  //   owner: "",
  // });
  // array.push({
  //   id: 1,
  //   title: "할일 3",
  //   owner: "",
  // });
  // array.push({
  //   id: 1,
  //   title: "할일 4",
  //   owner: "",
  // });
  // array.push({
  //   id: 1,
  //   title: "할일 5",
  //   owner: "",
  // });
  // array.push({
  //   id: 1,
  //   title: "할일 6",
  //   owner: "",
  // });
  // array.push({
  //   id: 1,
  //   title: "할일 7",
  //   owner: "",
  // });
  // array.push({
  //   id: 1,
  //   title: "할일 8",
  //   owner: "",
  // });
  // array.push({
  //   id: 1,
  //   title: "할일 9",
  //   owner: "",
  // });
  // array.push({
  //   id: 1,
  //   title: "할일 10",
  //   owner: "",
  // });
  // array.push({
  //   id: 1,
  //   title: "할일 11",
  //   owner: "",
  // });
  // array.push({
  //   id: 1,
  //   title: "할일 12",
  //   owner: "",
  // });
  // array.push({
  //   id: 1,
  //   title: "할일 13",
  //   owner: "",
  // });
  // array.push({
  //   id: 1,
  //   title: "할일 14",
  //   owner: "",
  // });
  // array.push({
  //   id: 1,
  //   title: "할일 15",
  //   owner: "",
  // });
  // array.push({
  //   id: 1,
  //   title: "할일 16",
  //   owner: "",
  // });
  // array.push({
  //   id: 1,
  //   title: "할일 17",
  //   owner: "",
  // });
  // array.push({
  //   id: 1,
  //   title: "할일 18",
  //   owner: "",
  // });
  // array.push({
  //   id: 1,
  //   title: "할일 19",
  //   owner: "",
  // });
  // array.push({
  //   id: 1,
  //   title: "할일 20",
  //   owner: "",
  // });
  // array.push({
  //   id: 1,
  //   title: "할일 21",
  //   owner: "",
  // });
  // array.push({
  //   id: 1,
  //   title: "할일 22",
  //   owner: "",
  // });
  return array;
};
