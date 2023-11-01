import { Module } from '@nestjs/common';
import { UserService } from 'domain/User/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'domain/User/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
})
export class UserModule {}
