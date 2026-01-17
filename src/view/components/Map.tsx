export const Map = ({
  height = '400px',
  address,
}: {
  height?: string;
  address: string;
}) => {
  const encodedAddress = encodeURIComponent(address);

  const src = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <iframe
      title="GoogleMap"
      src={src}
      width="100%"
      height={height}
      style={{ border: 0 }}
      loading="eager"
    />
  );
};
