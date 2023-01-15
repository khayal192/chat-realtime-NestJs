import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('chat')
export class ChatEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  text: string;

  @Column()
  createdAt: Date;
}
