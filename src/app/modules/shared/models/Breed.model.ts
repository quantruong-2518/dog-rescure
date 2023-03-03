export type DogAPIResponse = {
  message: Array<string> | Object;
  status: string;
};

export type Breed = {
  name: string;
  sub: Array<string>;
};
