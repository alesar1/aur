# Maintainer: Vaporeon <vaporeon@vaporeon.io>
# Contributor: Joe Carta <cartakid at gmail dot com>
# Contributor: sidious/SiD <miste78 web de>
# Contributor: Wes Brewer <brewerw@gmail.com>

pkgname=extract-xiso-git
pkgver=2.7.1.r35.b154a15
pkgrel=1
pkgdesc="xdvdfs (xbox iso) file creation and extraction utility (git package)"
arch=('x86_64')
url="https://github.com/XboxDev/extract-xiso"
license=('custom')
makedepends=('cmake' 'ninja' 'git')
conflicts=('extract-xiso' 'extract-xiso-somski')
provides=('extract-xiso')
source=('git+https://github.com/XboxDev/extract-xiso.git')
sha256sums=('SKIP')

pkgver() {
    cd "${srcdir}"/extract-xiso
    printf "%s.r%s.%s" "$(git describe --abbrev=0 --tags | sed 's/v//')" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    cd "${srcdir}"
    mkdir -p build
}

build() {
    cd "${srcdir}"/build
    #build as 32-bit because 64-bit builds are broken and produce corrupt ISO's.
    cmake ../extract-xiso -G Ninja -DCMAKE_BUILD_TYPE=Release -DCMAKE_C_FLAGS=-m32
    ninja
}

package() {
    install -Dm755 "${srcdir}"/build/extract-xiso "${pkgdir}"/usr/bin/extract-xiso
    install -Dm644 "${srcdir}"/extract-xiso/LICENSE.TXT "${pkgdir}"/usr/share/licenses/${pkgname}/LICENSE.TXT
}
