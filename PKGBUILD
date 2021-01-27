# Contributor: Alex Whitt <alex.joseph.whitt@gmail.com>
# Maintainer: Geballin - Guillaume Ballin <macniaque at free dot fr>

_pkgsrcname=cider
_pkgmaintainer=clojure-emacs
_pkgdestdirname=cider
_versionprefix=v
pkgver=1.0.0
pkgrel=1
pkgdesc="The Clojure Interactive Development Environment that Rocks for Emacs"
pkgname=emacs-${_pkgdestdirname}
arch=('any')
url="https://github.com/${_pkgmaintainer}/${_pkgsrcname}"
license=('GPL3')
depends=('emacs' 'emacs-clojure-mode' 'emacs-pkg-info' 'emacs-queue' 'emacs-spinner' 'emacs-sesman' 'emacs-a' 'emacs-parseclj' 'emacs-parseedn')
source=("$pkgname-$pkgver.tar.gz::https://github.com/${_pkgmaintainer}/${_pkgsrcname}/archive/${_versionprefix}${pkgver}.tar.gz")
sha256sums=('76730a846d8216418aeef04e27bdc3a7c33c653d34214f01b70a03e3a24771c0')
install=${pkgname}.install

build() {
  cd ${_pkgsrcname}-${pkgver}
  emacs -q --no-splash -batch -L . -f batch-byte-compile *.el
}

package() {
  cd ${_pkgsrcname}-${pkgver}
  install -d "$pkgdir"/usr/share/emacs/site-lisp/
  install -m644 *.el{c,} "$pkgdir"/usr/share/emacs/site-lisp
}
