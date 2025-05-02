// import { ValidationPipe } from '@nestjs/common';
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   // DTO'lar uchun global validatsiya quvvatini yoqish
//   app.useGlobalPipes(new ValidationPipe({
//     whitelist: true, // faqat DTO da mavjud bo‘lgan maydonlarni qabul qiladi
//     forbidNonWhitelisted: true, // nomaqbul maydonlarga xatolik qaytaradi
//     transform: true, // query va paramlarni avtomatik ravishda kerakli turga o‘giradi
//   }));

//   await app.listen(3000);
//   console.log(`Application is running on: http://localhost:3000`);
// }
// bootstrap();
