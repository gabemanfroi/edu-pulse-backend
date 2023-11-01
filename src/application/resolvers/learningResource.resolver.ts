import { Args, Query, Resolver } from '@nestjs/graphql';
import {
  GetLearningResourceByIdRequest,
  GetLearningResourceByIdResponse,
  LearningResourceCategory,
} from 'generated/graphql';

@Resolver()
export class LearningResourceResolver {
  constructor() {}

  @Query()
  async getLearningResourceById(
    @Args('request') request: GetLearningResourceByIdRequest,
  ): Promise<GetLearningResourceByIdResponse> {
    return {
      learningResource: {
        url: 'https://www.google.com',
        category: LearningResourceCategory.BOOK,
      },
    };
  }
}
