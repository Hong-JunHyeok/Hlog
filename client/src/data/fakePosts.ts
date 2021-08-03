import faker from "faker";
import shortId from "shortid";
import { Post } from "../types/Post";

export const generateFakePosts = (genCount: number) => {
  return Array(genCount)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      author: faker.name.findName(),
      comments: [shortId.generate(), shortId.generate(), shortId.generate()],
      likes: [shortId.generate(), shortId.generate()],
      createdAt: faker.date.recent(10).toDateString(),
    }));
};

// export const fakePosts: Post[] =
// [
//   {
//     id: "1",
//     title: "첫번째 게시글",
//     content: "아무내용아무내용아무내용아무내용아무내용",
//     author: "홍준혁",
//     comments: ["1", "2", "3"],
//     createdAt: "2021-08-03",
//     likes: ["1", "2", "3"],
//   },
//   {
//     id: "2",
//     title: "두번째 게시글",
//     content: "아무내용아무내용아무내용아무내용아무내용",
//     author: "이민혁",
//     comments: ["1", "2", "3"],
//     createdAt: "2021-08-04",
//     likes: ["1", "2", "3"],
//   },
//   {
//     id: "3",
//     title: "세번째 게시글",
//     content: "아무내용아무내용아무내용아무내용아무내용",
//     author: "이수현",
//     comments: ["1", "2", "3"],
//     createdAt: "2021-08-05",
//     likes: ["1", "2", "3"],
//   },
// ];
