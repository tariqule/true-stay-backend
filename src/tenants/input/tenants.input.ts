import { InputType, Field } from 'type-graphql';

@InputType()
export class TenantInput {
  @Field()
  firstName: string;
}
