import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Dog } from './dog.entity';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DogsService {
  constructor(@InjectRepository(Dog) private dogRepository: Repository<Dog>) {}

  getDogs() {
    return this.dogRepository.find();
  }

  async createDog(dog: CreateDogDto) {
    const newDog = this.dogRepository.create(dog);
    return this.dogRepository.save(newDog);
  }

  async deleteDog(id: string) {
    const result = await this.dogRepository.delete({ id });

    if (result.affected === 0) {
      throw new HttpException('Dog not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  async getDogById(id: string) {
    const dogFound = await this.dogRepository.findOne({
      where: {
        id,
      },
    });

    if (!dogFound) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return dogFound;
  }

  async updateDog(id: string, dog: UpdateDogDto) {
    const dogFound = await this.dogRepository.findOne({
      where: {
        id,
      },
    });

    if (!dogFound) {
      throw new HttpException('Dog not found', HttpStatus.NOT_FOUND);
    }

    const updatedDog = Object.assign(dogFound, dog);
    return this.dogRepository.save(updatedDog);
  }
}
