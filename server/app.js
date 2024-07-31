import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import ViteExpress from 'vite-express';

import appRouter from './routes/index.js';
import { Building } from './models/model.js';

const app = express();
const port = '8000';
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: false }));
app.use(appRouter);

app.get('/api/buildings', async (req, res) => {
    Building.findAll().then((buildingData) => {
        res.json(buildingData)
    }
    );
});

app.get('/api/users', async(re))









ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));