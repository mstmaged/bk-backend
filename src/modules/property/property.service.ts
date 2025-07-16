import { Inject, Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { DataSource, Repository } from 'typeorm';
import { Property } from './entities/property.entity';

@Injectable()
export class PropertyService {
  propertyRepo: Repository<Property>;
  constructor(@Inject('DATA_SOURCE') private dataSource: DataSource) {
    this.propertyRepo = this.dataSource.getRepository(Property);
  }
  create(createPropertyDto: CreatePropertyDto) {
    console.log('Creating property with data:', createPropertyDto);

    return 'This action adds a new property';
  }

  findAll() {
    return `This action returns all property`;
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    console.log(
      'Updating property with ID:',
      id,
      'and data:',
      updatePropertyDto,
    );

    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
