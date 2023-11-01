import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginRequest, LoginResponse } from 'generated/graphql';

@Resolver()
export class AuthResolver {
  private newVar = { token: null };

  constructor() {}

  @Mutation()
  async login(@Args('request') request: LoginRequest): Promise<LoginResponse> {
    return this.newVar;
  }
}
