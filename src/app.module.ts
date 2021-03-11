import { TenantModule } from './tenants/tenants.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { LandlordModule } from './landlord/landlord.module';
import { ListingModule } from './listing/listing.module';

@Module({
  imports: [
    AccountModule,
    TenantModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url:
        '      mongodb+srv://tariq:CtQk0K0Hf1XRY1S6@cluster0.o7wcr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
    }),
    LandlordModule,
    ListingModule,
    // MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
