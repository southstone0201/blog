import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { AuthService } from "src/auth/providers/auth.service";
import { Repository } from "typeorm";
import { User } from "../user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "../dtos/create-user.dto";
@Injectable()
export class UsersService {


    constructor(


        @InjectRepository(User)
        private usersRepository:Repository<User>
    
    ){}

    public async createUser(createUserDto:CreateUserDto){
        const existingUser = await this.usersRepository.findOne({
            where: {email: createUserDto.email},

        });
        let newUser = this.usersRepository.create(createUserDto);
        newUser = await this.usersRepository.save(newUser);

        return newUser;

    }

    public findAll(getUsersDto: GetUsersParamDto, limit: number, page: number){

        return[
            {
                firstname: "john",
                email : "john@gmail.com"
            },
            {
                firstname: "jane",
                email : "jane@gmail.com"
            }
        ]
        }
    

    
    public findOnebyId(id : string){
        return {
            id:1234,
            firstname: "john",
            email : "john@gmail.com"
        }
    }
}
