# Maintainer: Sander Boom <sanderboom@gmail.com>
# Contributor: realitygaps <realitygaps at yahoo dot com>

pkgname=sublime-text-dev
pkgver=3.3083
pkgrel=2
pkgdesc="Sophisticated text editor for code, html and prose - dev build"
arch=('i686' 'x86_64')
url="http://www.sublimetext.com/3"
license=('custom')
depends=('libpng' 'gtk2')
optdepends=('gksu: sudo-save support')
conflicts=('sublime-text-nightly')
provides=('sublime-text-nightly')
install=${pkgname}.install

source=('sublime_text_3.desktop')
source_x86_64=("http://c758482.r82.cf2.rackcdn.com/sublime_text_3_build_${pkgver:2}_x64.tar.bz2")
source_i686=("http://c758482.r82.cf2.rackcdn.com/sublime_text_3_build_${pkgver:2}_x32.tar.bz2")

md5sums=('89594b9c6b9a8c7e6a8ce414a0e58243')
md5sums_i686=('d1be10594fe7093b1b43a888a48c838f')
md5sums_x86_64=('5da998bea29f9ca02a60d2b3cfc46fea')

package() {
  cd "${srcdir}"

  install -dm755 "${pkgdir}/opt"
  cp --preserve=mode -r "sublime_text_3" "${pkgdir}/opt/sublime_text_3"

  for res in 128x128 16x16 256x256 32x32 48x48; do
    install -dm755 "${pkgdir}/usr/share/icons/hicolor/${res}/apps"
    ln -s "/opt/sublime_text_3/Icon/${res}/sublime-text.png" "${pkgdir}/usr/share/icons/hicolor/${res}/apps/sublime-text.png"
  done

  install -dm755 "${pkgdir}/usr/share/applications"
  install -Dm644 "sublime_text_3.desktop" "${pkgdir}/usr/share/applications/sublime_text_3.desktop"

  install -dm755 "${pkgdir}/usr/bin"
  ln -s "/opt/sublime_text_3/sublime_text" "${pkgdir}/usr/bin/subl3"
}
