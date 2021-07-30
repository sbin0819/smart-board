import { Input, Button } from 'antd';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useState } from 'react';

import { updateList, deleteList } from '../api/list';

const ListContainer = styled.div`
  flex: 0 0 auto; // overflow inner display
  width: 284px;
  min-height: 76px;
  background: #ececec;
  padding: 5px;
  border-radius: 8px;
  input {
    width: 80%;
    background: none;
    border: none;
    :focus {
      background: #fff;
    }
  }
`;

const FootContainer = styled.div`
  .add_card {
    display: flex;
    align-items: center;
    margin-left: 6px;
    button {
      border: none;
      background: inherit;
    }
  }
`;

interface IProps {
  title: string;
  id: string;
}
function Board({ title, id }: IProps) {
  const [newTitle, setNewTitle] = useState(title);
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const [isOpenCard, setIsOpenCard] = useState(false);

  const [cardContent, setCardContent] = useState('');

  return (
    <ListContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateList(id, { id, title: newTitle });
        }}
      >
        <Input
          name="list-title"
          placeholder="Enter list title..."
          value={focused ? newTitle : title}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={(e) => {
            const { value } = e.target;
            setNewTitle(value);
          }}
        />
        <CloseOutlined onClick={() => deleteList(id)} />
      </form>
      {isOpenCard && <div>open</div>}
      {!isOpenCard && (
        <FootContainer>
          <div className="add_card">
            <PlusOutlined />
            <Button>Add a Card</Button>
          </div>
        </FootContainer>
      )}
    </ListContainer>
  );
}

export default Board;
