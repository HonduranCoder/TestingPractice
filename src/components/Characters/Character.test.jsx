import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Character from './Character.jsx';

it('should render Character', () => {
  const character = {
    image: 'https://rickandmortyapi.com/api/location/1',
    name: 'Rick',
    species: 'Human',
    status: 'Alive',
  };
  const { container } = render(
    <MemoryRouter>
      <Character character={character} />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
