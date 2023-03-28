import { Injectable } from '@nestjs/common';
import { DbService } from '../prisma/db-service';

@Injectable()
export class AppService {
  constructor(private readonly db: DbService) {}

  getAll() {
    return this.db.user.findMany({ where: { password: '1234' } });
  }

  async addUser() {
    return await this.db.user.createMany({
      data: [
        { name: 'Bob', email: 'bob@prisma.io', password: '1234' },
        { name: 'Yewande', email: 'yewande@prisma.io', password: '1234' },
        { name: 'Angelique', email: 'angelique@prisma.io', password: '1234' },
      ],
    });
  }
}
