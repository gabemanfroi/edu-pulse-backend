import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from 'domain/User/user.entity';

@Entity()
export class LearningResource {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  url: string;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;
}
