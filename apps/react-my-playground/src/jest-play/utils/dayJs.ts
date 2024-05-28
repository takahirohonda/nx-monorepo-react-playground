import dayjs from 'dayjs'

export const oneDayBefore = () => {
  return dayjs().add(-1, 'day').unix()
}

export const oneDayAfter = () => {
  return dayjs().add(1, 'day').unix()
}

// export const now = dayjs()