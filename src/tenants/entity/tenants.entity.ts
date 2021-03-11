import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Tenant {
  @ObjectIdColumn()
  _id: string;
  @Column()
  firstName: string;
  // @Column()
  // inviteCode: string;
  // @Column()
  // isOnline: boolean;
  // @Column()
  // isLocked: boolean;
}
