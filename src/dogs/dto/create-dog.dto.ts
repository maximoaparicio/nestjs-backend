import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { DogSize } from '../dog.entity';

export class CreateDogDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  race: string;
  size: DogSize;
  age: string;
  expectancy: string;
}
