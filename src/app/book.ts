export type Book = {
  title: string;
  author: string;
  translation?: string;
  year: number;
  genre: string;
  category: string;
  notesPath?: string;
  done?: boolean;
  cover?: string;
  link?: string;
  spine?: string;
  rating?: number;
};
