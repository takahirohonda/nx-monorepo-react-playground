import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @Column({ unique: true })
  clerkId: string

  @Column({ unique: true })
  email: string

  @OneToMany(() => JournalEntry, (journalEntry) => journalEntry.user)
  journalEntries: JournalEntry[]
}

@Entity()
export class JournalEntry extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @Column()
  userId: string

  @ManyToOne(() => User, (user) => user.journalEntries)
  user: User

  @Column('text')
  content: string

  @Column({ nullable: true })
  analysisId: string

  @ManyToOne(() => Analysis, (analysis) => analysis.entry, { nullable: true })
  analysis: Analysis

  // Optional index
  // @Index()
  // userId: string;
}

@Entity()
export class Analysis extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @Column()
  entryId: string

  @OneToOne(() => JournalEntry, (journalEntry) => journalEntry.analysis)
  @JoinColumn()
  entry: JournalEntry

  @Column()
  mood: string

  @Column('text')
  summary: string

  @Column()
  color: string

  @Column()
  negative: boolean

  // Unique constraint
  // @Unique()
  // entryId: string;
}
