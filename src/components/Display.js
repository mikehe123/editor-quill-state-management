import { useRecoilValue } from "recoil"
import { argumentIds, argumentsAtomFamily } from "../utils/atoms"

const BoardItem= ({id}) =>{
const  argumentContent =  useRecoilValue(argumentsAtomFamily(id))
console.log(argumentContent)
return (
    // <div>{argumentContent.content}</div>
    <div></div>
)
}

const Board = () =>{
    const allArgids = useRecoilValue(argumentIds)
    console.log(allArgids)
    return <>{allArgids.map((id) =>{
        return<BoardItem key={id} id={id}/>
    })}</>
}

export default Board