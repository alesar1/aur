# Maintainer: drakkan <nicola.murino at gmail dot com>
# Contributor: drakkan <nicola.murino at gmail dot com>

pkgname='pop-gtk-theme-bin'
pkgver='5.3.3'
pkgrel=4
_timestamp=1625837590
_commit=11bcd41
pkgdesc='System76 Pop GTK+ Theme'
arch=('any')
url='https://github.com/pop-os/gtk-theme'
license=('GPL2' 'CCPL:by-sa')
conflicts=('pop-gtk-theme')
provides=('pop-gtk-theme')
depends=(
	"gtk3>=3.18.9"
	"gtk2>=2.24.30"
	"gdk-pixbuf2>=2.24.30"
	"gtk-engine-murrine>=0.98.1"
)
optdepends=(
	"gnome-shell"
	"gnome-flashback"
	"budgie-desktop"
	"xfce4-session"
	"mate-desktop"
	"lxde-common"
	"pop-icon-theme: Recommended icon theme"
	"ttf-fira-sans: Recommended font for window titles and interface"
	"ttf-fira-mono: Recommended monospace font"
	"ttf-roboto-slab: Recommended font for documents"
)
source=("http://ppa.launchpad.net/system76/pop/ubuntu/pool/main/p/pop-gtk-theme/pop-gtk-theme_${pkgver}~${_timestamp}~21.04~${_commit}_all.deb")
sha256sums=('68b77d63bc63e743e67e393bd8170471467de3b8db3f32ab81427ffe8ed71aa2')

package() {
  cd "${srcdir}"
  
  tar -xJC "${pkgdir}" -f data.tar.xz
}

# vim: ts=2 sw=2 et:
