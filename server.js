const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post("/auth/login", (req, res) => {
  const { email, password } = req.body;
  const users = router.db.get("login").value();

  const user = users.find((u) => u.email === email);

  if (user) {
    res.json(user);
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

server.use(router);

server.listen(5001, () => {
  console.log("JSON Server running on port 5001");
});
