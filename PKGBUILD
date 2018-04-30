# Maintainer: Gergely Imreh <imrehg@gmail.com>
# Contributor: Gergely Imreh <imrehg@gmail.com>

pkgname=resin-cli-git
pkgdesc='Resin.io command line interface, development version'
pkgver=7.3.7.r0.g0ac599d
pkgrel=1
arch=('any')
url='https://resin.io/'
license=('APACHE')
depends=('nodejs')
makedepends=('npm' 'git')
source=('git+https://github.com/resin-io/resin-cli.git')
provides=('resin-cli')
conflicts=('resin-cli')
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/${pkgname%-git}"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
  npm install -g --user root --prefix "${pkgdir}/usr" "$srcdir/${pkgname%-git}"
}
