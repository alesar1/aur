# Maintainer: Teteros <teteros at teknik dot io>

pkgname=radium-bin
pkgver=6.4.76
pkgrel=1
pkgdesc='A graphical music editor. A next generation tracker. (Demo Version)'
arch=(x86_64)
url=https://users.notam04.no/~kjetism/radium
license=(GPL2)
provides=(radium)
conflicts=(radium)
groups=(pro-audio)
depends=(
  desktop-file-utils
  glu
  hicolor-icon-theme
  jack2
  libsm
  libxcomposite
  libxrender
  shared-mime-info
  ttf-bitstream-vera
)
optdepends=(
  'new-session-manager: for session management'
  'vst-plugins: more plugins'
)
options=(!strip)
source=("https://users.notam02.no/~kjetism/radium/demos/linux/radium_64bit_linux-$pkgver-demo.tar.xz")
sha256sums=('ca2a12cc73d9a8fad46e0322d0a2e972dc31e341f24a394bbb8d80e06d82fb18')

package() {
  cd radium_64bit_linux-$pkgver-demo

  # Nouveau and AMD drivers require a newer libstdc++ than Radium provides so removing it is necessary to avoid crashes
  rm lib/libstdc++.so.6

  # Generate a dummy libselinux.so because official builds depend on it
  # https://github.com/kmatheussen/radium/pull/1286#issuecomment-686697881
  echo "extern int is_selinux_enabled(void){return 0;}" > selinux-dummy.c
  gcc -s -shared -o lib/libselinux.so.1 selinux-dummy.c
  rm selinux-dummy.c

  # Copy radium files to a self-contained /opt prefix
  mkdir -p "$pkgdir/opt/radium"
  cp -a bin lib "$pkgdir/opt/radium"

  # Recreate run_radium.sh
  echo '#!/usr/bin/env bash' > "$pkgdir/opt/radium/run_radium.sh"
  echo LD_LIBRARY_PATH='"/opt/radium/lib:$LD_LIBRARY_PATH"' QT_QPA_PLATFORM_PLUGIN_PATH=/opt/radium/bin/qt5_plugins \
    /opt/radium/bin/radium '"$@"' >> "$pkgdir/opt/radium/run_radium.sh"
  chmod +x "$pkgdir/opt/radium/run_radium.sh"

  # Wrapper, Icons, .desktop and mimetype files
  mkdir -p "$pkgdir/usr/bin" \
    "$pkgdir/usr/share/icons/hicolor/"{16x16,32x32,128x128,256x256}"/apps" \
    "$pkgdir/usr/share/applications" \
    "$pkgdir/usr/share/mime/packages"
  ln -s "/opt/radium/run_radium.sh" "$pkgdir/usr/bin/radium"
  ln -s "/opt/radium/bin/radium_16x16x8.png" "$pkgdir/usr/share/icons/hicolor/16x16/apps/radium.png"
  ln -s "/opt/radium/bin/radium_32x32x24.png" "$pkgdir/usr/share/icons/hicolor/32x32/apps/radium.png"
  ln -s "/opt/radium/bin/radium_128x128x32.png" "$pkgdir/usr/share/icons/hicolor/128x128/apps/radium.png"
  ln -s "/opt/radium/bin/radium_256x256x32.png" "$pkgdir/usr/share/icons/hicolor/256x256/apps/radium.png"
  ln -s "/opt/radium/bin/radium.desktop" "$pkgdir/usr/share/applications/radium.desktop"
  ln -s "/opt/radium/bin/radium-mimetype.xml" "$pkgdir/usr/share/mime/packages/radium.xml"
}
