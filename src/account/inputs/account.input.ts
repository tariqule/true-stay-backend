import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class AccountInput {
  // @Field()
  // readonly firstName: string;
  // @Field()
  // readonly lastName: string;
  @Field()
  readonly email?: string;
  @Field({ nullable: true })
  readonly phoneNumber: string;
  @Field()
  readonly password: string;
}
