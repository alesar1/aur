# Maintainer: Laurent Treguier <laurent@treguier.org>

pkgname=oomox
pkgver=1.2.7
pkgrel=1
pkgdesc='Graphical application for generating different color variations of Numix theme (GTK2, GTK3), gnome-colors and ArchDroid icon themes.
Have a hack for HiDPI in gtk2.'
arch=('i686' 'x86_64')
url='https://github.com/actionless/oomox'
license=('GPL3')
depends=(
    'bash'
    'bc'
    'zip'
    'glib2'
    'gdk-pixbuf2'
    'sassc'
    'python-gobject'
    'gtk-engine-murrine'
    'gtk-engines'
    'procps-ng'
    'polkit'
)
optdepends=(
    'xorg-xrdb: for the `xresources` theme'
    'imagemagick: for icon theme generation'
    'inkscape: for icon theme generation'
    'gnome-colors-common-icon-theme: for using the generated icon theme'
    'breeze-icons: more fallback icons'
    'gksu: for applying Spotify theme from GUI without polkit'
)
provides=('oomox')
conflicts=('oomox-git')
source=(
    "https://github.com/actionless/oomox/archive/${pkgver}.tar.gz"
    'oomox-cli'
    'oomox-gui'
    'oomox-gnome-colors-icons-cli'
    'oomox-archdroid-icons-cli'
    'oomoxify-cli'
    'oomox.desktop'
)
md5sums=('939659c4f61220b2822d484eca35e9a1'
         'cf96db21684e4e0df1f9a14b3aae65bb'
         '0d156463416bbc2260c073c15b7f2a70'
         '57cfcc4141ce6e346da7ab8bab411b14'
         'f01aa2280f8e03d6244fe6284c44a03b'
         'a9e990b0c4c0ee3be2f195c9c25d36e6'
         '87f09004fa77db669072e8e6decf5618')

package() {
    make -C ${srcdir}/${pkgname}-${pkgver} -f po.mk install
    install -d "${pkgdir}/opt/oomox"
    mv "${srcdir}/${pkgname}-${pkgver}"/* "${pkgdir}/opt/oomox"
    python -O -m compileall ${pkgdir}/opt/oomox/oomox_gui
    install -d "${pkgdir}/usr/bin/"
    install -d "${pkgdir}/usr/share/applications/"

    for script in oomox-cli oomox-gui oomox-gnome-colors-icons-cli oomox-archdroid-icons-cli oomoxify-cli
    do
        install -Dm755 "${srcdir}/${script}" "${pkgdir}/usr/bin"
    done

    install -Dm644 "${srcdir}/oomox.desktop" "${pkgdir}/usr/share/applications"
}
