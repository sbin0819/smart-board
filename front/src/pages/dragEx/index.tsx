import List from './ListEx';
import CreateList from '../../components/CreateList';
import styled from 'styled-components';

import useFetchData from '../../hooks/useFetchData';
import { Fragment, useState, useEffect } from 'react';

const Container = styled.div`
  padding: 20px;
  width: 100%;
  overflow: scroll;
`;

const ListContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  align-content: flex-start;
`;

function Board() {
  const { data: listData, loading, error } = useFetchData('/lists');

  if (loading) {
    return <h1>loading</h1>;
  }
  if (error) {
    return <h1>error</h1>;
  }

  return (
    <Container>
      <ListContainer>
        {listData?.map((data: any) => (
          <Fragment key={data.id}>
            <List data={data} />
          </Fragment>
        ))}
        <CreateList />
      </ListContainer>
    </Container>
  );
}

export default Board;
