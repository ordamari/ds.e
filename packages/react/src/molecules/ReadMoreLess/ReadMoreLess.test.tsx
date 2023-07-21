import ReadMoreLess from './ReadMoreLess';
import { render } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';

test('should render less of 100 letters', () => {
  const { getByTestId } = render(
    <ReadMoreLess max={100}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eum nihil,
      soluta provident, possimus ex ullam rem ducimus expedita vel eaque fugit
      minima laudantium rerum amet, cumque alias! Perspiciatis recusandae saepe
      ab, quisquam blanditiis quo laborum ipsum a accusantium itaque autem
      debitis iusto fugit dignissimos. Perferendis officia ratione beatae maxime
      a impedit, eius, quisquam alias voluptatem libero nemo quasi consequuntur,
      neque reiciendis reprehenderit! Ducimus, neque unde maiores itaque
      quibusdam labore ab tenetur aut impedit id sit velit, adipisci quisquam.
      Sapiente magnam eligendi odio est debitis ullam et, nam repudiandae! Illo
      neque pariatur porro magnam molestias atque eveniet commodi voluptatem,
      rem suscipit sed ut odio laboriosam voluptatum, ullam id consequuntur
      doloribus esse minima quae voluptatibus quos consectetur! Officiis
      doloribus commodi, iure accusamus facere animi repellendus. Eius suscipit
      quod itaque quae earum inventore ullam ducimus architecto cum vel quisquam
      dolorum aliquid ex perspiciatis similique est, nihil eos a reprehenderit
      tempora aliquam quam?
    </ReadMoreLess>,
  );
  const DseText = getByTestId('DseReadMoreLess__span');
  const textLength = DseText.innerHTML.length;
  expect(DseText).toBeInTheDocument();
  expect(textLength).toBeLessThanOrEqual(100);
});

test('should render more of 100 letters if button clicked', () => {
  const { getByTestId, getByRole } = render(
    <ReadMoreLess max={100}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eum nihil,
      soluta provident, possimus ex ullam rem ducimus expedita vel eaque fugit
      minima laudantium rerum amet, cumque alias! Perspiciatis recusandae saepe
      ab, quisquam blanditiis quo laborum ipsum a accusantium itaque autem
      debitis iusto fugit dignissimos. Perferendis officia ratione beatae maxime
      a impedit, eius, quisquam alias voluptatem libero nemo quasi consequuntur,
      neque reiciendis reprehenderit! Ducimus, neque unde maiores itaque
      quibusdam labore ab tenetur aut impedit id sit velit, adipisci quisquam.
      Sapiente magnam eligendi odio est debitis ullam et, nam repudiandae! Illo
      neque pariatur porro magnam molestias atque eveniet commodi voluptatem,
      rem suscipit sed ut odio laboriosam voluptatum, ullam id consequuntur
      doloribus esse minima quae voluptatibus quos consectetur! Officiis
      doloribus commodi, iure accusamus facere animi repellendus. Eius suscipit
      quod itaque quae earum inventore ullam ducimus architecto cum vel quisquam
      dolorum aliquid ex perspiciatis similique est, nihil eos a reprehenderit
      tempora aliquam quam?
    </ReadMoreLess>,
  );
  act(() => {
    getByRole('button').click();
  });
  const DseText = getByTestId('DseReadMoreLess__span');
  const textLength = DseText.innerHTML.length;
  expect(DseText).toBeInTheDocument();
  expect(textLength).toBeGreaterThan(100);
});

test('should render less of 100 letters if button clicked twice', () => {
  const { getByTestId, getByRole } = render(
    <ReadMoreLess max={100}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eum nihil,
      soluta provident, possimus ex ullam rem ducimus expedita vel eaque fugit
      minima laudantium rerum amet, cumque alias! Perspiciatis recusandae saepe
      ab, quisquam blanditiis quo laborum ipsum a accusantium itaque autem
      debitis iusto fugit dignissimos. Perferendis officia ratione beatae maxime
      a impedit, eius, quisquam alias voluptatem libero nemo quasi consequuntur,
      neque reiciendis reprehenderit! Ducimus, neque unde maiores itaque
      quibusdam labore ab tenetur aut impedit id sit velit, adipisci quisquam.
      Sapiente magnam eligendi odio est debitis ullam et, nam repudiandae! Illo
      neque pariatur porro magnam molestias atque eveniet commodi voluptatem,
      rem suscipit sed ut odio laboriosam voluptatum, ullam id consequuntur
      doloribus esse minima quae voluptatibus quos consectetur! Officiis
      doloribus commodi, iure accusamus facere animi repellendus. Eius suscipit
      quod itaque quae earum inventore ullam ducimus architecto cum vel quisquam
      dolorum aliquid ex perspiciatis similique est, nihil eos a reprehenderit
      tempora aliquam quam?
    </ReadMoreLess>,
  );
  const button = getByRole('button');
  act(() => {
    button.click();
  });

  act(() => {
    button.click();
  });

  const DseText = getByTestId('DseReadMoreLess__span');
  const textLength = DseText.innerHTML.length;
  expect(DseText).toBeInTheDocument();
  expect(textLength).toBeLessThanOrEqual(100);
});

