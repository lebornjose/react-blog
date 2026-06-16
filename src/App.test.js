import React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import APlayer from 'aplayer';
import App from './App';

jest.mock('axios');
jest.mock('aplayer');

test('renders home page', () => {
  axios.get.mockResolvedValue({
    status: 200,
    data: {
      data: {
        articles: []
      }
    }
  });
  APlayer.mockImplementation(() => ({destroy: jest.fn()}));

  const { getByPlaceholderText } = render(<App />);

  expect(getByPlaceholderText('世界这么大，探索一下')).toBeInTheDocument();
});
