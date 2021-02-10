# Maintainer: Julian Brost <julian@0x4a42.net>

pkgname=dnsviz
pkgver=0.9.2
pkgrel=1
pkgdesc="Tool suite for analysis and visualization of DNS and DNSSEC"
arch=('any')
url="https://github.com/dnsviz/dnsviz"
license=('GPL')
depends=('python' 'python-dnspython' 'python-pygraphviz' 'python-m2crypto' 'python-libnacl')
optdepends=('bind: needed for some options involving zone files')
options=(!emptydirs)
source=("https://github.com/dnsviz/dnsviz/releases/download/v$pkgver/dnsviz-$pkgver.tar.gz"
        "https://github.com/dnsviz/dnsviz/releases/download/v$pkgver/dnsviz-$pkgver.tar.gz.asc")
sha256sums=('e2d2751f2e2facc2a49ff30f75a0771f4156dee0bda9e888bd8f09fca7212795'
            'SKIP')
validpgpkeys=(# Casey Deccio <casey@deccio.net>
              '048D0B43891D7E7BCCAAEF011ED2ED92118571E6')

package() {
  cd "$srcdir/$pkgname-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:
