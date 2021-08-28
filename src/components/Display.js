import { useRecoilValue } from "recoil";
import { argumentIds, argumentsAtomFamily } from "../utils/atoms";

const BoardItem = ({ id }) => {
  if (id == 4) {
    id = 2;
  }
  const argumentContent = useRecoilValue(argumentsAtomFamily(id));
  //   console.log("Board id is: " + id);
  //   console.log(argumentContent);
  return (
    <div>
      {argumentContent.content.map((content, index) => {
        return <div key={index}>{content.content}</div>;
      })}
    </div>
    // <div></div>
  );
};

const Board = () => {
  const allArgids = useRecoilValue(argumentIds);

  return (
    <>
      {allArgids.map((id, index) => {
        if (index < allArgids.length - 1) {
          return <BoardItem key={id} id={id} />;
        } else {
          return <div key={-999}>Last Index</div>;
        }
      })}
    </>
  );
};

export default Board;
