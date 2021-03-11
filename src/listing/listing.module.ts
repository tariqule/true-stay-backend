import { Listing } from './entity/listing.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ListingResolver } from './listing.resolver';
import { ListingService } from './listing.service';

@Module({
  imports: [TypeOrmModule.forFeature([Listing])],
  providers: [ListingResolver, ListingService],
})
export class ListingModule {}
