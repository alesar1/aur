#!/bin/bash

# Allow users to override command-line options
if [[ -f ~/.config/chromium-flags.conf ]]; then
   CHROMIUM_USER_FLAGS="$(cat ~/.config/chromium-flags.conf)"
fi

# Detect Pepper Flash
for i in '/opt/google/chrome-unstable' '/usr/lib'; do
   if [[ -f $i/PepperFlash/libpepflashplayer.so ]]; then
      PepperFlash="$i/PepperFlash/libpepflashplayer.so"
      PepperFlashVersion="$(grep 'version' $i/PepperFlash/manifest.json | cut -d '"' -f4)"
      CHROMIUM_USER_FLAGS+=" --ppapi-flash-path=$PepperFlash --ppapi-flash-version=$PepperFlashVersion"
      continue
   fi
done

# Let the wrapped binary know that it has been run through the wrapper.
export CHROME_WRAPPER="$(readlink -f $0)"
export CHROME_DESKTOP="$0.desktop"

# Google API keys: https://projects.archlinux.org/svntogit/packages.git/tree/trunk/PKGBUILD?h=packages/chromium
export GOOGLE_API_KEY=AIzaSyDwr302FpOSkGRpLlUpPThNTDPbXcIn_FM
export GOOGLE_DEFAULT_CLIENT_ID=413772536636.apps.googleusercontent.com
export GOOGLE_DEFAULT_CLIENT_SECRET=0ZChLK6AxeA3Isu96MkwqDR4

# Launch
exec /opt/chromium-snapshot/chrome $CHROMIUM_USER_FLAGS $@