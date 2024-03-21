interface IPropsVideoBox {
  videoKey: string;
  styles?: React.CSSProperties;
}

const defaultStyles = {
  fontSize: 0,
};

export default function VideoBox(props: IPropsVideoBox) {
  const { videoKey, styles } = props;

  return (
    <div style={{ ...defaultStyles, ...styles }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoKey}`}
        style={{ width: "100%", height: "100%" }}
      ></iframe>
    </div>
  );
}
