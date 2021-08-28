import { RecoilRoot } from "recoil";
import "./App.css";
import Board from "./components/Display";
import QuillEditorContainer from "./components/Editor";
function App() {
  console.log("App render times");

  return (
    <>
      <RecoilRoot>
        <QuillEditorContainer />
        <hr></hr>
        <Board />
      </RecoilRoot>
    </>
  );
}

export default App;
