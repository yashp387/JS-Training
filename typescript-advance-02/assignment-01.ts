// 1. Create a type IsNumber<T>.
// 2. Create a type ExtractEmail<T> that extracts email type if present.

type IsNumber<T> = T extends number ? true : false;

type A = IsNumber<number>
type B = IsNumber<string>
type C = IsNumber<45>
type D = IsNumber<boolean>

type ExtractEmail<T> = T extends { email: infer E} ? E : never

type User = {
    id: number;
    email: string;
}

type Test = ExtractEmail<User>