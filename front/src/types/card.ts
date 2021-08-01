export interface ICard {
  listId: string;
  id: string;
  card: InnerCard[];
}
interface InnerCard {
  id: string;
  title: string;
}
