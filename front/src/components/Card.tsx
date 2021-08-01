import { ICard } from '../types/card';

function Card({ data }: { data: ICard[] }) {
  return (
    <>
      {data[0].card.map((d, idx) => (
        <div key={idx}>{d.title}</div>
      ))}
    </>
  );
}

export default Card;
