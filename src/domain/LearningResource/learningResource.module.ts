import { Module } from '@nestjs/common';
import { LearningResourceResolver } from 'application/resolvers/learningResource.resolver';

@Module({
  providers: [
    {
      provide: 'LearningResourceResolver',
      useFactory: async () => new LearningResourceResolver(),
    },
  ],
})
export class LearningResourceModule {}
