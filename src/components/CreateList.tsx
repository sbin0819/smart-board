import { useState } from 'react';
import { Input, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { postList } from '../api/list';

const FormContainer = styled.div`
  flex: 0 0 auto; // overflow inner display
  width: 284px;
  min-height: 82px;
  background: #ececec;
  padding: 5px;
  border-radius: 8px;
  .foot {
    margin-top: 4px;
    button {
      margin-right: 8px;
    }
  }
`;

function CreateList() {
  const [title, setTitle] = useState('');

  return (
    <FormContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postList(title);
          setTitle('');
        }}
      >
        <Input
          name="list-title"
          placeholder="Enter list title..."
          value={title}
          onChange={(e) => {
            const { value } = e.target;
            setTitle(value);
          }}
        />
        <div className="foot">
          <Button type="primary" htmlType="submit">
            Add List
          </Button>
          <CloseOutlined onClick={() => setTitle('')} />
        </div>
      </form>
    </FormContainer>
  );
}

export default CreateList;
