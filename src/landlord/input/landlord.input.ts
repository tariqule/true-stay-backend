import { InputType, Field, Int } from 'type-graphql';
import { GraphQLList, GraphQLString } from 'graphql';

@InputType()
export class LandlordInput {
  @Field()
  readonly _id: string;
  @Field()
  readonly name: string;
  @Field()
  readonly address: string;
  @Field()
  readonly city: string;
  @Field()
  readonly postalCode: string;
  // @Field()
  // readonly businessAddress: string;
  // @Field(type => [String])
  // readonly skills: [String];
}
