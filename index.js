const express = require('express');
const app = express();
const router = require('./router/router.js');
const staticFile = require('./middleware/middleware.js');
const PORT = process.env.PORT ?? 4040;

staticFile(app);
app.disable('x-powered-by');
app.use(router);

app.listen(PORT, () =>{
    console.log(`Servidor iniciado en puerto http://localhost:${PORT}`);
})