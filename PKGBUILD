# Maintainer: Stephen Smith <stephen304@gmail.com>

pkgname=castblock-git
_pkgname=castblock
pkgver=9.5ac271c
pkgrel=1
pkgdesc="CastBlock skips integrated youtube sponsors on all chromecasts on the network."
arch=('any')
url="https://github.com/stephen304/castblock"
license=('GPL3')
depends=('jq' 'bc' 'diffutils' 'coreutils' 'go-chromecast-git')
provides=('castblock')
conflicts=('castblock')
source=("git+${url}.git#branch=master")
sha512sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgname"
  echo $(git rev-list --count master).$(git rev-parse --short master)
}

package() {
  cd "$srcdir/$_pkgname"

  install -Dm755 castblock "${pkgdir}/usr/bin/castblock"
  install -Dm644 contrib/castblock.service "$pkgdir"/usr/lib/systemd/system/castblock.service
}
