import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

export const getSafeAreaInsets = (): EdgeInsets => {
  const insets = useSafeAreaInsets();
  return insets;
}
