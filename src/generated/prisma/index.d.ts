
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model inventario
 * 
 */
export type inventario = $Result.DefaultSelection<Prisma.$inventarioPayload>
/**
 * Model lista_compras
 * 
 */
export type lista_compras = $Result.DefaultSelection<Prisma.$lista_comprasPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Inventarios
 * const inventarios = await prisma.inventario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Inventarios
   * const inventarios = await prisma.inventario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.inventario`: Exposes CRUD operations for the **inventario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventarios
    * const inventarios = await prisma.inventario.findMany()
    * ```
    */
  get inventario(): Prisma.inventarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lista_compras`: Exposes CRUD operations for the **lista_compras** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lista_compras
    * const lista_compras = await prisma.lista_compras.findMany()
    * ```
    */
  get lista_compras(): Prisma.lista_comprasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    inventario: 'inventario',
    lista_compras: 'lista_compras',
    usuarios: 'usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "inventario" | "lista_compras" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      inventario: {
        payload: Prisma.$inventarioPayload<ExtArgs>
        fields: Prisma.inventarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inventarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inventarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventarioPayload>
          }
          findFirst: {
            args: Prisma.inventarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inventarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventarioPayload>
          }
          findMany: {
            args: Prisma.inventarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventarioPayload>[]
          }
          create: {
            args: Prisma.inventarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventarioPayload>
          }
          createMany: {
            args: Prisma.inventarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.inventarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventarioPayload>[]
          }
          delete: {
            args: Prisma.inventarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventarioPayload>
          }
          update: {
            args: Prisma.inventarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventarioPayload>
          }
          deleteMany: {
            args: Prisma.inventarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inventarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.inventarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventarioPayload>[]
          }
          upsert: {
            args: Prisma.inventarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventarioPayload>
          }
          aggregate: {
            args: Prisma.InventarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventario>
          }
          groupBy: {
            args: Prisma.inventarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.inventarioCountArgs<ExtArgs>
            result: $Utils.Optional<InventarioCountAggregateOutputType> | number
          }
        }
      }
      lista_compras: {
        payload: Prisma.$lista_comprasPayload<ExtArgs>
        fields: Prisma.lista_comprasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lista_comprasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lista_comprasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lista_comprasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lista_comprasPayload>
          }
          findFirst: {
            args: Prisma.lista_comprasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lista_comprasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lista_comprasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lista_comprasPayload>
          }
          findMany: {
            args: Prisma.lista_comprasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lista_comprasPayload>[]
          }
          create: {
            args: Prisma.lista_comprasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lista_comprasPayload>
          }
          createMany: {
            args: Prisma.lista_comprasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.lista_comprasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lista_comprasPayload>[]
          }
          delete: {
            args: Prisma.lista_comprasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lista_comprasPayload>
          }
          update: {
            args: Prisma.lista_comprasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lista_comprasPayload>
          }
          deleteMany: {
            args: Prisma.lista_comprasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lista_comprasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.lista_comprasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lista_comprasPayload>[]
          }
          upsert: {
            args: Prisma.lista_comprasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lista_comprasPayload>
          }
          aggregate: {
            args: Prisma.Lista_comprasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLista_compras>
          }
          groupBy: {
            args: Prisma.lista_comprasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Lista_comprasGroupByOutputType>[]
          }
          count: {
            args: Prisma.lista_comprasCountArgs<ExtArgs>
            result: $Utils.Optional<Lista_comprasCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    inventario?: inventarioOmit
    lista_compras?: lista_comprasOmit
    usuarios?: usuariosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type InventarioCountOutputType
   */

  export type InventarioCountOutputType = {
    lista_compras: number
  }

  export type InventarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lista_compras?: boolean | InventarioCountOutputTypeCountLista_comprasArgs
  }

  // Custom InputTypes
  /**
   * InventarioCountOutputType without action
   */
  export type InventarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventarioCountOutputType
     */
    select?: InventarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventarioCountOutputType without action
   */
  export type InventarioCountOutputTypeCountLista_comprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lista_comprasWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    inventario: number
    lista_compras: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventario?: boolean | UsuariosCountOutputTypeCountInventarioArgs
    lista_compras?: boolean | UsuariosCountOutputTypeCountLista_comprasArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountInventarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventarioWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountLista_comprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lista_comprasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model inventario
   */

  export type AggregateInventario = {
    _count: InventarioCountAggregateOutputType | null
    _avg: InventarioAvgAggregateOutputType | null
    _sum: InventarioSumAggregateOutputType | null
    _min: InventarioMinAggregateOutputType | null
    _max: InventarioMaxAggregateOutputType | null
  }

  export type InventarioAvgAggregateOutputType = {
    id: number | null
    cantidad_actual: number | null
    cantidad_minima: number | null
    usuario_id: number | null
  }

  export type InventarioSumAggregateOutputType = {
    id: number | null
    cantidad_actual: number | null
    cantidad_minima: number | null
    usuario_id: number | null
  }

  export type InventarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    cantidad_actual: number | null
    cantidad_minima: number | null
    usuario_id: number | null
  }

  export type InventarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    cantidad_actual: number | null
    cantidad_minima: number | null
    usuario_id: number | null
  }

  export type InventarioCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    cantidad_actual: number
    cantidad_minima: number
    usuario_id: number
    _all: number
  }


  export type InventarioAvgAggregateInputType = {
    id?: true
    cantidad_actual?: true
    cantidad_minima?: true
    usuario_id?: true
  }

  export type InventarioSumAggregateInputType = {
    id?: true
    cantidad_actual?: true
    cantidad_minima?: true
    usuario_id?: true
  }

  export type InventarioMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    cantidad_actual?: true
    cantidad_minima?: true
    usuario_id?: true
  }

  export type InventarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    cantidad_actual?: true
    cantidad_minima?: true
    usuario_id?: true
  }

  export type InventarioCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    cantidad_actual?: true
    cantidad_minima?: true
    usuario_id?: true
    _all?: true
  }

  export type InventarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventario to aggregate.
     */
    where?: inventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventarios to fetch.
     */
    orderBy?: inventarioOrderByWithRelationInput | inventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inventarios
    **/
    _count?: true | InventarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventarioMaxAggregateInputType
  }

  export type GetInventarioAggregateType<T extends InventarioAggregateArgs> = {
        [P in keyof T & keyof AggregateInventario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventario[P]>
      : GetScalarType<T[P], AggregateInventario[P]>
  }




  export type inventarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventarioWhereInput
    orderBy?: inventarioOrderByWithAggregationInput | inventarioOrderByWithAggregationInput[]
    by: InventarioScalarFieldEnum[] | InventarioScalarFieldEnum
    having?: inventarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventarioCountAggregateInputType | true
    _avg?: InventarioAvgAggregateInputType
    _sum?: InventarioSumAggregateInputType
    _min?: InventarioMinAggregateInputType
    _max?: InventarioMaxAggregateInputType
  }

  export type InventarioGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    cantidad_actual: number
    cantidad_minima: number
    usuario_id: number | null
    _count: InventarioCountAggregateOutputType | null
    _avg: InventarioAvgAggregateOutputType | null
    _sum: InventarioSumAggregateOutputType | null
    _min: InventarioMinAggregateOutputType | null
    _max: InventarioMaxAggregateOutputType | null
  }

  type GetInventarioGroupByPayload<T extends inventarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventarioGroupByOutputType[P]>
            : GetScalarType<T[P], InventarioGroupByOutputType[P]>
        }
      >
    >


  export type inventarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    cantidad_actual?: boolean
    cantidad_minima?: boolean
    usuario_id?: boolean
    usuarios?: boolean | inventario$usuariosArgs<ExtArgs>
    lista_compras?: boolean | inventario$lista_comprasArgs<ExtArgs>
    _count?: boolean | InventarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventario"]>

  export type inventarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    cantidad_actual?: boolean
    cantidad_minima?: boolean
    usuario_id?: boolean
    usuarios?: boolean | inventario$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["inventario"]>

  export type inventarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    cantidad_actual?: boolean
    cantidad_minima?: boolean
    usuario_id?: boolean
    usuarios?: boolean | inventario$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["inventario"]>

  export type inventarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    cantidad_actual?: boolean
    cantidad_minima?: boolean
    usuario_id?: boolean
  }

  export type inventarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "cantidad_actual" | "cantidad_minima" | "usuario_id", ExtArgs["result"]["inventario"]>
  export type inventarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | inventario$usuariosArgs<ExtArgs>
    lista_compras?: boolean | inventario$lista_comprasArgs<ExtArgs>
    _count?: boolean | InventarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type inventarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | inventario$usuariosArgs<ExtArgs>
  }
  export type inventarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | inventario$usuariosArgs<ExtArgs>
  }

  export type $inventarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inventario"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs> | null
      lista_compras: Prisma.$lista_comprasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
      cantidad_actual: number
      cantidad_minima: number
      usuario_id: number | null
    }, ExtArgs["result"]["inventario"]>
    composites: {}
  }

  type inventarioGetPayload<S extends boolean | null | undefined | inventarioDefaultArgs> = $Result.GetResult<Prisma.$inventarioPayload, S>

  type inventarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inventarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventarioCountAggregateInputType | true
    }

  export interface inventarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventario'], meta: { name: 'inventario' } }
    /**
     * Find zero or one Inventario that matches the filter.
     * @param {inventarioFindUniqueArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inventarioFindUniqueArgs>(args: SelectSubset<T, inventarioFindUniqueArgs<ExtArgs>>): Prisma__inventarioClient<$Result.GetResult<Prisma.$inventarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inventarioFindUniqueOrThrowArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inventarioFindUniqueOrThrowArgs>(args: SelectSubset<T, inventarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inventarioClient<$Result.GetResult<Prisma.$inventarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventarioFindFirstArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inventarioFindFirstArgs>(args?: SelectSubset<T, inventarioFindFirstArgs<ExtArgs>>): Prisma__inventarioClient<$Result.GetResult<Prisma.$inventarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventarioFindFirstOrThrowArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inventarioFindFirstOrThrowArgs>(args?: SelectSubset<T, inventarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__inventarioClient<$Result.GetResult<Prisma.$inventarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventarios
     * const inventarios = await prisma.inventario.findMany()
     * 
     * // Get first 10 Inventarios
     * const inventarios = await prisma.inventario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventarioWithIdOnly = await prisma.inventario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends inventarioFindManyArgs>(args?: SelectSubset<T, inventarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventario.
     * @param {inventarioCreateArgs} args - Arguments to create a Inventario.
     * @example
     * // Create one Inventario
     * const Inventario = await prisma.inventario.create({
     *   data: {
     *     // ... data to create a Inventario
     *   }
     * })
     * 
     */
    create<T extends inventarioCreateArgs>(args: SelectSubset<T, inventarioCreateArgs<ExtArgs>>): Prisma__inventarioClient<$Result.GetResult<Prisma.$inventarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventarios.
     * @param {inventarioCreateManyArgs} args - Arguments to create many Inventarios.
     * @example
     * // Create many Inventarios
     * const inventario = await prisma.inventario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inventarioCreateManyArgs>(args?: SelectSubset<T, inventarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventarios and returns the data saved in the database.
     * @param {inventarioCreateManyAndReturnArgs} args - Arguments to create many Inventarios.
     * @example
     * // Create many Inventarios
     * const inventario = await prisma.inventario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventarios and only return the `id`
     * const inventarioWithIdOnly = await prisma.inventario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends inventarioCreateManyAndReturnArgs>(args?: SelectSubset<T, inventarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventario.
     * @param {inventarioDeleteArgs} args - Arguments to delete one Inventario.
     * @example
     * // Delete one Inventario
     * const Inventario = await prisma.inventario.delete({
     *   where: {
     *     // ... filter to delete one Inventario
     *   }
     * })
     * 
     */
    delete<T extends inventarioDeleteArgs>(args: SelectSubset<T, inventarioDeleteArgs<ExtArgs>>): Prisma__inventarioClient<$Result.GetResult<Prisma.$inventarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventario.
     * @param {inventarioUpdateArgs} args - Arguments to update one Inventario.
     * @example
     * // Update one Inventario
     * const inventario = await prisma.inventario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inventarioUpdateArgs>(args: SelectSubset<T, inventarioUpdateArgs<ExtArgs>>): Prisma__inventarioClient<$Result.GetResult<Prisma.$inventarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventarios.
     * @param {inventarioDeleteManyArgs} args - Arguments to filter Inventarios to delete.
     * @example
     * // Delete a few Inventarios
     * const { count } = await prisma.inventario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inventarioDeleteManyArgs>(args?: SelectSubset<T, inventarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventarios
     * const inventario = await prisma.inventario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inventarioUpdateManyArgs>(args: SelectSubset<T, inventarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventarios and returns the data updated in the database.
     * @param {inventarioUpdateManyAndReturnArgs} args - Arguments to update many Inventarios.
     * @example
     * // Update many Inventarios
     * const inventario = await prisma.inventario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventarios and only return the `id`
     * const inventarioWithIdOnly = await prisma.inventario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends inventarioUpdateManyAndReturnArgs>(args: SelectSubset<T, inventarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventario.
     * @param {inventarioUpsertArgs} args - Arguments to update or create a Inventario.
     * @example
     * // Update or create a Inventario
     * const inventario = await prisma.inventario.upsert({
     *   create: {
     *     // ... data to create a Inventario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventario we want to update
     *   }
     * })
     */
    upsert<T extends inventarioUpsertArgs>(args: SelectSubset<T, inventarioUpsertArgs<ExtArgs>>): Prisma__inventarioClient<$Result.GetResult<Prisma.$inventarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventarioCountArgs} args - Arguments to filter Inventarios to count.
     * @example
     * // Count the number of Inventarios
     * const count = await prisma.inventario.count({
     *   where: {
     *     // ... the filter for the Inventarios we want to count
     *   }
     * })
    **/
    count<T extends inventarioCountArgs>(
      args?: Subset<T, inventarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventarioAggregateArgs>(args: Subset<T, InventarioAggregateArgs>): Prisma.PrismaPromise<GetInventarioAggregateType<T>>

    /**
     * Group by Inventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends inventarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventarioGroupByArgs['orderBy'] }
        : { orderBy?: inventarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, inventarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inventario model
   */
  readonly fields: inventarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends inventario$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, inventario$usuariosArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lista_compras<T extends inventario$lista_comprasArgs<ExtArgs> = {}>(args?: Subset<T, inventario$lista_comprasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lista_comprasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the inventario model
   */
  interface inventarioFieldRefs {
    readonly id: FieldRef<"inventario", 'Int'>
    readonly nombre: FieldRef<"inventario", 'String'>
    readonly descripcion: FieldRef<"inventario", 'String'>
    readonly cantidad_actual: FieldRef<"inventario", 'Int'>
    readonly cantidad_minima: FieldRef<"inventario", 'Int'>
    readonly usuario_id: FieldRef<"inventario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * inventario findUnique
   */
  export type inventarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario
     */
    select?: inventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario
     */
    omit?: inventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventarioInclude<ExtArgs> | null
    /**
     * Filter, which inventario to fetch.
     */
    where: inventarioWhereUniqueInput
  }

  /**
   * inventario findUniqueOrThrow
   */
  export type inventarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario
     */
    select?: inventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario
     */
    omit?: inventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventarioInclude<ExtArgs> | null
    /**
     * Filter, which inventario to fetch.
     */
    where: inventarioWhereUniqueInput
  }

  /**
   * inventario findFirst
   */
  export type inventarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario
     */
    select?: inventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario
     */
    omit?: inventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventarioInclude<ExtArgs> | null
    /**
     * Filter, which inventario to fetch.
     */
    where?: inventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventarios to fetch.
     */
    orderBy?: inventarioOrderByWithRelationInput | inventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventarios.
     */
    cursor?: inventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventarios.
     */
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * inventario findFirstOrThrow
   */
  export type inventarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario
     */
    select?: inventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario
     */
    omit?: inventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventarioInclude<ExtArgs> | null
    /**
     * Filter, which inventario to fetch.
     */
    where?: inventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventarios to fetch.
     */
    orderBy?: inventarioOrderByWithRelationInput | inventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventarios.
     */
    cursor?: inventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventarios.
     */
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * inventario findMany
   */
  export type inventarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario
     */
    select?: inventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario
     */
    omit?: inventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventarioInclude<ExtArgs> | null
    /**
     * Filter, which inventarios to fetch.
     */
    where?: inventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventarios to fetch.
     */
    orderBy?: inventarioOrderByWithRelationInput | inventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inventarios.
     */
    cursor?: inventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventarios.
     */
    skip?: number
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * inventario create
   */
  export type inventarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario
     */
    select?: inventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario
     */
    omit?: inventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventarioInclude<ExtArgs> | null
    /**
     * The data needed to create a inventario.
     */
    data: XOR<inventarioCreateInput, inventarioUncheckedCreateInput>
  }

  /**
   * inventario createMany
   */
  export type inventarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventarios.
     */
    data: inventarioCreateManyInput | inventarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inventario createManyAndReturn
   */
  export type inventarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario
     */
    select?: inventarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inventario
     */
    omit?: inventarioOmit<ExtArgs> | null
    /**
     * The data used to create many inventarios.
     */
    data: inventarioCreateManyInput | inventarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * inventario update
   */
  export type inventarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario
     */
    select?: inventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario
     */
    omit?: inventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventarioInclude<ExtArgs> | null
    /**
     * The data needed to update a inventario.
     */
    data: XOR<inventarioUpdateInput, inventarioUncheckedUpdateInput>
    /**
     * Choose, which inventario to update.
     */
    where: inventarioWhereUniqueInput
  }

  /**
   * inventario updateMany
   */
  export type inventarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventarios.
     */
    data: XOR<inventarioUpdateManyMutationInput, inventarioUncheckedUpdateManyInput>
    /**
     * Filter which inventarios to update
     */
    where?: inventarioWhereInput
    /**
     * Limit how many inventarios to update.
     */
    limit?: number
  }

  /**
   * inventario updateManyAndReturn
   */
  export type inventarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario
     */
    select?: inventarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inventario
     */
    omit?: inventarioOmit<ExtArgs> | null
    /**
     * The data used to update inventarios.
     */
    data: XOR<inventarioUpdateManyMutationInput, inventarioUncheckedUpdateManyInput>
    /**
     * Filter which inventarios to update
     */
    where?: inventarioWhereInput
    /**
     * Limit how many inventarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * inventario upsert
   */
  export type inventarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario
     */
    select?: inventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario
     */
    omit?: inventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventarioInclude<ExtArgs> | null
    /**
     * The filter to search for the inventario to update in case it exists.
     */
    where: inventarioWhereUniqueInput
    /**
     * In case the inventario found by the `where` argument doesn't exist, create a new inventario with this data.
     */
    create: XOR<inventarioCreateInput, inventarioUncheckedCreateInput>
    /**
     * In case the inventario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventarioUpdateInput, inventarioUncheckedUpdateInput>
  }

  /**
   * inventario delete
   */
  export type inventarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario
     */
    select?: inventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario
     */
    omit?: inventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventarioInclude<ExtArgs> | null
    /**
     * Filter which inventario to delete.
     */
    where: inventarioWhereUniqueInput
  }

  /**
   * inventario deleteMany
   */
  export type inventarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventarios to delete
     */
    where?: inventarioWhereInput
    /**
     * Limit how many inventarios to delete.
     */
    limit?: number
  }

  /**
   * inventario.usuarios
   */
  export type inventario$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
  }

  /**
   * inventario.lista_compras
   */
  export type inventario$lista_comprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lista_compras
     */
    select?: lista_comprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lista_compras
     */
    omit?: lista_comprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lista_comprasInclude<ExtArgs> | null
    where?: lista_comprasWhereInput
    orderBy?: lista_comprasOrderByWithRelationInput | lista_comprasOrderByWithRelationInput[]
    cursor?: lista_comprasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Lista_comprasScalarFieldEnum | Lista_comprasScalarFieldEnum[]
  }

  /**
   * inventario without action
   */
  export type inventarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario
     */
    select?: inventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario
     */
    omit?: inventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventarioInclude<ExtArgs> | null
  }


  /**
   * Model lista_compras
   */

  export type AggregateLista_compras = {
    _count: Lista_comprasCountAggregateOutputType | null
    _avg: Lista_comprasAvgAggregateOutputType | null
    _sum: Lista_comprasSumAggregateOutputType | null
    _min: Lista_comprasMinAggregateOutputType | null
    _max: Lista_comprasMaxAggregateOutputType | null
  }

  export type Lista_comprasAvgAggregateOutputType = {
    id: number | null
    producto_id: number | null
    cantidad: number | null
    usuario_id: number | null
  }

  export type Lista_comprasSumAggregateOutputType = {
    id: number | null
    producto_id: number | null
    cantidad: number | null
    usuario_id: number | null
  }

  export type Lista_comprasMinAggregateOutputType = {
    id: number | null
    producto_id: number | null
    nombre: string | null
    cantidad: number | null
    fecha_agregado: Date | null
    usuario_id: number | null
    comprado: boolean | null
  }

  export type Lista_comprasMaxAggregateOutputType = {
    id: number | null
    producto_id: number | null
    nombre: string | null
    cantidad: number | null
    fecha_agregado: Date | null
    usuario_id: number | null
    comprado: boolean | null
  }

  export type Lista_comprasCountAggregateOutputType = {
    id: number
    producto_id: number
    nombre: number
    cantidad: number
    fecha_agregado: number
    usuario_id: number
    comprado: number
    _all: number
  }


  export type Lista_comprasAvgAggregateInputType = {
    id?: true
    producto_id?: true
    cantidad?: true
    usuario_id?: true
  }

  export type Lista_comprasSumAggregateInputType = {
    id?: true
    producto_id?: true
    cantidad?: true
    usuario_id?: true
  }

  export type Lista_comprasMinAggregateInputType = {
    id?: true
    producto_id?: true
    nombre?: true
    cantidad?: true
    fecha_agregado?: true
    usuario_id?: true
    comprado?: true
  }

  export type Lista_comprasMaxAggregateInputType = {
    id?: true
    producto_id?: true
    nombre?: true
    cantidad?: true
    fecha_agregado?: true
    usuario_id?: true
    comprado?: true
  }

  export type Lista_comprasCountAggregateInputType = {
    id?: true
    producto_id?: true
    nombre?: true
    cantidad?: true
    fecha_agregado?: true
    usuario_id?: true
    comprado?: true
    _all?: true
  }

  export type Lista_comprasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lista_compras to aggregate.
     */
    where?: lista_comprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lista_compras to fetch.
     */
    orderBy?: lista_comprasOrderByWithRelationInput | lista_comprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lista_comprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lista_compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lista_compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lista_compras
    **/
    _count?: true | Lista_comprasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Lista_comprasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Lista_comprasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Lista_comprasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Lista_comprasMaxAggregateInputType
  }

  export type GetLista_comprasAggregateType<T extends Lista_comprasAggregateArgs> = {
        [P in keyof T & keyof AggregateLista_compras]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLista_compras[P]>
      : GetScalarType<T[P], AggregateLista_compras[P]>
  }




  export type lista_comprasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lista_comprasWhereInput
    orderBy?: lista_comprasOrderByWithAggregationInput | lista_comprasOrderByWithAggregationInput[]
    by: Lista_comprasScalarFieldEnum[] | Lista_comprasScalarFieldEnum
    having?: lista_comprasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Lista_comprasCountAggregateInputType | true
    _avg?: Lista_comprasAvgAggregateInputType
    _sum?: Lista_comprasSumAggregateInputType
    _min?: Lista_comprasMinAggregateInputType
    _max?: Lista_comprasMaxAggregateInputType
  }

  export type Lista_comprasGroupByOutputType = {
    id: number
    producto_id: number | null
    nombre: string
    cantidad: number
    fecha_agregado: Date | null
    usuario_id: number | null
    comprado: boolean | null
    _count: Lista_comprasCountAggregateOutputType | null
    _avg: Lista_comprasAvgAggregateOutputType | null
    _sum: Lista_comprasSumAggregateOutputType | null
    _min: Lista_comprasMinAggregateOutputType | null
    _max: Lista_comprasMaxAggregateOutputType | null
  }

  type GetLista_comprasGroupByPayload<T extends lista_comprasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Lista_comprasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Lista_comprasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Lista_comprasGroupByOutputType[P]>
            : GetScalarType<T[P], Lista_comprasGroupByOutputType[P]>
        }
      >
    >


  export type lista_comprasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    producto_id?: boolean
    nombre?: boolean
    cantidad?: boolean
    fecha_agregado?: boolean
    usuario_id?: boolean
    comprado?: boolean
    usuarios?: boolean | lista_compras$usuariosArgs<ExtArgs>
    inventario?: boolean | lista_compras$inventarioArgs<ExtArgs>
  }, ExtArgs["result"]["lista_compras"]>

  export type lista_comprasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    producto_id?: boolean
    nombre?: boolean
    cantidad?: boolean
    fecha_agregado?: boolean
    usuario_id?: boolean
    comprado?: boolean
    usuarios?: boolean | lista_compras$usuariosArgs<ExtArgs>
    inventario?: boolean | lista_compras$inventarioArgs<ExtArgs>
  }, ExtArgs["result"]["lista_compras"]>

  export type lista_comprasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    producto_id?: boolean
    nombre?: boolean
    cantidad?: boolean
    fecha_agregado?: boolean
    usuario_id?: boolean
    comprado?: boolean
    usuarios?: boolean | lista_compras$usuariosArgs<ExtArgs>
    inventario?: boolean | lista_compras$inventarioArgs<ExtArgs>
  }, ExtArgs["result"]["lista_compras"]>

  export type lista_comprasSelectScalar = {
    id?: boolean
    producto_id?: boolean
    nombre?: boolean
    cantidad?: boolean
    fecha_agregado?: boolean
    usuario_id?: boolean
    comprado?: boolean
  }

  export type lista_comprasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "producto_id" | "nombre" | "cantidad" | "fecha_agregado" | "usuario_id" | "comprado", ExtArgs["result"]["lista_compras"]>
  export type lista_comprasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | lista_compras$usuariosArgs<ExtArgs>
    inventario?: boolean | lista_compras$inventarioArgs<ExtArgs>
  }
  export type lista_comprasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | lista_compras$usuariosArgs<ExtArgs>
    inventario?: boolean | lista_compras$inventarioArgs<ExtArgs>
  }
  export type lista_comprasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | lista_compras$usuariosArgs<ExtArgs>
    inventario?: boolean | lista_compras$inventarioArgs<ExtArgs>
  }

  export type $lista_comprasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lista_compras"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs> | null
      inventario: Prisma.$inventarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      producto_id: number | null
      nombre: string
      cantidad: number
      fecha_agregado: Date | null
      usuario_id: number | null
      comprado: boolean | null
    }, ExtArgs["result"]["lista_compras"]>
    composites: {}
  }

  type lista_comprasGetPayload<S extends boolean | null | undefined | lista_comprasDefaultArgs> = $Result.GetResult<Prisma.$lista_comprasPayload, S>

  type lista_comprasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lista_comprasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Lista_comprasCountAggregateInputType | true
    }

  export interface lista_comprasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lista_compras'], meta: { name: 'lista_compras' } }
    /**
     * Find zero or one Lista_compras that matches the filter.
     * @param {lista_comprasFindUniqueArgs} args - Arguments to find a Lista_compras
     * @example
     * // Get one Lista_compras
     * const lista_compras = await prisma.lista_compras.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lista_comprasFindUniqueArgs>(args: SelectSubset<T, lista_comprasFindUniqueArgs<ExtArgs>>): Prisma__lista_comprasClient<$Result.GetResult<Prisma.$lista_comprasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lista_compras that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lista_comprasFindUniqueOrThrowArgs} args - Arguments to find a Lista_compras
     * @example
     * // Get one Lista_compras
     * const lista_compras = await prisma.lista_compras.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lista_comprasFindUniqueOrThrowArgs>(args: SelectSubset<T, lista_comprasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lista_comprasClient<$Result.GetResult<Prisma.$lista_comprasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lista_compras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lista_comprasFindFirstArgs} args - Arguments to find a Lista_compras
     * @example
     * // Get one Lista_compras
     * const lista_compras = await prisma.lista_compras.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lista_comprasFindFirstArgs>(args?: SelectSubset<T, lista_comprasFindFirstArgs<ExtArgs>>): Prisma__lista_comprasClient<$Result.GetResult<Prisma.$lista_comprasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lista_compras that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lista_comprasFindFirstOrThrowArgs} args - Arguments to find a Lista_compras
     * @example
     * // Get one Lista_compras
     * const lista_compras = await prisma.lista_compras.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lista_comprasFindFirstOrThrowArgs>(args?: SelectSubset<T, lista_comprasFindFirstOrThrowArgs<ExtArgs>>): Prisma__lista_comprasClient<$Result.GetResult<Prisma.$lista_comprasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lista_compras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lista_comprasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lista_compras
     * const lista_compras = await prisma.lista_compras.findMany()
     * 
     * // Get first 10 Lista_compras
     * const lista_compras = await prisma.lista_compras.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lista_comprasWithIdOnly = await prisma.lista_compras.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends lista_comprasFindManyArgs>(args?: SelectSubset<T, lista_comprasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lista_comprasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lista_compras.
     * @param {lista_comprasCreateArgs} args - Arguments to create a Lista_compras.
     * @example
     * // Create one Lista_compras
     * const Lista_compras = await prisma.lista_compras.create({
     *   data: {
     *     // ... data to create a Lista_compras
     *   }
     * })
     * 
     */
    create<T extends lista_comprasCreateArgs>(args: SelectSubset<T, lista_comprasCreateArgs<ExtArgs>>): Prisma__lista_comprasClient<$Result.GetResult<Prisma.$lista_comprasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lista_compras.
     * @param {lista_comprasCreateManyArgs} args - Arguments to create many Lista_compras.
     * @example
     * // Create many Lista_compras
     * const lista_compras = await prisma.lista_compras.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lista_comprasCreateManyArgs>(args?: SelectSubset<T, lista_comprasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lista_compras and returns the data saved in the database.
     * @param {lista_comprasCreateManyAndReturnArgs} args - Arguments to create many Lista_compras.
     * @example
     * // Create many Lista_compras
     * const lista_compras = await prisma.lista_compras.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lista_compras and only return the `id`
     * const lista_comprasWithIdOnly = await prisma.lista_compras.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends lista_comprasCreateManyAndReturnArgs>(args?: SelectSubset<T, lista_comprasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lista_comprasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lista_compras.
     * @param {lista_comprasDeleteArgs} args - Arguments to delete one Lista_compras.
     * @example
     * // Delete one Lista_compras
     * const Lista_compras = await prisma.lista_compras.delete({
     *   where: {
     *     // ... filter to delete one Lista_compras
     *   }
     * })
     * 
     */
    delete<T extends lista_comprasDeleteArgs>(args: SelectSubset<T, lista_comprasDeleteArgs<ExtArgs>>): Prisma__lista_comprasClient<$Result.GetResult<Prisma.$lista_comprasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lista_compras.
     * @param {lista_comprasUpdateArgs} args - Arguments to update one Lista_compras.
     * @example
     * // Update one Lista_compras
     * const lista_compras = await prisma.lista_compras.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lista_comprasUpdateArgs>(args: SelectSubset<T, lista_comprasUpdateArgs<ExtArgs>>): Prisma__lista_comprasClient<$Result.GetResult<Prisma.$lista_comprasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lista_compras.
     * @param {lista_comprasDeleteManyArgs} args - Arguments to filter Lista_compras to delete.
     * @example
     * // Delete a few Lista_compras
     * const { count } = await prisma.lista_compras.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lista_comprasDeleteManyArgs>(args?: SelectSubset<T, lista_comprasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lista_compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lista_comprasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lista_compras
     * const lista_compras = await prisma.lista_compras.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lista_comprasUpdateManyArgs>(args: SelectSubset<T, lista_comprasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lista_compras and returns the data updated in the database.
     * @param {lista_comprasUpdateManyAndReturnArgs} args - Arguments to update many Lista_compras.
     * @example
     * // Update many Lista_compras
     * const lista_compras = await prisma.lista_compras.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lista_compras and only return the `id`
     * const lista_comprasWithIdOnly = await prisma.lista_compras.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends lista_comprasUpdateManyAndReturnArgs>(args: SelectSubset<T, lista_comprasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lista_comprasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lista_compras.
     * @param {lista_comprasUpsertArgs} args - Arguments to update or create a Lista_compras.
     * @example
     * // Update or create a Lista_compras
     * const lista_compras = await prisma.lista_compras.upsert({
     *   create: {
     *     // ... data to create a Lista_compras
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lista_compras we want to update
     *   }
     * })
     */
    upsert<T extends lista_comprasUpsertArgs>(args: SelectSubset<T, lista_comprasUpsertArgs<ExtArgs>>): Prisma__lista_comprasClient<$Result.GetResult<Prisma.$lista_comprasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lista_compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lista_comprasCountArgs} args - Arguments to filter Lista_compras to count.
     * @example
     * // Count the number of Lista_compras
     * const count = await prisma.lista_compras.count({
     *   where: {
     *     // ... the filter for the Lista_compras we want to count
     *   }
     * })
    **/
    count<T extends lista_comprasCountArgs>(
      args?: Subset<T, lista_comprasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lista_comprasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lista_compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lista_comprasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Lista_comprasAggregateArgs>(args: Subset<T, Lista_comprasAggregateArgs>): Prisma.PrismaPromise<GetLista_comprasAggregateType<T>>

    /**
     * Group by Lista_compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lista_comprasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends lista_comprasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lista_comprasGroupByArgs['orderBy'] }
        : { orderBy?: lista_comprasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, lista_comprasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLista_comprasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lista_compras model
   */
  readonly fields: lista_comprasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lista_compras.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lista_comprasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends lista_compras$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, lista_compras$usuariosArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    inventario<T extends lista_compras$inventarioArgs<ExtArgs> = {}>(args?: Subset<T, lista_compras$inventarioArgs<ExtArgs>>): Prisma__inventarioClient<$Result.GetResult<Prisma.$inventarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the lista_compras model
   */
  interface lista_comprasFieldRefs {
    readonly id: FieldRef<"lista_compras", 'Int'>
    readonly producto_id: FieldRef<"lista_compras", 'Int'>
    readonly nombre: FieldRef<"lista_compras", 'String'>
    readonly cantidad: FieldRef<"lista_compras", 'Int'>
    readonly fecha_agregado: FieldRef<"lista_compras", 'DateTime'>
    readonly usuario_id: FieldRef<"lista_compras", 'Int'>
    readonly comprado: FieldRef<"lista_compras", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * lista_compras findUnique
   */
  export type lista_comprasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lista_compras
     */
    select?: lista_comprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lista_compras
     */
    omit?: lista_comprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lista_comprasInclude<ExtArgs> | null
    /**
     * Filter, which lista_compras to fetch.
     */
    where: lista_comprasWhereUniqueInput
  }

  /**
   * lista_compras findUniqueOrThrow
   */
  export type lista_comprasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lista_compras
     */
    select?: lista_comprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lista_compras
     */
    omit?: lista_comprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lista_comprasInclude<ExtArgs> | null
    /**
     * Filter, which lista_compras to fetch.
     */
    where: lista_comprasWhereUniqueInput
  }

  /**
   * lista_compras findFirst
   */
  export type lista_comprasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lista_compras
     */
    select?: lista_comprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lista_compras
     */
    omit?: lista_comprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lista_comprasInclude<ExtArgs> | null
    /**
     * Filter, which lista_compras to fetch.
     */
    where?: lista_comprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lista_compras to fetch.
     */
    orderBy?: lista_comprasOrderByWithRelationInput | lista_comprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lista_compras.
     */
    cursor?: lista_comprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lista_compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lista_compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lista_compras.
     */
    distinct?: Lista_comprasScalarFieldEnum | Lista_comprasScalarFieldEnum[]
  }

  /**
   * lista_compras findFirstOrThrow
   */
  export type lista_comprasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lista_compras
     */
    select?: lista_comprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lista_compras
     */
    omit?: lista_comprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lista_comprasInclude<ExtArgs> | null
    /**
     * Filter, which lista_compras to fetch.
     */
    where?: lista_comprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lista_compras to fetch.
     */
    orderBy?: lista_comprasOrderByWithRelationInput | lista_comprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lista_compras.
     */
    cursor?: lista_comprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lista_compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lista_compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lista_compras.
     */
    distinct?: Lista_comprasScalarFieldEnum | Lista_comprasScalarFieldEnum[]
  }

  /**
   * lista_compras findMany
   */
  export type lista_comprasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lista_compras
     */
    select?: lista_comprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lista_compras
     */
    omit?: lista_comprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lista_comprasInclude<ExtArgs> | null
    /**
     * Filter, which lista_compras to fetch.
     */
    where?: lista_comprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lista_compras to fetch.
     */
    orderBy?: lista_comprasOrderByWithRelationInput | lista_comprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lista_compras.
     */
    cursor?: lista_comprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lista_compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lista_compras.
     */
    skip?: number
    distinct?: Lista_comprasScalarFieldEnum | Lista_comprasScalarFieldEnum[]
  }

  /**
   * lista_compras create
   */
  export type lista_comprasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lista_compras
     */
    select?: lista_comprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lista_compras
     */
    omit?: lista_comprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lista_comprasInclude<ExtArgs> | null
    /**
     * The data needed to create a lista_compras.
     */
    data: XOR<lista_comprasCreateInput, lista_comprasUncheckedCreateInput>
  }

  /**
   * lista_compras createMany
   */
  export type lista_comprasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lista_compras.
     */
    data: lista_comprasCreateManyInput | lista_comprasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lista_compras createManyAndReturn
   */
  export type lista_comprasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lista_compras
     */
    select?: lista_comprasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lista_compras
     */
    omit?: lista_comprasOmit<ExtArgs> | null
    /**
     * The data used to create many lista_compras.
     */
    data: lista_comprasCreateManyInput | lista_comprasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lista_comprasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * lista_compras update
   */
  export type lista_comprasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lista_compras
     */
    select?: lista_comprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lista_compras
     */
    omit?: lista_comprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lista_comprasInclude<ExtArgs> | null
    /**
     * The data needed to update a lista_compras.
     */
    data: XOR<lista_comprasUpdateInput, lista_comprasUncheckedUpdateInput>
    /**
     * Choose, which lista_compras to update.
     */
    where: lista_comprasWhereUniqueInput
  }

  /**
   * lista_compras updateMany
   */
  export type lista_comprasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lista_compras.
     */
    data: XOR<lista_comprasUpdateManyMutationInput, lista_comprasUncheckedUpdateManyInput>
    /**
     * Filter which lista_compras to update
     */
    where?: lista_comprasWhereInput
    /**
     * Limit how many lista_compras to update.
     */
    limit?: number
  }

  /**
   * lista_compras updateManyAndReturn
   */
  export type lista_comprasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lista_compras
     */
    select?: lista_comprasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lista_compras
     */
    omit?: lista_comprasOmit<ExtArgs> | null
    /**
     * The data used to update lista_compras.
     */
    data: XOR<lista_comprasUpdateManyMutationInput, lista_comprasUncheckedUpdateManyInput>
    /**
     * Filter which lista_compras to update
     */
    where?: lista_comprasWhereInput
    /**
     * Limit how many lista_compras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lista_comprasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * lista_compras upsert
   */
  export type lista_comprasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lista_compras
     */
    select?: lista_comprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lista_compras
     */
    omit?: lista_comprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lista_comprasInclude<ExtArgs> | null
    /**
     * The filter to search for the lista_compras to update in case it exists.
     */
    where: lista_comprasWhereUniqueInput
    /**
     * In case the lista_compras found by the `where` argument doesn't exist, create a new lista_compras with this data.
     */
    create: XOR<lista_comprasCreateInput, lista_comprasUncheckedCreateInput>
    /**
     * In case the lista_compras was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lista_comprasUpdateInput, lista_comprasUncheckedUpdateInput>
  }

  /**
   * lista_compras delete
   */
  export type lista_comprasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lista_compras
     */
    select?: lista_comprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lista_compras
     */
    omit?: lista_comprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lista_comprasInclude<ExtArgs> | null
    /**
     * Filter which lista_compras to delete.
     */
    where: lista_comprasWhereUniqueInput
  }

  /**
   * lista_compras deleteMany
   */
  export type lista_comprasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lista_compras to delete
     */
    where?: lista_comprasWhereInput
    /**
     * Limit how many lista_compras to delete.
     */
    limit?: number
  }

  /**
   * lista_compras.usuarios
   */
  export type lista_compras$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
  }

  /**
   * lista_compras.inventario
   */
  export type lista_compras$inventarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario
     */
    select?: inventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario
     */
    omit?: inventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventarioInclude<ExtArgs> | null
    where?: inventarioWhereInput
  }

  /**
   * lista_compras without action
   */
  export type lista_comprasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lista_compras
     */
    select?: lista_comprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lista_compras
     */
    omit?: lista_comprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lista_comprasInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    contrase_a: string | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    contrase_a: string | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    contrase_a: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id?: true
  }

  export type UsuariosSumAggregateInputType = {
    id?: true
  }

  export type UsuariosMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    contrase_a?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    contrase_a?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    contrase_a?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: number
    nombre: string
    email: string | null
    contrase_a: string
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    contrase_a?: boolean
    inventario?: boolean | usuarios$inventarioArgs<ExtArgs>
    lista_compras?: boolean | usuarios$lista_comprasArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    contrase_a?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    contrase_a?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    contrase_a?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "contrase_a", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventario?: boolean | usuarios$inventarioArgs<ExtArgs>
    lista_compras?: boolean | usuarios$lista_comprasArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      inventario: Prisma.$inventarioPayload<ExtArgs>[]
      lista_compras: Prisma.$lista_comprasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string | null
      contrase_a: string
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventario<T extends usuarios$inventarioArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$inventarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lista_compras<T extends usuarios$lista_comprasArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$lista_comprasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lista_comprasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id: FieldRef<"usuarios", 'Int'>
    readonly nombre: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly contrase_a: FieldRef<"usuarios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios updateManyAndReturn
   */
  export type usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.inventario
   */
  export type usuarios$inventarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventario
     */
    select?: inventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventario
     */
    omit?: inventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventarioInclude<ExtArgs> | null
    where?: inventarioWhereInput
    orderBy?: inventarioOrderByWithRelationInput | inventarioOrderByWithRelationInput[]
    cursor?: inventarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * usuarios.lista_compras
   */
  export type usuarios$lista_comprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lista_compras
     */
    select?: lista_comprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lista_compras
     */
    omit?: lista_comprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lista_comprasInclude<ExtArgs> | null
    where?: lista_comprasWhereInput
    orderBy?: lista_comprasOrderByWithRelationInput | lista_comprasOrderByWithRelationInput[]
    cursor?: lista_comprasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Lista_comprasScalarFieldEnum | Lista_comprasScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const InventarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    cantidad_actual: 'cantidad_actual',
    cantidad_minima: 'cantidad_minima',
    usuario_id: 'usuario_id'
  };

  export type InventarioScalarFieldEnum = (typeof InventarioScalarFieldEnum)[keyof typeof InventarioScalarFieldEnum]


  export const Lista_comprasScalarFieldEnum: {
    id: 'id',
    producto_id: 'producto_id',
    nombre: 'nombre',
    cantidad: 'cantidad',
    fecha_agregado: 'fecha_agregado',
    usuario_id: 'usuario_id',
    comprado: 'comprado'
  };

  export type Lista_comprasScalarFieldEnum = (typeof Lista_comprasScalarFieldEnum)[keyof typeof Lista_comprasScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    contrase_a: 'contrase_a'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type inventarioWhereInput = {
    AND?: inventarioWhereInput | inventarioWhereInput[]
    OR?: inventarioWhereInput[]
    NOT?: inventarioWhereInput | inventarioWhereInput[]
    id?: IntFilter<"inventario"> | number
    nombre?: StringFilter<"inventario"> | string
    descripcion?: StringNullableFilter<"inventario"> | string | null
    cantidad_actual?: IntFilter<"inventario"> | number
    cantidad_minima?: IntFilter<"inventario"> | number
    usuario_id?: IntNullableFilter<"inventario"> | number | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
    lista_compras?: Lista_comprasListRelationFilter
  }

  export type inventarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    cantidad_actual?: SortOrder
    cantidad_minima?: SortOrder
    usuario_id?: SortOrderInput | SortOrder
    usuarios?: usuariosOrderByWithRelationInput
    lista_compras?: lista_comprasOrderByRelationAggregateInput
  }

  export type inventarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: inventarioWhereInput | inventarioWhereInput[]
    OR?: inventarioWhereInput[]
    NOT?: inventarioWhereInput | inventarioWhereInput[]
    nombre?: StringFilter<"inventario"> | string
    descripcion?: StringNullableFilter<"inventario"> | string | null
    cantidad_actual?: IntFilter<"inventario"> | number
    cantidad_minima?: IntFilter<"inventario"> | number
    usuario_id?: IntNullableFilter<"inventario"> | number | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
    lista_compras?: Lista_comprasListRelationFilter
  }, "id">

  export type inventarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    cantidad_actual?: SortOrder
    cantidad_minima?: SortOrder
    usuario_id?: SortOrderInput | SortOrder
    _count?: inventarioCountOrderByAggregateInput
    _avg?: inventarioAvgOrderByAggregateInput
    _max?: inventarioMaxOrderByAggregateInput
    _min?: inventarioMinOrderByAggregateInput
    _sum?: inventarioSumOrderByAggregateInput
  }

  export type inventarioScalarWhereWithAggregatesInput = {
    AND?: inventarioScalarWhereWithAggregatesInput | inventarioScalarWhereWithAggregatesInput[]
    OR?: inventarioScalarWhereWithAggregatesInput[]
    NOT?: inventarioScalarWhereWithAggregatesInput | inventarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"inventario"> | number
    nombre?: StringWithAggregatesFilter<"inventario"> | string
    descripcion?: StringNullableWithAggregatesFilter<"inventario"> | string | null
    cantidad_actual?: IntWithAggregatesFilter<"inventario"> | number
    cantidad_minima?: IntWithAggregatesFilter<"inventario"> | number
    usuario_id?: IntNullableWithAggregatesFilter<"inventario"> | number | null
  }

  export type lista_comprasWhereInput = {
    AND?: lista_comprasWhereInput | lista_comprasWhereInput[]
    OR?: lista_comprasWhereInput[]
    NOT?: lista_comprasWhereInput | lista_comprasWhereInput[]
    id?: IntFilter<"lista_compras"> | number
    producto_id?: IntNullableFilter<"lista_compras"> | number | null
    nombre?: StringFilter<"lista_compras"> | string
    cantidad?: IntFilter<"lista_compras"> | number
    fecha_agregado?: DateTimeNullableFilter<"lista_compras"> | Date | string | null
    usuario_id?: IntNullableFilter<"lista_compras"> | number | null
    comprado?: BoolNullableFilter<"lista_compras"> | boolean | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
    inventario?: XOR<InventarioNullableScalarRelationFilter, inventarioWhereInput> | null
  }

  export type lista_comprasOrderByWithRelationInput = {
    id?: SortOrder
    producto_id?: SortOrderInput | SortOrder
    nombre?: SortOrder
    cantidad?: SortOrder
    fecha_agregado?: SortOrderInput | SortOrder
    usuario_id?: SortOrderInput | SortOrder
    comprado?: SortOrderInput | SortOrder
    usuarios?: usuariosOrderByWithRelationInput
    inventario?: inventarioOrderByWithRelationInput
  }

  export type lista_comprasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: lista_comprasWhereInput | lista_comprasWhereInput[]
    OR?: lista_comprasWhereInput[]
    NOT?: lista_comprasWhereInput | lista_comprasWhereInput[]
    producto_id?: IntNullableFilter<"lista_compras"> | number | null
    nombre?: StringFilter<"lista_compras"> | string
    cantidad?: IntFilter<"lista_compras"> | number
    fecha_agregado?: DateTimeNullableFilter<"lista_compras"> | Date | string | null
    usuario_id?: IntNullableFilter<"lista_compras"> | number | null
    comprado?: BoolNullableFilter<"lista_compras"> | boolean | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
    inventario?: XOR<InventarioNullableScalarRelationFilter, inventarioWhereInput> | null
  }, "id">

  export type lista_comprasOrderByWithAggregationInput = {
    id?: SortOrder
    producto_id?: SortOrderInput | SortOrder
    nombre?: SortOrder
    cantidad?: SortOrder
    fecha_agregado?: SortOrderInput | SortOrder
    usuario_id?: SortOrderInput | SortOrder
    comprado?: SortOrderInput | SortOrder
    _count?: lista_comprasCountOrderByAggregateInput
    _avg?: lista_comprasAvgOrderByAggregateInput
    _max?: lista_comprasMaxOrderByAggregateInput
    _min?: lista_comprasMinOrderByAggregateInput
    _sum?: lista_comprasSumOrderByAggregateInput
  }

  export type lista_comprasScalarWhereWithAggregatesInput = {
    AND?: lista_comprasScalarWhereWithAggregatesInput | lista_comprasScalarWhereWithAggregatesInput[]
    OR?: lista_comprasScalarWhereWithAggregatesInput[]
    NOT?: lista_comprasScalarWhereWithAggregatesInput | lista_comprasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"lista_compras"> | number
    producto_id?: IntNullableWithAggregatesFilter<"lista_compras"> | number | null
    nombre?: StringWithAggregatesFilter<"lista_compras"> | string
    cantidad?: IntWithAggregatesFilter<"lista_compras"> | number
    fecha_agregado?: DateTimeNullableWithAggregatesFilter<"lista_compras"> | Date | string | null
    usuario_id?: IntNullableWithAggregatesFilter<"lista_compras"> | number | null
    comprado?: BoolNullableWithAggregatesFilter<"lista_compras"> | boolean | null
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id?: IntFilter<"usuarios"> | number
    nombre?: StringFilter<"usuarios"> | string
    email?: StringNullableFilter<"usuarios"> | string | null
    contrase_a?: StringFilter<"usuarios"> | string
    inventario?: InventarioListRelationFilter
    lista_compras?: Lista_comprasListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrderInput | SortOrder
    contrase_a?: SortOrder
    inventario?: inventarioOrderByRelationAggregateInput
    lista_compras?: lista_comprasOrderByRelationAggregateInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nombre?: StringFilter<"usuarios"> | string
    email?: StringNullableFilter<"usuarios"> | string | null
    contrase_a?: StringFilter<"usuarios"> | string
    inventario?: InventarioListRelationFilter
    lista_compras?: Lista_comprasListRelationFilter
  }, "id">

  export type usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrderInput | SortOrder
    contrase_a?: SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuarios"> | number
    nombre?: StringWithAggregatesFilter<"usuarios"> | string
    email?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    contrase_a?: StringWithAggregatesFilter<"usuarios"> | string
  }

  export type inventarioCreateInput = {
    nombre: string
    descripcion?: string | null
    cantidad_actual: number
    cantidad_minima: number
    usuarios?: usuariosCreateNestedOneWithoutInventarioInput
    lista_compras?: lista_comprasCreateNestedManyWithoutInventarioInput
  }

  export type inventarioUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    cantidad_actual: number
    cantidad_minima: number
    usuario_id?: number | null
    lista_compras?: lista_comprasUncheckedCreateNestedManyWithoutInventarioInput
  }

  export type inventarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad_actual?: IntFieldUpdateOperationsInput | number
    cantidad_minima?: IntFieldUpdateOperationsInput | number
    usuarios?: usuariosUpdateOneWithoutInventarioNestedInput
    lista_compras?: lista_comprasUpdateManyWithoutInventarioNestedInput
  }

  export type inventarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad_actual?: IntFieldUpdateOperationsInput | number
    cantidad_minima?: IntFieldUpdateOperationsInput | number
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    lista_compras?: lista_comprasUncheckedUpdateManyWithoutInventarioNestedInput
  }

  export type inventarioCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    cantidad_actual: number
    cantidad_minima: number
    usuario_id?: number | null
  }

  export type inventarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad_actual?: IntFieldUpdateOperationsInput | number
    cantidad_minima?: IntFieldUpdateOperationsInput | number
  }

  export type inventarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad_actual?: IntFieldUpdateOperationsInput | number
    cantidad_minima?: IntFieldUpdateOperationsInput | number
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type lista_comprasCreateInput = {
    nombre: string
    cantidad: number
    fecha_agregado?: Date | string | null
    comprado?: boolean | null
    usuarios?: usuariosCreateNestedOneWithoutLista_comprasInput
    inventario?: inventarioCreateNestedOneWithoutLista_comprasInput
  }

  export type lista_comprasUncheckedCreateInput = {
    id?: number
    producto_id?: number | null
    nombre: string
    cantidad: number
    fecha_agregado?: Date | string | null
    usuario_id?: number | null
    comprado?: boolean | null
  }

  export type lista_comprasUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha_agregado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comprado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usuarios?: usuariosUpdateOneWithoutLista_comprasNestedInput
    inventario?: inventarioUpdateOneWithoutLista_comprasNestedInput
  }

  export type lista_comprasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    producto_id?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha_agregado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    comprado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type lista_comprasCreateManyInput = {
    id?: number
    producto_id?: number | null
    nombre: string
    cantidad: number
    fecha_agregado?: Date | string | null
    usuario_id?: number | null
    comprado?: boolean | null
  }

  export type lista_comprasUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha_agregado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comprado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type lista_comprasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    producto_id?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha_agregado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    comprado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type usuariosCreateInput = {
    nombre: string
    email?: string | null
    contrase_a: string
    inventario?: inventarioCreateNestedManyWithoutUsuariosInput
    lista_compras?: lista_comprasCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id?: number
    nombre: string
    email?: string | null
    contrase_a: string
    inventario?: inventarioUncheckedCreateNestedManyWithoutUsuariosInput
    lista_compras?: lista_comprasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contrase_a?: StringFieldUpdateOperationsInput | string
    inventario?: inventarioUpdateManyWithoutUsuariosNestedInput
    lista_compras?: lista_comprasUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contrase_a?: StringFieldUpdateOperationsInput | string
    inventario?: inventarioUncheckedUpdateManyWithoutUsuariosNestedInput
    lista_compras?: lista_comprasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id?: number
    nombre: string
    email?: string | null
    contrase_a: string
  }

  export type usuariosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contrase_a?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contrase_a?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsuariosNullableScalarRelationFilter = {
    is?: usuariosWhereInput | null
    isNot?: usuariosWhereInput | null
  }

  export type Lista_comprasListRelationFilter = {
    every?: lista_comprasWhereInput
    some?: lista_comprasWhereInput
    none?: lista_comprasWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type lista_comprasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type inventarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    cantidad_actual?: SortOrder
    cantidad_minima?: SortOrder
    usuario_id?: SortOrder
  }

  export type inventarioAvgOrderByAggregateInput = {
    id?: SortOrder
    cantidad_actual?: SortOrder
    cantidad_minima?: SortOrder
    usuario_id?: SortOrder
  }

  export type inventarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    cantidad_actual?: SortOrder
    cantidad_minima?: SortOrder
    usuario_id?: SortOrder
  }

  export type inventarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    cantidad_actual?: SortOrder
    cantidad_minima?: SortOrder
    usuario_id?: SortOrder
  }

  export type inventarioSumOrderByAggregateInput = {
    id?: SortOrder
    cantidad_actual?: SortOrder
    cantidad_minima?: SortOrder
    usuario_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type InventarioNullableScalarRelationFilter = {
    is?: inventarioWhereInput | null
    isNot?: inventarioWhereInput | null
  }

  export type lista_comprasCountOrderByAggregateInput = {
    id?: SortOrder
    producto_id?: SortOrder
    nombre?: SortOrder
    cantidad?: SortOrder
    fecha_agregado?: SortOrder
    usuario_id?: SortOrder
    comprado?: SortOrder
  }

  export type lista_comprasAvgOrderByAggregateInput = {
    id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
    usuario_id?: SortOrder
  }

  export type lista_comprasMaxOrderByAggregateInput = {
    id?: SortOrder
    producto_id?: SortOrder
    nombre?: SortOrder
    cantidad?: SortOrder
    fecha_agregado?: SortOrder
    usuario_id?: SortOrder
    comprado?: SortOrder
  }

  export type lista_comprasMinOrderByAggregateInput = {
    id?: SortOrder
    producto_id?: SortOrder
    nombre?: SortOrder
    cantidad?: SortOrder
    fecha_agregado?: SortOrder
    usuario_id?: SortOrder
    comprado?: SortOrder
  }

  export type lista_comprasSumOrderByAggregateInput = {
    id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
    usuario_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type InventarioListRelationFilter = {
    every?: inventarioWhereInput
    some?: inventarioWhereInput
    none?: inventarioWhereInput
  }

  export type inventarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrase_a?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrase_a?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrase_a?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuariosCreateNestedOneWithoutInventarioInput = {
    create?: XOR<usuariosCreateWithoutInventarioInput, usuariosUncheckedCreateWithoutInventarioInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutInventarioInput
    connect?: usuariosWhereUniqueInput
  }

  export type lista_comprasCreateNestedManyWithoutInventarioInput = {
    create?: XOR<lista_comprasCreateWithoutInventarioInput, lista_comprasUncheckedCreateWithoutInventarioInput> | lista_comprasCreateWithoutInventarioInput[] | lista_comprasUncheckedCreateWithoutInventarioInput[]
    connectOrCreate?: lista_comprasCreateOrConnectWithoutInventarioInput | lista_comprasCreateOrConnectWithoutInventarioInput[]
    createMany?: lista_comprasCreateManyInventarioInputEnvelope
    connect?: lista_comprasWhereUniqueInput | lista_comprasWhereUniqueInput[]
  }

  export type lista_comprasUncheckedCreateNestedManyWithoutInventarioInput = {
    create?: XOR<lista_comprasCreateWithoutInventarioInput, lista_comprasUncheckedCreateWithoutInventarioInput> | lista_comprasCreateWithoutInventarioInput[] | lista_comprasUncheckedCreateWithoutInventarioInput[]
    connectOrCreate?: lista_comprasCreateOrConnectWithoutInventarioInput | lista_comprasCreateOrConnectWithoutInventarioInput[]
    createMany?: lista_comprasCreateManyInventarioInputEnvelope
    connect?: lista_comprasWhereUniqueInput | lista_comprasWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usuariosUpdateOneWithoutInventarioNestedInput = {
    create?: XOR<usuariosCreateWithoutInventarioInput, usuariosUncheckedCreateWithoutInventarioInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutInventarioInput
    upsert?: usuariosUpsertWithoutInventarioInput
    disconnect?: usuariosWhereInput | boolean
    delete?: usuariosWhereInput | boolean
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutInventarioInput, usuariosUpdateWithoutInventarioInput>, usuariosUncheckedUpdateWithoutInventarioInput>
  }

  export type lista_comprasUpdateManyWithoutInventarioNestedInput = {
    create?: XOR<lista_comprasCreateWithoutInventarioInput, lista_comprasUncheckedCreateWithoutInventarioInput> | lista_comprasCreateWithoutInventarioInput[] | lista_comprasUncheckedCreateWithoutInventarioInput[]
    connectOrCreate?: lista_comprasCreateOrConnectWithoutInventarioInput | lista_comprasCreateOrConnectWithoutInventarioInput[]
    upsert?: lista_comprasUpsertWithWhereUniqueWithoutInventarioInput | lista_comprasUpsertWithWhereUniqueWithoutInventarioInput[]
    createMany?: lista_comprasCreateManyInventarioInputEnvelope
    set?: lista_comprasWhereUniqueInput | lista_comprasWhereUniqueInput[]
    disconnect?: lista_comprasWhereUniqueInput | lista_comprasWhereUniqueInput[]
    delete?: lista_comprasWhereUniqueInput | lista_comprasWhereUniqueInput[]
    connect?: lista_comprasWhereUniqueInput | lista_comprasWhereUniqueInput[]
    update?: lista_comprasUpdateWithWhereUniqueWithoutInventarioInput | lista_comprasUpdateWithWhereUniqueWithoutInventarioInput[]
    updateMany?: lista_comprasUpdateManyWithWhereWithoutInventarioInput | lista_comprasUpdateManyWithWhereWithoutInventarioInput[]
    deleteMany?: lista_comprasScalarWhereInput | lista_comprasScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type lista_comprasUncheckedUpdateManyWithoutInventarioNestedInput = {
    create?: XOR<lista_comprasCreateWithoutInventarioInput, lista_comprasUncheckedCreateWithoutInventarioInput> | lista_comprasCreateWithoutInventarioInput[] | lista_comprasUncheckedCreateWithoutInventarioInput[]
    connectOrCreate?: lista_comprasCreateOrConnectWithoutInventarioInput | lista_comprasCreateOrConnectWithoutInventarioInput[]
    upsert?: lista_comprasUpsertWithWhereUniqueWithoutInventarioInput | lista_comprasUpsertWithWhereUniqueWithoutInventarioInput[]
    createMany?: lista_comprasCreateManyInventarioInputEnvelope
    set?: lista_comprasWhereUniqueInput | lista_comprasWhereUniqueInput[]
    disconnect?: lista_comprasWhereUniqueInput | lista_comprasWhereUniqueInput[]
    delete?: lista_comprasWhereUniqueInput | lista_comprasWhereUniqueInput[]
    connect?: lista_comprasWhereUniqueInput | lista_comprasWhereUniqueInput[]
    update?: lista_comprasUpdateWithWhereUniqueWithoutInventarioInput | lista_comprasUpdateWithWhereUniqueWithoutInventarioInput[]
    updateMany?: lista_comprasUpdateManyWithWhereWithoutInventarioInput | lista_comprasUpdateManyWithWhereWithoutInventarioInput[]
    deleteMany?: lista_comprasScalarWhereInput | lista_comprasScalarWhereInput[]
  }

  export type usuariosCreateNestedOneWithoutLista_comprasInput = {
    create?: XOR<usuariosCreateWithoutLista_comprasInput, usuariosUncheckedCreateWithoutLista_comprasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutLista_comprasInput
    connect?: usuariosWhereUniqueInput
  }

  export type inventarioCreateNestedOneWithoutLista_comprasInput = {
    create?: XOR<inventarioCreateWithoutLista_comprasInput, inventarioUncheckedCreateWithoutLista_comprasInput>
    connectOrCreate?: inventarioCreateOrConnectWithoutLista_comprasInput
    connect?: inventarioWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type usuariosUpdateOneWithoutLista_comprasNestedInput = {
    create?: XOR<usuariosCreateWithoutLista_comprasInput, usuariosUncheckedCreateWithoutLista_comprasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutLista_comprasInput
    upsert?: usuariosUpsertWithoutLista_comprasInput
    disconnect?: usuariosWhereInput | boolean
    delete?: usuariosWhereInput | boolean
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutLista_comprasInput, usuariosUpdateWithoutLista_comprasInput>, usuariosUncheckedUpdateWithoutLista_comprasInput>
  }

  export type inventarioUpdateOneWithoutLista_comprasNestedInput = {
    create?: XOR<inventarioCreateWithoutLista_comprasInput, inventarioUncheckedCreateWithoutLista_comprasInput>
    connectOrCreate?: inventarioCreateOrConnectWithoutLista_comprasInput
    upsert?: inventarioUpsertWithoutLista_comprasInput
    disconnect?: inventarioWhereInput | boolean
    delete?: inventarioWhereInput | boolean
    connect?: inventarioWhereUniqueInput
    update?: XOR<XOR<inventarioUpdateToOneWithWhereWithoutLista_comprasInput, inventarioUpdateWithoutLista_comprasInput>, inventarioUncheckedUpdateWithoutLista_comprasInput>
  }

  export type inventarioCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<inventarioCreateWithoutUsuariosInput, inventarioUncheckedCreateWithoutUsuariosInput> | inventarioCreateWithoutUsuariosInput[] | inventarioUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: inventarioCreateOrConnectWithoutUsuariosInput | inventarioCreateOrConnectWithoutUsuariosInput[]
    createMany?: inventarioCreateManyUsuariosInputEnvelope
    connect?: inventarioWhereUniqueInput | inventarioWhereUniqueInput[]
  }

  export type lista_comprasCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<lista_comprasCreateWithoutUsuariosInput, lista_comprasUncheckedCreateWithoutUsuariosInput> | lista_comprasCreateWithoutUsuariosInput[] | lista_comprasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: lista_comprasCreateOrConnectWithoutUsuariosInput | lista_comprasCreateOrConnectWithoutUsuariosInput[]
    createMany?: lista_comprasCreateManyUsuariosInputEnvelope
    connect?: lista_comprasWhereUniqueInput | lista_comprasWhereUniqueInput[]
  }

  export type inventarioUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<inventarioCreateWithoutUsuariosInput, inventarioUncheckedCreateWithoutUsuariosInput> | inventarioCreateWithoutUsuariosInput[] | inventarioUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: inventarioCreateOrConnectWithoutUsuariosInput | inventarioCreateOrConnectWithoutUsuariosInput[]
    createMany?: inventarioCreateManyUsuariosInputEnvelope
    connect?: inventarioWhereUniqueInput | inventarioWhereUniqueInput[]
  }

  export type lista_comprasUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<lista_comprasCreateWithoutUsuariosInput, lista_comprasUncheckedCreateWithoutUsuariosInput> | lista_comprasCreateWithoutUsuariosInput[] | lista_comprasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: lista_comprasCreateOrConnectWithoutUsuariosInput | lista_comprasCreateOrConnectWithoutUsuariosInput[]
    createMany?: lista_comprasCreateManyUsuariosInputEnvelope
    connect?: lista_comprasWhereUniqueInput | lista_comprasWhereUniqueInput[]
  }

  export type inventarioUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<inventarioCreateWithoutUsuariosInput, inventarioUncheckedCreateWithoutUsuariosInput> | inventarioCreateWithoutUsuariosInput[] | inventarioUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: inventarioCreateOrConnectWithoutUsuariosInput | inventarioCreateOrConnectWithoutUsuariosInput[]
    upsert?: inventarioUpsertWithWhereUniqueWithoutUsuariosInput | inventarioUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: inventarioCreateManyUsuariosInputEnvelope
    set?: inventarioWhereUniqueInput | inventarioWhereUniqueInput[]
    disconnect?: inventarioWhereUniqueInput | inventarioWhereUniqueInput[]
    delete?: inventarioWhereUniqueInput | inventarioWhereUniqueInput[]
    connect?: inventarioWhereUniqueInput | inventarioWhereUniqueInput[]
    update?: inventarioUpdateWithWhereUniqueWithoutUsuariosInput | inventarioUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: inventarioUpdateManyWithWhereWithoutUsuariosInput | inventarioUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: inventarioScalarWhereInput | inventarioScalarWhereInput[]
  }

  export type lista_comprasUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<lista_comprasCreateWithoutUsuariosInput, lista_comprasUncheckedCreateWithoutUsuariosInput> | lista_comprasCreateWithoutUsuariosInput[] | lista_comprasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: lista_comprasCreateOrConnectWithoutUsuariosInput | lista_comprasCreateOrConnectWithoutUsuariosInput[]
    upsert?: lista_comprasUpsertWithWhereUniqueWithoutUsuariosInput | lista_comprasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: lista_comprasCreateManyUsuariosInputEnvelope
    set?: lista_comprasWhereUniqueInput | lista_comprasWhereUniqueInput[]
    disconnect?: lista_comprasWhereUniqueInput | lista_comprasWhereUniqueInput[]
    delete?: lista_comprasWhereUniqueInput | lista_comprasWhereUniqueInput[]
    connect?: lista_comprasWhereUniqueInput | lista_comprasWhereUniqueInput[]
    update?: lista_comprasUpdateWithWhereUniqueWithoutUsuariosInput | lista_comprasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: lista_comprasUpdateManyWithWhereWithoutUsuariosInput | lista_comprasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: lista_comprasScalarWhereInput | lista_comprasScalarWhereInput[]
  }

  export type inventarioUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<inventarioCreateWithoutUsuariosInput, inventarioUncheckedCreateWithoutUsuariosInput> | inventarioCreateWithoutUsuariosInput[] | inventarioUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: inventarioCreateOrConnectWithoutUsuariosInput | inventarioCreateOrConnectWithoutUsuariosInput[]
    upsert?: inventarioUpsertWithWhereUniqueWithoutUsuariosInput | inventarioUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: inventarioCreateManyUsuariosInputEnvelope
    set?: inventarioWhereUniqueInput | inventarioWhereUniqueInput[]
    disconnect?: inventarioWhereUniqueInput | inventarioWhereUniqueInput[]
    delete?: inventarioWhereUniqueInput | inventarioWhereUniqueInput[]
    connect?: inventarioWhereUniqueInput | inventarioWhereUniqueInput[]
    update?: inventarioUpdateWithWhereUniqueWithoutUsuariosInput | inventarioUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: inventarioUpdateManyWithWhereWithoutUsuariosInput | inventarioUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: inventarioScalarWhereInput | inventarioScalarWhereInput[]
  }

  export type lista_comprasUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<lista_comprasCreateWithoutUsuariosInput, lista_comprasUncheckedCreateWithoutUsuariosInput> | lista_comprasCreateWithoutUsuariosInput[] | lista_comprasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: lista_comprasCreateOrConnectWithoutUsuariosInput | lista_comprasCreateOrConnectWithoutUsuariosInput[]
    upsert?: lista_comprasUpsertWithWhereUniqueWithoutUsuariosInput | lista_comprasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: lista_comprasCreateManyUsuariosInputEnvelope
    set?: lista_comprasWhereUniqueInput | lista_comprasWhereUniqueInput[]
    disconnect?: lista_comprasWhereUniqueInput | lista_comprasWhereUniqueInput[]
    delete?: lista_comprasWhereUniqueInput | lista_comprasWhereUniqueInput[]
    connect?: lista_comprasWhereUniqueInput | lista_comprasWhereUniqueInput[]
    update?: lista_comprasUpdateWithWhereUniqueWithoutUsuariosInput | lista_comprasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: lista_comprasUpdateManyWithWhereWithoutUsuariosInput | lista_comprasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: lista_comprasScalarWhereInput | lista_comprasScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type usuariosCreateWithoutInventarioInput = {
    nombre: string
    email?: string | null
    contrase_a: string
    lista_compras?: lista_comprasCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutInventarioInput = {
    id?: number
    nombre: string
    email?: string | null
    contrase_a: string
    lista_compras?: lista_comprasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutInventarioInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutInventarioInput, usuariosUncheckedCreateWithoutInventarioInput>
  }

  export type lista_comprasCreateWithoutInventarioInput = {
    nombre: string
    cantidad: number
    fecha_agregado?: Date | string | null
    comprado?: boolean | null
    usuarios?: usuariosCreateNestedOneWithoutLista_comprasInput
  }

  export type lista_comprasUncheckedCreateWithoutInventarioInput = {
    id?: number
    nombre: string
    cantidad: number
    fecha_agregado?: Date | string | null
    usuario_id?: number | null
    comprado?: boolean | null
  }

  export type lista_comprasCreateOrConnectWithoutInventarioInput = {
    where: lista_comprasWhereUniqueInput
    create: XOR<lista_comprasCreateWithoutInventarioInput, lista_comprasUncheckedCreateWithoutInventarioInput>
  }

  export type lista_comprasCreateManyInventarioInputEnvelope = {
    data: lista_comprasCreateManyInventarioInput | lista_comprasCreateManyInventarioInput[]
    skipDuplicates?: boolean
  }

  export type usuariosUpsertWithoutInventarioInput = {
    update: XOR<usuariosUpdateWithoutInventarioInput, usuariosUncheckedUpdateWithoutInventarioInput>
    create: XOR<usuariosCreateWithoutInventarioInput, usuariosUncheckedCreateWithoutInventarioInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutInventarioInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutInventarioInput, usuariosUncheckedUpdateWithoutInventarioInput>
  }

  export type usuariosUpdateWithoutInventarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contrase_a?: StringFieldUpdateOperationsInput | string
    lista_compras?: lista_comprasUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutInventarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contrase_a?: StringFieldUpdateOperationsInput | string
    lista_compras?: lista_comprasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type lista_comprasUpsertWithWhereUniqueWithoutInventarioInput = {
    where: lista_comprasWhereUniqueInput
    update: XOR<lista_comprasUpdateWithoutInventarioInput, lista_comprasUncheckedUpdateWithoutInventarioInput>
    create: XOR<lista_comprasCreateWithoutInventarioInput, lista_comprasUncheckedCreateWithoutInventarioInput>
  }

  export type lista_comprasUpdateWithWhereUniqueWithoutInventarioInput = {
    where: lista_comprasWhereUniqueInput
    data: XOR<lista_comprasUpdateWithoutInventarioInput, lista_comprasUncheckedUpdateWithoutInventarioInput>
  }

  export type lista_comprasUpdateManyWithWhereWithoutInventarioInput = {
    where: lista_comprasScalarWhereInput
    data: XOR<lista_comprasUpdateManyMutationInput, lista_comprasUncheckedUpdateManyWithoutInventarioInput>
  }

  export type lista_comprasScalarWhereInput = {
    AND?: lista_comprasScalarWhereInput | lista_comprasScalarWhereInput[]
    OR?: lista_comprasScalarWhereInput[]
    NOT?: lista_comprasScalarWhereInput | lista_comprasScalarWhereInput[]
    id?: IntFilter<"lista_compras"> | number
    producto_id?: IntNullableFilter<"lista_compras"> | number | null
    nombre?: StringFilter<"lista_compras"> | string
    cantidad?: IntFilter<"lista_compras"> | number
    fecha_agregado?: DateTimeNullableFilter<"lista_compras"> | Date | string | null
    usuario_id?: IntNullableFilter<"lista_compras"> | number | null
    comprado?: BoolNullableFilter<"lista_compras"> | boolean | null
  }

  export type usuariosCreateWithoutLista_comprasInput = {
    nombre: string
    email?: string | null
    contrase_a: string
    inventario?: inventarioCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutLista_comprasInput = {
    id?: number
    nombre: string
    email?: string | null
    contrase_a: string
    inventario?: inventarioUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutLista_comprasInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutLista_comprasInput, usuariosUncheckedCreateWithoutLista_comprasInput>
  }

  export type inventarioCreateWithoutLista_comprasInput = {
    nombre: string
    descripcion?: string | null
    cantidad_actual: number
    cantidad_minima: number
    usuarios?: usuariosCreateNestedOneWithoutInventarioInput
  }

  export type inventarioUncheckedCreateWithoutLista_comprasInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    cantidad_actual: number
    cantidad_minima: number
    usuario_id?: number | null
  }

  export type inventarioCreateOrConnectWithoutLista_comprasInput = {
    where: inventarioWhereUniqueInput
    create: XOR<inventarioCreateWithoutLista_comprasInput, inventarioUncheckedCreateWithoutLista_comprasInput>
  }

  export type usuariosUpsertWithoutLista_comprasInput = {
    update: XOR<usuariosUpdateWithoutLista_comprasInput, usuariosUncheckedUpdateWithoutLista_comprasInput>
    create: XOR<usuariosCreateWithoutLista_comprasInput, usuariosUncheckedCreateWithoutLista_comprasInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutLista_comprasInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutLista_comprasInput, usuariosUncheckedUpdateWithoutLista_comprasInput>
  }

  export type usuariosUpdateWithoutLista_comprasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contrase_a?: StringFieldUpdateOperationsInput | string
    inventario?: inventarioUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutLista_comprasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contrase_a?: StringFieldUpdateOperationsInput | string
    inventario?: inventarioUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type inventarioUpsertWithoutLista_comprasInput = {
    update: XOR<inventarioUpdateWithoutLista_comprasInput, inventarioUncheckedUpdateWithoutLista_comprasInput>
    create: XOR<inventarioCreateWithoutLista_comprasInput, inventarioUncheckedCreateWithoutLista_comprasInput>
    where?: inventarioWhereInput
  }

  export type inventarioUpdateToOneWithWhereWithoutLista_comprasInput = {
    where?: inventarioWhereInput
    data: XOR<inventarioUpdateWithoutLista_comprasInput, inventarioUncheckedUpdateWithoutLista_comprasInput>
  }

  export type inventarioUpdateWithoutLista_comprasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad_actual?: IntFieldUpdateOperationsInput | number
    cantidad_minima?: IntFieldUpdateOperationsInput | number
    usuarios?: usuariosUpdateOneWithoutInventarioNestedInput
  }

  export type inventarioUncheckedUpdateWithoutLista_comprasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad_actual?: IntFieldUpdateOperationsInput | number
    cantidad_minima?: IntFieldUpdateOperationsInput | number
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type inventarioCreateWithoutUsuariosInput = {
    nombre: string
    descripcion?: string | null
    cantidad_actual: number
    cantidad_minima: number
    lista_compras?: lista_comprasCreateNestedManyWithoutInventarioInput
  }

  export type inventarioUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    cantidad_actual: number
    cantidad_minima: number
    lista_compras?: lista_comprasUncheckedCreateNestedManyWithoutInventarioInput
  }

  export type inventarioCreateOrConnectWithoutUsuariosInput = {
    where: inventarioWhereUniqueInput
    create: XOR<inventarioCreateWithoutUsuariosInput, inventarioUncheckedCreateWithoutUsuariosInput>
  }

  export type inventarioCreateManyUsuariosInputEnvelope = {
    data: inventarioCreateManyUsuariosInput | inventarioCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type lista_comprasCreateWithoutUsuariosInput = {
    nombre: string
    cantidad: number
    fecha_agregado?: Date | string | null
    comprado?: boolean | null
    inventario?: inventarioCreateNestedOneWithoutLista_comprasInput
  }

  export type lista_comprasUncheckedCreateWithoutUsuariosInput = {
    id?: number
    producto_id?: number | null
    nombre: string
    cantidad: number
    fecha_agregado?: Date | string | null
    comprado?: boolean | null
  }

  export type lista_comprasCreateOrConnectWithoutUsuariosInput = {
    where: lista_comprasWhereUniqueInput
    create: XOR<lista_comprasCreateWithoutUsuariosInput, lista_comprasUncheckedCreateWithoutUsuariosInput>
  }

  export type lista_comprasCreateManyUsuariosInputEnvelope = {
    data: lista_comprasCreateManyUsuariosInput | lista_comprasCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type inventarioUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: inventarioWhereUniqueInput
    update: XOR<inventarioUpdateWithoutUsuariosInput, inventarioUncheckedUpdateWithoutUsuariosInput>
    create: XOR<inventarioCreateWithoutUsuariosInput, inventarioUncheckedCreateWithoutUsuariosInput>
  }

  export type inventarioUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: inventarioWhereUniqueInput
    data: XOR<inventarioUpdateWithoutUsuariosInput, inventarioUncheckedUpdateWithoutUsuariosInput>
  }

  export type inventarioUpdateManyWithWhereWithoutUsuariosInput = {
    where: inventarioScalarWhereInput
    data: XOR<inventarioUpdateManyMutationInput, inventarioUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type inventarioScalarWhereInput = {
    AND?: inventarioScalarWhereInput | inventarioScalarWhereInput[]
    OR?: inventarioScalarWhereInput[]
    NOT?: inventarioScalarWhereInput | inventarioScalarWhereInput[]
    id?: IntFilter<"inventario"> | number
    nombre?: StringFilter<"inventario"> | string
    descripcion?: StringNullableFilter<"inventario"> | string | null
    cantidad_actual?: IntFilter<"inventario"> | number
    cantidad_minima?: IntFilter<"inventario"> | number
    usuario_id?: IntNullableFilter<"inventario"> | number | null
  }

  export type lista_comprasUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: lista_comprasWhereUniqueInput
    update: XOR<lista_comprasUpdateWithoutUsuariosInput, lista_comprasUncheckedUpdateWithoutUsuariosInput>
    create: XOR<lista_comprasCreateWithoutUsuariosInput, lista_comprasUncheckedCreateWithoutUsuariosInput>
  }

  export type lista_comprasUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: lista_comprasWhereUniqueInput
    data: XOR<lista_comprasUpdateWithoutUsuariosInput, lista_comprasUncheckedUpdateWithoutUsuariosInput>
  }

  export type lista_comprasUpdateManyWithWhereWithoutUsuariosInput = {
    where: lista_comprasScalarWhereInput
    data: XOR<lista_comprasUpdateManyMutationInput, lista_comprasUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type lista_comprasCreateManyInventarioInput = {
    id?: number
    nombre: string
    cantidad: number
    fecha_agregado?: Date | string | null
    usuario_id?: number | null
    comprado?: boolean | null
  }

  export type lista_comprasUpdateWithoutInventarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha_agregado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comprado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usuarios?: usuariosUpdateOneWithoutLista_comprasNestedInput
  }

  export type lista_comprasUncheckedUpdateWithoutInventarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha_agregado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    comprado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type lista_comprasUncheckedUpdateManyWithoutInventarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha_agregado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    comprado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type inventarioCreateManyUsuariosInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    cantidad_actual: number
    cantidad_minima: number
  }

  export type lista_comprasCreateManyUsuariosInput = {
    id?: number
    producto_id?: number | null
    nombre: string
    cantidad: number
    fecha_agregado?: Date | string | null
    comprado?: boolean | null
  }

  export type inventarioUpdateWithoutUsuariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad_actual?: IntFieldUpdateOperationsInput | number
    cantidad_minima?: IntFieldUpdateOperationsInput | number
    lista_compras?: lista_comprasUpdateManyWithoutInventarioNestedInput
  }

  export type inventarioUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad_actual?: IntFieldUpdateOperationsInput | number
    cantidad_minima?: IntFieldUpdateOperationsInput | number
    lista_compras?: lista_comprasUncheckedUpdateManyWithoutInventarioNestedInput
  }

  export type inventarioUncheckedUpdateManyWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cantidad_actual?: IntFieldUpdateOperationsInput | number
    cantidad_minima?: IntFieldUpdateOperationsInput | number
  }

  export type lista_comprasUpdateWithoutUsuariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha_agregado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comprado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    inventario?: inventarioUpdateOneWithoutLista_comprasNestedInput
  }

  export type lista_comprasUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    producto_id?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha_agregado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comprado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type lista_comprasUncheckedUpdateManyWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    producto_id?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    fecha_agregado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comprado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}