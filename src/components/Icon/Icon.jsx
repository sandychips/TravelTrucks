export default function Icon({ id, width = 20, height = 20, color = 'main' }) {
  return (
    <svg width={width} height={height} fill={`var(--${color})`}>
      <use xlinkHref={`/sprite.svg#icon-${id}`} width={width} height={height} />
    </svg>
  );
}
