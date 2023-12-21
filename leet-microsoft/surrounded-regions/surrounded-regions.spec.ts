import { solve } from './surrounded-regions';

describe('Surrounded Regions', () => {
  it('evaluates correctly 1', () => {
    const input = [
      ['X', 'X', 'X', 'X'],
      ['X', 'O', 'O', 'X'],
      ['X', 'X', 'O', 'X'],
      ['X', 'O', 'X', 'X'],
    ];

    solve(input);

    expect(input).toEqual([
      ['X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X'],
      ['X', 'O', 'X', 'X'],
    ]);
  });

  it('evaluates correctly 2', () => {
    const input = [
      ['O', 'X', 'X', 'O', 'X'],
      ['X', 'O', 'O', 'X', 'O'],
      ['X', 'O', 'X', 'O', 'X'],
      ['O', 'X', 'O', 'O', 'O'],
      ['X', 'X', 'O', 'X', 'O'],
    ];

    solve(input);

    const incorrect = [
      ['O', 'X', 'X', 'O', 'X'],
      ['X', 'X', 'X', 'X', 'O'],
      ['X', 'X', 'X', 'X', 'X'],
      ['O', 'X', 'O', 'O', 'O'],
      ['X', 'X', 'O', 'X', 'O'],
    ];

    expect(input).toEqual([
      ['O', 'X', 'X', 'O', 'X'],
      ['X', 'X', 'X', 'X', 'O'],
      ['X', 'X', 'X', 'O', 'X'],
      ['O', 'X', 'O', 'O', 'O'],
      ['X', 'X', 'O', 'X', 'O'],
    ]);
  });
});
