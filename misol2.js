class Users {
    username;
    #password;
    tell;
    constructor(username, password, tell){
        this.username = username;
        this.#password = password;
        this.tell = tell;
    }
};

const user1 = new Users ("John0314", 147833, 87999368655);
const user2 = new Users ("Baxtiyor_Hakimov", 569884, 996523142);
console.log(user1);
console.log(user2);