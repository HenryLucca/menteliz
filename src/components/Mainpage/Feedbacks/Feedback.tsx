import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface FeedbackProps {
  avatar?: string;
  name: string;
  rating: number;
  comment: string;
}

export default function Feedback(props: FeedbackProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center text-center sm:text-start">
      <div>
        <Avatar>
          <AvatarImage src={props.avatar} alt={props.name} />
          <AvatarFallback>{props.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-col gap-1">
        <h3>{props.name}</h3>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={24}
              className={`${
                index < props.rating ? "text-secondaryCoral-600" : ""
              }`}
            />
          ))}
        </div>
        <p>{props.comment}</p>
      </div>
    </div>
  );
}
