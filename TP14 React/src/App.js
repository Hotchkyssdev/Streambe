import React, { useState } from 'react';
import { Container, Header } from 'semantic-ui-react';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1b1c1d', padding: '2em' }}>
      <Container>
        <Header align="center" as="h1" textAlign="center" style={{ color: '#21ba45', fontSize: '3em' }}>
          Rick and Morty Characters
        </Header>
        {selectedCharacter ? (
          <CharacterDetail character={selectedCharacter} onBack={() => setSelectedCharacter(null)} />
        ) : (
          <CharacterList onSelectCharacter={setSelectedCharacter} />
        )}
      </Container>
    </div>
  );
}

export default App;

