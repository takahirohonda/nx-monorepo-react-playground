import { InMemoryCache, Cache, QueryOptions, Reference } from '@apollo/client'
import type { DocumentNode } from 'graphql'

export class LoggingCache extends InMemoryCache {
  constructor(config?: Cache.InMemoryCacheConfig) {
    super(config)
  }

  writeQuery<TData = any, TVariables = any>(
    options: QueryOptions<TData, TVariables>
  ): Reference | undefined {
    console.log('Cache updated (writeQuery):', options)
    const result = super.writeQuery(options)
    console.log('writeQuery result:', result)
    return result
  }

  writeFragment(options: Cache.WriteFragmentOptions) {
    console.log('Cache updated (writeFragment):', options)
    const result = super.writeFragment(options)
    console.log('writeFragment result:', result)
    return result
  }

  modify<Entity extends Record<string, any> = Record<string, any>>(
    options: Cache.ModifyOptions<Entity>
  ) {
    console.log('Cache modified (modify):', options)
    const result = super.modify(options)
    console.log('modify result:', result)
    return result
  }

  evict(options: Cache.EvictOptions) {
    console.log('Cache evicted (evict):', options)
    const result = super.evict(options)
    console.log('evict result:', result)
    return result
  }

  // Optionally, you can add logging for other methods like diff, watch, etc.
  watch<TData = any, TVariables = any>(
    watch: Cache.WatchOptions<TData, TVariables>
  ): () => void {
    console.log('Cache watch called:', watch)
    const unwatch = super.watch(watch)
    return () => {
      console.log('Cache watch stopped:', watch)
      unwatch()
    }
  }

  // Other methods from InMemoryCache can be overridden with logging if needed
}
