import { InMemoryCache, Cache, Reference } from '@apollo/client'

export class LoggingCache extends InMemoryCache {
  writeQuery<TData, TVariables>(
    options: Cache.WriteQueryOptions<TData, TVariables>
  ): Reference | undefined {
    console.log('Cache updated (writeQuery):', options)
    const result = super.writeQuery(options)
    console.log('writeQuery result:', result)
    return result
  }

  writeFragment<TData, TVariables>(
    options: Cache.WriteFragmentOptions<TData, TVariables>
  ) {
    console.log('Cache updated (writeFragment):', options)
    const result = super.writeFragment(options)
    console.log('writeFragment result:', result)
    return result
  }

  modify<Entity extends Record<string, unknown> = Record<string, unknown>>(
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
  watch<TData, TVariables>(
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
