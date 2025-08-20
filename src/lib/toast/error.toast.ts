import defaultToastConfig from "./config";
import { toast, ToasterProps } from "sonner";

function errorToast (message: string, toastConfig?: ToasterProps) {
  toast.error(message, {
    ...defaultToastConfig,
    ...toastConfig,
  })
}

export default errorToast