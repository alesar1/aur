# Maintainer: Yunhui Fu <yhfudev@gmail.com>

pkgname=libosmosdr-git
pkgver=effcaa7
pkgrel=1
pkgdesc="Free Software based small form-factor inexpensive SDR (Software Defined Radio)."
arch=('i686' 'x86_64' 'arm')
url="http://cgit.osmocom.org/osmo-sdr/tree/software/libosmosdr"
license=('GPL')
depends=(
    )
makedepends=(
    'git'
    'cmake'
    )
#optdepends=()
provides=('libmirisdr')

source=("${pkgname}::git://git.osmocom.org/osmo-sdr")
md5sums=('SKIP')

pkgver_git() {
    cd "${srcdir}/${pkgname}"
    local ver="$(git show | grep commit | awk '{print $2}' )"
    #printf "r%s" "${ver//[[:alpha:]]}"
    echo ${ver:0:7}
}

pkgver_svn() {
    cd "${srcdir}/${pkgname}"
    local ver="$(svn info | grep Revision | awk '{print $2}' )"
    #printf "r%s" "${ver//[[:alpha:]]}"
    echo ${ver:0:7}
}

pkgver() {
    pkgver_git
}

build() {
    cd "$srcdir/${pkgname}/software/libosmosdr"
    mkdir -p build
    cd build
    cmake -DLIB_INSTALL_DIR=${pkgdir}/usr/lib/ -DCMAKE_INSTALL_PREFIX=/usr ../
    make
}

package() {
    cd "$srcdir/${pkgname}/software/libosmosdr/build/"
    make DESTDIR=${pkgdir} install
    mkdir -p "${pkgdir}/etc/udev/rules.d/"
    cp "$srcdir/${pkgname}/software/libosmosdr/osmosdr.rules" "${pkgdir}/etc/udev/rules.d/99-mirisdr.rules"
}

# vim:set ts=2 sw=2 et:
