# Maintainer: Konstantin Shalygin (k0ste@opentech.ru)

pkgname='yandex-tank'
pkgver='1.7.29'
pkgrel='0'
pkgdesc='Performance measurement tool'
arch=('any')
url='https://github.com/yandex/yandex-tank'
license=('GPL')
depends=('python2' 'python2-psutil' 'python2-ipaddr' 'python2-progressbar' 'python2-paramiko' 'python2-requests' 'phantom-engine-git')
source=("http://ppa.launchpad.net/yandex-load/main/ubuntu/pool/main/y/yandextank/yandextank_${pkgver}.tar.gz")
sha256sums=('12c19664dbca14c112f2ef97f1f9eb6cd678fa0863492f278e4425150a98b119')

build() {
  cd "$srcdir/$pkgname"
  python2 setup.py build
}

package() {
  pushd "$srcdir/$pkgname"
  python2 setup.py install --root="$pkgdir"
  install -Dm644 "COPYING" "$pkgdir/usr/share/doc/$pkgname/COPYING"
  popd
}
