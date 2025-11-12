import type { Project } from "@/typings/project";

const projects: Project[] = [
  {
    title: "Personal Website",
    description:
      "Created a personal website to learn HTMl and CSS for Hack4Impact",
    image: "/h4i_website.png",
    imageAlt: "Hack 4 Impact Website",
    url: "/",
  },
  {
    title: "Color Jumper",
    description:
      "Developing an Android and iOS video game, where the player switches colors and jumps to blocks to stay alive. Made with Godot and GDScript.",
    image: "/bootsplash.png",
    imageAlt: "Color Jumper",
    url: "https://github.com/Xavier-Royer/Color-Jumper",
  },
  {
    title: "Discord Bot: Matt",
    description:
      "Recreated Sorry! board game in Discord, complete with automated turn verification and thorough Discord integration. Used Pillow library to generate on-the-fly images of the current board based on the game state. Stored game state and other variables from all the features of the bot in a sqlite database with SQL injection prevention. Accessed external API for song quotes and random trivia.",
    image: "/mattbot.png",
    imageAlt: "Discord Bot",
    url: "https://github.com/7Teen17/TFTDiscordBot",
  },
];

export default projects;
