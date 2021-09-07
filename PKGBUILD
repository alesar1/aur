# Maintainer: Fabian Bornschein <fabiscafe@mailbox.org>

pkgname=pokemon-revolution-online-bin
__LIN_DESKTOP_ASSET_VER=0.4.1
__PROCLIENT_VER=20210907
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
            '3cefebd0ff37b2adf4bd6d9371674213c6c1dd90f81c16008bbd924c1d86fd428fab397fedb51bc81776cb1bcf57342c4d6d48eab1c5ba914d535bdd809228ee')

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
