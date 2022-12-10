import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const NameState = atom<string>({
  key: "NameState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

type attr = {
  id: number;
  title: string;
  owner: string;
}[];

export const BacklogState = atom<attr>({
  key: "BacklogState",
  default: [
    {
      id: 1,
      title: "공부하기",
      owner: "",
    },
    {
      id: 2,
      title: "양치하기",
      owner: "",
    },
    {
      id: 3,
      title: "씻기",
      owner: "",
    },
  ],
});

export const TodoState = atom<attr>({
  key: "TodoState",
  default: [],
});

export const DoingState = atom<attr>({
  key: "DoingState",
  default: [],
});

export const DoneState = atom<attr>({
  key: "DoneState",
  default: [],
});
