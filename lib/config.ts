import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Quel est le statut de la commande 105 ?",
    prompt: "Quel est le statut de la commande 105 ?",
    icon: "circle-question",
  },
  {
    label: "Quel sont les caractéristiques de la collection Serenity ?",
    prompt: "Quel sont les caractéristiques de la collection Serenity ?",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Poser une question...";

export const GREETING = "Comment puis-je vous aider aujourd'hui ?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({

  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: "#ebba60",
      level: 1,
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
