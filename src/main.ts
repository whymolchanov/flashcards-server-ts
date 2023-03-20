import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

// TODO(before release): Check how your API secure in terms of this checklist https://roadmap.sh/best-practices/api-security
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
