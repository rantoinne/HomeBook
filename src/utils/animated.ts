import { ComponentClass } from 'react';
import Animated from 'react-native-reanimated';

/**
 * @param component A React Native component.
 * @returns Passed component with Animation capabilities
 */
export const createAnimatedComponent = (component: ComponentClass) => {
  return Animated.createAnimatedComponent(component);
}
