import { ListingInput } from './input/listing.input';
import { ListingType } from './dto/listing.dto';
import { ListingService } from './listing.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

@Resolver('Listing')
export class ListingResolver {
  constructor(private readonly listingService: ListingService) {}

  @Query(() => [ListingType])
  async Listings() {
    return await this.listingService.findAll();
  }

  @Mutation(() => ListingType)
  async createListing(@Args('input') input: ListingInput) {
    return this.listingService.create(input);
  }
}
