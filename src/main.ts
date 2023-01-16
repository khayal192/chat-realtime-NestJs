import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join('./src/static'));
  app.setBaseViewsDir(join('./src/views'));
  app.setViewEngine('ejs');

  await app.listen(3002);
}

bootstrap();
