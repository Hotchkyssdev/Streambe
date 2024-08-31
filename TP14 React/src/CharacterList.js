import React, { useState, useEffect } from 'react';
import { Container, Table, Image, Header, Pagination, Segment, Input } from 'semantic-ui-react';

function CharacterList({ onSelectCharacter }) {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      });
  }, [page, searchQuery]);

  const handlePaginationChange = (e, { activePage }) => setPage(activePage);

  return (
    <Container textAlign="center">
      <Segment basic style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
        <Input
          icon='search'
          placeholder='Search...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          fluid
          style={{ maxWidth: '400px' }}
        />
      </Segment>
      <Segment>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
          <Table
            celled
            padded
            selectable
            style={{ width: '80%', margin: '0 auto' }}
          >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell style={{ textAlign: 'center' }}>Name</Table.HeaderCell>
                <Table.HeaderCell style={{ textAlign: 'center' }}>Status</Table.HeaderCell>
                <Table.HeaderCell style={{ textAlign: 'center' }}>Species</Table.HeaderCell>
                <Table.HeaderCell style={{ textAlign: 'center' }}>Image</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {characters.map((character) => (
                <Table.Row
                  key={character.id}
                  onClick={() => onSelectCharacter(character)}
                >
                  <Table.Cell style={{ textAlign: 'center' }}>
                    <Header as="h4">{character.name}</Header>
                  </Table.Cell>
                  <Table.Cell style={{ textAlign: 'center' }}>{character.status}</Table.Cell>
                  <Table.Cell style={{ textAlign: 'center' }}>{character.species}</Table.Cell>
                  <Table.Cell style={{ textAlign: 'center' }}>
                    <Image src={character.image} size="tiny" style={{ display: 'block', margin: '0 auto' }} />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Pagination
            totalPages={totalPages}
            activePage={page}
            onPageChange={handlePaginationChange}
            ellipsisItem={null}
            boundaryRange={0}
            siblingRange={0}
            firstItem={null}
            lastItem={null}
            prevItem={{ content: 'Previous', icon: 'angle left' }}
            nextItem={{ content: 'Next', icon: 'angle right' }}
            style={{ display: 'flex', gap: '10px' }}
          />
        </div>
      </Segment>
    </Container>
  );
}

export default CharacterList;



