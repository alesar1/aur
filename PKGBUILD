pkgname=('python2-linux-gpib')
_pkgname=('linux-gpib')
pkgver=4.3.0
_pkgver=4.3.0
pkgrel=1
pkgdesc='A support package for GPIB (IEEE 488) hardware - Python 2 bindings'
arch=('i686' 'x86_64')
url='http://linux-gpib.sourceforge.net/'
license=('GPL')
depends=('linux-gpib' 'python2')
source=("http://downloads.sourceforge.net/project/${_pkgname}/${_pkgname}%20for%203.x.x%20and%202.6.x%20kernels/${_pkgver}/${_pkgname}-${pkgver}.tar.gz")
md5sums=('3085422695baf210b866601db6108860')

prepare() {

    msg "Unpacking userland utils source"
    cd "${srcdir}/${_pkgname}-${pkgver}"
    tar xvfz "${_pkgname}-user-${pkgver}.tar.gz"

}

build() {
    cd "${srcdir}/${_pkgname}-${pkgver}/${_pkgname}-user-${pkgver}/language/python/"
    python2 setup.py build
}

package() {
    cd "${srcdir}/${_pkgname}-${pkgver}/${_pkgname}-user-${pkgver}/language/python/"
    python2 setup.py install --prefix=/usr --root=${pkgdir}

}

# vim:ts=4:et:sw=4
