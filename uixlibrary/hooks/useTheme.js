import { useState } from 'react';
import { useChangeTheme } from '../context/provider';
import { darkTheme, theme as defaultTheme} from '../theme/utils';

export const useTheme = () => {
  
  const { isDark } = useChangeTheme();  
  

  const getTheme = () => { return isDark ? defaultTheme  : darkTheme }
  
  const theme = getTheme();

  return theme 
}