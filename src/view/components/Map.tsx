export const Map = ({
  address,
  className = '',
}: {
  className?: string;
  address: string;
}) => {
  const encodedAddress = encodeURIComponent(address);

  const src = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <iframe
      className={className}
      title="GoogleMap"
      src={src}
      width="100%"
      height={'100%'}
      style={{ border: 0 }}
      loading="eager"
    />
  );
};
