const users = [
    {
        id: 1,
        username: "Jon",
        age: 20,
        status: "online",
        lastActivity: 0,
        salary: 150
    },
    {
        id: 2,
        username: "Anna",
        age: 32,
        status: "offline",
        lastActivity: 25,
        salary: 300
    },
    {
        id: 3,
        username: "Bob",
        age: 19,
        status: "offline",
        lastActivity: 120,
        salary: 100
    },
    {
        id: 4,
        username: "David",
        age: 46,
        status: "online",
        lastActivity: 120,
        salary: 1500
    },
    {
        id: 5,
        username: "Bill",
        age: 18,
        status: "offline",
        lastActivity: 8,
        salary: 2000
    },
];

// 1. Отобразить в console имена тех пользователей, кто сейчас в сети

console.log("Пользователи онлайн:");
let onlineUsers = users.filter(user => user.status === "online");
onlineUsers.forEach(user => console.log(user.username));

// 2-ой вариант

let onlinUsers = users
    .filter(user => user.status === "online")
    .map(user => user.username);

console.log("Имена пользователей, которые сейчас в сети:", onlinUsers);


// 2. Отобразить как пользователей онлайн, так и пользователей offline с активностью не более 10 минут назад

console.log("Пользователи онлайн и недавно активные:");
let allUsers = users.filter(user => user.status === "online" || (user.status === "offline" && user.lastActivity <= 10));
allUsers.forEach(user => {
    if (user.status === "offline") {
        console.log(user.username + " " + user.lastActivity + " minutes ago");
    } else {
        console.log(user.username);
    }
});


// 2-ой вариант

const output = users.reduce((result, user) => {
    if (user.status === "online") {
        result.push(user.username);
    } else if (user.lastActivity <= 10) {
        result.push(`${user.username} ${user.lastActivity} minutes ago`);
    }
    return result;
}, []);

console.log("Пользователи онлайн и недавно активные:");

output.forEach(entry => console.log(entry));
