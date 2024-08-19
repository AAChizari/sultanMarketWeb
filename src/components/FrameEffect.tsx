interface FrameEffectProps {
  children: React.ReactNode;
  className?: string;
}

export const FrameEffect = ({ children, className = '' }: FrameEffectProps) => {
  return (
    <div className={`relative h-full ${className}`}>
      <div className="absolute inset-0 rounded-lg">
        <div className="rounded-lg border border-black absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="rounded-lg border absolute inset-0 border-black [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_black_inset] rounded-lg"></div>
      </div>
      <div className="relative z-10 h-full overflow-hidden">
        {children}
      </div>
    </div>
  );
};