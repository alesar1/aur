pkgname=('qt5-styleplugins-git')
_srcname='qtstyleplugins'
pkgdesc='Additional style plugins for Qt5'
pkgver='r1'
pkgrel='1'
arch=('i686' 'x86_64')
url="https://code.qt.io/cgit/qt/${_srcname}"
license=('LGPL')

depends=('qt5-base' 'gconf' 'gtk2' 'libx11')
makedepends=('git')
provides=("${pkgname[0]%-git}")
conflicts=("${pkgname[0]%-git}")

source=("${_srcname}::git+${url}.git")
sha512sums=('SKIP')

pkgver() {
    cd "${srcdir}/${_srcname}"

    printf 'r%s.%s.%s\n' \
        "$( git rev-list --count 'HEAD' )" \
        "$( git log --max-count='1' --pretty='format:%ct' )" \
        "$( git rev-parse --short 'HEAD' )"
}

build() {
    cd "${srcdir}/${_srcname}"

    qmake PREFIX='/usr' LIBDIR='/usr/lib'
    make
}

package() {
    cd "${srcdir}/${_srcname}"

    make INSTALL_ROOT="${pkgdir}" install
    rm --recursive "${pkgdir}/usr/lib/cmake"
}
