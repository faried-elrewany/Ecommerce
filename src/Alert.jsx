import { useEffect } from "react";
import { Alert } from "@material-tailwind/react";
import {
  InformationCircleIcon,
  CheckCircleIcon,
  XCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

export default function AlertMessage({ message, type, onClose }) {
  let colorClass = "";
  let icon = null;

  switch (type) {
    case "info":
      colorClass = "blue";
      icon = <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />;
      break;
    case "success":
      colorClass = "green";
      icon = <CheckCircleIcon strokeWidth={2} className="h-6 w-6" />;
      break;
    case "warning":
      colorClass = "yellow";
      icon = <ExclamationCircleIcon strokeWidth={2} className="h-6 w-6" />;
      break;
    case "error":
      colorClass = "red";
      icon = <XCircleIcon strokeWidth={2} className="h-6 w-6" />;
      break;
    default:
      colorClass = "blue";
      icon = <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />;
      break;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 m-4 flex w-full flex-col gap-2">
      <Alert color={colorClass} icon={icon} onClose={onClose}>
        {message}
      </Alert>
    </div>
  );
}
