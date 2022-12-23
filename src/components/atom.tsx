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
  default: [],
});

export const TodoState = atom<attr>({
  key: "TodoState",
  default: [
    {
      id: 130,
      title: "todoDefault",
      owner: "chaeyeon",
    },
  ],
});

export const DoingState = atom<attr>({
  key: "DoingState",
  default: [
    {
      id: 170,
      title: "DoingDefault",
      owner: "chaeyeon",
    },
  ],
});

export const DoneState = atom<attr>({
  key: "DoneState",
  default: [],
});
