# Maintainer: Cedric Girard <cgirard [dot] archlinux [at] valinor [dot] fr>

pkgname=freshrss
pkgver=1.15.3
pkgrel=1
pkgdesc='A free, self-hostable aggregator…'
arch=('any')
url='http://freshrss.org/'
license=('AGPL')
depends=('php')
optdepends=('apache: Web server to run FreshRSS'
            'nginx: Web server to run FreshRSS'
            'cherokee: Web server to run FreshRSS'
            'mysql: Database server to run FreshRSS'
            'postgresql: Database server to run FreshRSS'
            'sqlite: Database server to run FreshRSS')
install="$pkgname.install"
source=("https://github.com/FreshRSS/FreshRSS/archive/$pkgver.tar.gz")
sha256sums=('c6d1b392ed85ef8eab132634ff1199fad1a274df5892e29c0793cabc6668eb55')

package() {
  cd "${srcdir}/FreshRSS-$pkgver"
  install -d "$pkgdir/usr/share/webapps/freshrss"
  cp -r . "$pkgdir/usr/share/webapps/freshrss/"
}

# vim:set ts=2 sw=2 et:
