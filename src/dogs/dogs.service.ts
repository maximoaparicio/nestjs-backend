import { Injectable } from '@nestjs/common';
import { Dog, DogSize, DogStatus } from './dog.entity';
import { v4 } from 'uuid';
import { UpdateDogDto } from './dto/dog.dto';

@Injectable()
export class DogsService {
  // simulate a database
  private dogs: Dog[] = [
    {
      id: '1',
      race: 'Unknown',
      size: DogSize.MEDIUM,
      age: '5 years old',
      expectancy: '9 years mostly',
      status: DogStatus.AVAILABLE,
    },
  ];

  getAllDogs() {
    return this.dogs;
  }

  createDog(race: string, size: DogSize, age: string, expectancy: string) {
    const dog = {
      id: v4(),
      race,
      size,
      age,
      expectancy,
      status: DogStatus.AVAILABLE,
    };
    this.dogs.push(dog);

    return dog;
  }

  deleteDog(id: string) {
    this.dogs = this.dogs.filter((dog) => dog.id !== id);
  }

  getDogById(id: string): Dog {
    return this.dogs.find((dog) => dog.id === id);
  }

  updateDog(id: string, updatedFields: UpdateDogDto): Dog {
    const dog = this.getDogById(id);
    const newDog = Object.assign(dog, updatedFields);
    this.dogs = this.dogs.map((dog) => (dog.id === id ? newDog : dog));
    return newDog;
  }
}
