export type ModalTypes = {
  open: boolean;
  url: string;
  type?: "success" | "error" | "warning" | "info";
  onClose?: () => void;
};
