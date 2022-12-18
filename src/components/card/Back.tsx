export type todoType = { id: number; title: string; owner: string };

export const postList = () => {
  const array = [];
  for (let i = 1; i <= 20; i++) {
    array.push({
      id: i,
      title: `할일 ${i}`,
      owner: "",
    });
  }
  return array;
};

export const getPostList = (page: number): todoType[] => {
  return postList().filter((post: todoType) => post.id === page);
};

export const firstList = (): todoType[] => {
  return postList().filter((post: todoType) => post.id <= 11);
};
