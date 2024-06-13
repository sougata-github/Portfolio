import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

import Link from "next/link";

const ProjectButton = ({
  children,
  url,
  content,
}: {
  children: React.ReactNode;
  url: string;
  content: string;
}) => {
  return (
    <Link href={url} target="_blank">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
            {children}
          </TooltipTrigger>
          <TooltipContent className="mb-2 border-none text-accent text-[12.8px] bg-primary">
            <p>{content}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  );
};

export default ProjectButton;
