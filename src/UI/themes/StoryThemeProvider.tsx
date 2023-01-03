import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import theme from "./light-themes";
import { storyNameFromExport } from "@storybook/csf";


const StoryThemeProvider = (storyFn:any)=>(
    <ThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>
            {storyFn}
        </EmotionThemeProvider>

    </ThemeProvider>
)

export default StoryThemeProvider;