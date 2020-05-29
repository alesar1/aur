# Maintainer: Daniel Bermond <dbermond@archlinux.org>

pkgname=m64p
pkgver=20200526
pkgrel=1
pkgdesc='Mupen64Plus with custom plugins and Qt5 GUI'
arch=('x86_64')
url='https://m64p.github.io/'
license=('GPL3')
depends=('freetype2' 'glu' 'hidapi' 'libgl' 'libpng' 'libsamplerate'
         'minizip' 'p7zip' 'qt5-base' 'qt5-websockets' 'sdl2' 'sdl2_net'
         'zlib' 'hicolor-icon-theme')
makedepends=('git' 'cmake' 'nasm' 'icoutils')
provides=('mupen64plus-gui' 'mupen64plus-video-gliden64')
conflicts=('mupen64plus-gui' 'mupen64plus-video-gliden64' 'mupen64plus')
_commit=19fd445e74a2d9672c13cee6df8798f2225f9fc8
source=("git+https://github.com/loganmc10/m64p.git#commit=${_commit}"
        'git+https://github.com/m64p/mupen64plus-gui.git'
        'git+https://github.com/m64p/mupen64plus-audio-sdl2.git'
        'git+https://github.com/mupen64plus/mupen64plus-rsp-hle.git'
        'git+https://github.com/m64p/mupen64plus-input-qt.git'
        'GLideN64-loganmc10'::'git+https://github.com/loganmc10/GLideN64.git'
        'mupen64plus-core-loganmc10'::'git+https://github.com/loganmc10/mupen64plus-core.git'
        'mupen64plus-input-raphnetraw-loganmc10'::'git+https://github.com/loganmc10/mupen64plus-input-raphnetraw.git'
        '010-m64p-remove-build-jobs-limitation.patch'
        '020-m64p-enable-optimizations.patch'
        'm64p.desktop')
sha256sums=('SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            '9241207664cd3338ae38d02f30f7ae0f3e06c3593a50548d46bca6505181b5c2'
            'bfd5ba0be1090bdf3460ff9e3794f79e88320e4417359f06380f7c48da241985'
            '8df4e8076d28a1bc44f41b0129a9935da9839e8a8cb9944206757e47da561808')

prepare() {
    git -C m64p submodule init
    git -C m64p config --local submodule.mupen64plus-core.url "${srcdir}/mupen64plus-core-loganmc10"
    git -C m64p config --local submodule.GLideN64.url         "${srcdir}/GLideN64-loganmc10"
    git -C m64p config --local submodule.mupen64plus-gui.url  "${srcdir}/mupen64plus-gui"
    git -C m64p config --local submodule.mupen64plus-audio-sdl2.url "${srcdir}/mupen64plus-audio-sdl2"
    git -C m64p config --local submodule.mupen64plus-rsp-hle.url    "${srcdir}/mupen64plus-rsp-hle"
    git -C m64p config --local submodule.mupen64plus-input-qt.url   "${srcdir}/mupen64plus-input-qt"
    git -C m64p config --local submodule.mupen64plus-input-raphnetraw.url "${srcdir}/mupen64plus-input-raphnetraw-loganmc10"
    git -C m64p submodule update
    icotool -x mupen64plus-gui/mupen64plus.ico
    patch -d m64p -Np1 -i "${srcdir}/010-m64p-remove-build-jobs-limitation.patch"
    patch -d m64p -Np1 -i "${srcdir}/020-m64p-enable-optimizations.patch"
}

build() {
    cd m64p
    ./build.sh
}

package() {
    # mupen64plus-gui
    local _file
    local _res
    install -D -m755 m64p/mupen64plus/mupen64plus-gui -t "${pkgdir}/usr/bin"
    install -D -m644 m64p.desktop -t "${pkgdir}/usr/share/applications"
    while read -r -d '' _file
    do
        _res="$(printf '%s' "$_file" | sed 's/\.png$//;s/^.*_//;s/x.*$//')"
        install -D -m644 "$_file" "${pkgdir}/usr/share/icons/hicolor/${_res}x${_res}/apps/mupen64plus.png"
    done < <(find -maxdepth 1 -type f -name 'mupen64plus_*_*x*x*.png' -print0)
    
    # mupen64plus components
    local _component
    local _sover
    for _component in core audio-sdl2 input-raphnetraw rsp-hle
    do
        make -C "m64p/mupen64plus-${_component}/projects/unix" DESTDIR="$pkgdir" PREFIX='/usr' LDCONFIG='true' install
    done
    _sover="$(find "${pkgdir}/usr/lib" -type f -name 'libmupen64plus.so.*.*.*' | sed 's/^.*\.so\.//')"
    ln -s "libmupen64plus.so.${_sover}" "${pkgdir}/usr/lib/libmupen64plus.so"
    
    # other plugins
    install -D -m644 m64p/mupen64plus/mupen64plus-input-qt.so -t "${pkgdir}/usr/lib/mupen64plus"
    install -D -m644 m64p/mupen64plus/mupen64plus-video-GLideN64.so -t "${pkgdir}/usr/lib/mupen64plus"
    install -D -m644 m64p/mupen64plus/GLideN64.custom.ini -t "${pkgdir}/usr/share/mupen64plus"
}
