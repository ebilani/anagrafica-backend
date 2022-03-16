import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/createUserDto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(     
    @InjectModel(UserEntity)
    private userModel: typeof  UserEntity,
   ){}


   async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const createdCat = new this.userModel(createUserDto);
    return createdCat.save();
  }

  async findOneByEmail(email: string): Promise<UserEntity>  {
    return await this.userModel.findOne<UserEntity>({
    where: {
        email
      }
    });
  }

  async findOne(email: string, password): Promise<UserEntity> {
    return this.userModel.findOne<UserEntity>({
        where: {
            email, password
          }
    });
  }
}