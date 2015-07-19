# Maintainer: SahibBommelig <sahib@online.de>
# rmlint PKBUILD for ArchLinux
 
_pkgname=rmlint
pkgname=${_pkgname}-git
pkgver=967.812a5d5
pkgrel=3
pkgdesc="Tool to remove duplicates and other lint, being much faster than fdupes"
arch=('i686' 'x86_64')
url="https://github.com/sahib/rmlint"
license=('GPL3')
depends=('glibc' 'glib2>=2.31' 'libutil-linux' 'elfutils')
makedepends=('git' 'scons' 'python-sphinx')
provides=("$_pkgname")
source=("$pkgname"::"git+https://github.com/sahib/${_pkgname}.git")
md5sums=('SKIP')
 
pkgver() {
    cd "${srcdir}/${pkgname}"
    printf "%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    cd "${srcdir}/${pkgname}"
    scons config
    scons -j4 DEBUG=1 --prefix=${pkgdir}/usr --actual-prefix=/usr
}
 
package() {
    cd "${srcdir}/${pkgname}"
    scons DEBUG=1 --prefix=${pkgdir}/usr install --actual-prefix=/usr
}
