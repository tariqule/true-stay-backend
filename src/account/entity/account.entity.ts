import { Tenant } from './../../tenants/entity/tenants.entity';
import { Landlord } from 'src/landlord/entity/landlord.entity';
import { Entity, ObjectIdColumn, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Account {
  @ObjectIdColumn()
  _id: string;
  // @Column()
  // firstName: string;
  // @Column()
  // lastName: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  phoneNumber: string;

  @OneToOne(type => Landlord)
  landlord: Landlord;

  @OneToOne(type => Tenant)
  tenant: Tenant;
  // @OneToOne(() => Landlord)
  // @JoinColumn()
  // landlord: Landlord;

  // @OneToOne(() => Tenant)

  // tenant: Tenant;
}
