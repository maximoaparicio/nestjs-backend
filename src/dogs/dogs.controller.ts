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
import { CreateDogDto, UpdateDogDto } from './dto/dog.dto';

@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Get()
  getAllDogs() {
    return this.dogsService.getAllDogs();
  }

  @Post()
  createDog(@Body() newDog: CreateDogDto) {
    return this.dogsService.createDog(
      newDog.race,
      newDog.size,
      newDog.age,
      newDog.expectancy,
    );
  }

  @Delete(':id')
  deleteDog(@Param('id') id: string) {
    this.dogsService.deleteDog(id);
  }

  @Patch(':id')
  updateDog(@Param('id') id: string, @Body() updatedFields: UpdateDogDto) {
    return this.dogsService.updateDog(id, updatedFields);
  }
}
