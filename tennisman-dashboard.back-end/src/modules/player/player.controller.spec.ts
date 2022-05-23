import { Test, TestingModule } from '@nestjs/testing';
import { Player } from '../../entities/player.entity';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';

describe('PlayerController', () => {
  let controller: PlayerController;

  const mockPlayerService = {
    getAll : jest.fn(()=>{
      return [new Player(),new Player()];
    })

  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerController],
      providers: [PlayerService]
    })
    .overrideProvider(PlayerService)
    .useValue(mockPlayerService)
    .compile();

    controller = module.get<PlayerController>(PlayerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return Players', ()=>{
    const result = controller.getAll();
  });
});
