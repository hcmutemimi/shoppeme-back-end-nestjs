import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '@/users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductsModule } from '@/products/products.module';
import { ERROR_MESSAGES, VARIABLES} from './common/consts';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'public', 'browser'),
      exclude: ['/api*'],

    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const uri = config.get<string>(VARIABLES.MONGO_URI);
        if (!uri) {
          throw new Error(ERROR_MESSAGES.MONGO_URI_NOT_FOUND)
        }
        return { uri }
      }
    }),
    UsersModule,
    ProductsModule,
    OrderModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
