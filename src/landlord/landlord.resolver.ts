import { LandlordInput } from './input/landlord.input';
import { LandlordType } from './dto/landlord.dto';
import { LandlordService } from './landlord.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { AccountService } from 'src/account/account.service';

@Resolver('Landlord')
export class LandlordResolver {
  constructor(private readonly landlordService: LandlordService) {}

  @Query(() => [LandlordType])
  async Landlords() {
    return await this.landlordService.findAll();
  }

  @Mutation(() => LandlordType)
  async createLandlord(@Args('input') input: LandlordInput) {
    return this.landlordService.create(input);
  }
}
