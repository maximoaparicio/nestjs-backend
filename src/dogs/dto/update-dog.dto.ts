import { IsIn, IsOptional, IsString } from 'class-validator';
import { DogSize, DogStatus } from '../dog.entity';

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
