# Maintainer: Teteros <teteros at teknik dot io>
# Maintainer: Karol "Kenji Takahashi" Woźniak <kenji.sx>
# Contributor: Jakob Gahde <j5lx@fmail.co.uk>

pkgname=radium
pkgver=6.9.72
pkgrel=1
pkgdesc='A graphical music editor. A next generation tracker.'
arch=(x86_64)
url=https://users.notam02.no/~kjetism/radium
license=(GPL2)
groups=(pro-audio)
depends=(
  desktop-file-utils
  fftw
  glu
  gsfonts
  hicolor-icon-theme
  jack2
  liblo
  liblrdf
  libmpc
  libsndfile
  python2
  qt5-svg
  qt5-webkit
  qt5-x11extras
  speex
  ttf-bitstream-vera
  ttf-croscore
  ttf-lato
)
makedepends=(
  boost
  cmake
  ladspa
  libxcursor
  libxinerama
  libxkbfile
  libxrandr
  llvm
  qt5-tools
  steinberg-vst36
)
optdepends=(
  'new-session-manager: for session management'
  'calf-ladspa: default chorus plugin used in new file templates'
  'ladspa-plugins: package group for plugins normally included in binary releases'
  'vst-plugins: more plugins'
)
options=(!strip)
source=("$pkgname-$pkgver.tar.gz::https://github.com/kmatheussen/radium/archive/$pkgver.tar.gz"
        add-vstsdk-location-var.patch
        faust_add_include.patch faust-buildfix.patch
)
sha256sums=('8e07f83ef89ea16a5ea131c67f8559293a38353bbd71f26f9510c1c01e2b2b44'
            '8d66045d1a927df67670d2ce0855b246614f2969105bd6c4b78a1fcfd971cc9c'
            '69b762b908d30ce78f0e289b39b77c0d56888d000f440169ab86e63bc0a15430'
            '857c06b9163a42f38364aa54acbdb12a2d3419e5a200eb31e08db84fc6a342b7')

prepare() {
  cd radium-$pkgver

  # Add VST2SDK env var so we can use VST2 headers from steinberg-vst36 in AUR
  patch -p1 < "$srcdir/add-vstsdk-location-var.patch"

  # https://github.com/kmatheussen/radium/pull/1343
  cp "$srcdir/faust_add_include.patch" bin/packages
  patch -p1 < "$srcdir/faust-buildfix.patch"

  # This tweak edits new file template and demo songs to be compatible with chorus plugin from calf-ladspa package
  # !! NOTE TO LMMS USERS !!
  # !! Comment next line out if you have LMMS installed as it already comes with their own version of Calf plugins !!
  for file in bin/sounds/*.rad; do sed -i -e 's/Calf MultiChorus LADSPA/Calf Multi Chorus LADSPA/g' "$file"; done
  # See comment on calf-ladspa AUR page then on how to let Radium load Calf from LMMS package
}

build() {
  cd radium-$pkgver

  RADIUM_QT_VERSION=5 RADIUM_VST2SDK_PATH=/usr/include/vst36 RADIUM_BUILD_LIBXCB=0 make packages
  RADIUM_QT_VERSION=5 RADIUM_VST2SDK_PATH=/usr/include/vst36 BUILDTYPE=RELEASE ./build_linux.sh
}

package() {
  cd radium-$pkgver

  # Install radium and its packages to /opt
  RADIUM_INSTALL_LIBXCB=0 ./install.sh "$pkgdir/opt"

  # Create startup script according to bin/packages/README
  mkdir -p "$pkgdir/usr/bin"
  echo '#!/usr/bin/env bash' > "$pkgdir/usr/bin/radium"
  echo QT_QPA_PLATFORM_PLUGIN_PATH="$($(RADIUM_QT_VERSION=5 ./find_moc_and_uic_paths.sh qmake) -query QT_INSTALL_PLUGINS)" \
    /opt/radium/radium '"$@"' >> "$pkgdir/usr/bin/radium"
  chmod +x "$pkgdir/usr/bin/radium"

  # Icons, .desktop and mimetype files
  mkdir -p "$pkgdir/usr/share/icons/hicolor/"{16x16,32x32,128x128,256x256}"/apps" \
    "$pkgdir/usr/share/applications" \
    "$pkgdir/usr/share/mime/packages"
  ln -s "/opt/radium/radium_16x16x8.png" "$pkgdir/usr/share/icons/hicolor/16x16/apps/radium.png"
  ln -s "/opt/radium/radium_32x32x24.png" "$pkgdir/usr/share/icons/hicolor/32x32/apps/radium.png"
  ln -s "/opt/radium/radium_128x128x32.png" "$pkgdir/usr/share/icons/hicolor/128x128/apps/radium.png"
  ln -s "/opt/radium/radium_256x256x32.png" "$pkgdir/usr/share/icons/hicolor/256x256/apps/radium.png"
  ln -s "/opt/radium/radium.desktop" "$pkgdir/usr/share/applications/radium.desktop"
  ln -s "/opt/radium/radium-mimetype.xml" "$pkgdir/usr/share/mime/packages/radium.xml"
}

warn_build_references() {
  # Silence warning about build dir refs as Radium's author prefers packagers don't strip binaries.
  # https://github.com/kmatheussen/radium/issues/1153#issuecomment-421543245
  true
}
