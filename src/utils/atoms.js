import { atom, atomFamily} from "recoil";


export const argumentsAtomFamily = atomFamily({
  key: 'argumentsAtomFamily',
  default: {
      content: null
  },
});

export const argumentIds = atom({
  key:"argumentIds",
  default:[0]
})

