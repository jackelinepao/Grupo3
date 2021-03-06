import express, { Request, Response } from 'express';
import { conexion } from '../config/sequelize'
let bodyParser = require('body-parser');

export class Server {
  public app: express.Application;
  public puerto: any;
  constructor() {
    this.app = express();
    // obtener el puerto que nos asignará heroku
    // o establer por defecto el puerto 3000
    this.puerto = process.env.PORT || 3000;
    this.configurarBodyParser();
    this.configurarRutas();
  }

  configurarBodyParser(){
    this.app.use(bodyParser.json());
  }
  configurarRutas() {
    // configurando una ruta por defecto o de prueba
    this.app.get('/', (req: Request, res: Response) => {
      res.status(200).send("BIENVENIDO AL SERVIDOR");
    });


  }

  start() {
    this.app.listen(this.puerto, () => {
      console.log(`Servidor OK en el puerto ${this.puerto}`);
      conexion.sync({force: false}).then(()=>{
        console.log("Base de datos correctamente");
        
      })
    });
  }

}