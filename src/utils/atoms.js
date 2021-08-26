import { atom, atomFamily} from "recoil";


export const argumentsAtomFamily = atomFamily({
  key: 'argumentsAtomFamily',
  default: {
    cursorAt: 0,
      content: null
  },
});

export const argumentIds = atom({
  key:"argumentIds",
  default:[0]
})

