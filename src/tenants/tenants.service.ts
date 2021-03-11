import { TenantInput } from './input/tenants.input';
import { Tenant } from './entity/tenants.entity';
import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

@Injectable()
export class TenantService {
  constructor(
    @InjectRepository(Tenant)
    private readonly TenantRepository: MongoRepository<Tenant>,
  ) {}

  async findAll(): Promise<Tenant[]> {
    return this.TenantRepository.find();
  }

  async create(input: TenantInput): Promise<Tenant> {
    const tenant = new Tenant();
    tenant._id = uuid.v4();
    tenant.firstName = input.firstName;
    // tenant.inviteCode = input.firstName + 'Tenant73r3c';
    // tenant.isLocked = false;
    // tenant.isOnline = true;
    return this.TenantRepository.save(tenant);
  }
}
