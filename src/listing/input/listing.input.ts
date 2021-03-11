import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class ListingInput {
  // @Field()
  // readonly firstName: string;
  // @Field()
  // readonly lastName: string;
  @Field()
  readonly title: string;
  @Field()
  readonly description: string;
}
