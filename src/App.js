import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Titulo 1',
        body: 'Corpo 1'
      },
      {
        id: 2,
        title: 'Titulo 2',
        body: 'Corpo 2'
      },
      {
        id: 3,
        title: 'Titulo 3',
        body: 'Corpo 3'
      }  // hard coded
    ]
  };

  render() { //na render eu so posso retornar 1 elemento root (nesse caso, App); a menos que eu use fragmentos (<> </>)
    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map(post => (

          <div key={post.id}>

            <h1 >{post.title}</h1>
            <p>{post.body}</p>

          </div>

        ))}

      </div>
      // sempre que eu iterar elementos no jsx, eu itero vários elementos. O react precisa saber de forma rapida e ir diretamente no elemento desejado
    );
  }
}


export default App;
