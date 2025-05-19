import express, { Express, Request, Response } from 'express';
// import registerRoutes from './routes/register'; // Descomentar cuando las rutas estén listas
// import statusRoutes from './routes/status';     // Descomentar cuando las rutas estén listas

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Aquí registraremos nuestras rutas más adelante
// app.use('/api', registerRoutes);
// app.use('/api', statusRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('¡Servidor DPaaS funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

export default app;