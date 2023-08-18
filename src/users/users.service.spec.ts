import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from './../entity/user.entity';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', () => {
    const user1 = new User(1, 'Angel De La Cruz', 'test2@gmail.com');
    const user2 = new User(2, 'Angel De La Cruz', 'test2@gmail.com');
    service.create(user1);
    service.create(user2);

    service.remove(1);

    expect(service.findAll()).toEqual([user2]);
    expect(service.findOne(1)).toBeUndefined();
  });


});