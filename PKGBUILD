# Maintainer: Guillaume Hayot ghayot@postblue.info
pkgname=emulationstation
_gitname=EmulationStation
pkgver=2.9.4
pkgrel=2
pkgdesc="Emulation Station is a flexible emulator front-end supporting keyboardless navigation and custom system themes."
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url="https://github.com/RetroPie/EmulationStation"
license=('MIT')
install=emulationstation.install
depends=('vlc' 'alsa-lib' 'sdl2' 'boost-libs' 'freeimage' 'curl' 'libraw' 'libcec' 'rapidjson' 'pugixml')
makedepends=('cmake' 'boost' 'freetype2' 'eigen' 'curl' 'git')
optdepends=('ttf-droid: Fallback fonts for Chinese/Japanese/Korean characters'
            'dolphin-emu: GameCube and Wii support'
            'mupen64plus: Nintendo 64 support'
            'mednafen: NES and GBA support'
            'zsnes: SNES support'
            'stella: Atari 2600 support'
            'ppsspp-headless: PSP support'
            'steam: Steam support')
conflicts=(emulationstation-git)
source=("https://github.com/RetroPie/$_gitname/archive/v$pkgver.tar.gz"
        "https://patch-diff.githubusercontent.com/raw/RetroPie/$_gitname/pull/618.patch"
        "https://gist.githubusercontent.com/omgitsaheadcrab/9fae969ebad3ee44a52f5ef72037569d/raw/9cf5642e6a20a5d4899f20435d0f51200bc36b28/pugixml.patch"
        "emulationstation.desktop"
        "emulationstation.png")
sha256sums=('79452f6c1e8aaebe98c19708b3587a0a45330bf20b3301d556285d5cd756fa4a'
            '0dcb7fbaf2d17ac109f2e4de1fb9dbd4226278dba9351be90df26c5c931de284'
            'ca468dcfc59c4c56d84da1823fdcaa33277debb91195d7feffbf74650996233e'
            '5564803e0a82e132ab507b9cd341b32d1ce5b8be527996fbe13607d90f1dde2c'
            'ac589d9da5c258226f8de76e99afe2b07ac86030ced90d284d31b51193057f9c')


prepare() {
        rm -rf "${_gitname}-${pkgver}/external/pugixml"
        rm -rf "${_gitname}-${pkgver}/.gitmodules"
        patch -d "${_gitname}-${pkgver}" -Np1 -i "${srcdir}/618.patch"
        patch -d "${_gitname}-${pkgver}" -Np1 -i "${srcdir}/pugixml.patch"
}

build() {
    cmake -B "${_gitname}-${pkgver}/build" \
        -S "${_gitname}-${pkgver}" \
        -DCMAKE_BUILD_TYPE:STRING='None' \
        -DCMAKE_INSTALL_LIBDIR:PATH='lib' \
        -DCMAKE_INSTALL_PREFIX:PATH='/usr' \
        -Wno-dev -Wno-deprecated \
    ..
    make -C "${_gitname}-${pkgver}/build" all
}

package() {
    make -C "${_gitname}-${pkgver}/build" DESTDIR="${pkgdir}" install
    mv ${pkgdir}/usr/share/EmulationStation/resources/resources/* ${pkgdir}/usr/share/EmulationStation/resources/
    rmdir ${pkgdir}/usr/share/EmulationStation/resources/resources
}
