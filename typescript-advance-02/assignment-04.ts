// 1. Create abstract class Service<T> with abstract method execute().
// 2. Extend it with UserService.

abstract class Service<T> {
    abstract execute(data: T):void;
}

interface User {
    id: string;
    name: string;
}

class UserService extends Service<User> {
    execute(data: User): void {
        console.log("Processing user:", data.name);
    }
}

const service = new UserService();
service.execute({
    id: "101",
    name: "Yash"
});

console.log(service);