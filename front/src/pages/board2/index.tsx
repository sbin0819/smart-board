import { useParams } from 'react-router';
import { useState, useEffect, Fragment } from 'react';

import List from '../../components/List';
import CreateList from '../../components/CreateList';

import styled from 'styled-components';

import useFetchData from '../../hooks/useFetchData';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Header from '../../layouts/Header';

const Container = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 20px;
  overflow: scroll;
`;

const onDragEnd = (result: any, columns: any, setColumns: any) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (!result.destination) {
    return;
  }

  if (result.type === 'COLUMN') {
    const sourceIdx = source.index;
    const destinIdx = destination.index;
    // setColumns((prevState: any) => {
    //   let data = [...prevState];
    //   let temp = data[sourceIdx];
    //   data[sourceIdx] = data[destinIdx];
    //   data[destinIdx] = temp;
    //   return data;
    // });
    return;
  }

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
  const { title }: { title: string } = useParams();
  const { data: boardData, loading, error } = useFetchData('/lists');
  const [columns, setColumns] = useState<any>({});

  useEffect(() => {
    if (!loading) {
      // ? sortby updatedAt
      setColumns(() =>
        boardData.reduce((acc: any, curr: any, i) => {
          acc[curr.id] = { ...curr };
          return acc;
        }, {}),
      );
      // setColumns(boardData);
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
    <>
      <Header title={title} />
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        <Droppable droppableId="board" type="COLUMN" direction="horizontal">
          {(provided) => (
            <Container ref={provided.innerRef} {...provided.droppableProps}>
              {columns.map((column: any, index: number) => {
                return (
                  <Draggable draggableId={column.id} index={index} key={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <List columnId={column.id} {...column} />
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
              <CreateList />
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default Board;
