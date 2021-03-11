import {
  HttpException,
  HttpStatus,
  Req,
  // Request,
  Res,
  // Response,
} from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SetCookies } from '@nestjsplus/cookies';
// import { Response } from 'express';
import { AccountService } from './account.service';
import { AccountType } from './dto/create-account.dto';
import { AccountInput } from './inputs/account.input';
import { Cookies, SignedCookies } from '@nestjsplus/cookies';
import { Request, Response, NextFunction } from 'express';

@Resolver()
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [AccountType])
  async accounts() {
    return this.accountService.findAll();
  }

  // @Mutation(() => AccountType)
  // async createAccount(@Args('input') input: AccountInput) {
  //   return this.accountService.create(input);
  // }

  @Mutation(() => AccountType)
  async login(
    @Args('input') input: AccountInput,
    res: Response,
  ): Promise<AccountType | HttpException | any> {
    try {
      let user = await this.accountService.getUserByEmail(input.email);
      // if (!user) {
      //   user = await this.accountService.create(input);
      // }

      const token = await this.accountService.createToken(input.email);

      if (!user) {
        if (input.phoneNumber) {
          const newAccount = await this.accountService.create(input);
          return {
            ...newAccount,
            token: token,
            reqType: 'sign-up',
          };
        } else {
          throw new Error('error');
        }
      }
      const account = await this.accountService.create(input);

      return { ...account, token: token, reqType: 'sign-in' };
    } catch (err) {
      throw new HttpException('Missing phoneNumber', HttpStatus.BAD_REQUEST);
    }
  }
}
