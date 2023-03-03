// TODO: Move to pipe

export const getBreedByUrl = (url: string): string => {
  const pattern = /https:\/\/images.dog.ceo\/breeds\/(\w+)/;
  const match = url.match(pattern);

  return match ? match[1] : '';
};

export const getSubBreedByUrl = (url: string): string => {
  const pattern = /\/([a-z]+)-([a-z]+)/;
  const match = url.match(pattern);

  return match ? match[2] : '';
};
