import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 96,
        nullable: false
    })
    firstname: string;

    @Column({
        type: 'varchar',
        length: 96,
        nullable: true
    })
    lastname: string;

    @Column({
        type: 'varchar',
        length: 96,
        nullable: false,
        unique: true
    })
    email: string;

    @Column({
        type: 'varchar',
        length: 96,
        nullable: false
    })
    password: string;
} 