// Assignment 9: Access Modifiers

// 1. Create a service class exposing only required public methods
// 2. Keep internal data private
class UserServices {
  private users: string[] = [];

  public addUser(name: string): void {
    this.users.push(name);
  }

  public greetUser(): string[] {
    return this.users;
  }
}

// 3. Explain which members should be accessible and why:-
// public: mathods that other parts of the app need to use.
// protected: used only by the class and it's subclass.
// private: only used by internal and helpers methods

// 4. Create a class with public, private, and protected members:-
class Account {
  public userName: string;
  private password: string;
  protected role: string;

  constructor(username: string, password: string, role: string) {
    this.userName = username;
    this.password = password;
    this.role = role;
  }

  public getUserName(): string {
    return this.userName;
  }

  private getPassword(): string {
    return this.password;
  }

  protected getRole(): string {
    return this.role;
  }
}

// 5. Try accessing them outside the class:-
const account = new Account("yash", "yash1236", "user");

console.log(account.userName);
console.log(account.password); // throw error that 'password' is private and only accessible within class 'Account'
console.log(account.role); //  throw error that 'role' is protected and only accessible within class 'Account'

// 6. Which members should be exposed and why?
// Exposes only public methods that define the intended behavior
// Public data can be exposed if its safe and modify
// sensitive data such as passworda and token, should be kept private
// internal logic and state management should also be kept private
// code that you want subclass to access should be protected, so it hiddens from the outside world.
