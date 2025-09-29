import {HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon,} from 'lucide-react';
import styles from './styles.module.css';
import {useEffect, useState} from 'react';
import * as React from "react";

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        return (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    });

    const nextThemeIcon = {
        dark: <SunIcon/>,
        light: <MoonIcon/>,
    };

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) {
        event.preventDefault();

        setTheme(prevTheme => {
            return prevTheme === 'dark' ? 'light' : 'dark';
        });
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <nav className={styles.menu}>
            <a
                className={styles.menuLink}
                href='#'
                aria-label='Ir para a Home'
                title='Ir para a Home'
            >
                <HouseIcon/>
            </a>

            <a
                className={styles.menuLink}
                href='#'
                aria-label='Ver Histórico'
                title='Ver Histórico'
            >
                <HistoryIcon/>
            </a>

            <a
                className={styles.menuLink}
                href='#'
                aria-label='Configurações'
                title='Configurações'
            >
                <SettingsIcon/>
            </a>

            <a
                className={styles.menuLink}
                href='#'
                aria-label='Mudar Tema'
                title='Mudar Tema'
                onClick={handleThemeChange}
            >
                {nextThemeIcon[theme]}
            </a>
        </nav>
    );
}