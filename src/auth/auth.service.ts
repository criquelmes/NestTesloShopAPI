import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { PostgresExceptionHandler } from 'src/common/exceptions/postgres-handler.exception';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly postgresExceptionHandler: PostgresExceptionHandler,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const { password, ...rest } = createUserDto;
      const user = this.userRepository.create({
        ...rest,
        password: bcrypt.hashSync(password, 10),
      });
      await this.userRepository.save(user);
      delete user.password;
      return user;
      // TODO: Retornar el JWT de acceso
    } catch (error) {
      this.postgresExceptionHandler.handlerDBExceptions(error);
    }
  }

  // private handleDBExceptions(error: any): never {
  //   if (error.code === '23505') {
  //     throw new BadRequestException(error.detail);
  //   }
  //   console.error(error);
  //   throw new InternalServerErrorException(
  //     'Unexpected error, check server logs',
  //   );
  // }
}