test('should not render button if under the limit', () => {
  const { queryByRole } = render(
    <ReadMoreLess max={100}>hello world</ReadMoreLess>,
  );
  const button = queryByRole('button');
  expect(button).not.toBeInTheDocument();
});

test('should render custom read more and read less texts', () => {
  const { getByRole } = render(
    <ReadMoreLess max={100} readMoreText="more" readLessText="less">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eum nihil,
      soluta provident, possimus ex ullam rem ducimus expedita vel eaque fugit
      minima laudantium rerum amet, cumque alias! Perspiciatis recusandae saepe
      ab, quisquam blanditiis quo laborum ipsum a accusantium itaque autem
      debitis iusto fugit dignissimos. Perferendis officia ratione beatae maxime
      a impedit, eius, quisquam alias voluptatem libero nemo quasi consequuntur,
      neque reiciendis reprehenderit! Ducimus, neque unde maiores itaque
      quibusdam labore ab tenetur aut impedit id sit velit, adipisci quisquam.
      Sapiente magnam eligendi odio est debitis ullam et, nam repudiandae! Illo
      neque pariatur porro magnam molestias atque eveniet commodi voluptatem,
      rem suscipit sed ut odio laboriosam voluptatum, ullam id consequuntur
      doloribus esse minima quae voluptatibus quos consectetur! Officiis
      doloribus commodi, iure accusamus facere animi repellendus. Eius suscipit
      quod itaque quae earum inventore ullam ducimus architecto cum vel quisquam
      dolorum aliquid ex perspiciatis similique est, nihil eos a reprehenderit
      tempora aliquam quam?
    </ReadMoreLess>,
  );
  const button = getByRole('button');
  expect(button).toBeInTheDocument();
  expect(button.innerHTML).toContain('more');
  act(() => {
    button.click();
  });
  expect(button.innerHTML).toContain('less');
});

test('should call sideEffect if provided', () => {
  const sideEffect = jest.fn();
  const { getByRole } = render(
    <ReadMoreLess max={100} sideEffect={sideEffect}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eum nihil,
      soluta provident, possimus ex ullam rem ducimus expedita vel eaque fugit
      minima laudantium rerum amet, cumque alias! Perspiciatis recusandae saepe
      ab, quisquam blanditiis quo laborum ipsum a accusantium itaque autem
      debitis iusto fugit dignissimos. Perferendis officia ratione beatae maxime
      a impedit, eius, quisquam alias voluptatem libero nemo quasi consequuntur,
      neque reiciendis reprehenderit! Ducimus, neque unde maiores itaque
      quibusdam labore ab tenetur aut impedit id sit velit, adipisci quisquam.
      Sapiente magnam eligendi odio est debitis ullam et, nam repudiandae! Illo
      neque pariatur porro magnam molestias atque eveniet commodi voluptatem,
      rem suscipit sed ut odio laboriosam voluptatum, ullam id consequuntur
      doloribus esse minima quae voluptatibus quos consectetur! Officiis
      doloribus commodi, iure accusamus facere animi repellendus. Eius suscipit
      quod itaque quae earum inventore ullam ducimus architecto cum vel quisquam
      dolorum aliquid ex perspiciatis similique est, nihil eos a reprehenderit
      tempora aliquam quam?
    </ReadMoreLess>,
  );
  const button = getByRole('button');
  act(() => {
    button.click();
  });
  expect(sideEffect).toHaveBeenCalledTimes(1);
  expect(sideEffect).toHaveBeenCalledWith(true);

  act(() => {
    button.click();
  });
  expect(sideEffect).toHaveBeenCalledTimes(2);
  expect(sideEffect).toHaveBeenCalledWith(false);
});
