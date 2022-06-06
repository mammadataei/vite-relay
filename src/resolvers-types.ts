import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  geo?: Maybe<Geo>;
  street?: Maybe<Scalars['String']>;
  suite?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  city?: InputMaybe<Scalars['String']>;
  geo?: InputMaybe<GeoInput>;
  street?: InputMaybe<Scalars['String']>;
  suite?: InputMaybe<Scalars['String']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

export type Album = {
  __typename?: 'Album';
  id?: Maybe<Scalars['ID']>;
  photos?: Maybe<PhotosPage>;
  title?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};


export type AlbumPhotosArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type AlbumsPage = {
  __typename?: 'AlbumsPage';
  data?: Maybe<Array<Maybe<Album>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Comment = {
  __typename?: 'Comment';
  body?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  post?: Maybe<Post>;
};

export type CommentsPage = {
  __typename?: 'CommentsPage';
  data?: Maybe<Array<Maybe<Comment>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Company = {
  __typename?: 'Company';
  bs?: Maybe<Scalars['String']>;
  catchPhrase?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CompanyInput = {
  bs?: InputMaybe<Scalars['String']>;
  catchPhrase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CreateAlbumInput = {
  title: Scalars['String'];
  userId: Scalars['ID'];
};

export type CreateCommentInput = {
  body: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
};

export type CreatePhotoInput = {
  thumbnailUrl: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type CreatePostInput = {
  body: Scalars['String'];
  title: Scalars['String'];
};

export type CreateTodoInput = {
  completed: Scalars['Boolean'];
  title: Scalars['String'];
};

export type CreateUserInput = {
  address?: InputMaybe<AddressInput>;
  company?: InputMaybe<CompanyInput>;
  email: Scalars['String'];
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
  website?: InputMaybe<Scalars['String']>;
};

export type Geo = {
  __typename?: 'Geo';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type GeoInput = {
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Int']>;
  createAlbum?: Maybe<Album>;
  createComment?: Maybe<Comment>;
  createPhoto?: Maybe<Photo>;
  createPost?: Maybe<Post>;
  createTodo?: Maybe<Todo>;
  createUser?: Maybe<User>;
  deleteAlbum?: Maybe<Scalars['Boolean']>;
  deleteComment?: Maybe<Scalars['Boolean']>;
  deletePhoto?: Maybe<Scalars['Boolean']>;
  deletePost?: Maybe<Scalars['Boolean']>;
  deleteTodo?: Maybe<Scalars['Boolean']>;
  deleteUser?: Maybe<Scalars['Boolean']>;
  updateAlbum?: Maybe<Album>;
  updateComment?: Maybe<Comment>;
  updatePhoto?: Maybe<Photo>;
  updatePost?: Maybe<Post>;
  updateTodo?: Maybe<Todo>;
  updateUser?: Maybe<User>;
};


export type MutationCreateAlbumArgs = {
  input: CreateAlbumInput;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreatePhotoArgs = {
  input: CreatePhotoInput;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteAlbumArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePhotoArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateAlbumArgs = {
  id: Scalars['ID'];
  input: UpdateAlbumInput;
};


export type MutationUpdateCommentArgs = {
  id: Scalars['ID'];
  input: UpdateCommentInput;
};


export type MutationUpdatePhotoArgs = {
  id: Scalars['ID'];
  input: UpdatePhotoInput;
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID'];
  input: UpdatePostInput;
};


export type MutationUpdateTodoArgs = {
  id: Scalars['ID'];
  input: UpdateTodoInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  input: UpdateUserInput;
};

export enum OperatorKindEnum {
  Gte = 'GTE',
  Like = 'LIKE',
  Lte = 'LTE',
  Ne = 'NE'
}

export type OperatorOptions = {
  field?: InputMaybe<Scalars['String']>;
  kind?: InputMaybe<OperatorKindEnum>;
  value?: InputMaybe<Scalars['String']>;
};

export type PageLimitPair = {
  __typename?: 'PageLimitPair';
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type PageMetadata = {
  __typename?: 'PageMetadata';
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageQueryOptions = {
  operators?: InputMaybe<Array<InputMaybe<OperatorOptions>>>;
  paginate?: InputMaybe<PaginateOptions>;
  search?: InputMaybe<SearchOptions>;
  slice?: InputMaybe<SliceOptions>;
  sort?: InputMaybe<Array<InputMaybe<SortOptions>>>;
};

export type PaginateOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type PaginationLinks = {
  __typename?: 'PaginationLinks';
  first?: Maybe<PageLimitPair>;
  last?: Maybe<PageLimitPair>;
  next?: Maybe<PageLimitPair>;
  prev?: Maybe<PageLimitPair>;
};

export type Photo = {
  __typename?: 'Photo';
  album?: Maybe<Album>;
  id?: Maybe<Scalars['ID']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PhotosPage = {
  __typename?: 'PhotosPage';
  data?: Maybe<Array<Maybe<Photo>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Post = {
  __typename?: 'Post';
  body?: Maybe<Scalars['String']>;
  comments?: Maybe<CommentsPage>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};


export type PostCommentsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type PostsPage = {
  __typename?: 'PostsPage';
  data?: Maybe<Array<Maybe<Post>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Int']>;
  album?: Maybe<Album>;
  albums?: Maybe<AlbumsPage>;
  comment?: Maybe<Comment>;
  comments?: Maybe<CommentsPage>;
  photo?: Maybe<Photo>;
  photos?: Maybe<PhotosPage>;
  post?: Maybe<Post>;
  posts?: Maybe<PostsPage>;
  todo?: Maybe<Todo>;
  todos?: Maybe<TodosPage>;
  user?: Maybe<User>;
  users?: Maybe<UsersPage>;
};


export type QueryAlbumArgs = {
  id: Scalars['ID'];
};


export type QueryAlbumsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type QueryCommentArgs = {
  id: Scalars['ID'];
};


export type QueryCommentsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type QueryPhotoArgs = {
  id: Scalars['ID'];
};


export type QueryPhotosArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QueryPostsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type QueryTodoArgs = {
  id: Scalars['ID'];
};


export type QueryTodosArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type SearchOptions = {
  q?: InputMaybe<Scalars['String']>;
};

export type SliceOptions = {
  end?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type SortOptions = {
  field?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<SortOrderEnum>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Todo = {
  __typename?: 'Todo';
  completed?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type TodosPage = {
  __typename?: 'TodosPage';
  data?: Maybe<Array<Maybe<Todo>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type UpdateAlbumInput = {
  title?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type UpdateCommentInput = {
  body?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdatePhotoInput = {
  thumbnailUrl?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type UpdatePostInput = {
  body?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateTodoInput = {
  completed?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  address?: InputMaybe<AddressInput>;
  company?: InputMaybe<CompanyInput>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Address>;
  albums?: Maybe<AlbumsPage>;
  company?: Maybe<Company>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  posts?: Maybe<PostsPage>;
  todos?: Maybe<TodosPage>;
  username?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};


export type UserAlbumsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type UserPostsArgs = {
  options?: InputMaybe<PageQueryOptions>;
};


export type UserTodosArgs = {
  options?: InputMaybe<PageQueryOptions>;
};

export type UsersPage = {
  __typename?: 'UsersPage';
  data?: Maybe<Array<Maybe<User>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Address: ResolverTypeWrapper<Address>;
  AddressInput: AddressInput;
  Album: ResolverTypeWrapper<Album>;
  AlbumsPage: ResolverTypeWrapper<AlbumsPage>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CacheControlScope: CacheControlScope;
  Comment: ResolverTypeWrapper<Comment>;
  CommentsPage: ResolverTypeWrapper<CommentsPage>;
  Company: ResolverTypeWrapper<Company>;
  CompanyInput: CompanyInput;
  CreateAlbumInput: CreateAlbumInput;
  CreateCommentInput: CreateCommentInput;
  CreatePhotoInput: CreatePhotoInput;
  CreatePostInput: CreatePostInput;
  CreateTodoInput: CreateTodoInput;
  CreateUserInput: CreateUserInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Geo: ResolverTypeWrapper<Geo>;
  GeoInput: GeoInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  OperatorKindEnum: OperatorKindEnum;
  OperatorOptions: OperatorOptions;
  PageLimitPair: ResolverTypeWrapper<PageLimitPair>;
  PageMetadata: ResolverTypeWrapper<PageMetadata>;
  PageQueryOptions: PageQueryOptions;
  PaginateOptions: PaginateOptions;
  PaginationLinks: ResolverTypeWrapper<PaginationLinks>;
  Photo: ResolverTypeWrapper<Photo>;
  PhotosPage: ResolverTypeWrapper<PhotosPage>;
  Post: ResolverTypeWrapper<Post>;
  PostsPage: ResolverTypeWrapper<PostsPage>;
  Query: ResolverTypeWrapper<{}>;
  SearchOptions: SearchOptions;
  SliceOptions: SliceOptions;
  SortOptions: SortOptions;
  SortOrderEnum: SortOrderEnum;
  String: ResolverTypeWrapper<Scalars['String']>;
  Todo: ResolverTypeWrapper<Todo>;
  TodosPage: ResolverTypeWrapper<TodosPage>;
  UpdateAlbumInput: UpdateAlbumInput;
  UpdateCommentInput: UpdateCommentInput;
  UpdatePhotoInput: UpdatePhotoInput;
  UpdatePostInput: UpdatePostInput;
  UpdateTodoInput: UpdateTodoInput;
  UpdateUserInput: UpdateUserInput;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  User: ResolverTypeWrapper<User>;
  UsersPage: ResolverTypeWrapper<UsersPage>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Address: Address;
  AddressInput: AddressInput;
  Album: Album;
  AlbumsPage: AlbumsPage;
  Boolean: Scalars['Boolean'];
  Comment: Comment;
  CommentsPage: CommentsPage;
  Company: Company;
  CompanyInput: CompanyInput;
  CreateAlbumInput: CreateAlbumInput;
  CreateCommentInput: CreateCommentInput;
  CreatePhotoInput: CreatePhotoInput;
  CreatePostInput: CreatePostInput;
  CreateTodoInput: CreateTodoInput;
  CreateUserInput: CreateUserInput;
  Float: Scalars['Float'];
  Geo: Geo;
  GeoInput: GeoInput;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  OperatorOptions: OperatorOptions;
  PageLimitPair: PageLimitPair;
  PageMetadata: PageMetadata;
  PageQueryOptions: PageQueryOptions;
  PaginateOptions: PaginateOptions;
  PaginationLinks: PaginationLinks;
  Photo: Photo;
  PhotosPage: PhotosPage;
  Post: Post;
  PostsPage: PostsPage;
  Query: {};
  SearchOptions: SearchOptions;
  SliceOptions: SliceOptions;
  SortOptions: SortOptions;
  String: Scalars['String'];
  Todo: Todo;
  TodosPage: TodosPage;
  UpdateAlbumInput: UpdateAlbumInput;
  UpdateCommentInput: UpdateCommentInput;
  UpdatePhotoInput: UpdatePhotoInput;
  UpdatePostInput: UpdatePostInput;
  UpdateTodoInput: UpdateTodoInput;
  UpdateUserInput: UpdateUserInput;
  Upload: Scalars['Upload'];
  User: User;
  UsersPage: UsersPage;
};

export type CacheControlDirectiveArgs = {
  maxAge?: Maybe<Scalars['Int']>;
  scope?: Maybe<CacheControlScope>;
};

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geo?: Resolver<Maybe<ResolversTypes['Geo']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suite?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AlbumResolvers<ContextType = any, ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  photos?: Resolver<Maybe<ResolversTypes['PhotosPage']>, ParentType, ContextType, Partial<AlbumPhotosArgs>>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AlbumsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['AlbumsPage'] = ResolversParentTypes['AlbumsPage']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Album']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['PaginationLinks']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['PageMetadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentsPage'] = ResolversParentTypes['CommentsPage']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['PaginationLinks']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['PageMetadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = {
  bs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  catchPhrase?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Geo'] = ResolversParentTypes['Geo']> = {
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createAlbum?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType, RequireFields<MutationCreateAlbumArgs, 'input'>>;
  createComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<MutationCreateCommentArgs, 'input'>>;
  createPhoto?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType, RequireFields<MutationCreatePhotoArgs, 'input'>>;
  createPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'input'>>;
  createTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<MutationCreateTodoArgs, 'input'>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  deleteAlbum?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteAlbumArgs, 'id'>>;
  deleteComment?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteCommentArgs, 'id'>>;
  deletePhoto?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeletePhotoArgs, 'id'>>;
  deletePost?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeletePostArgs, 'id'>>;
  deleteTodo?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteTodoArgs, 'id'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  updateAlbum?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType, RequireFields<MutationUpdateAlbumArgs, 'id' | 'input'>>;
  updateComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<MutationUpdateCommentArgs, 'id' | 'input'>>;
  updatePhoto?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType, RequireFields<MutationUpdatePhotoArgs, 'id' | 'input'>>;
  updatePost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationUpdatePostArgs, 'id' | 'input'>>;
  updateTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<MutationUpdateTodoArgs, 'id' | 'input'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id' | 'input'>>;
};

export type PageLimitPairResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageLimitPair'] = ResolversParentTypes['PageLimitPair']> = {
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageMetadata'] = ResolversParentTypes['PageMetadata']> = {
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginationLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginationLinks'] = ResolversParentTypes['PaginationLinks']> = {
  first?: Resolver<Maybe<ResolversTypes['PageLimitPair']>, ParentType, ContextType>;
  last?: Resolver<Maybe<ResolversTypes['PageLimitPair']>, ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['PageLimitPair']>, ParentType, ContextType>;
  prev?: Resolver<Maybe<ResolversTypes['PageLimitPair']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PhotoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Photo'] = ResolversParentTypes['Photo']> = {
  album?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  thumbnailUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PhotosPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['PhotosPage'] = ResolversParentTypes['PhotosPage']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Photo']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['PaginationLinks']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['PageMetadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<ResolversTypes['CommentsPage']>, ParentType, ContextType, Partial<PostCommentsArgs>>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostsPage'] = ResolversParentTypes['PostsPage']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['PaginationLinks']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['PageMetadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  album?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType, RequireFields<QueryAlbumArgs, 'id'>>;
  albums?: Resolver<Maybe<ResolversTypes['AlbumsPage']>, ParentType, ContextType, Partial<QueryAlbumsArgs>>;
  comment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<QueryCommentArgs, 'id'>>;
  comments?: Resolver<Maybe<ResolversTypes['CommentsPage']>, ParentType, ContextType, Partial<QueryCommentsArgs>>;
  photo?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType, RequireFields<QueryPhotoArgs, 'id'>>;
  photos?: Resolver<Maybe<ResolversTypes['PhotosPage']>, ParentType, ContextType, Partial<QueryPhotosArgs>>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryPostArgs, 'id'>>;
  posts?: Resolver<Maybe<ResolversTypes['PostsPage']>, ParentType, ContextType, Partial<QueryPostsArgs>>;
  todo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<QueryTodoArgs, 'id'>>;
  todos?: Resolver<Maybe<ResolversTypes['TodosPage']>, ParentType, ContextType, Partial<QueryTodosArgs>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<ResolversTypes['UsersPage']>, ParentType, ContextType, Partial<QueryUsersArgs>>;
};

export type TodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = {
  completed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodosPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodosPage'] = ResolversParentTypes['TodosPage']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Todo']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['PaginationLinks']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['PageMetadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  albums?: Resolver<Maybe<ResolversTypes['AlbumsPage']>, ParentType, ContextType, Partial<UserAlbumsArgs>>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  posts?: Resolver<Maybe<ResolversTypes['PostsPage']>, ParentType, ContextType, Partial<UserPostsArgs>>;
  todos?: Resolver<Maybe<ResolversTypes['TodosPage']>, ParentType, ContextType, Partial<UserTodosArgs>>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPage'] = ResolversParentTypes['UsersPage']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['PaginationLinks']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['PageMetadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Address?: AddressResolvers<ContextType>;
  Album?: AlbumResolvers<ContextType>;
  AlbumsPage?: AlbumsPageResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  CommentsPage?: CommentsPageResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  Geo?: GeoResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PageLimitPair?: PageLimitPairResolvers<ContextType>;
  PageMetadata?: PageMetadataResolvers<ContextType>;
  PaginationLinks?: PaginationLinksResolvers<ContextType>;
  Photo?: PhotoResolvers<ContextType>;
  PhotosPage?: PhotosPageResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostsPage?: PostsPageResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
  TodosPage?: TodosPageResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UsersPage?: UsersPageResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};
