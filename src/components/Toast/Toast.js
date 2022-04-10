import { toast } from "react-toastify";

export const notify = (text) => {
  toast.success(text);
};
