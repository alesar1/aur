# Maintainer: Aaron Fischer <mail@aaron-fischer.net>
# Co-maintainer: Spike29 <leguen.yannick@gmail.com>
# Contributor: J0k3r <moebius282 at gmail dot com>

pkgname=netradiant-git
pkgver=r2146.c94d5210
pkgrel=1
epoch=1
pkgdesc='The open source, cross platform level editor for idtech games (GtkRadiant fork)'
url='https://netradiant.gitlab.io/'
license=('GPL' 'BSD' 'LGPL')
arch=('i686' 'x86_64')
depends=('gtk2' 'gtkglext' 'minizip' 'libjpeg-turbo' 'libwebp')
makedepends=('git' 'svn' 'wget' 'unzip' 'cmake' 'make')
provides=('netradiant' 'q3map2' 'q3data' 'q2map' 'qdata3' 'h2data')
source=("${pkgname}::git+https://gitlab.com/xonotic/netradiant.git")
sha256sums=('SKIP')

pkgver() {
    cd "${srcdir}/${pkgname}/"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    cd "${srcdir}/${pkgname}/"

    # Optional, fetch submodules too (such as Crunch and Daemonmap, they will be compiled if present)
    # git submodule update --init --recursive
    
    # Possible values for the GAMEPACKS_LICENSE_LIST filter are "free",
    # "all" (free + proprietary) and "none".
    # For example, to only fetch Xonotic and Unvanquished gamepacks,
    # use -DGAMEPACKS_LICENSE_LIST=none with -DGAMEPACKS_NAME_LIST="Xonotic Unvanquished".
    # Please refer to the NetRadiant README for more instructions.
    cmake -G "Unix Makefiles" -S. -Bbuild \
    -DCMAKE_BUILD_TYPE=Release \
    -DFHS_INSTALL=ON \
    -DCMAKE_INSTALL_PREFIX=${pkgdir}/usr \
    -DDOWNLOAD_GAMEPACKS=ON \
    -DGAMEPACKS_LICENSE_LIST=free \
    -DGAMEPACKS_NAME_LIST=none

    cmake --build build -- -j$(nproc)
}

package() {
    cd "${srcdir}/${pkgname}/"

    cmake --install build
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
