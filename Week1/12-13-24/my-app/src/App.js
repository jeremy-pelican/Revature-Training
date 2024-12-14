import './App.css';
import StateDemoComponent from './StateDemoComponent';
import EventDemoComponent from './EventDemoComponent';
import Hello from './Hello';
import PostComponent from './PostsComponent';
import CommentComponent from './CommentComponent';

function App() {
  return (
    <div className="App">
      <h2>Hello React</h2>
      <Hello firstname="Jasdhir" lastname="Singh"/>
      <Hello firstname="Jeremy" lastname="Ascher"/>
      <EventDemoComponent/>
      <hr/>
      <StateDemoComponent/>
      <hr/>
      <PostComponent name = "Jeremy Posted..." content = "React is so cool!"/>
      <CommentComponent/>
    </div>
  );
}

export default App;
