const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=0000000&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;

// const regexp = /the/gi;
console.log(str.match(/(?<=@).{1,}/g));
