import { useColorScheme as _useColorScheme } from 'react-native';
import { ColorSchemeName } from 'react-native';

export function useColorScheme(): ColorSchemeName {
  return _useColorScheme();
}
