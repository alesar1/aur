# Maintainer: Tommaso Sardelli <lacapannadelloziotom AT gmail DOT com>

pkgname=gajim-plugin-omemo-git
_pkgname=gajim-omemo
pkgver=0.8.1.r2.g3a38dcb
pkgrel=1
pkgdesc="Gajim plugin for OMEMO Multi-End Message and Object Encryption."
arch=(any)
url="https://github.com/omemo/${_pkgname}"
license=('GPL')
depends=("gajim" "python2-setuptools" "python2-cryptography" "python2-axolotl-git")
provides=('gajim-plugin-omemo')
conflicts=('gajim-plugin-omemo')
source=("git://github.com/omemo/gajim-omemo")
sha512sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgname"
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

package() {
  cd $srcdir/gajim-omemo
  rm -r CHANGELOG COPYING doc pkgs README.md
  install -d ${pkgdir}/usr/share/gajim/plugins/omemo
  cp -r * ${pkgdir}/usr/share/gajim/plugins/omemo/
}

# vim:set ts=2 sw=2 et:
