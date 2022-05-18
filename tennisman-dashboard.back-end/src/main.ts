import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //A ne pas reproduire chez sois on evite de enable le cors pour plus de securité
  //J'ai fais ça pour facilité les testes
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
