interface Props {
  variant?: 'warm' | 'bush' | 'mixed';
  className?: string;
}

export default function AmbientBlobs({ variant = 'warm', className = '' }: Props) {
  const palettes = {
    warm: ['bg-copper/30', 'bg-ember/25', 'bg-sand-300/40'],
    bush: ['bg-bush/30', 'bg-copper/20', 'bg-sand-200/40'],
    mixed: ['bg-copper/25', 'bg-bush/25', 'bg-ember/20']
  } as const;
  const colors = palettes[variant];
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className={`blob ${colors[0]} h-[28rem] w-[28rem] -left-20 -top-24 animate-blob-drift`} />
      <div
        className={`blob ${colors[1]} h-[22rem] w-[22rem] right-[-4rem] top-1/3 animate-blob-drift`}
        style={{ animationDelay: '-6s' }}
      />
      <div
        className={`blob ${colors[2]} h-[26rem] w-[26rem] left-1/3 bottom-[-6rem] animate-blob-drift`}
        style={{ animationDelay: '-12s' }}
      />
    </div>
  );
}
