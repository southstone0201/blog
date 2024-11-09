import { Injectable, forwardRef , Inject} from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
    constructor(@Inject(forwardRef(() => UsersService)) private readonly usersService: UsersService){}
    public login(email: string, password: string){
        const user = this.usersService.findOnebyId('1234');
    }
    public isAuth(){
        return true;
    }
}
