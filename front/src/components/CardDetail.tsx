import styled from 'styled-components';

const CardDetail = ({ data, onClose }: { data: any; onClose: () => void }) => {
  return (
    <Container onClick={onClose}>
      <Detail
        onClick={(e) => {
          e.stopPropagation();
          console.log('detail');
        }}
      >
        <p>{data.title}</p>
      </Detail>
    </Container>
  );
};

export default CardDetail;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  transition: 0.3s linear;
  background: rgba(0, 0, 0, 0.3);
`;

const Detail = styled.div`
  margin: 10% auto;
  background: #fff;
  width: 60%;
  height: 70%;
  z-index: 10;
  p {
    padding-top: 40px;
    font-size: 24px;
    text-align: center;
  }
`;
