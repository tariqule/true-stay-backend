import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class ListingType {
  @Field(() => ID)
  _id: string;
  @Field()
  readonly title: string;
  @Field()
  readonly description: string;
  
}

// export enum subscriptionUserType {
//   BASIC = 'BASIC',
//   PREMIUM = 'PREMIUM',
// }
