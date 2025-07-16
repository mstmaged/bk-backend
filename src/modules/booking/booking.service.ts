import { Inject, Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { DataSource, Repository } from 'typeorm';
import { Booking } from './entities/booking.entity';

@Injectable()
export class BookingService {
  bookingRepo: Repository<Booking>;
  constructor(@Inject('DATA_SOURCE') private dataSource: DataSource) {
    this.bookingRepo = this.dataSource.getRepository(Booking);
  }
  create(_createBookingDto: CreateBookingDto) {
    console.log(_createBookingDto);

    return 'This action adds a new booking';
  }

  findAll() {
    return `This action returns all booking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    console.log(updateBookingDto);

    return `This action updates a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
