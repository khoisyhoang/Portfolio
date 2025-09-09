
export default function WrapperSection({children}: {children: React.ReactNode}) {
  return (
    <div className="mx-auto container px-6 overflow-visible">
      {children}
    </div>
  )
}
