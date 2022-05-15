import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Server Is Running : i keept the controller app cause usaly we use it to return app info for the root \'\/\' : Like version/Actual database connection etc... (Only in dev mode for sure)';
  }
}
