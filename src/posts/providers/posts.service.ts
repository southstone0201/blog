import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
    constructor(private readonly usersService: UsersService){}

    public findAll(userId: string){
        const user = this.usersService.findOnebyId(userId)
        
        return [
            {user : user, title: "post 1", description: "post 1 description"},
            {user : user, title: "post 2", description: "post 2 description"},
            {user : user, title: "post 3", description: "post 3 description"},   
        ]
    }
}
