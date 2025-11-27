import { IComment } from "./comment";

export interface Blog {
  title: string;
  date: Date;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  text: string;
  comments: IComment[];
}
