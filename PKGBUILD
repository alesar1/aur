# Maintainer: Moritz Schoenherr <moritz.schoenherr[at]gmail[dot]com>
pkgname=notmuch-addrlookup-c
pkgver=v7
pkgrel=1
pkgdesc="A tool to query the notmuch database for addresses."
url="https://github.com/aperezdc/notmuch-addrlookup-c"
arch=('any')
license=('MIT')
depends=('notmuch')
makedepends=()
conflicts=()
replaces=()
backup=()
source=("https://github.com/aperezdc/notmuch-addrlookup-c/archive/${pkgver}.tar.gz"
        "MIT-LICENSE")

md5sums=('826056f096aa8d853589fe058da1f3f0'
         'f9be2430c190c736214e76ead254ed07')

build() {

  cd "${srcdir}/${pkgname}-${pkgver:1:1}"

  make
}

package() {

  install -Dm644 "${srcdir}/MIT-LICENSE" "$pkgdir/usr/share/licenses/${pkgname}/MIT-LICENSE"

  cd "${srcdir}/${pkgname}-${pkgver:1:1}"

  install -D notmuch-addrlookup $pkgdir/usr/bin/notmuch-addrlookup
}

