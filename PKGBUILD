# Maintainer: Baptiste Jonglez <baptiste--aur at jonglez dot org>
# Contributor: Stefan J. Betz <info@stefan-betz.net>
pkgname='pius'
pkgver='2.2.2'
pkgrel=1
pkgdesc='PGP Individual UID Signer (PIUS)'
arch=('any')
url='http://www.phildev.net/pius/'
license=('GPL2')
install="$pkgname.install"
depends=('python2')
optdepends=('python2-pexpect: interactive mode support')
source=("https://github.com/jaymzh/pius/releases/download/v${pkgver}/${pkgname}-${pkgver}.tar.bz2")
md5sums=('7d1e97af77dbf688c1ae68b1c92f46d9')

package() {
  cd "$srcdir/$pkgname-$pkgver"
  python2 setup.py install --root="$pkgdir/" --optimize=1
  for f in README.md README-keyring-mgr.md README-report.md
  do
    install -Dm644 "$f" "$pkgdir/usr/share/doc/pius/$f"
  done
}
