import { TenantType } from './dto/tenants.dto';
import { TenantInput } from './input/tenants.input';
import { Tenant } from './entity/tenants.entity';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TenantService } from './tenants.service';

@Resolver('Tenant')
export class TenantResolver {
  constructor(private readonly tenantService: TenantService) {}

  @Query(() => [TenantType])
  async Tenants() {
    return this.tenantService.findAll();
  }

  @Mutation(() => TenantType)
  async createTenant(@Args('input') input: TenantInput) {
    return await this.tenantService.create(input);
  }
}
