import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { StarIcon, HeartIcon } from "@heroicons/react/24/solid";
import {
  StarIcon as StarIconOutline,
  HeartIcon as HeartIconOutline,
} from "@heroicons/react/24/outline";

export default function CardElement(props) {
  const { imageUrl, title, rating, description, navigateUrl } = props;
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Card className="w-72 shadow-xl mt-6 ">
      <CardHeader floated={true} color="blue-gray" className="shadow-2xl ">
        <img
          className="w-60 h-60 object-contain  transition duration-500 group-hover:scale-105"
          src={imageUrl}
          alt="ui/ux review check"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
        <IconButton
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-4 end-4 rounded-full"
          onClick={handleLikeClick}
        >
          {isLiked ? (
            <HeartIcon className="h-6 w-6" />
          ) : (
            <HeartIconOutline className="h-6 w-6" />
          )}
        </IconButton>
      </CardHeader>
      <CardBody>
        <div className="mb-1 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {title}
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1 font-normal"
          >
            <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
            {rating}
          </Typography>
        </div>
        <Typography color="gray">{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          onClick={() => navigate(navigateUrl)}
          size="md"
          color="red"
          fullWidth={true}
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}
