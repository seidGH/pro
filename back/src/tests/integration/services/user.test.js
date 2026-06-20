import { PrismaClient } from '@prisma/client';
import { UserService } from '../../../src/services/userService.js';

const prisma = new PrismaClient();
const userService = new UserService(prisma);

describe('UserService Integration', () => {
  // Clear the database table before each test
  beforeEach(async () => {
    await prisma.user.deleteMany({});
  });

  // Disconnect after all tests are done
  afterAll(async () => {
    await prisma.$disconnect();
  });

  test('should save a user to the real database', async () => {
    const userData = { name: 'Seid Integration' };
    const user = await userService.createUser(userData);

    expect(user.id).toBeDefined();
    expect(user.name).toBe('Seid Integration');

    // Verify it actually hit the database
    const dbUser = await prisma.user.findUnique({ where: { id: user.id } });
    expect(dbUser).not.toBeNull();
  });
});
