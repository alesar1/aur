#Automatically generated by pip2arch on 2014-06-09

pkgname=python2-rosinstall-generator
pkgver=0.1.13
pkgrel=2
pkgdesc="A tool to generator rosinstall files"
url="http://wiki.ros.org/rosinstall_generator"
depends=('python2' 'python2-rosdistro>=0.5.0')
makedepends=('python2')
license=('BSD')
arch=('any')
source=("https://github.com/ros-infrastructure/rosinstall_generator/archive/$pkgver.tar.gz")
md5sums=('7e0e3800e739b92e8280b26b4c3f6af6')

build() {
  cd $srcdir/rosinstall_generator-$pkgver
  python2 setup.py build
}

package() {
  cd $srcdir/rosinstall_generator-$pkgver
  python2 setup.py install --root="$pkgdir" --optimize=1
}
