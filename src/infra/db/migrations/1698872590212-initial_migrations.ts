import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigrations1698872590212 implements MigrationInterface {
    name = 'InitialMigrations1698872590212'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`learning_resource\` (\`id\` int NOT NULL AUTO_INCREMENT, \`category\` varchar(255) NOT NULL, \`url\` varchar(255) NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`learning_resource\` ADD CONSTRAINT \`FK_fd73a1f72f73a968e0d8ea1e8e0\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`learning_resource\` DROP FOREIGN KEY \`FK_fd73a1f72f73a968e0d8ea1e8e0\``);
        await queryRunner.query(`DROP TABLE \`learning_resource\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
