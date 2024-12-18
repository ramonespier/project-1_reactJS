import { Component } from 'react';

import './style.css';
import { Posts } from '../../components/Posts'

import { loadPosts } from '../../utils/load-posts'
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: '',
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
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    })
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts)

    this.setState({ posts, page: nextPage })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  }

  render() { //na render eu so posso retornar 1 elemento root (nesse caso, App); a menos que eu use fragmentos (<> </>)
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length

    const filteredPosts = !!searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())

      })
      : posts;

    return (
      <section className='container'>
        <div className='search-container'>
          {!!searchValue && (
            <h1>Search value : {searchValue}</h1>
          )}


          <TextInput
            searchValue={searchValue}
            handleChange={this.handleChange} />
        </div>

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <h2>Não existem posts.</h2>
        )}

        <div className='button-container'>
          {!searchValue && (
            <Button
              text='Carregar mais posts'
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
      // sempre que eu iterar elementos no jsx, eu itero vários elementos. O react precisa saber de forma rapida e ir diretamente no elemento desejado
    );
  }
}
