const postgres = require("postgres");

const ps = new postgres({
  host: "allife.pro",
  port: 54320,
  db: "m1shkes_db",
  user: "m1shkes",
  pass: "1029384756",
});

async function viewUsers () {

  const users = await ps`SELECT * FROM users WHERE id in (1,3)`

  console.log(users);
}

viewUsers()