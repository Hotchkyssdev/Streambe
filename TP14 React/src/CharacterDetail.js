import React from 'react';
import { Modal, Image, Header, List, Segment } from 'semantic-ui-react';

function CharacterDetail({ character, onClose }) {
  if (!character) return null;

  return (
    <Modal
      open={Boolean(character)}
      onClose={onClose}
      centered
      size='small'
      closeIcon
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '-550px 480px 0px' }}
    >
      <Modal.Content>
        <Segment
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '20px',
            height: '100%', 
          }}
        >
          <Image
            src={character.image}
            size='medium'
            wrapped
            style={{ marginBottom: '10px', maxWidth: '100%' }}
          />
          <Segment
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: '500px',
              margin: '0 auto',
              textAlign: 'center',
              padding: '0',
            }}
          >
            <Header as='h1' style={{ marginBottom: '10px' }}>Character Details</Header> {}
            <List>
              <List.Item>
                <strong>Name:</strong> {character.name}
              </List.Item>
              <br></br>
              <List.Item>
                <strong>Status:</strong> {character.status}
              </List.Item>
              <br></br>
              <List.Item>
                <strong>Species:</strong> {character.species}
              </List.Item>
              <br></br>
              <List.Item>
                <strong>Gender:</strong> {character.gender}
              </List.Item>
              <br></br>
              <List.Item>
                <strong>Origin:</strong> {character.origin.name}
              </List.Item>
              <br></br>
              <List.Item>
                <strong>Episodes:</strong> {character.episode.length}
              </List.Item>
            </List>
          </Segment>
        </Segment>
      </Modal.Content>
    </Modal>
  );
}

export default CharacterDetail;
