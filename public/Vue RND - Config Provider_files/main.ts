import { createApp } from "/node_modules/.vite/deps/vue.js?v=5d5ead1c";
import App from "/src/App.vue";
import "/node_modules/@unocss/reset/sanitize/sanitize.css";
import "/node_modules/@unocss/reset/sanitize/assets.css";
import "/node_modules/@unocss/reset/sanitize/forms.css";
import "/node_modules/@unocss/reset/sanitize/typography.css";
import "/node_modules/@unocss/reset/sanitize/reduce-motion.css";
import "/node_modules/@unocss/reset/sanitize/system-ui.css";
import "/__uno.css";
import "/src/styles/main.scss";
import { useThemeStore } from "/src/store/theme.store.ts";
import useRegisterUtils from "/src/utils/register.utils.ts?t=1712747460522";
const { registerLayouts } = useRegisterUtils();
import pinia from "/src/store/index.ts";
import router from "/src/router/index.ts?t=1712747486720";
const app = createApp(App);
registerLayouts(app);
app.use(pinia);
app.use(router);
app.mount("#app");
const themeStore = useThemeStore();
themeStore.applyTheme();
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  if (themeStore.theme === "system") {
    const newTheme = e.matches ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
  }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJ1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG5cbi8vIFRoZW1lXG5pbXBvcnQgJ0B1bm9jc3MvcmVzZXQvc2FuaXRpemUvc2FuaXRpemUuY3NzJ1xuaW1wb3J0ICdAdW5vY3NzL3Jlc2V0L3Nhbml0aXplL2Fzc2V0cy5jc3MnXG5pbXBvcnQgJ0B1bm9jc3MvcmVzZXQvc2FuaXRpemUvZm9ybXMuY3NzJ1xuaW1wb3J0ICdAdW5vY3NzL3Jlc2V0L3Nhbml0aXplL3R5cG9ncmFwaHkuY3NzJ1xuaW1wb3J0ICdAdW5vY3NzL3Jlc2V0L3Nhbml0aXplL3JlZHVjZS1tb3Rpb24uY3NzJ1xuaW1wb3J0ICdAdW5vY3NzL3Jlc2V0L3Nhbml0aXplL3N5c3RlbS11aS5jc3MnXG5cbmltcG9ydCAndmlydHVhbDp1bm8uY3NzJ1xuaW1wb3J0ICd+L3N0eWxlcy9tYWluLnNjc3MnXG5pbXBvcnQgeyB1c2VUaGVtZVN0b3JlIH0gZnJvbSAnfi9zdG9yZS90aGVtZS5zdG9yZS50cydcbmltcG9ydCB1c2VSZWdpc3RlclV0aWxzIGZyb20gJ34vdXRpbHMvcmVnaXN0ZXIudXRpbHMudHMnXG5jb25zdCB7IHJlZ2lzdGVyTGF5b3V0cyB9ID0gdXNlUmVnaXN0ZXJVdGlscygpXG5cbmltcG9ydCBwaW5pYSBmcm9tICd+L3N0b3JlJ1xuaW1wb3J0IHJvdXRlciBmcm9tICd+L3JvdXRlcidcblxuY29uc3QgYXBwID0gY3JlYXRlQXBwKEFwcClcblxucmVnaXN0ZXJMYXlvdXRzKGFwcClcblxuYXBwLnVzZShwaW5pYSlcbmFwcC51c2Uocm91dGVyKVxuYXBwLm1vdW50KCcjYXBwJylcblxuY29uc3QgdGhlbWVTdG9yZSA9IHVzZVRoZW1lU3RvcmUoKVxudGhlbWVTdG9yZS5hcHBseVRoZW1lKClcbndpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gIGlmICh0aGVtZVN0b3JlLnRoZW1lID09PSAnc3lzdGVtJykge1xuICAgIGNvbnN0IG5ld1RoZW1lID0gZS5tYXRjaGVzID8gJ2RhcmsnIDogJ2xpZ2h0JztcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgbmV3VGhlbWUpXG4gIH1cbn0pXG5cbiJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxpQkFBaUI7QUFDMUIsT0FBTyxTQUFTO0FBR2hCLE9BQU87QUFDUCxPQUFPO0FBQ1AsT0FBTztBQUNQLE9BQU87QUFDUCxPQUFPO0FBQ1AsT0FBTztBQUVQLE9BQU87QUFDUCxPQUFPO0FBQ1AsU0FBUyxxQkFBcUI7QUFDOUIsT0FBTyxzQkFBc0I7QUFDN0IsTUFBTSxFQUFFLGdCQUFnQixJQUFJLGlCQUFpQjtBQUU3QyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxZQUFZO0FBRW5CLE1BQU0sTUFBTSxVQUFVLEdBQUc7QUFFekIsZ0JBQWdCLEdBQUc7QUFFbkIsSUFBSSxJQUFJLEtBQUs7QUFDYixJQUFJLElBQUksTUFBTTtBQUNkLElBQUksTUFBTSxNQUFNO0FBRWhCLE1BQU0sYUFBYSxjQUFjO0FBQ2pDLFdBQVcsV0FBVztBQUN0QixPQUFPLFdBQVcsOEJBQThCLEVBQUUsaUJBQWlCLFVBQVUsT0FBSztBQUNoRixNQUFJLFdBQVcsVUFBVSxVQUFVO0FBQ2pDLFVBQU0sV0FBVyxFQUFFLFVBQVUsU0FBUztBQUN0QyxhQUFTLGdCQUFnQixhQUFhLGNBQWMsUUFBUTtBQUFBLEVBQzlEO0FBQ0YsQ0FBQzsiLCJuYW1lcyI6W119