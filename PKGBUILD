# Maintainer: Yauhen Kirylau <yawghen AT gmail.com>
# Upstream URL: https://github.com/themix-project/oomox

pkgname=oomox-git
pkgver=1.12.6
pkgrel=1
pkgdesc="Themix: GUI for generating different color variations
of Arc, Materia, Oomox themes
(GTK2, GTK3, Cinnamon, GNOME, MATE, Openbox, Xfwm),
ArchDroid, Gnome-Colors, Numix, Papirus, Suru++ icons,
and terminal palettes.
Have a hack for HiDPI in GTK2."
arch=('x86_64' 'i686')
url="https://github.com/themix-project/oomox"
license=('GPL3')
source=(
	"git+https://github.com/themix-project/oomox.git#branch=master"
	"git+https://github.com/themix-project/oomox-gtk-theme.git#branch=master"
	"git+https://github.com/nana-4/materia-theme.git#branch=master"
	"git+https://github.com/NicoHood/arc-theme.git#branch=master"
	"git+https://github.com/themix-project/archdroid-icon-theme.git#branch=master"
	"git+https://github.com/themix-project/gnome-colors-icon-theme.git#branch=master"
	"git+https://github.com/themix-project/oomoxify.git#branch=master"
	"git+https://github.com/themix-project/base16_mirror.git#branch=master"
	"git+https://github.com/numixproject/numix-icon-theme.git#branch=master"
	"git+https://github.com/numixproject/numix-folders.git#branch=master"
	"git+https://github.com/PapirusDevelopmentTeam/papirus-icon-theme.git#branch=master"
	"git+https://github.com/gusbemacbe/suru-plus.git#branch=master"
	"git+https://github.com/gusbemacbe/suru-plus-aspromauros.git#branch=master"
)
md5sums=(
	"SKIP"
	"SKIP"
	"SKIP"
	"SKIP"
	"SKIP"
	"SKIP"
	"SKIP"
	"SKIP"
	"SKIP"
	"SKIP"
	"SKIP"
	"SKIP"
	"SKIP"
)
depends=(
	'gtk3'
	'python-gobject'
	'glib2'  # oomox, materia, arc
	'gdk-pixbuf2'  # oomox, materia, arc
	'gtk-engine-murrine'  # oomox, materia, arc
	'gtk-engines'  # oomox, materia, arc
	'gnome-themes-extra'  # materia
	'sassc'  # oomox, materia, arc
	'librsvg'  # oomox, gnome-colors
	'sed'  # oomox, materia, arc, gnome-colors, archdroid
	'findutils'  # oomox, materia, arc, gnome-colors, arch-droid
	'grep'  # oomoxify, oomox, materia, arc, gnome-colors
	'bc'  # oomoxify, oomox, materia, arc, gnome-colors
	'zip'  # oomoxify
	'polkit'  # oomoxify
	'imagemagick'  # gnome-colors
	'parallel'  # materia
	'optipng'  # materia, arc
	'python-pillow'  # import_pil
	'python-pystache'  #  base16_format
	'python-yaml'  #  base16_format

	'resvg'  # materia, arc
	##or
	#'inkscape'  # materia, arc
)
makedepends=(
	'git'
)
optdepends=(
	'xorg-xrdb: for the `xresources` theme'
	'breeze-icons: more fallback icons'
	'gksu: for applying Spotify theme from GUI without polkit'
	'colorz: additional image analyzer for "Import colors from image" plugin'
	'python-colorthief: additional image analyzer for "Import colors from image" plugin'
	'python-haishoku: additional image analyzer for "Import colors from image" plugin'
)
options=(
	'!strip'
)

pkgver() {
	cd "${srcdir}/oomox"
	git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare(){
	cd "${srcdir}/oomox"

	# remove submodule if building package update without flushing the dir:
	git submodule deinit --all --force || true
	git config --get-regexp submodule \
		| cut -d' ' -f1 \
		| xargs --no-run-if-empty -n1 git config --unset \
		|| true
	old_paths=(
		"$srcdir"/oomox/plugins/import_base16/base16-data
	)
	for path in "${old_paths[@]}" ; do
		rm -fr "${path}"
	done

	# use already downloaded by makepkg git repos as submodules of the main:
	git submodule init
	git config submodule.theme_oomox.url $srcdir/oomox-gtk-theme
	git config submodule.materia-theme.url $srcdir/materia-theme
	git config submodule.arc-theme.url $srcdir/arc-theme
	git config submodule.archdroid-icon-theme.url $srcdir/archdroid-icon-theme
	git config submodule.gnome-colors-icon-theme.url $srcdir/gnome-colors-icon-theme
	git config submodule.oomoxify.url $srcdir/oomoxify
	git config submodule.base16_mirror.url $srcdir/base16_mirror
	git config submodule.numix-folders.url $srcdir/numix-folders
	git config submodule.numix-icon-theme.url $srcdir/numix-icon-theme
	git config submodule.papirus-icon-theme.url $srcdir/papirus-icon-theme
	git config submodule.suru-plus.url $srcdir/suru-plus
	git config submodule.suru-plus-aspromauros.url $srcdir/suru-plus-aspromauros
	git submodule update
}

package() {
	_oomox_dir=/opt/oomox
	_oomox_gui_dir=${_oomox_dir}/oomox_gui

	cd "${srcdir}/oomox"
	make DESTDIR="${pkgdir}" APPDIR="${_oomox_dir}" PREFIX="/usr" install
	python -O -m compileall ${pkgdir}${_oomox_gui_dir} -d ${_oomox_gui_dir}
}
