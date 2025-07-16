import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DataSource, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  userRepo: Repository<User>;

  constructor(@Inject('DATA_SOURCE') private dataSource: DataSource) {
    this.userRepo = this.dataSource.getRepository(User);
  }
  create(createUserDto: CreateUserDto) {
    console.log(createUserDto);

    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, UpdateUserDto: UpdateUserDto) {
    console.log(UpdateUserDto);

    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
