import './App.css';
import StateDemoComponent from './StateDemoComponent';
import EventDemoComponent from './EventDemoComponent';
import Hello from './Hello';
import PostComponent from './PostsComponent';
import CommentComponent from './CommentComponent';
//import ListandKeysComponent from './ListandKeysComponent';
import ListandKeysComponent from './components/listandkeys/ListandKeysComponent';
//import AxiosGetDemo from './AxiosGetDemo';
import AxiosGetDemo from './components/axiosdemo/AxiosGetDemo';
import AxiosPost from './components/axiosdemo/AxiosPost';
import Navbar from './Navbar';
import ToDoList from './components/todolist/ToDoList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <h2>Hello React</h2>
      <Hello firstname="Jasdhir" lastname="Singh"/>
      <Hello firstname="Jeremy" lastname="Ascher"/>
      <EventDemoComponent/>
      <hr/>
      <StateDemoComponent/>
      <hr/>
      <PostComponent name = "Jeremy Posted..." content = "React is so cool!"/>
      <CommentComponent/>
      <hr/>
      <ListandKeysComponent/>
      <hr/>
      <AxiosGetDemo/> */}
      <Router>
        <div className="app">
          <Navbar/>
        </div>
        <Routes>
          <Route path='/hello' element={<Hello/>}/>
          <Route path='sdc' element={<StateDemoComponent/>}/>
          <Route path='/getposts' element={<AxiosGetDemo/>}/>
          <Route path='/comments' element={<CommentComponent/>}/>
          <Route path='/todoList' element={<ToDoList/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
