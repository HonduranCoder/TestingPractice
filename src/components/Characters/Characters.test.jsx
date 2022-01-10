import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Characters from './Characters.jsx';

it('should render Characters', () => {
  const characters = [
    {
      image: 'https://rickandmortyapi.com/api/location/1',
      name: 'Rick',
      species: 'Human',
      status: 'Alive',
    },
  ];
  const { container } = render(
    <MemoryRouter>
      <Characters characters={characters} />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
