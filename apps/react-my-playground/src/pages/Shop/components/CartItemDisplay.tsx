import { useMemo } from 'react'
import { getCoreRowModel, useReactTable } from '@tanstack/react-table'

interface CartItemsDisplayProps {
  name: string
  quantity: number
}

const dataExample = [
  {
    name: 'item 1',
    quantity: 1,
  },
  {
    name: 'item 2',
    quantity: 2,
  },
]

type CartItem = {
  name: string
  quantity: number
}

// In progres...
// https://tanstack.com/table/latest/docs/framework/react/examples/basic
export const CartItemDisplay = ({ name, quantity }: CartItemsDisplayProps) => {
  const columns = useMemo(
    () => [
      {
        header: 'Product',
        accessorKey: 'name',
      },
      {
        header: 'Quantity',
        accessorKey: 'quantity',
      },
    ],
    []
  )

  const table = useReactTable<CartItem>({
    columns,
    data: dataExample,
    getCoreRowModel: getCoreRowModel(),
  })

  return table
}
