import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm'
import { User } from './User'
import { EntryAnalysis } from './EntryAnalysis'
import { JournalEntryStatus } from './JournalEntryStatus'

@Entity()
export class JournalEntry {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  userId: string

  @ManyToOne(() => User, (user) => user.entries)
  @JoinColumn({ name: 'userId' })
  user: User

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @Column('text')
  content: string

  @Column({
    type: 'enum',
    enum: JournalEntryStatus,
    default: JournalEntryStatus.DRAFT,
  })
  status: JournalEntryStatus

  @OneToOne(() => EntryAnalysis, (entryAnalysis) => entryAnalysis.entry)
  analysis: EntryAnalysis
}
