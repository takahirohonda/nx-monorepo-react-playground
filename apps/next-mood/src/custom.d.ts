import { DataSource } from 'typeorm'

declare global {
  // eslint-disable-next-line no-var
  var dataSource: DataSource
}
