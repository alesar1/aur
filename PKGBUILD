# Maintainer: Andrew Sun <adsun701 at gmail dot com>
# Contributor: sballert <sballert at posteo dot de>
# Contributor: Alex Whitt <alex dot joseph dot whitt at gmail dot com>

_pkgsrcname=emacs-which-key
_pkgmaintainer=justbur
_pkgdestdirname=which-key
_versionprefix=v
pkgver=3.5.1
pkgrel=1
pkgdesc="Emacs package that displays available keybindings in popup"
pkgname=emacs-${_pkgdestdirname}
arch=(any)
url="https://github.com/${_pkgmaintainer}/${_pkgsrcname}"
license=('GPL3')
depends=('emacs')
source=("$pkgname-$pkgver.tar.gz::https://github.com/${_pkgmaintainer}/${_pkgsrcname}/archive/${_versionprefix}${pkgver}.tar.gz")
sha256sums=('074ea041b4a7273ac37093680a577c939daba01e99d0bf12071def114cc4d299')
install=${pkgname}.install

build() {
  cd "${srcdir}/${_pkgsrcname}-${pkgver}"
  emacs -q --no-splash -batch -L . -f batch-byte-compile which-key.el
}

package() {
  cd "${srcdir}/${_pkgsrcname}-${pkgver}"
  mkdir -p "${pkgdir}/usr/share/emacs/site-lisp/${_pkgdestdirname}/"
  install -m644 which-key.el{c,} "${pkgdir}/usr/share/emacs/site-lisp/${_pkgdestdirname}/"
}
