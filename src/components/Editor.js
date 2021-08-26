import { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import 'quill/dist/quill.bubble.css'; 
import { argumentIds, argumentsAtomFamily } from "../utils/atoms";
import quillConfig from "./quillConfigure";

const QuillEditor = ({argid}) => {
  const { quill, quillRef } = useQuill(quillConfig);
  const [argument, setArgument] = useRecoilState(argumentsAtomFamily(argid))
const setArgId = useSetRecoilState(argumentIds)
 const [isUp, setIsUp] = useState(false)
  

   useEffect(() => {
     let argCursorAt; 
     let argContentBlock;
    if (quill) {
      quill.on('text-change', onTextChangeHOF(quill, argCursorAt, argContentBlock));
      
    }
    console.log(argContentBlock)
    setArgument({
      cursorAt: argCursorAt,
      content: argContentBlock
    })
    
    const handleUp = event => {
      
      if (9 === event.keyCode) {
        if(quill){
        quill.off('text-change', onTextChangeHOF(quill, argCursorAt,argContentBlock))
        quill.setContents("")
        }
         setArgId((oldIds) => [...oldIds, oldIds[oldIds.length - 1] + 1]);
        setIsUp(true)
      }else{
        setIsUp(false)
      }
    }
    window.addEventListener("keyup", handleUp)
    
    return () => {
      if(quill){
      // quill.off('text-change', onTextChangeHOF)
      // quill.setContents("")
    }
      window.removeEventListener("keyup", handleUp)
      
    }
  }, [quill])

  console.log(isUp)

  return (
    <div style={{ width: 500, height: 300 }}>
      <div ref={quillRef} />
    </div>
  );
};

function onTextChangeHOF(quill, argCursorAt, argContentBlock) {
  return function onTextChange() {
    // console.log(quill)
             argCursorAt = quill.getSelection().index;
            argContentBlock = quill.getLines(argCursorAt);
            console.log("inside HOF")
            console.log(argContentBlock)
  }
 }

const QuillEditorContainer = () => {
    const argid = useRecoilValue(argumentIds)
    let lastId = argid[argid.length-1]
    return(
        <QuillEditor argid={lastId}/>
    )
}

export default QuillEditorContainer