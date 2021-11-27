import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// Import firebase-admin
import * as admin from 'firebase-admin';
import { Request, Response, NextFunction } from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  // Set the config options
  const serviceAccount = process.env.FIREBASE_CREDENTIAL ?? require('./firebase-credentials.json')
  // Initialize the firebase admin app
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://gatsby-portfolio-c8fd3-default-rtdb.firebaseio.com",
  });
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Logger
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log("===========Starting Request from %s ===========", req.hostname)
    console.log("IP: ",req.ip)
    console.log("path: ",req.originalUrl)
    console.log("method: ",req.method)
    console.log(req.route)
    console.log("===========================")
    next()
  })
  app.enableCors({
    origin: ['https://japsz.github.io', 'https://bmeneses.io', 'https://www.bmeneses.io', 'http://localhost:8000'],
  })

  await app.listen(8080);
}
bootstrap();
