import React, { useState, useContext } from "react";
import "./index.css";


const themes = {
    light: {
        id: 1,
        foreground: "#000000",
        background: "#eeeeee",
    },
    dark: {
        id: 2,
        foreground: "#ffffff",
        background: "#222222",
    },
}

export const prediction = {
    syahrul: {
        id: 1,
        nama: "syahrul",
        no: "*",
        lambang: "Syahrul Ramadhan",
        color: 'blue'
    },

    farras: {
        id: 2,
        nama: "farras",
        no:"*",
        lambang: "Ilham Farras Adnawan",
        color: 'lightblue'
    },

    seto: {
        id: 3,
        nama: "seto",
        no:"*",
        lambang: "Dimas Seto Rizky Goenardi",
        color: 'red'
    },

    ishaq: {
        id: 4,
        nama: "ishaq",
        no:"*",
        lambang: "Muhammad Ishaq Matanggwan",
        color: 'green'
    }
}

const ThemeContext = React.createContext(themes.light);
export default function Index() {
    const [theme, setTheme] = useState(themes.dark);


    const changeTheme = () => {
        if (theme.id === themes.light.id) {
            setTheme(themes.dark);
        } else {
            setTheme(themes.light);
        }
    };

    return (
        <ThemeContext.Provider value={{  theme, changeTheme }}>
            <div className="Main" style={{
                background:
                    theme.background, color: theme.foreground
            }}>
                <p className="Text">Theme by useContext</p>
                <p>KELOMPOK 06</p>
                <ThemedButton />
            </div>
        </ThemeContext.Provider>
    );
}

function ThemedButton() {
    const { theme, changeTheme } = useContext(ThemeContext);
    return (
        <button
            className="Button"
            style={{
                background: theme.background, color:
                    theme.foreground
            }}
            onClick={changeTheme}>
            i am styled by theme context!
        </button>
    );
}
