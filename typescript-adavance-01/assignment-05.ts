// 1. Create a type ReadOnlyUser where all properties are readonly.
// 2. Create a type StringifiedUser where all properties become string.
// 3. Create a type OptionalAndNullableUser where all properties are optional and nullable.

interface User {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "CUSTOMER";
  isActive: boolean;
}

type ReadOnlyUser = {
    readonly[ K in keyof User ]: User[K];
}

type StringifiedUser = {
    [ K in keyof User ]: string;
}

type OptionalAndNullableUser = {
    [ K in keyof User ]?: User[K] | null;
}