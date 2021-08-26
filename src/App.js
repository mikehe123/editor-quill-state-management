import { RecoilRoot } from 'recoil';
import './App.css';
import Board from './components/Display';
import QuillEditorContainer from './components/Editor';
function App() {
  return (
  <>
  <RecoilRoot>


  <QuillEditorContainer/>
  <hr></hr>
  <Board/>
  </RecoilRoot>
  </>
  );
}

export default App;
