# Maintainer: DuckSoft <realducksoft at gmail dot com>
pkgname=qv2ray-plugin-trojan-go-git
_pkgname=qv2ray-plugin-trojan-go
pkgver=20200929.r27.f83b72d
pkgrel=1
pkgdesc="Qv2ray Plugin: Trojan-Go (Stable Build)"
arch=('x86_64')
url='https://github.com/Qv2ray/QvPlugin-Trojan-Go'
license=('GPL3')
# _virtualdepends=('qv2ray-plugin-host=2')
depends=('qt5-base')
makedepends=('git' 'make' 'qt5-tools' 'which' 'gcc' 'cmake' 'ninja' 'libffi')
provides=('qv2ray-plugin-trojan-go')
conflicts=('qv2ray-plugin-trojan-go')
groups=('qv2ray-plugin')
source=("$_pkgname::git+${url}#branch=master")
sha512sums=('SKIP')
pkgver() {
    cd "$srcdir"/"$_pkgname"
    local date=$(git log -1 --format="%cd" --date=short | sed s/-//g)
    local count=$(git rev-list --count HEAD)
    local commit=$(git rev-parse --short HEAD)
    echo "$date.r${count}.$commit"
}
prepare() {
    cd "$srcdir"/"$_pkgname"
    git submodule update --init --recursive
}
build() {
    cd "$srcdir"/"$_pkgname"
    mkdir -p build && cd build
    cmake .. \
        -DCMAKE_INSTALL_PREFIX="${pkgdir}"/usr \
        -DCMAKE_BUILD_TYPE=Release \
        -GNinja
    cmake --build .
}
package() {
    # NOTE: Working around extra-x86_64-build
    depends+=('qv2ray' 'trojan-go')
    cd "$srcdir"/"$_pkgname"/build
    cmake --install .
    # NOTE: This virtual dependency will be introduced after Qv2ray stablize its interface.
    #     depends+=(${_virtualdepends[@]})
} 
