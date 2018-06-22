# Maintainer: Simon Legner <Simon.Legner@gmail.com>
pkgbase=python-pydub
pkgname=('python-pydub' 'python2-pydub')
pkgver=0.22.1
pkgrel=1
pkgdesc="Manipulate audio with an simple and easy high level interface"
url="http://pydub.com"
license=('MIT')
arch=('any')
source=("https://github.com/jiaaro/pydub/archive/v$pkgver.tar.gz")

build() {
  cd $srcdir
  cp -r pydub-$pkgver pydub2-$pkgver
}

check() {
  cd $srcdir/pydub-$pkgver
  which python3 && python3 setup.py check

  cd $srcdir/pydub2-$pkgver
  which python2 && python2 setup.py check
}

package_python-pydub() {
  depends=('python' 'python-setuptools')
  cd $srcdir/pydub-$pkgver
  python3 setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

package_python2-pydub() {
  depends=('python2' 'python2-setuptools')
  cd $srcdir/pydub2-$pkgver
  python2 setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

sha256sums=('2d1fca0a11febca308c353ce3d2f378e6ec5af4f569bee9e1e0bd1340beae7d5')
