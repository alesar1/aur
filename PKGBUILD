# Maintainer: Daniel Bermond <dbermond@archlinux.org>

pkgname=m64p-git
pkgver=20220403.r1.g9d6e4b1
pkgrel=1
pkgdesc='Mupen64Plus with custom plugins and Qt5 GUI (git version)'
arch=('x86_64')
url='https://m64p.github.io/'
license=('GPL3')
depends=('freetype2' 'hidapi' 'libgl' 'libpng' 'libsamplerate' 'minizip'
         'qt5-base' 'qt5-websockets' 'sdl2' 'sdl2_net' 'vulkan-icd-loader'
         'zlib' 'hicolor-icon-theme')
optdepends=('p7zip: for 7z/zip support')
makedepends=('git' 'cmake' 'nasm' 'python' 'zip' 'icoutils')
provides=('m64p' 'mupen64plus-gui' 'mupen64plus-video-gliden64')
conflicts=('m64p' 'mupen64plus-gui' 'mupen64plus-video-gliden64' 'mupen64plus')
source=('git+https://github.com/loganmc10/m64p.git'
        '010-m64p-remove-build-jobs-limitation.patch'
        '020-m64p-change-optimizations.patch'
        '030-m64p-fix-paths.patch'
        '040-m64p-add-pie.patch'
        'm64p.desktop')
sha256sums=('SKIP'
            'f6ae0125845fd8fc70efeae83fc54d6d4c0787f8215d274c84f259564ec36211'
            '464c58311f26e8ec23ed418c2b2d331743552b87e156bc7cd284add8debbd0d1'
            'b8cd918c56b1435c448067e4202c36e5c3cf3fb0ff43ac4cdc590719677b5da5'
            '5c604da87c9deb3582b43efa724589080a7070a108ab0c0d00e115cb35eb4b13'
            '8df4e8076d28a1bc44f41b0129a9935da9839e8a8cb9944206757e47da561808')

prepare() {
    icotool -x m64p/mupen64plus-gui/mupen64plus.ico -o m64p/mupen64plus-gui
    patch -d m64p -Np1 -i "${srcdir}/010-m64p-remove-build-jobs-limitation.patch"
    patch -d m64p -Np1 -i "${srcdir}/020-m64p-change-optimizations.patch"
    patch -d m64p -Np1 -i "${srcdir}/030-m64p-fix-paths.patch"
    patch -d m64p -Np1 -i "${srcdir}/040-m64p-add-pie.patch"
}

pkgver() {
    local _tag
    _tag="$(git -C m64p describe --tags --abbrev='0')"
    printf '%s.r%s.%s' "$(git -C m64p log -1 --format='%ad' --date='format:%Y%m%d' "$_tag")" \
                       "$(git -C m64p describe --tags --long | awk -F'-' '{ print $2 }')" \
                       "$(git -C m64p describe --tags --long | awk -F'-' '{ print $3 }')"
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
        _res="$(sed 's/\.png$//;s/^.*_//;s/x.*$//' <<< "$_file")"
        install -D -m644 "$_file" "${pkgdir}/usr/share/icons/hicolor/${_res}x${_res}/apps/mupen64plus.png"
    done < <(find m64p/mupen64plus-gui -maxdepth 1 -type f -name 'mupen64plus_*_*x*x*.png' -print0)
    
    # mupen64plus components
    local _component
    local _sover
    for _component in core audio-sdl2 input-raphnetraw
    do
        make -C "m64p/mupen64plus-${_component}/projects/unix" DESTDIR="$pkgdir" PREFIX='/usr' LDCONFIG='true' NEW_DYNAREC='1' NETPLAY='1' OSD='0' install
    done
    _sover="$(find "${pkgdir}/usr/lib" -type f -name 'libmupen64plus.so.*.*.*' | sed 's/^.*\.so\.//')"
    ln -s "libmupen64plus.so.${_sover}" "${pkgdir}/usr/lib/libmupen64plus.so"
    
    # other plugins and components
    install -D -m644 m64p/mupen64plus/libdiscord_game_sdk.so -t "${pkgdir}/usr/lib"
    install -D -m644 m64p/mupen64plus-input-qt/vosk/libvosk.so -t "${pkgdir}/usr/lib/mupen64plus"
    install -D -m644 m64p/mupen64plus/mupen64plus-{input-qt,{rsp,video}-parallel}.so -t "${pkgdir}/usr/lib/mupen64plus"
}
