import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'domain/User/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
}
