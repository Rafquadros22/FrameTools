const express = require("express");

const path = require("path");

const app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));


app.use(express.json());

app.use(express.static("public"));


require("./routes/apiRoutes")(app);

require("./routes/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("http://localhost:" + PORT);
  });
  
