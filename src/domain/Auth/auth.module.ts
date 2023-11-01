import { Module } from '@nestjs/common';
import { AuthService } from 'domain/Auth/auth.service';
import { UserModule } from 'domain/User/user.module';
import { AuthResolver } from 'application/resolvers/auth.resolver';

@Module({
  imports: [UserModule],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}
