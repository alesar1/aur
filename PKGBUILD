# Maintainer: drakkan <nicola.murino at gmail dot com>
# Contributor: drakkan <nicola.murino at gmail dot com>

pkgname='pop-gnome-shell-theme-bin'
pkgver='5.4.4'
pkgrel=1
_timestamp=1629398560
_commit=6615e45
pkgdesc='System76 Pop GNOME Shell Theme'
arch=('any')
url='https://github.com/pop-os/gnome-shell-theme'
license=('GPL2' 'CCPL:by-sa')
conflicts=('pop-gnome-shell-theme')
provides=('pop-gnome-shell-theme')
depends=(
  "gnome-shell>=3.18.3"
  "pop-gtk-theme-bin"
)
optdepends=(
  "pop-icon-theme-bin: Recommended icon theme"
  "pop-sound-theme-bin: Recommended sound theme"
  "ttf-fira-sans: Recommended font for window titles and interface"
  "ttf-fira-mono: Recommended monospace font"
  "ttf-roboto-slab: Recommended font for documents"
  "pop-session-bin"
)
source=("http://ppa.launchpad.net/system76/pop/ubuntu/pool/main/p/pop-gtk-theme/pop-gnome-shell-theme_${pkgver}~${_timestamp}~21.10~${_commit}_all.deb")
sha256sums=('a9ff82f753be170fa38bffc4cfb3b7ddfcf645df2d4bd8e045423fa5a102ca83')

package() {
  cd "${srcdir}"
  
  tar --zstd -xC "${pkgdir}" -f data.tar.zst
}

# vim: ts=2 sw=2 et:
