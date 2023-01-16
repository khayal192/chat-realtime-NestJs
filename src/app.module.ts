import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatEntity } from './chat/chat.entity';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'chat_hi',
      entities: [ChatEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ChatEntity]),
    ChatModule,
  ],
})
export class AppModule {}
