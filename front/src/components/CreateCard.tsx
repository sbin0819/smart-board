import { useState } from 'react';

import { Input, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import { v4 as uuidv4 } from 'uuid';

import { addCard } from '../api/list';

interface IProps {
  listId: string;
  listName: string;
  cards: any[];
  onClose: () => void;
}

function CreateCard({ listId, listName, cards, onClose }: IProps) {
  const [newCard, setNewCard] = useState({ id: uuidv4(), content: '' });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addCard(listId, {
      id: listId,
      name: listName,
      items: cards.concat(newCard),
    });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input.TextArea
          onChange={(e) => {
            setNewCard((prev) => ({
              ...prev,
              content: e.target.value,
            }));
          }}
          onKeyPress={(e) => {
            if (e.key === 'enter') {
              console.log('enter');
            }
          }}
        />
        <div style={{ marginTop: '6px' }}>
          <Button type="primary" htmlType="submit">
            Add Card
          </Button>
          <CloseOutlined onClick={onClose} />
        </div>
      </form>
    </div>
  );
}

export default CreateCard;
