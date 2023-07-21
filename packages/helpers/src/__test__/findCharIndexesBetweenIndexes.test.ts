import findCharIndexesBetweenIndexes from '../findCharIndexesBetweenIndexes';

it('find char indexes between indexes', () => {
  const input = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';
  const char = ',';
  const startIndex = 2;
  const endIndex = 10;
  const expected = [3, 5, 7, 9];
  const actual = findCharIndexesBetweenIndexes(
    input,
    char,
    startIndex,
    endIndex,
  );
  expect(actual).toEqual(expected);
});

it('find char indexes between indexes with no start index', () => {
  const input = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';
  const char = ',';
  const endIndex = 10;
  const expected = [1, 3, 5, 7, 9];
  const actual = findCharIndexesBetweenIndexes(
    input,
    char,
    undefined,
    endIndex,
  );
  expect(actual).toEqual(expected);
});

it('find char indexes between indexes with no end index', () => {
  const input = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';
  const char = ',';
  const startIndex = 30;
  const expected = [31, 33, 35, 37, 39, 41, 43, 45, 47, 49];
  const actual = findCharIndexesBetweenIndexes(
    input,
    char,
    startIndex,
    undefined,
  );
  console.log(actual);
  expect(actual).toEqual(expected);
});
