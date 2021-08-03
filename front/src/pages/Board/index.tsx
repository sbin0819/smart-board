import { useState, useEffect } from 'react';

import List from '../../components/List';
import CreateList from '../../components/CreateList';

import styled from 'styled-components';

import useFetchData from '../../hooks/useFetchData';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
  padding: 20px;
  width: 100%;
  overflow: scroll;
`;

const ListContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 20px;
`;

const onDragEnd = (result: any, columns: any, setColumns: any) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);

    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function Board() {
  const { data: listData, loading, error } = useFetchData('/lists');
  const [columns, setColumns] = useState<any>({});

  useEffect(() => {
    if (!loading) {
      setColumns(() =>
        listData.reduce((acc: any, curr: any, i) => {
          acc[curr.id] = { ...curr };
          return acc;
        }, {}),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  if (loading) {
    return <h1>loading</h1>;
  }
  if (error) {
    return <h1>error</h1>;
  }

  return (
    <Container>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        <ListContainer>
          {Object.entries(columns).map(
            ([columnId, column]: [any, any], index) => {
              return (
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        key={columnId}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          borderRadius: 8,
                          background: snapshot.isDraggingOver
                            ? 'lightblue'
                            : '#ececec',
                        }}
                      >
                        <List {...column} provided={provided} />
                      </div>
                    );
                  }}
                </Droppable>
              );
            },
          )}
          <CreateList />
        </ListContainer>
      </DragDropContext>
    </Container>
  );
}

export default Board;
