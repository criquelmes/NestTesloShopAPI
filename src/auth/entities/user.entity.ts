import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  email: string;

  @Column('text', { select: false })
  password: string;

  @Column('text')
  fullname: string;

  @Column('bool', { default: true })
  isActive: boolean;

  @Column('text', { array: true, default: ['user'] })
  roles: string[];

  @BeforeInsert()
  checkEmailInsert() {
    this.email = this.email.toLowerCase().replaceAll(' ', '_');
  }

  @BeforeUpdate()
  checkEmailUpdate() {
    // this.email = this.email.toLowerCase().replaceAll(' ', '_');
    this.checkEmailInsert();
  }
}
