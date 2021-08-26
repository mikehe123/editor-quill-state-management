import { useRecoilValue } from "recoil"
import { argumentIds, argumentsAtomFamily } from "../utils/atoms"

const BoardItem= (id) =>{
const  argumentContent =    useRecoilValue(argumentsAtomFamily(id))

return (
    <>{argumentContent}</>
)
}

const Board = () =>{
    const allArgids = useRecoilValue(argumentIds)

    return <>{allArgids.map((id) =>{
<BoardItem key={id} id={id}/>
    })}</>
}

export default Board