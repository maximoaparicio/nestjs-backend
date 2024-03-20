import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

@Entity({ name: 'dogs' })
export class Dog {
  @PrimaryGeneratedColumn('uuid', { name: 'dog_id' })
  id: string;

  @Column()
  race: string;

  @Column()
  size: DogSize;

  @Column()
  age: string;

  @Column()
  expectancy: string;

  @Column({ default: 'AVAILABLE TO ADOPT' })
  status: DogStatus;
}
