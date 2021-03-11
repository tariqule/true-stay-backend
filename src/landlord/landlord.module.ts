import { AccountModule } from './../account/account.module';
import { Landlord } from './entity/landlord.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { LandlordResolver } from './landlord.resolver';
import { LandlordService } from './landlord.service';
import { Account } from 'src/account/entity/account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Landlord, Account])],
  providers: [LandlordResolver, LandlordService, AccountModule],
})
export class LandlordModule {}
