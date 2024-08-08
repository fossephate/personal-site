// import { useEffect, useState } from "react";

// function useDarkMode() {
//   const [theme, setTheme] = useState(typeof window !== "undefined" ? localStorage.theme : "dark");
//   const colorTheme = theme === "dark" ? "light" : "dark";

//   useEffect(() => {
//     const root = window.document.documentElement;

//     root.classList.remove(colorTheme);
//     root.classList.add(theme);

//     if (typeof window !== "undefined") {
//       localStorage.setItem("theme", theme);
//     }
//   }, [theme]);

//   return [colorTheme, setTheme];
// }

// export default useDarkMode;



import { useEffect, useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState(typeof window !== "undefined" ? localStorage.theme : "dark");
  const colorTheme = "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    
    root.classList.remove("dark");
    root.classList.add(theme);

    let defaultTheme;

    // use css:
    if (window.matchMedia) {
      // Check if the dark-mode Media-Query matches
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        defaultTheme = "dark";
      } else {
        defaultTheme = "light";
      }
    }

    if (!localStorage.theme) {
      setTheme(defaultTheme);
    }

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [colorTheme, setTheme];
}

export default useDarkMode;
