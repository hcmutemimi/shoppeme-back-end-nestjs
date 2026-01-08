import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import * as express from 'express';
import { HttpExceptionFilter } from '@/common/filters';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // global prefix
  app.setGlobalPrefix('api');

  app.enableCors({
    origin: 'http://localhost:4200',
  });

  // global error filter
  app.useGlobalFilters(new HttpExceptionFilter());

  // Serve static Angular files
  app.use(express.static(join(process.cwd(), 'public', 'browser')));

  // SPA fallback (must be AFTER static + API)
  app.use((req, res, next) => {
    if (req.originalUrl.startsWith('/api')) {
      return next();
    }

    res.sendFile(
      join(process.cwd(), 'public', 'browser', 'index.html'),
    );
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
