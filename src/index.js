var http = require("http");

(async () => {
  const database = require('./db');

  try {
      const resultado = await database.sync();
      //console.log(resultado);
  } catch (error) {
      console.log(error);
  }
})();

http
  .createServer(function (req, res) {
    var url = req.url;
    var method = req.method;
    res.setHeader("Content-Type", "application/json");
    if (url.startsWith("/users")) {

      if (method === "GET") { // READ
        const users = User.findAll();
        console.log(users);
        res.write(JSON.stringify(users));
      }

      if (method === "POST") { // CREATE

        const resultadoCreate = User.create({
          id: 1,
          name: "João",
          username: "joao",
          email: "joao@gmail.com"
        })
        console.log(resultadoCreate);

      }

      if (method === "PUT") { //UPDATE
        
        const user = User.findByPk(1);
        //console.log(user);
        user.name = "Carlos";

        const resultadoSave = user.save();
        console.log(resultadoSave);  
        
      }
      
      if (method === "DELETE") { // DELETE

        const user = User.findByPk(1);
        user.destroy();

      }

      res.end(); //end the response
    } else {
      res.write("Prova Backend Helpper"); //write a response
      res.end(); //end the response
    }
  })
  .listen(3000, function () {
    console.log("server start at port 3000"); //the server object listens on port 3000
  });
