
export default function WrapperSection({children}: {children: React.ReactNode}) {
  return (
    <div className="mx-auto container lg:px-6 overflow-visible xl:max-w-[90%]">
      {children}
    </div>
  )
}
