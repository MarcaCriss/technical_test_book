export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: Author;
  isReadingBook?: boolean;
}

export interface Author {
  name: string;
  otherBooks: string[];
}
