import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { DogSize, DogStatus } from '../dog.entity';

export class CreateDogDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  race: string;
  size: DogSize;
  age: string;
  expectancy: string;
}

export class UpdateDogDto {
  @IsString()
  @IsOptional()
  @IsIn([DogSize.BIG, DogSize.MEDIUM, DogSize.SMALL])
  size?: DogSize;

  @IsString()
  @IsOptional()
  age?: string;

  @IsString()
  @IsOptional()
  @IsIn([DogStatus.AVAILABLE, DogStatus.IN_HOME, DogStatus.ON_RECOVER])
  status?: DogStatus;
}
