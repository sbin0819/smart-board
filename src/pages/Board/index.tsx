import List from '../../components/List';
import CreateList from '../../components/CreateList';
import styled from 'styled-components';

import useFetchData from '../../hooks/useFetchData';
import { Fragment } from 'react';

const Container = styled.div`
  padding: 20px;
  width: 100%;
  overflow: scroll;
`;

const ListContainer = styled.div`
  display: flex;
  gap: 20px;
`;

function Board() {
  // mutate 가 안 되기 때문에 react-query로 바꿔줘야 할 거 같음
  const { data: listData, loading, error } = useFetchData('/lists');
  if (loading) {
    return <h1>loading</h1>;
  }
  return (
    <Container>
      <ListContainer>
        {listData?.map((data: any) => (
          <Fragment key={data.id}>
            <List {...data} />
          </Fragment>
        ))}
        <CreateList />
      </ListContainer>
    </Container>
  );
}

export default Board;
