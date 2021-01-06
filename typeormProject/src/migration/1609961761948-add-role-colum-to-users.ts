import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addRoleColumToUsers1609961761948 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> { 
        const userDoc = await queryRunner.getTable('users');
        const rolecolumn = new TableColumn({ name: 'role', type: 'int'});
        await queryRunner.addColumn(userDoc ,rolecolumn);        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
