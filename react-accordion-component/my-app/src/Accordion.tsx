import { useState } from 'react';

export type Topic = {
  id: number;
  title: string;
  content: string;
};
type Props = {
  array: Topic[];
};

export function Accordion({ array }: Props) {
  const [idOpen, setIdOpen] = useState(0);

  return (
    <div>
      {array.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          isOpen={idOpen === topic.id}
          onClick={() => setIdOpen(topic.id === idOpen ? 0 : topic.id)}
        />
      ))}
    </div>
  );
}

type CardProps = {
  topic: Topic;
  isOpen: boolean;
  onClick: () => void;
};
function TopicCard({ topic, isOpen, onClick }: CardProps) {
  return (
    <div className="wrapper">
      <div onClick={onClick} className="title">
        <h3>{topic.title}</h3>
      </div>
      {isOpen && <div>{topic.content}</div>}
    </div>
  );
}
