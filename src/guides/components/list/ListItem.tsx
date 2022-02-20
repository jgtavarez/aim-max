import { useContext } from 'react';
import { ListContext } from "./List";

export interface Props {
  content?: string;
}

export const ListItem = ({ content }: Props) => {

  const { list } = useContext(ListContext)

  return (
    <ul>
      {
        list.content.map(content => (
          <li key={content} className="ml-8 text-2xl">{content}</li>
        ))
      }
    </ul>
  )
}
