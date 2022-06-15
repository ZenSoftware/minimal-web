function combinations(elements: any[]) {
  if (elements.length === 0) return [[]];

  const firstEl = elements[0];
  const combsExcludingFirst = combinations(elements.slice(1));

  const combsIncludingFirst: any[][] = [];
  for (let item of combsExcludingFirst) {
    combsIncludingFirst.push([firstEl, ...item]);
  }

  return [...combsExcludingFirst, ...combsIncludingFirst];
}

const sample = ['a', 'b', 'c'];
console.log(combinations(sample));
