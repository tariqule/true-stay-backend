import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { PORT } from './environment';
import * as cookieParser from 'cookie-parser';
import * as cookieSession from 'cookie-session'; // require cookie session

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser('secret'));
  app.enableCors();
  app.use(cookieParser());

  // set up the cookie for the session
  app.use(
    cookieSession({
      name: 'session', // name of the cookie
      secret: 'MAKE_THIS_SECRET_SECURE', // key to encode session
      maxAge: 24 * 60 * 60 * 1000, // cookie's lifespan
      sameSite: 'lax', // controls when cookies are sent
      path: '/', // explicitly set this for security purposes
      secure: process.env.NODE_ENV === 'production', // cookie only sent on HTTPS
      httpOnly: true, // cookie is not available to JavaScript (client)
    }),
  );
  await app.listen(PORT);

  Logger.log(`🚀 Server running on http://localhost:${PORT}`, 'Bootstrap');
}
bootstrap();
