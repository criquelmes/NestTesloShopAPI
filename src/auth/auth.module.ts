import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { PostgresExceptionHandler } from 'src/common/exceptions/postgres-handler.exception';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PostgresExceptionHandler],
  imports: [TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule],
})
export class AuthModule {}
