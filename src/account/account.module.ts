import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entity/account.entity';
import { Module } from '@nestjs/common';
import { AccountResolver } from './account.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountSchema } from './account.schema';
import { AccountService } from './account.service';

@Module({
  imports: [
    // MongooseModule.forFeature([{ name: 'Account', schema: AccountSchema }]),
    TypeOrmModule.forFeature([Account]),
  ],
  providers: [AccountResolver, AccountService],
})
export class AccountModule {}
