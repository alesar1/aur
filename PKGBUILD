# Maintainer: Fabian Bornschein <fabiscafe@mailbox.org>

pkgname=pokemon-revolution-online-bin
__LIN_DESKTOP_ASSET_VER=0.4.1
__PROCLIENT_VER=20210410
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
install="install"
source=("git+https://gitlab.com/fabis_cafe/pro_assets_lin_desktop.git#tag=${__LIN_DESKTOP_ASSET_VER}"
    "PROClient_linux-${__PROCLIENT_VER}.zip::https://ddl.pokemonrevolution.net/PROClient_linux.zip"
)
sha512sums=('SKIP'
            'ea82286a33f73b0ef352b5e481689d5d6b18b6e52ac7a70bf78c8f8ddda100b811c6e68a0dba964455f6a397bef0bf5a838e8a9a07b5086fd8704b70c33a2487')

package() {
    #PROCLIENT PART
    ###############

    # CREATE: directory structure
    /usr/bin/install -dm755 "${pkgdir}/opt/PROClient"

    ## This uses "." as current dir, in order to not have the whole build path (for many /home/user/blabla)
    ## in the install path. srcdir needs to be the starting point.
    cd "${srcdir}/PROClient"
    /usr/bin/find . \
        -type d \
        -exec \
        /usr/bin/install -dm755 "${pkgdir}/opt/PROClient/{}" \;
		    
    # INSTALL
    /usr/bin/find . \
        -type f \
        ! -name "PROClient.x86_64" \
        -exec \
        /usr/bin/install -m644 "{}" "${pkgdir}/opt/PROClient/{}" \;

    /usr/bin/install -m755 "${srcdir}/PROClient/PROClient.x86_64" "${pkgdir}/opt/PROClient/PROClient.x86_64"

    #_DATA PART
    ###########

    #MOVE ICON
    ## The original icon is proprietary with a license that don't allows changes to the overall content.
    ## Don't use the original icon for the '.desktop entry because of this.
    /usr/bin/install -D -m644 "${srcdir}/pro_assets_lin_desktop/net.pokemonrevolution.svg" \
        "${pkgdir}/usr/share/pixmaps/net.pokemonrevolution.svg"

    # DESKTOP FILE
    /usr/bin/install -D -m644 "${srcdir}/pro_assets_lin_desktop/net.pokemonrevolution.desktop" \
        "${pkgdir}/usr/share/applications/net.pokemonrevolution.desktop"

    # START SCRIPT
    /usr/bin/install -D -m755 "${srcdir}/pro_assets_lin_desktop/PROClient" \
        "${pkgdir}/usr/bin/PROClient"

    # COPYRIGHT FILE
    /usr/bin/install -D -m644 "${srcdir}/pro_assets_lin_desktop/pkg_copyright" \
        "${pkgdir}/usr/share/licenses/pokemon-revolution-online-bin/copyright"
}
