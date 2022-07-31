import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    // Assert
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
  });
});