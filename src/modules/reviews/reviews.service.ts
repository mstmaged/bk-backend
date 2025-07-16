import { Inject, Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { DataSource, Repository } from 'typeorm';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewsService {
  reviewsRepo: Repository<Review>;
  constructor(@Inject('DATA_SOURCE') private dataSource: DataSource) {
    this.reviewsRepo = this.dataSource.getRepository(Review);
  }
  create(createReviewDto: CreateReviewDto) {
    console.log('Creating review:', createReviewDto);

    return 'This action adds a new review';
  }

  findAll() {
    return `This action returns all reviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} review`;
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    console.log('Updating review:', id, updateReviewDto);

    return `This action updates a #${id} review`;
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}
