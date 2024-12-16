import { Component } from 'react';

import './App.css';
import { Posts } from './components/Posts'

import { loadPosts } from './utils/load-posts'

class App extends Component {
  state = {
    posts: []
  };

  // {
  //   id: 1,
  //   title: 'Titulo 1',
  //   body: 'Corpo 1'
  // },
  // {
  //   id: 2,
  //   title: 'Titulo 2',
  //   body: 'Corpo 2'
  // },
  // {
  //   id: 3,
  //   title: 'Titulo 3',
  //   body: 'Corpo 3'
  // }  // hard coded
  // lifecycle method
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //     posts: [
  //       {
  //         id: 1,
  //         title: 'Titulo 1',
  //         body: 'Corpo 1'
  //       },
  //       {
  //         id: 2,
  //         title: 'Titulo 2',
  //         body: 'Corpo 2'
  //       },
  //       {
  //         id: 3,
  //         title: 'Titulo 3',
  //         body: 'Corpo 3'
  //       }
  //     ]
  //    });}, 5000);

  // }

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos })
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }


  render() { //na render eu so posso retornar 1 elemento root (nesse caso, App); a menos que eu use fragmentos (<> </>)
    const { posts } = this.state;

    return (
      <section className='container'>
        <Posts posts={posts} />
      </section>
      // sempre que eu iterar elementos no jsx, eu itero vários elementos. O react precisa saber de forma rapida e ir diretamente no elemento desejado
    );
  }
}


export default App;
