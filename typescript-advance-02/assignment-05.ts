// 1. Create a constructor type for UserRepository .
// 2. Create a callable type that formats User name.

class UserRepository {
  constructor(public name: string) {}

  getUser() {
    return this.name;
  }
}

type UserConstructor = new (name: string) => UserRepository;

function createRepo(RepoClass: UserConstructor) {
  return new RepoClass("mainrepo");
}

const repo = createRepo(UserRepository);
console.log(repo);

interface User {
  id: string;
  name: string;
}

type FormatUsername = (user: User) => string;

const username: FormatUsername = (user) => {
  return user.name.toUpperCase();
};

const user = { id: "101", name: "yash" };

console.log(username(user));