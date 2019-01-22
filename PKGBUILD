# Maintainer: Tarmo Heiskanen <turskii@gmail.com>
# Contributor: mar77i <mar77i at mar77i dot ch>
# Contributor: Gaetan Bisson <bisson@archlinux.org>
# Contributor: Scytrin dai Kinthra <scytrin@gmail.com>

pkgname=st-scrollback-git
pkgver=0.8.1.r22.g3be4cf1
pkgrel=1
pkgdesc='Simple virtual terminal emulator for X, patched with scrollback patches'
url='https://st.suckless.org/'
arch=('i686' 'x86_64')
license=('MIT')
depends=('libxft')
makedepends=('ncurses' 'libxext' 'git')
_patches=('https://st.suckless.org/patches/scrollback/st-scrollback-20190122-3be4cf1.diff'
          'https://st.suckless.org/patches/scrollback/st-scrollback-mouse-0.8.diff'
          'https://st.suckless.org/patches/scrollback/st-scrollback-mouse-altscreen-20190106-e23acb9.diff')
source=('git://git.suckless.org/st'
        ${_patches[@]})
sha1sums=('SKIP'
          '0be8cf5c0098569e4b4d862183014c0a052dc704'
          '46e92d9d3f6fd1e4f08ed99bda16b232a1687407'
          'c355ec41f2fcc129d866e6ae2433309b40d673e5')

provides=("st")
conflicts=("st")


pkgver() {
    cd "${srcdir}/st"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
    cd "${srcdir}/st"

    for patch in ${_patches[@]}; do
        echo "Applying patch ${patch##*/}..."
        git apply -v "${srcdir}/${patch##*/}"
    done

    echo 'Copying config.def.h to $startdir...'
    cp config.def.h "${startdir}/"

    echo 'Copying config.h from $startdir if it exists...'
    [ -f "${startdir}/config.h" ] && cp "${startdir}/config.h" . || true
}

build() {
    cd "${srcdir}/st"

    make X11INC=/usr/include/X11 X11LIB=/usr/lib/X11
}

package() {
    cd "${srcdir}/st"

    make PREFIX=/usr DESTDIR="${pkgdir}" TERMINFO="/dev/null" install
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -Dm644 README "${pkgdir}/usr/share/doc/${pkgname}/README"
}
