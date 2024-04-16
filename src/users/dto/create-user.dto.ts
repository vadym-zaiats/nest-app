import { Channel } from '../entities/user.entity';
export class CreateUserDto {
  email: string;
  password: string;
  sendNotification: boolean;
  notificationChannel: Channel;
}
