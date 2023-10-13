import { useAppState } from "../state/AppState";

export const Progress = () => {
  const { appState } = useAppState();
  return (
    <div
      className={`bg-primary h-1 -translate-y-1/2`}
      style={{
        width: appState.progress + "%",
      }}
    />
  );
};
