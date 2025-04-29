import { ThemeProvider } from "@/components/providers/theme-provider";
import { Button } from "@/components/ui/button";

import { ThemeModeToggle } from "./components/theme-toggle-mode";

export default function HelloCoy() {
	return (
		<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<div>
				<Button>Hancuk!</Button>
				<ThemeModeToggle />
			</div>
		</ThemeProvider>
	);
}
