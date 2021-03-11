import { TypeOrmModule } from '@nestjs/typeorm';
import { Tenant } from './entity/tenants.entity';
import { Module } from '@nestjs/common';
import { TenantResolver } from './tenants.resolver';
import { TenantService } from './tenants.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tenant])],
  providers: [TenantResolver, TenantService],
})
export class TenantModule {}
