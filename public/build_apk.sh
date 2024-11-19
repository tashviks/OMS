
echo "Installing dependencies..."
npm install || { echo "Failed to install dependencies"; exit 1; }
echo "Building the APK..."
cd android || { echo "Failed to enter android directory"; exit 1; }
./gradlew clean || { echo "Failed to clean the project"; exit 1; }
./gradlew assembleRelease || { echo "Failed to build APK"; exit 1; }
APK_PATH="app/build/outputs/apk/release/app-arm64-v8a-release.apk"
if [ -f "$APK_PATH" ]; then
  echo "Build Successsful"
else
  echo "Build failed"
fi
