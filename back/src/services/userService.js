export class UserService {
  constructor(prisma) {
    this.prisma = prisma;
  }

  async createUser(data) {
    return this.prisma.user.create({ data });
  }

  async getUserById(id) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  async updateUser(id, data) {
    return this.prisma.user.update({ where: { id }, data });
  }

  async deleteUser(id) {
    return this.prisma.user.delete({ where: { id } });
  }
}

