import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Listing {
  @ObjectIdColumn()
  _id: string;
  // @Column()
  // firstName: string;
  // @Column()
  // lastName: string;
  @Column()
  title: string;
  @Column()
  description: string;
}
