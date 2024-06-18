import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { JournalEntry } from './JournalEntry'
import { User } from './User'

@Entity()
export class EntryAnalysis {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @Column()
  entryId: string

  @ManyToOne(() => JournalEntry, (journalEntry) => journalEntry.analysis, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'entryId' })
  entry: JournalEntry

  @Column()
  userId: string

  @ManyToOne(() => User, (user) => user.analysis, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User

  @Column('text')
  mood: string

  @Column('text')
  subject: string

  @Column()
  negative: boolean

  @Column('text')
  summary: string

  @Column('text', { default: '#0101fe' })
  color: string

  @Column('float')
  sentimentScore: number
}
