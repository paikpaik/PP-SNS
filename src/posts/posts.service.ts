import { Injectable, NotFoundException } from '@nestjs/common';

export interface PostModel {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}
let posts: PostModel[] = [
  {
    id: 1,
    author: 'karina_official',
    title: '에스파 카리나 1',
    content: '셀카찍는 카리나',
    likeCount: 10000000,
    commentCount: 99999,
  },
  {
    id: 2,
    author: 'karina_official',
    title: '에스파 카리나 2',
    content: '인형을 안고있는 카리나',
    likeCount: 10000000,
    commentCount: 99999,
  },
  {
    id: 3,
    author: 'karina_official',
    title: '에스파 카리나 3',
    content: '브이하는 카리나',
    likeCount: 10000000,
    commentCount: 99999,
  },
];

@Injectable()
export class PostsService {
  getAllPosts() {
    return posts;
  }

  getPostById(id: number) {
    const post = posts.find((post) => post.id === +id);
    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }

  createPost(author: string, title: string, content: string) {
    const post: PostModel = {
      id: posts[posts.length - 1].id + 1,
      author,
      title,
      content,
      likeCount: 0,
      commentCount: 0,
    };
    posts = [...posts, post];
    return post;
  }

  updatePost(postId: number, author: string, title: string, content: string) {
    const post = posts.find((post) => post.id === postId);
    if (!post) {
      throw new NotFoundException();
    }
    if (author) {
      post.author = author;
    }
    if (title) {
      post.title = title;
    }
    if (content) {
      post.content = content;
    }
    posts = posts.map((prevPost) => (prevPost.id === postId ? post : prevPost));
    return post;
  }

  deletePost(postId: number) {
    const post = posts.find((post) => post.id === postId);
    if (!post) {
      throw new NotFoundException();
    }
    posts = posts.filter((post) => post.id !== postId);
    return postId;
  }
}
