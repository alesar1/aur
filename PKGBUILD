# Maintainer: Felix Wiegand <koffeinflummi@gmail.com>

_pkgname=htop
pkgname=${_pkgname}-vim-git
pkgver=3.0.4.18.g2c06566
pkgrel=1
epoch=1
pkgdesc="Interactive text-mode process viewer. Patched for vim keybindings"
url="https://github.com/htop-dev/${_pkgname}"
license=('GPL')
arch=('i686' 'x86_64' 'armv7h')
depends=('ncurses' 'libncursesw.so' 'libnl')
makedepends=('git')
optdepends=('lsof: show files opened by a process'
            'strace: attach to a running process')
provides=('htop')
conflicts=('htop' 'htop-git')
options=('!emptydirs')
source=("git+${url}.git"
        'vim-keybindings.patch')
sha256sums=('SKIP'
            '0a777ea1b437a437a76dae5b14f8d1d790ab8e0e50a7fc74ef038c53d5bf0436')

pkgver() {
    cd "${srcdir}/${_pkgname}"
    local ver="$(git describe --tags)"
    printf "%s" "${ver//-/.}"
}

prepare() {
    cd "${srcdir}/${_pkgname}"

    for _p in ${srcdir}/*.patch
    do
        msg2 "Applying $_p"
        patch -p1 -i $_p
    done

    autoreconf -fi
}

build() {
    cd "${srcdir}/${_pkgname}"

    ./configure \
        --prefix=/usr \
        --sysconfdir=/etc \
        --enable-cgroup \
        --enable-delayacct \
        --enable-openvz \
        --enable-unicode \
        --enable-vserver

    make
}

package() {
    make -C "${srcdir}/${_pkgname}" DESTDIR="$pkgdir" install
}
