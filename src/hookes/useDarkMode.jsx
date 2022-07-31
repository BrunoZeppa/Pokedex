import { useState } from "react";

const useDarkMode = () =>{


    const [isDark, setIsDark] = useState(false);

    const changeDark = () => {
        setIsDark(!isDark);
    }


    return {isDark, changeDark}
}

export default useDarkMode  