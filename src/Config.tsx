import React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { ICON_SIZE } from './constants';

export default function Config() {
  const [mode, setMode] = React.useState<'light' | 'dark'>(
    localStorage.getItem('dinnik-theme') === 'dark' ? 'dark' : 'light',
  );

  React.useEffect(() => {
    document.getElementById('root')!.className = `theme-${mode}`;
    localStorage.setItem('dinnik-theme', mode);
  }, [mode]);

  function toggle() {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
  }

  return (
    <>
      <button id="themeswitcher" className="dk-icon-button" onClick={toggle}>
        {mode === 'light' && <SunIcon width={ICON_SIZE} height={ICON_SIZE} />}
        {mode === 'dark' && <MoonIcon width={ICON_SIZE} height={ICON_SIZE} />}{' '}
      </button>
    </>
  );
}
