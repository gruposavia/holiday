import { Oval } from "react-loader-spinner";

export default function Loader({height, width, className}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      className={className}
    >
      <Oval
        visible={true}
        height={height || '30'}
        width={width || '30'}
        color={"var(--color-dark-1)"}
        secondaryColor={"var(--color-dark-2)"}
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
        strokeWidth={3}
      />
    </div>
  );
}
