import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class TenantType {
  @Field(() => ID)
  _id: string;
  @Field()
  readonly firstName: string;
  // @Field()
  // readonly inviteCode: string;
  // @Field()
  // readonly isOnline: boolean;
  // @Field()
  // readonly isLocked: boolean;
}
