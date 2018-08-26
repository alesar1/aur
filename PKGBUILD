# Maintainer: Laurent Treguier <laurent@treguier.org>

_oomox_ver=1.7.0.2
_numix_ver=1.9.0.1
_materia_ver=20180311
_materia_cmt=df30959eb068ef55db18a18ed23a4a1c79129768
_arc_cmt=c49e1f7fb0aa937789f7c2430c74479e66b6b230
_archdroid_ver=1.0.2
_gnome_colors_ver=5.5.3
_oomoxify_ver=1.0.0.1
_base16_cmt=d022b9daa5c233a08a8d3b94fd534a3041e3a8c1

pkgname=oomox
pkgver=${_oomox_ver}
pkgrel=5
pkgdesc='Graphical application for generating different color variations of Numix/Materia/Arc theme (GTK2, GTK3), gnome-colors and ArchDroid icon themes.
Have a hack for HiDPI in gtk2.'
arch=('i686' 'x86_64')
url='https://github.com/themix-project/oomox'
license=('GPL3')
depends=(
    'coreutils'
    'bash'
    'bc'
    'findutils'
    'gdk-pixbuf2'
    'glib2'
    'gtk-engine-murrine'
    'gtk-engines'
    'gtk3'
    'imagemagick'
    'inkscape'
    'librsvg'
    'optipng'
    'parallel'
    'polkit'
    'python-gobject'
    'python-pillow'
    'sassc'
    'sed'
    'zip'
)
optdepends=(
    'xorg-xrdb: for the `xresources` theme'
    'breeze-icons: more fallback icons'
    'gksu: for applying Spotify theme from GUI without polkit'
)
options=(
    '!strip'
)
provides=('oomox')
conflicts=('oomox-git')
source=(
    "oomox-${_oomox_ver}.tar.gz::https://github.com/themix-project/oomox/archive/${_oomox_ver}.tar.gz"
    "oomox-gtk-theme-${_numix_ver}.tar.gz::https://github.com/themix-project/oomox-gtk-theme/archive/${_numix_ver}.tar.gz"
    "materia-theme-${_materia_cmt}.tar.gz::https://github.com/actionless/materia-theme/archive/${_materia_cmt}.tar.gz"
    "arc-theme-${_arc_cmt}.tar.gz::https://github.com/actionless/arc-theme/archive/${_arc_cmt}.tar.gz"
    "archdroid-icon-theme-${_archdroid_ver}.tar.gz::https://github.com/themix-project/oomox-archdroid-icon-theme/archive/${_archdroid_ver}.tar.gz"
    "gnome-colors-icon-theme-${_gnome_colors_ver}.tar.gz::https://github.com/themix-project/oomox-gnome-colors-icon-theme/archive/${_gnome_colors_ver}.tar.gz"
    "oomoxify-${_oomoxify_ver}.tar.gz::https://github.com/themix-project/oomoxify/archive/${_oomoxify_ver}.tar.gz"
    "base16-builder-${_base16_cmt}.tar.gz::https://github.com/base16-builder/base16-builder/archive/${_base16_cmt}.tar.gz"
)
md5sums=('d98a9d2d2db29e8496f8684a965b8033'
         '84d1c8416cff7736c4584e3329122174'
         '47bb49b8560bea49726b02d6af1fee6a'
         '23460fc1c478f6595a56c9a6a98bdac8'
         'cb669130685dcbf03a8f7f5738c71dc6'
         'ae3250f1dce9505dbaa60d92dcb9a239'
         '62be7e51ed58135765c1758a6a1df2d8'
         '38fc51a55c798032266c03ee82461119')

prepare() {
    cd ${srcdir}
    cp -pr "${pkgname}-gtk-theme-${_numix_ver}"/* "${pkgname}-${_oomox_ver}/plugins/theme_oomox/gtk-theme"
    cp -pr "materia-theme-${_materia_cmt}"/* "${pkgname}-${_oomox_ver}/plugins/theme_materia/materia-theme"
    cp -pr "arc-theme-${_arc_cmt}"/* "${pkgname}-${_oomox_ver}/plugins/theme_arc/arc-theme"
    cp -pr "archdroid-icon-theme-${_archdroid_ver}"/* "${pkgname}-${_oomox_ver}/plugins/icons_archdroid/archdroid-icon-theme"
    cp -pr "gnome-colors-icon-theme-${_gnome_colors_ver}"/* "${pkgname}-${_oomox_ver}/plugins/icons_gnomecolors/gnome-colors-icon-theme"
    cp -pr "oomoxify-${_oomoxify_ver}"/* "${pkgname}-${_oomox_ver}/plugins/oomoxify"
    cp -pr "base16-builder-${_base16_cmt}"/* "${pkgname}-${_oomox_ver}/plugins/import_base16/base16-data"
}

package() {
    _oomox_dir="/opt/${pkgname}"
    _oomox_gui_dir="${_oomox_dir}/oomox_gui"

    cd "${srcdir}/${pkgname}-${_oomox_ver}"
    make DESTDIR="${pkgdir}" APPDIR="${_oomox_dir}" PREFIX="/usr" install
    python -O -m compileall "${pkgdir}/${_oomox_gui_dir}" -d "${_oomox_gui_dir}"
}
