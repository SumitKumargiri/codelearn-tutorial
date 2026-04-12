import { IoIosMale, IoIosFemale, IoIosTransgender } from "react-icons/io";

interface GenderIconProps {
  gender: string;
}

export const GenderIcon: React.FC<GenderIconProps> = ({ gender }) => {
  let icon;
  let colorClass;
  let label;

  switch (gender) {
    case "Male":
      icon = <IoIosMale className="h-5 w-5 text-blue-600" strokeWidth={25} />;
      label = "Male";
      break;
    case "Female":
      icon = <IoIosFemale className="h-5 w-5 text-pink-500" strokeWidth={25} />;
      label = "Female";
      break;
    default:
      icon = (
        <IoIosTransgender
          className="h-5 w-5 text-purple-500"
          strokeWidth={25}
        />
      );
      label = "Any Gender";
  }

  return (
    <div className="flex space-x-2 text-xs">
      {icon}
      <span>{label}</span>
    </div>
  );
};
