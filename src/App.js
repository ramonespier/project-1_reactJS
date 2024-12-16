import { Component } from 'react';
import './App.css';
import { PostCard } from './components/postCard';

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

  componentDidMount() {
    this.loadPosts();

  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    });

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
        <div className="posts">
          {posts.map(post => (
            <PostCard 
              title={post.title}
              body={post.body}
              key={post.id}
              cover={post.cover}
              // post={post}
              />
          ))}

        </div>
      </section>
      // sempre que eu iterar elementos no jsx, eu itero vários elementos. O react precisa saber de forma rapida e ir diretamente no elemento desejado
    );
  }
}


export default App;
