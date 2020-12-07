# Maintainer: Teteros <teteros at teknik dot io>
# Maintainer: Karol "Kenji Takahashi" Woźniak <kenji.sx>
# Contributor: Jakob Gahde <j5lx@fmail.co.uk>

pkgname=radium
pkgver=6.5.84
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
        "https://github.com/grame-cncm/faust/releases/download/2.27.2/faust-2.27.2.tar.gz"
        use-updated-faust.patch
        add-vstsdk-location-var.patch
)
sha256sums=('0c2fd1c508a344e2421862ae4e63b8292bc1818c2dae472e5a92d2343822a1c8'
            'c9b21de69253d5a02a779c2eed74491fc62209d86c24724b429f68098191c39c'
            '8e6865eff42e0d1797a363f3ce6debfcdeab3aa0a4700f1bbca47916735ea8fd'
            '28ef8c1e8ffed45e39d8fac9b31c18902905eabea0322ee91bd1369a2e5f907f')

prepare() {
  cd radium-$pkgver

  # Add VST2SDK env var so we can use VST2 headers from steinberg-vst36 in AUR
  patch -p1 < "$srcdir/add-vstsdk-location-var.patch"

  # https://github.com/kmatheussen/radium/pull/1299
  patch -p1 < "$srcdir/use-updated-faust.patch"

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
