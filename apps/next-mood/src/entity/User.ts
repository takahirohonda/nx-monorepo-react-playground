import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
} from 'typeorm'
import { Account } from './Account'
import { JournalEntry } from './JournalEntry'
import { EntryAnalysis } from './EntryAnalysis'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  email: string

  @Column({ unique: true })
  clerkId: string

  @Column({ nullable: true })
  name: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @OneToOne(() => Account, (account) => account.user)
  account: Account

  @OneToMany(() => JournalEntry, (journalEntry) => journalEntry.user)
  entries: JournalEntry[]

  @OneToMany(() => EntryAnalysis, (entryAnalysis) => entryAnalysis.user)
  analysis: EntryAnalysis[]
}
