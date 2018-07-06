validpgpkeys=('748231EBCBD808A14F5E85D28C004C2F93481F6B')
# Bug reports can be filed at https://bugs.square-r00t.net/index.php?project=3
# News updates for packages can be followed at https://devblog.square-r00t.net
pkgname=python-libguestfs
pkgver=1.38.3
pkgrel=1
pkgdesc="Python bindings for libguestfs"
arch=('any')
url="http://libguestfs.org/"
license=('LGPL3')
_pkgname=guestfs
makedepends=('python-setuptools' 'python2-setuptools' 'libguestfs')
depends=('python' 'libguestfs')
source=("http://download.libguestfs.org/python/${_pkgname}-${pkgver}.tar.gz"
	"python3_fix.patch"
        "${_pkgname}-${pkgver}.tar.gz.sig"
	"python3_fix.patch")
sha512sums=('70f01e35018968b2ed38a4afd21a1169cc0caf73c1cecc3172da3356f3dcd725bc978a0fe1f7f92cb45dbd47e1997093b067118066d2433bfa48b5f4c6d00fad'
	    '8e67eda29a5663e7da428a76f2884d6140a70591568a30cdcd7a735631bc170efd6cca740da55b6523a652c3451dcb2215a248e6fea80339ee318a281756b0f5'
            'SKIP'
            'SKIP')

prepare() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  patch -p1 < ${srcdir}/python3_fix.patch
}

package() {

  cd "${srcdir}/${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1
}
