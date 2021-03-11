import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class LandlordType {
  @Field(() => ID)
  _id: string;
  @Field()
  name: string;
  @Field()
  address: string;
  @Field()
  city: string;
  @Field()
  postalCode: string;
}
