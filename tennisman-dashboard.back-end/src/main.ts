import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeApp } from "firebase/app";
async function bootstrap() {
  const firebaseConfig = {
    apiKey: "AIzaSyAlLAradOLLHp0jTgkaR8cuPOfTUn2U93s",
    authDomain: "tennisstats-25659.firebaseapp.com",
    projectId: "tennisstats-25659",
    storageBucket: "tennisstats-25659.appspot.com",
    messagingSenderId: "727142983569",
    appId: "1:727142983569:web:944a7a4f5f1d8223fcdc30"
  };
  const firebase = initializeApp(firebaseConfig);
  const app = await NestFactory.create(AppModule);
  //A ne pas reproduire chez sois on evite de enable le cors pour plus de securité
  //J'ai fais ça pour facilité les testes
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
