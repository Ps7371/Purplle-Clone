
import theme, { COLORS, SIZES, FONTS,width,height} from "./theme";
import Colors from "./Colors";
import { Icons } from "./Icons";
import imagesW from "./imagesW";
import constants from "./constants";



export {theme, COLORS, SIZES, FONTS,Colors,Icons,width,height,imagesW, constants,
};

// react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res
// $ cd android
// #Create debug build:
// $ ./gradlew assembleDebug
// #Create release build:
// $ ./gradlew assembleRelease

// ./gradlew assembleRelease -x bundleReleaseJsAndAssets

// After you follow the first response, you can run your app using

// react-native run-android --variant=debug
