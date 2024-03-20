import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { Dog } from './dog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dog]), DogsModule],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
