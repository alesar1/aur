# Maintainer: Fabian Bornschein <fabiscafe-cat-mailbox-dog-org>

pkgname=pokemon-revolution-online-bin
__LIN_DESKTOP_ASSET_VER=0.4.1
__PROCLIENT_VER=20220215
pkgver=${__PROCLIENT_VER}+${__LIN_DESKTOP_ASSET_VER}
pkgrel=1
pkgdesc="A free-to-play, fan-made, MMO game that is predicated around the official Pokémon games."
arch=('x86_64')
url="https://pokemonrevolution.net"
license=('custom')
depends=('vulkan-driver' 'opengl-driver')
makedepends=('git')
optdepends=('gtk2: required for the Unity ScreenSelector plugin')
conflicts=('pokemon-revolution-online')
source=("git+https://gitlab.com/fabiscafe/pro_assets_lin_desktop.git#tag=${__LIN_DESKTOP_ASSET_VER}"
        "PROClient_linux-${__PROCLIENT_VER}.zip::https://ddl.pokemonrevolution.net/PROClient_linux.zip"
)
sha512sums=('SKIP'
            '525e414ae4c9f2f81a58e753ea7a9f6d2cd1031ad841fa32118ace4027c814b1e51ee5318c8f793edbb6b0dec3a26cecfd65ca9a278872dda94dd3259b42bdc2')

package() {
    cd "PROClient"
    # As of wishes from the license, don't touch the original, extracted files.
    # Instead copy the structure and files 1:1 with better permissions.
    # Everything outside of /opt/PROClient is provided by
    # https://gitlab.com/fabiscafe/pro_assets_lin_desktop.git

    # Folderstructure
    /usr/bin/find . \
        -type d \
        -exec \
        /usr/bin/install -dm755 "${pkgdir}/opt/PROClient/{}" \;

    # Gamedata and binaries
    /usr/bin/find . \
        -type f \
        ! -name "PROClient.x86_64" \
        -exec \
        /usr/bin/install -m644 "{}" "${pkgdir}/opt/PROClient/{}" \;

    /usr/bin/install -m755 "${srcdir}/PROClient/PROClient.x86_64" "${pkgdir}/opt/PROClient/PROClient.x86_64"

    # Integration (by pro_assets_lin_desktop.git)
    /usr/bin/install -D -m644 "${srcdir}/pro_assets_lin_desktop/net.pokemonrevolution.svg" \
        "${pkgdir}/usr/share/pixmaps/net.pokemonrevolution.svg"

    /usr/bin/install -D -m644 "${srcdir}/pro_assets_lin_desktop/net.pokemonrevolution.desktop" \
        "${pkgdir}/usr/share/applications/net.pokemonrevolution.desktop"

    /usr/bin/install -D -m755 "${srcdir}/pro_assets_lin_desktop/PROClient" \
        "${pkgdir}/usr/bin/PROClient"

    /usr/bin/install -D -m644 "${srcdir}/pro_assets_lin_desktop/pkg_copyright" \
        "${pkgdir}/usr/share/licenses/pokemon-revolution-online-bin/copyright"
}
