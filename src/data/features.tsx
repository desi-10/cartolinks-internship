import { BsImage } from "react-icons/bs";
import { IoVideocam } from "react-icons/io5";
import { TbWritingSign } from "react-icons/tb";
import { ImMagicWand } from "react-icons/im";
import { BiPencil } from "react-icons/bi";
import { GiRunningNinja } from "react-icons/gi";
import { FaPaintBrush } from "react-icons/fa";
import { PiMicrophoneStageFill } from "react-icons/pi";

export const features = [
  {
    title: "Image",
    isNew: true,
    description: "Generate images with custom styles in Flux and Ideogram.",
    icon: BsImage,
    iconBg: "bg-gradient-to-t from-gray-200 to-gray-400",
  },
  {
    title: "Video",
    isNew: false,
    description: "Generate videos with Hailuo, Pika, Runway, Luma, and more.",
    icon: IoVideocam,
    iconBg: "bg-gradient-to-t from-amber-200 to-amber-500",
  },
  {
    title: "Realtime",
    isNew: false,
    description: "Realtime AI rendering on a canvas. Instant feedback loops.",
    icon: TbWritingSign,
    iconBg: "bg-gradient-to-t from-blue-200 to-blue-500",
  },
  {
    title: "Enhancer",
    isNew: true,
    description: "Upscale and enhance images and videos up to 22K.",
    icon: ImMagicWand,
    iconBg: "bg-gradient-to-t from-gray-100 to-gray-900",
  },
  {
    title: "Edit",
    isNew: true,
    description: "Add objects, change style, or expand photos and generations.",
    icon: BiPencil,
    iconBg: "bg-gradient-to-t from-purple-200 to-purple-500",
  },
  {
    title: "Video Lipsync",
    isNew: true,
    description: "Lip sync any video to any audio.",
    icon: PiMicrophoneStageFill,
    iconBg: "bg-gradient-to-t from-green-200 to-green-500",
  },
  {
    title: "Motion Transfer",
    isNew: true,
    description: "Transfer motion to images and animate characters.",
    icon: GiRunningNinja,
    iconBg: "bg-black",
  },
  {
    title: "Train",
    isNew: false,
    description: "Teach Krea to replicate your style, products, or characters.",
    icon: FaPaintBrush,
    iconBg: "bg-gray-200",
  },
];

export const slides = [
  {
    label: "NEW IMAGE MODEL",
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    buttonText: "Try WAN 2.2",
    image: "./woman.jpg",
  },
  {
    label: "OPEN SOURCE MODEL",
    title: "Open Source",
    subtitle: "FLUX.1 Krea",
    description:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    buttonText: "Learn More",
    image: "./whiskey.jpg",
  },
  {
    label: "REALTIME MODEL",
    title: "Realtime",
    subtitle: "Realtime AI rendering",
    description:
      "Experience instant creative feedback with our realtime AI rendering engine. Draw, adjust, and generate without waiting.",
    buttonText: "Start Realtime",
    image: "./anime.jpg",
  },
  // {
  //   label: "ENHANCER TOOL",
  //   title: "Enhancer",
  //   subtitle: "Upscale up to 22K",
  //   description:
  //     "Upscale and enhance your images or videos to ultra-high resolution with powerful detail preservation and clarity.",
  //   buttonText: "Enhance Now",
  // },
  // {
  //   label: "VIDEO LIPSYNC",
  //   title: "Video Sync",
  //   subtitle: "Lip sync any video",
  //   description:
  //     "Automatically synchronize lip movements to any audio track, creating seamless and realistic videos in minutes.",
  //   buttonText: "Try Lipsync",
  // },
  // {
  //   label: "MOTION TRANSFER",
  //   title: "Motion Transfer",
  //   subtitle: "Animate with ease",
  //   description:
  //     "Transfer realistic body motion to static images and characters, bringing them to life effortlessly.",
  //   buttonText: "Animate Now",
  // },
  // {
  //   label: "TRAIN CUSTOM MODELS",
  //   title: "Custom Train",
  //   subtitle: "Train your own AI",
  //   description:
  //     "Personalize your AI experience by training custom models for your products, styles, or characters.",
  //   buttonText: "Train Model",
  // },
];
