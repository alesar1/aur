# Maintainer: Yauhen Kirylau <yawghen AT gmail.com>
# Upstream URL: https://github.com/actionless/oomox

pkgname=oomox-git
pkgver=1.5.0.5
pkgrel=2
pkgdesc="Graphical application for generating different color variations
of Numix and Materia (ex-Flat-Plat) themes (GTK2, GTK3),
gnome-colors and ArchDroid icon themes.
Have a hack for HiDPI in gtk2."
arch=('x86_64' 'i686')
url="https://github.com/actionless/oomox"
license=('GPLv3')
source=(
	"git+https://github.com/actionless/oomox.git#branch=master"
	"git+https://github.com/actionless/oomox-gtk-theme.git#branch=master"
	"git+https://github.com/nana-4/materia-theme.git#branch=master"
	"git+https://github.com/actionless/oomox-archdroid-icon-theme.git#branch=master"
	"git+https://github.com/actionless/oomox-gnome-colors-icon-theme.git#branch=master"
	"git+https://github.com/actionless/oomoxify.git#branch=master"
	"git+https://github.com/base16-builder/base16-builder#branch=master"
)
md5sums=(
	"SKIP"
	"SKIP"
	"SKIP"
	"SKIP"
	"SKIP"
	"SKIP"
	"SKIP"
)
depends=(
	'coreutils'
	'bash'
	'grep'
	'sed'
	'bc'
	'zip'
	'gtk3'
	'glib2'
	'gdk-pixbuf2'
	'sassc'
	'python-gobject'
	'gtk-engine-murrine'
	'gtk-engines'
	'polkit'
	'parallel'
	'optipng'
	'librsvg'
	'imagemagick'
	'inkscape'
	'python-pillow'
)
makedepends=(
	'git'
)
optdepends=(
	'xorg-xrdb: for the `xresources` theme'
	'breeze-icons: more fallback icons'
	'gksu: for applying Spotify theme from GUI without polkit'
)
options=(
	'!strip'
)

pkgver() {
	cd "${srcdir}/oomox"
	git describe | sed 's/^v//;s/-/+/g'
}

prepare(){
	cd "${srcdir}/oomox"
	git submodule init
	git config submodule.gtk-theme.url $srcdir/oomox-gtk-theme
	git config submodule.materia-theme.url $srcdir/materia-theme
	git config submodule.archdroid-icon-theme.url $srcdir/oomox-archdroid-icon-theme
	git config submodule.gnome-colors-icon-theme.url $srcdir/oomox-gnome-colors-icon-theme
	git config submodule.oomoxify.url $srcdir/oomoxify
	git config submodule.base16-builder.url $srcdir/base16-builder
	git submodule update
}

package() {
	cd "${srcdir}/oomox"
	./packaging/install.sh ./ "${pkgdir}"
	python -O -m compileall ${pkgdir}/opt/oomox/oomox_gui
}
