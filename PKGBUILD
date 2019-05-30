# Maintainer : Daniel Bermond < gmail-com: danielbermond >

pkgname=mame-git
_srcname=mame
pkgver=0.210.r80.g0660656754b
pkgrel=1
pkgdesc='A port of the popular Multiple Arcade Machine Emulator using SDL with OpenGL support (git version)'
url='https://www.mamedev.org/'
license=('GPL')
arch=('x86_64')
depends=('sdl2_ttf' 'qt5-base' 'lua' 'libutf8proc' 'pugixml' 'portmidi' 'portaudio')
makedepends=('git' 'nasm' 'python' 'asio' 'rapidjson' 'glm' 'libxinerama')
provides=('mame')
conflicts=('mame')
source=('git+https://github.com/mamedev/mame.git'
        'mame.sh')
sha256sums=('SKIP'
            'ee1c59bafc5e5441e99fa4c58108a3e18048e60672f34de865c8a5a976094dba')

prepare() {
    cd "$_srcname"
    
    # use system libraries
    sed -e 's|\# USE_SYSTEM_LIB|USE_SYSTEM_LIB|g' -i makefile
}

pkgver() {
    cd "$_srcname"
    
    # git, tags available
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^\(mame\)\([0-9]\)/\2./'
}

build() {
    cd "$_srcname"
    
    make \
        NOWERROR='1' \
        OPTIMIZE='2' \
        TOOLS='1' \
        ARCHOPTS='-flifetime-dse=1'
}

package() {
    cd "$_srcname"
    
    # mame script
    install -D -m755 "${srcdir}/mame.sh" "${pkgdir}/usr/bin/mame"
    
    # binaries
    install -D -m755 mame64 "${pkgdir}/usr/lib/mame/mame"
    local _bin
    for _bin in castool chdman imgtool jedutil nltool nlwav pngcmp regrep romcmp src2html \
                split srcclean ldverify ldresample
    do
        install -D -m755 "$_bin" -t   "${pkgdir}/usr/lib/mame"
        ln -s "/usr/lib/mame/${_bin}" "${pkgdir}/usr/bin/mame-${_bin}"
    done
    
    # extra bits
    install -D -m644 src/osd/modules/opengl/shader/glsl*.*h -t "${pkgdir}/usr/lib/mame/shader/"
    cp -a {artwork,bgfx,plugins,language,ctrlr,keymaps,hash}   "${pkgdir}/usr/lib/mame/"
    
    # documentation
    install -d -m0755 "${pkgdir}/usr/share/doc"
    cp -a docs "${pkgdir}/usr/share/doc/mame"
    rm -r "${pkgdir}/usr/share/doc/mame/man"
    install -d "$pkgdir"/usr/share/man/man{1,6}
    install -m644 docs/man/*.1* "${pkgdir}/usr/share/man/man1/"
    install -m644 docs/man/*.6* "${pkgdir}/usr/share/man/man6/"
}
