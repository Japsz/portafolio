import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// Import firebase-admin
import * as admin from 'firebase-admin';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Set the config options
  const serviceAccount = process.env.FIREBASE_CREDENTIAL ?? require('./firebase-local-creds.json')
  // Initialize the firebase admin app
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://gatsby-portfolio-c8fd3-default-rtdb.firebaseio.com",
  });
  app.enableCors({
    origin: ['http://localhost:8000', 'https://japsz.github.io', 'https://www.bmeneses.io']
  })
  await app.listen(3000);
}
bootstrap();
