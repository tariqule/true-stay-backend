import { ListingInput } from './input/listing.input';
import { Listing } from './entity/listing.entity';
import { Injectable } from '@nestjs/common';
import { MongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ListingService {
  constructor(
    @InjectRepository(Listing)
    private readonly ListingRepository: MongoRepository<Listing>,
  ) {}
  async create(input: ListingInput): Promise<Listing> {

    const listing = new Listing();
    // console.log(input.skills);
    listing.title = input.title;
    listing.description = input.description;
    return this.ListingRepository.save(listing);
  }

  async findAll(): Promise<Listing[]> {
    return await this.ListingRepository.find();
  }
}
