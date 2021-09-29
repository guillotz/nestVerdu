import { User } from "src/entities/user.entity";
import { EntityRepository, getConnection, Repository } from "typeorm";

@EntityRepository(User)
export class UserRepository extends Repository<User>{


    public async getByIdCustom(): Promise<User> {
        const user = await getConnection()
            .getRepository(User)
            .createQueryBuilder("user")
            .where("user.id = :id", { id: 1 })
            .getOne();
        return user;
    }

    public async getByIdCustomParam(id: number): Promise<User> {
        return await getConnection()
            .getRepository(User)
            .createQueryBuilder("user")
            .where("user.id = :id", { id: id })
            .getOne();
    }


}