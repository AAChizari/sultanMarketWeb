export const Button = (props: React.PropsWithChildren) => {
    return(
        <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#009999] shadow-[0px0px_12px#8c45ff]">
        <div className="absolute inset-0">
        <div className="rounded-lg border border-[#009999] absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="rounded-lg border absolute inset-0 border-[#009999] [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_#009999_inset] rounded-lg"></div>
        </div>
        <span>{props.children}</span>
      </button>
    )
}