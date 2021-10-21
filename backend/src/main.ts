import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// Import firebase-admin
import * as admin from 'firebase-admin';
import { Request, Response, NextFunction } from 'express';

async function bootstrap() {
  // Set the config options
  const serviceAccount = process.env.FIREBASE_CREDENTIAL ?? require('./firebase-credentials.json')
  // Initialize the firebase admin app
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://gatsby-portfolio-c8fd3-default-rtdb.firebaseio.com",
  });
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['http://localhost:8000', 'https://japsz.github.io', /\.bmeneses\.io$/],
    }
  });
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log("===========Starting Request from %s ===========", req.hostname)
    console.log(res.getHeaders())
    console.log("===========================")
    next()
  })
  await app.listen(8080);
}
bootstrap();
