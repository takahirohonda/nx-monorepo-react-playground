interface ProductDisplay {
  imgUrl: string
  name: string
  price: string
}

export const ProductDisplay = ({ imgUrl, name, price }: ProductDisplay) => {
  return (
    <div className="flex-col gap-3">
      <div className="mt-8 mb-2">
        <img src={imgUrl} alt={name} />
      </div>
      <div className="text-large text-sky-600">{name}</div>
      <div>AU${price}</div>
    </div>
  )
}
