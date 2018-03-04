# Maintainer: Ivan Semkin (ivan at semkin dot ru)

appname=Pext
pkgname=pext
pkgver=0.12
pkgrel=1
pkgdesc="Python-based extendable tool"
arch=('any')
url="https://pext.hackerchick.me/"
license=('GPL3')
depends=('python-dulwich' 'libnotify' 'python-pip' 'python-pyqt5' 'qt5-quickcontrols')
makedepends=('python-setuptools')
optdepends=('pass: password manager support'
            'ffmpeg: radiobrowser music support'
            'python-opengl: required for correct rendering on some GPUs')
provides=('pext')
conflicts=('pext')
source=("https://github.com/Pext/Pext/archive/v$pkgver.tar.gz")
sha256sums=('ee55b0b2205d7482b4d01defa8b307545604850b67fa34e9839bf162d603484e')

prepare() {
  sed "s/'pyqt5'//g" -i $srcdir/$appname-$pkgver/setup.py
}

package() {
  cd "$srcdir/$appname-$pkgver"
  python3 setup.py install --optimize=1 --root="${pkgdir}/"
}
# vim:set ts=2 sw=2 et:
