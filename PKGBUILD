# Maintainer: Laurent Treguier <laurent@treguier.org>

pkgname=oomox
pkgver=0.24.1
pkgrel=1
pkgdesc="Graphical application for generating different color variations
of Numix theme (GTK2, GTK3) and gnome-colors icon theme. Have a hack for HiDPI in gtk2."
arch=('i686' 'x86_64')
url='https://github.com/actionless/oomox'
license=('GPL3')
depends=(
    'bash'
    'glib2'
    'gdk-pixbuf2'
    'ruby-sass'
    'python-gobject'
    'gtk-engine-murrine'
    'gtk-engines'
)
optdepends=(
    'xorg-xrdb: for the `xresources` theme'
    'imagemagick: for icon theme generation'
    'inkscape: for icon theme generation'
)
provides=('oomox')
conflicts=('oomox-git')
source=(
    "https://github.com/actionless/oomox/archive/${pkgver}.tar.gz"
    'oomox-cli'
    'oomox-gui'
    'oomox-icons-cli'
    'oomoxify-cli'
    'oomox.desktop'
)
md5sums=('d49806e827f963613689e2e580395cd6'
         'cf96db21684e4e0df1f9a14b3aae65bb'
         '0d156463416bbc2260c073c15b7f2a70'
         '57cfcc4141ce6e346da7ab8bab411b14'
         'a9e990b0c4c0ee3be2f195c9c25d36e6'
         '969712293ef3f122cdc9f96a9df69779')

package() {
    install -d "${pkgdir}/opt/oomox"
    mv "${srcdir}/${pkgname}-${pkgver}"/* "${pkgdir}/opt/oomox"
    install -d "${pkgdir}/usr/bin/"
    install -d "${pkgdir}/usr/share/applications/"

    for script in oomox-cli oomox-gui oomox-icons-cli oomoxify-cli
    do
        install -Dm755 "${srcdir}/${script}" "${pkgdir}/usr/bin"
    done

    install -Dm644 "${srcdir}/oomox.desktop" "${pkgdir}/usr/share/applications"
}
