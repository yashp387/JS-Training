// Q4. Global vs. Local Scope

var status = "Offline";

const server = {
  status: "Online",
  getStatus: function () {
    return this.status;
  },
};

console.log(server.getStatus());

// output: Online

/* Reason: Because getStatus is called using server object and when a method is called using object then this points to that object so it log Online */