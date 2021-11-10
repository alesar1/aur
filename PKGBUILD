# Maintainer: Michal Wojdyla < micwoj9292 at gmail dot com >
# Contributor:  WorMzy Tykashi <wormzy.tykashi@gmail.com>
# Contributor: artiom <a.mv at gmx dot fr>
# Contributor: ilikenwf
# Contributor: American_Jesus
pkgname=palemoon-gtk3
_pkgname=palemoon
pkgver=29.4.2
pkgrel=1
pkgdesc="Open source web browser based on Firefox focusing on efficiency."
arch=('i686' 'x86_64')
url="https://www.palemoon.org/"
license=('MPL' 'GPL' 'LGPL')
provides=('palemoon')
conflicts=('palemoon')
depends=('gtk2' 'gtk3' 'dbus-glib' 'desktop-file-utils' 'libxt' 'mime-types' 'alsa-lib'
         'startup-notification')
makedepends=('git' 'python2' 'autoconf2.13' 'unzip' 'zip' 'yasm'
             'libpulse' 'gcc10')
optdepends=('libpulse: PulseAudio audio driver'
            'ffmpeg: various video and audio support')
source=("http://archive.palemoon.org/source/palemoon-${pkgver}-source.tar.xz"
        mozconfig.in)
sha1sums=('a8bccc80fea1381b3135c21c85c57a3b0dbcf696'
          'f3cc0b20fd66066b0cb936a5f3f54b1145da1bab')

prepare() {
  sed 's#%SRCDIR%#'"${srcdir}"'#g' mozconfig.in > mozconfig
}

build() {
  export MOZBUILD_STATE_PATH="${srcdir}/mozbuild"
  export MOZCONFIG="${srcdir}/mozconfig"
  export CPPFLAGS="${CPPFLAGS} -O2 -Wno-format-overflow"
  ./mach build
}

package() {
  cd pmbuild
  make package
  cd dist
  install -d "${pkgdir}"/usr/{bin,lib}
  cp -r palemoon/ "${pkgdir}/usr/lib/${_pkgname}"
  ln -s "../lib/${_pkgname}/palemoon" "${pkgdir}/usr/bin/palemoon"

  # icons
  install -Dm644 palemoon/browser/chrome/icons/default/default16.png \
    "${pkgdir}/usr/share/icons/hicolor/16x16/apps/${_pkgname}.png"
  install -Dm644 palemoon/browser/chrome/icons/default/default32.png \
    "${pkgdir}/usr/share/icons/hicolor/32x32/apps/${_pkgname}.png"
  install -Dm644 palemoon/browser/chrome/icons/default/default48.png \
    "${pkgdir}/usr/share/icons/hicolor/48x48/apps/${_pkgname}.png"
  install -Dm644 palemoon/browser/icons/mozicon128.png \
    "${pkgdir}/usr/share/icons/hicolor/128x128/apps/${_pkgname}.png"

  # install desktop file
  install -Dm644 "${srcdir}/palemoon/branding/official/palemoon.desktop" "${pkgdir}/usr/share/applications/${_pkgname}.desktop"
}
