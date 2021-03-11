import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Landlord {
  @ObjectIdColumn()
  _id: ObjectID;
  @Column()
  name: string;
  @Column()
  address: string;
  @Column()
  city: string;
  @Column()
  postalCode: string;

  // @Column()
  // skills: [String];
  // @Column()
  // avatar: string;
  // @Column()
  // isLocked: boolean;
  // @Column()
  // reason: string;
  // @Column()
  // createdAt: number;
  // @Column()
  // isActive: boolean;
  // @Column()
  // isVerified: string;
  // @Column()
  // subscriptionType: string;
  // @Column()
  // stripeId: string | number;

  /**
   *
   * @param Landlord Constructor will initiate when th eLandlord account is created
   */
  constructor() {
    // this._id = this._id || uuid.v4();
    // this.isLocked = this.isLocked !== undefined ? this.isLocked : false;
    // this.reason = this.reason || '';
    // this.isActive = this.isActive !== undefined ? this.isActive : true;
    // this.subscriptionType = this.subscriptionType || subscriptionUserType.BASIC;
    // this.createdAt = this.createdAt || +new Date();
  }
}
