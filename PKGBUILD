# Maintainer: TheCynicalTeam <TheCynicalTeam@github.com>
# Contributor: TheCynicalTeam <TheCynicalTeam@github.com>
pkgname=i3-swallow
pkgver=v1.8.0
pkgrel=1
pkgdesc="Swallow a terminal window after a blocking application is run in i3"
arch=('any')
url="https://github.com/TheCynicalTeam/i3-swallow"
license=('GNU General Public License v3.0')
depends=('xdo')
makedepends=('git')
conflicts=('i3-swallow-git')
changelog=
source=("git+${url}.git")
md5sums=('SKIP')

pkgver()
{
  cd "$_pkgname"
  printf "v1.%s.0" "$(git rev-list --count HEAD)"
}

package() {
  cd "$srcdir/${pkgname}"
  install -Dm 755 swallow "$pkgdir/usr/bin/i3-swallow"
  install -Dm 644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
