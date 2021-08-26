import { useEffect } from "react";
import { useQuill } from "react-quilljs";
import { useRecoilState, useRecoilValue } from "recoil";
import 'quill/dist/quill.bubble.css'; 
import { argumentIds, argumentsAtomFamily } from "../utils/atoms";
import quillConfig from "./quillConfigure";
import useKeyPress from "./onTab";

const QuillEditor = ({argid}) => {
  const { quill, quillRef } = useQuill(quillConfig);
  const [argument, setArgument] = useRecoilState(argumentsAtomFamily(argid))
  const isTabPressed = useKeyPress({ key: "Tab" })
  console.log(isTabPressed)     
  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        console.log('Text change!');
        console.log(quill.getText()); // Get text only
        console.log(quill.getContents()); // Get delta contents
        console.log(quill.root.innerHTML); // Get innerHTML using quill
        console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill]);

  return (
    <div style={{ width: 500, height: 300 }}>
      <div ref={quillRef} />
    </div>
  );
};

const QuillEditorContainer = () => {
    const argid = useRecoilValue(argumentIds)

    return(
        <QuillEditor argid={argid}/>
    )
}

export default QuillEditorContainer