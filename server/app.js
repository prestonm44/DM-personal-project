import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import ViteExpress from 'vite-express';

import appRouter from './routes/index.js';
import { AccessPoint, Building, User } from './models/model.js';

const app = express();
const port = '8000';
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: false }));
app.use(appRouter);

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });
  
    if (user && user.password === password) {
      req.session.userId = user.userId;
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });


  /// MUST BE LOGGED IN ///
  
app.get('/api/buildings', async (req, res) => {
    Building.findAll().then((buildingData) => {
        res.json(buildingData)
    }
    );
});

app.get('/api/users', async(req, res) => {
    User.findAll().then((userData) => {
        res.json(userData)
    })
})

app.get('/api/accessPoints', async (req, res) => {
    AccessPoint.findAll().then((accessPointData) => {
        res.json(accessPointData)
    })
})

  app.post('/api/logout', loginRequired, (req, res) => {
    req.session.destroy();
    res.json({ success: true });
  });








ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));