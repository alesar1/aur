#!/bin/bash
# Author: Justin Jagieniak <justin@jagieniak.net>
# Contributor: Rye Mutt
# Maintainer: Xenhat Hex (aur@xenh.at)
# shellcheck disable=2034,3030,2154
pkgname=alchemy-next-viewer-git
pkgver=6.5.5_r48681.g12c2a9b7e9
pkgrel=8
pkgdesc="This is the next generation of Alchemy Viewer! - Git Source build"
arch=('x86_64')
url=https://www.alchemyviewer.org
license=('LGPL')
depends=(dbus-glib glu gtk3 libgl libidn libjpeg-turbo libpng libxss libxml2 mesa nss openal sdl2 vlc zlib)
makedepends=('cmake' 'gcc' 'python-virtualenv' 'python-pip' 'git' 'boost' 'xz' 'ninja')
optdepends=(
    'alsa-lib: ALSA support'
    'freealut: OpenAL support'
    'gamemode: Gamemode support'
    'lib32-libidn11: SLVoice support'
    'lib32-libsndfile: SLVoice support'
    'lib32-util-linux: SLVoice support'
    'lib32-gstreamer0.10: SLVoice support'
    'libpulse: PulseAudio support'
    'mesa-libgl: Intel, Radeon, Nouveau support'
    'nvidia-libgl: NVIDIA support'
    'nvidia-utils: NVIDIA support')
provides=('alchemy-viewer')
replaces=('alchemy-viewer-git')
options+=(!emptydirs !buildflags !strip !lto)
install=alchemy.install
source=("${pkgname}"::'git+https://git.alchemyviewer.org/alchemy/alchemy-next.git#branch='"${AL_BRANCH_OVERRIDE:-main}"
'compile.bash')
b2sums=('SKIP'
        'a72b60c0e1a939e104993e799790b7267d2eee0676c06035312992fcd2e7525ad810162238e2f9d143b835fa598b982b3971f7e8ba35b424a2e7a188699db6b1')

pkgver() {
    cd "${pkgname}" || exit 1
    ( set -o pipefail
        git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
        printf "%s_r%s.g%s" "$(cat indra/newview/VIEWER_VERSION.txt)" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
    )
}

prepare() {
    cd "${pkgname}" || exit 1
    export USE_VENV=1
    ../../compile.bash prepare
}

build() {
    cd "${pkgname}" || exit 1
    export USE_VENV=1
    ../../compile.bash build
}

package() {
    mkdir -p "${pkgdir}/opt"
    mkdir -p "${pkgdir}/usr/local/share/applications"
    # Patch shortcut to avoid duplicated entries
    sed -i 's;Name=Alchemy;Name=Alchemy (git build);' "${pkgname}/build-linux-64/newview/packaged/etc/refresh_desktop_app_entry.sh"
    sed -i 's;alchemy-viewer\.desktop;'"${pkgname}\.desktop"';' "${pkgname}/build-linux-64/newview/packaged/etc/refresh_desktop_app_entry.sh"
    mv "${pkgname}/build-linux-64/newview/packaged" "${pkgdir}/opt/${pkgname}"
}
