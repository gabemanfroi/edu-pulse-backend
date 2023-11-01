/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */

/* eslint-disable */

export enum LearningResourceCategory {
  BOOK = 'BOOK',
  COURSE = 'COURSE',
}

export class LoginRequest {
  username: string;
  password: string;
}

export class GetLearningResourceByIdRequest {
  id: string;
}

export class CreateLearningResourceInput {
  category: LearningResourceCategory;
  url?: Nullable<string>;
}

export class CreateLearningResourceRequest {
  learningResource: CreateLearningResourceInput;
}

export abstract class IMutation {
  abstract login(request: LoginRequest): LoginResponse | Promise<LoginResponse>;

  abstract createLearningResource(
    request: CreateLearningResourceRequest,
  ): CreateLearningResourceResponse | Promise<CreateLearningResourceResponse>;
}

export class LoginResponse {
  token?: Nullable<string>;
}

export abstract class IQuery {
  abstract getLearningResourceById(
    request: GetLearningResourceByIdRequest,
  ): GetLearningResourceByIdResponse | Promise<GetLearningResourceByIdResponse>;

  abstract getLearningResources():
    | Nullable<GetLearningResourcesResponse>
    | Promise<Nullable<GetLearningResourcesResponse>>;
}

export class LearningResource {
  category: LearningResourceCategory;
  url?: Nullable<string>;
}

export class GetLearningResourceByIdResponse {
  learningResource?: Nullable<LearningResource>;
}

export class GetLearningResourcesResponse {
  learningResources: Nullable<LearningResource>[];
}

export class CreateLearningResourceResponse {
  learningResource: LearningResource;
}

type Nullable<T> = T | null;
