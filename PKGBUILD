#Automatically generated by pip2arch on 2014-05-08

pkgname=python-catkin-pkg
_name=catkin_pkg
pkgver=0.2.3
pkgrel=1
pkgdesc="catkin package library"
url="http://wiki.ros.org/catkin_pkg"
depends=('python')
makedepends=('python3')
license=('BSD')
arch=('any')
source=("https://pypi.python.org/packages/source/c/${_name}/${_name}-${pkgver}.tar.gz")
md5sums=('a038663366d31c259528c8a5c54a8e9e')
conflicts=(python2-catkin_pkg)

# This is not ideal, but should not break Groovy/Hydro dependencies for now...
provides=(python2-catkin_pkg)

build() {
    cd ${srcdir}/${_name}-${pkgver}
    python3 setup.py build
}

package() {
    cd ${srcdir}/${_name}-${pkgver}
    python3 setup.py install --root="$pkgdir" --optimize=1
}
