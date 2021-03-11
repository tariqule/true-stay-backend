import { LandlordInput } from './input/landlord.input';
import { Landlord } from './entity/landlord.entity';
import { Injectable } from '@nestjs/common';
import { MongoRepository, ObjectID } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/account/entity/account.entity';
const ObjectId = require('mongodb').ObjectID;

@Injectable()
export class LandlordService {
  // constructor(
  //   @InjectModel('Account') private readonly accountModel: Model<Account>,
  // ) {}
  constructor(
    @InjectRepository(Landlord)
    private readonly LandlordRepository: MongoRepository<Landlord>,
    @InjectRepository(Account)
    private readonly accountRepository: MongoRepository<Account>,
  ) {}

  // async create(createAccountDto: AccountInput): Promise<Account> {
  //   const createAccount = new this.accountRepository(createAccountDto);
  //   return await createAccount.save();
  // }
  async create(input: LandlordInput): Promise<any> {
    //TODO stripe code should be auto generated

    //TODO Avatar should be stored in the database
    const findAccount = this.accountRepository.findOne({ _id: input._id });

    if (findAccount) {
      const landlord = new Landlord();
      const account = new Account();
      // console.log(input.skills);
      // ObjectID const id = new ObjectID()
      // landlord._id =  ObjectID();
      landlord.name = input.name;
      landlord.address = input.address;
      landlord.city = input.city;
      landlord.postalCode = input.postalCode;
      // landlord.businessPhoneNumber = input.businessPhoneNumber;
      // landlord.skills = input.skills;
      // landlord.stripeId = 'gjhv';
      await this.LandlordRepository.save(landlord);

      const find = await this.LandlordRepository.findOne(input.name);
      // const _id = (await findAccount)._id;
      return await this.accountRepository.update(ObjectId(), {
        landlord: find,
      });
    }
  }

  async findAll(): Promise<Landlord[]> {
    return await this.LandlordRepository.find();
  }
}
