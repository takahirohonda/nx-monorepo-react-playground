# Getting started

Make sure to generate prisma client because this repo has multiple prisma clients and each project needs to generate own client.

```bash
# Generate client in node_module
yarn nx generate-prisma-client next-app-utils-prisma-client
# Then migrate
yarn nx migrate next-app-utils-prisma-client
```

# REFERENCE

## Getting Tailwind to work

1. add `postcss.config.js`
2. add `tailwind.config.js`
3. add import to `global.css`

## Handling server actions...

To handle server action results nicely, we need to use canary react hooks...

[Server Actions and Mutations](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
[useFormStatus](https://react.dev/reference/react-dom/hooks/useFormStatus)
[useActionState](https://react.dev/reference/react/useActionState)

```tsx
export const Form = () => {
  const [completeBigCommerceCheckoutState, completeBigCommerceCheckoutAction] = useActionState(completeBigCommerceCheckout, null)
  return <form action={(formData) => completeBigCommerceCheckoutAction({ address, formData })}></form>
}
```

```tsx
export const PaymentButton = () => {
  // canary hook can be used within a form
  const { pending } = useFormStatus()
  return (
    <Button
      labelSize="md"
      theme="filled-green"
      rounded="full"
      className={clsx('ml-auto mt-4 w-max px-8', {
        'flex items-center gap-4': pending,
      })}
      disabled={pending}
    >
      {' '}
      Button
    </Button>
  )
}
```
