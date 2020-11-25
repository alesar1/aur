# Maintainer: Andrey Vihrov <andrey.vihrov at gmail.com>
# Contributor: David Trail <david@vaunt.eu>
# Contributor: Jan Stępień <jstepien@users.sourceforge.net>

pkgname=imgur.sh
pkgver=10
pkgrel=1
pkgdesc="An Imgur uploader bash script"
arch=('any')
url="https://github.com/tremby/imgur.sh"
license=('custom:PublicDomain')
depends=('curl')
optdepends=('xsel: copy the URL to clipboard (or xclip)'
            'xclip: copy the URL to clipboard (or xsel)')
conflicts=('imgurbash')
replaces=('imgurbash')
source=("https://github.com/tremby/imgur.sh/archive/v${pkgver}.tar.gz")
sha256sums=('0880653acdfd7564ccb29a8ea6ef278b6993efbedd45e81d744068bdd72d282c')

package() {
  cd "${pkgname}-${pkgver}"

  install -D -m 0755 imgur.sh "${pkgdir}/usr/bin/imgur.sh"

  install -D -m 0644 LICENCE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:
