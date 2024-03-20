import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { Dog } from './dog.entity';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get()
  getDogs(): Promise<Dog[]> {
    return this.dogsService.getDogs();
  }

  @Get(':id')
  getDog(@Param('id') id: string): Promise<Dog> {
    return this.dogsService.getDogById(id);
  }

  @Post()
  createDog(@Body() newDog: CreateDogDto) {
    return this.dogsService.createDog(newDog);
  }

  @Delete(':id')
  deleteDog(@Param('id') id: string) {
    return this.dogsService.deleteDog(id);
  }

  @Patch(':id')
  updateDog(@Param('id') id: string, @Body() updatedFields: UpdateDogDto) {
    return this.dogsService.updateDog(id, updatedFields);
  }
}
