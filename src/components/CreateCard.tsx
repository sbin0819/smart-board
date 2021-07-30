import { Input, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

function CreateCard() {
  return (
    <div>
      <form>
        <Input.TextArea />
        <div style={{ marginTop: '6px' }}>
          <Button type="primary" htmlType="submit">
            Add Card
          </Button>
          <CloseOutlined />
        </div>
      </form>
    </div>
  );
}

export default CreateCard;
