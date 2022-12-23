export type todoType = { id: number; title: string; owner: string };

export const getPostList = (page: number): todoType[] => {
  console.log(page);
  return postList().filter((post: todoType) => post.id === page);
};

export const firstList = (): todoType[] => {
  return postList().filter((post: todoType) => post.id <= 11);
};

export const postList = () => {
  const array = [];
  for (let i = 0; i <= 10000; i++) {
    array.push({
      id: i,
      title: `할일 ${i}`,
      owner: "",
    });
  }
  return array;
};
