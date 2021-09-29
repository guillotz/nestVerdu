import { Injectable, UnsupportedMediaTypeException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { UserRepository } from "src/repositories/user.repository";
import { Repository } from "typeorm";

@Injectable()

export class UserService {

    /*
    constructor(
        @InjectRepository(User) 
        private readonly userRepo: Repository<User>
    ) { }

    async getUsers(): Promise<User[]>{
        return await this.userRepo.find();
    }
    */
    
    constructor(
        @InjectRepository(UserRepository) 
        private readonly userRepo: UserRepository
    ) { }

    async getUsers(){
        return await this.userRepo.find();
    }

    async getUserById(id: number) {
        return await this.userRepo.getByIdCustomParam(id);
        return await this.userRepo.getByIdCustom();
    }

    async createUser(dto){
        const rta =  await this.userRepo.save(dto as any);
        if (!rta) throw new UnsupportedMediaTypeException();
        return rta;
    }
    async deleteUser(id){
        return this.userRepo.delete(id);
    }

    
}