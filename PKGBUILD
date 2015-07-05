# Maintainer: Arthur Țițeică arthur.titeica/gmail/com

pkgname=pdf2htmlex-git
pkgver=1694.984c118
pkgrel=1
epoch=1
pkgdesc="Convert PDF to HTML without losing format. Text is preserved as much as possible."
arch=('i686' 'x86_64')
url="https://github.com/coolwanglu/pdf2htmlEX"
license=('GPL3' 'custom')
depends=('poppler' 'fontforge')
makedepends=('cmake' 'git')
optdepends=('ttfautohint: Provides automated hinting process for web fonts')
provides=('pdf2htmlex')
conflicts=('pdf2htmlex')
replaces=('pdf2htmlex')
source=('git://github.com/coolwanglu/pdf2htmlEX.git')
md5sums=('SKIP')

_gitname=pdf2htmlEX
_pkgname=pdf2htmlEX

pkgver() {
  cd "${_gitname}"
  # git describe --always | sed 's|-|.|g'
  echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}



build() {
  cd "${_gitname}"

  cmake . \
  -DCMAKE_INSTALL_PREFIX=/usr
  make
}

package() {
  cd "${_gitname}"
  make DESTDIR="${pkgdir}/" install
  install -Dm0644 LICENSE "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"

}

# vim:set ts=2 sw=2 et:
