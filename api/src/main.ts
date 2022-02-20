import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: config.frontendUrl,
    },
  });
  await app.listen(config.port);

  if (config.dev && module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
