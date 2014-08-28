# Contributor: Johannes Dewender  arch at JonnyJD dot net
pkgname=targetcli-fb
pkgver=2.1.fb36
pkgrel=1
pkgdesc="free branch of the targetcli LIO administration shell (iSCSI + Co)"
arch=('any')
url="https://github.com/agrover/targetcli-fb"
license=('Apache')
groups=()
depends=('python-rtslib-fb>=2.1.fb47' 'python-configshell-fb>=1.1.fb12')
makedepends=('python-setuptools')
# TODO: optdepend on python-ethtool when available for python3
optdepends=()
provides=('targetcli')
backup=()
options=()
install=
source=(https://fedorahosted.org/releases/t/a/targetcli-fb/$pkgname-$pkgver.tar.gz)


build() {
  cd "$srcdir/$pkgname-$pkgver"
  python setup.py build
  gzip --stdout targetcli.8 > "targetcli.8.gz"
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  python setup.py install --skip-build --root="$pkgdir/" --optimize=1

  install -D -m 644 targetcli.8.gz "$pkgdir/usr/share/man/man8/targetcli.8.gz"
}

# vim:set ts=2 sw=2 et:
sha256sums=('6fce7c702c7b121ee900cfacef77234bad012cd97f9b256852f179afe29974aa')
