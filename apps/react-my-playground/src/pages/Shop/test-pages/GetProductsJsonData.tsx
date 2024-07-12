import { useGetProductsByIdsQuery } from '../graphql/experimenting/GetProductsByIds.generated'
import { ROOT } from '../../routes/routes'
import { useGetProducts } from '../hooks/useGetProducts'
import { useGetAllCartsQuery } from '../graphql/cart-operations/GetAllCarts.generated'
import { clsx } from 'clsx'
export const GetProductsJsonData = () => {
  const { products } = useGetProducts()

  const { data: productById } = useGetProductsByIdsQuery({
    variables: { entityIds: [150] },
  })
  const { data } = useGetAllCartsQuery()

  return (
    <div className="flex-col gap-4">
      <h1 className="text-xl">ShopPage</h1>
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[16px]">
          <h2 className="text-2xl">Data from getProducts</h2>
          <div>{JSON.stringify(products)}</div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <h2 className="text-2xl">Data from ProductsByIds</h2>
          <div>{JSON.stringify(productById)}</div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <h2 className="text-2xl">Cart Contents</h2>
          <div>{JSON.stringify(data)}</div>
        </div>
        <a
          className={clsx(`text-rose-600 
                hover:underline
               hover:text-green-900 
               hover:decoration-solid`)}
          href={`${ROOT.SHOP.path}`}
        >
          Go back to ShopPage
        </a>
      </div>
    </div>
  )
}
