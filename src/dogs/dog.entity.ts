export enum DogStatus {
  ON_RECOVER = 'ON RECOVER',
  AVAILABLE = 'AVAILABLE TO ADOPT',
  IN_HOME = 'ALREADY ADOPTED',
}

export enum DogSize {
  SMALL = 'Small',
  MEDIUM = 'Medium',
  BIG = 'Big',
}

export class Dog {
  id: string;
  race: string;
  size: DogSize;
  age: string;
  expectancy: string;
  status: DogStatus;
}
