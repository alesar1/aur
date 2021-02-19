# Maintainer: Davi da Silva Böger <dsboger@gmail.com>
# Contributor: Manuel Hüsers <manuel.huesers@uni-ol.de>
# Contributor: Fernando Fernandez <fernando@softwareperonista.com.ar>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Jason Edson <jaysonedson@gmail.com>

pkgbase='vte3-notification'
pkgname=("${pkgbase}" 'vte-notification-common')
pkgver=0.62.3
pkgrel=1
pkgdesc='Virtual Terminal Emulator widget for use with GTK3 with Fedora patches'
arch=('i686' 'x86_64')
url='https://wiki.gnome.org/Apps/Terminal/VTE'
license=('LGPL')
depends=('gtk3' 'pcre2' 'gnutls')
makedepends=('git' 'intltool' 'gobject-introspection' 'gtk-doc' 'meson' 'pango' 'vala' 'gperf' 'glade')
options=('!emptydirs')

# Fedora patches: https://pkgs.fedoraproject.org/cgit/rpms/vte291.git/tree/
_frepourl='https://src.fedoraproject.org/rpms/vte291'
_frepobranch='f34'
_fpatchfile100='vte291-cntnr-precmd-preexec-scroll.patch'
_fpatchfile101='vte291-gcc11.patch'
_fpatchfile000='0001-Revert-widget-Limit-select-all-to-the-writable-regio.patch'
_fcommit='03ce959c3bbba97cd9a0c50fa0d6037d695eaf74'

# VTE source ref
_vtetag=${pkgver}

source=(
	"git+https://git.gnome.org/browse/vte#tag=$_vtetag"
	"${_fpatchfile100}-${_fcommit}::${_frepourl}/raw/${_fcommit}/f/${_fpatchfile100}"
	"${_fpatchfile101}-${_fcommit}::${_frepourl}/raw/${_fcommit}/f/${_fpatchfile101}"
	"${_fpatchfile000}-${_fcommit}::${_frepourl}/raw/${_fcommit}/f/${_fpatchfile000}"
)
sha256sums=('SKIP'
            '46cdbbf67dcd41c1a4d3c93c50c08ce2f0f58d0fa10d3247bc18a1015c21c1ea'
            '7615f23c0fdf723c3ad5545b11c4e532d392c8ff1034468e33e85dd66a1d9fd3'
            '25dee260b62c310ca00f8ac94b27c86c3d1bcf9dc697ec47e2515079e7ee1310')

prepare () {
	cd "vte"

	patch -p1 -i "../${_fpatchfile000}-${_fcommit}"
	patch -p1 -i "../${_fpatchfile100}-${_fcommit}"
	patch -p1 -i "../${_fpatchfile101}-${_fcommit}"
}

build() {
	arch-meson vte build -Db_lto=false -D docs=true
	ninja -C build
}

package_vte3-notification(){
	depends+=('vte-notification-common')
	provides=("vte3=${pkgver}")
	conflicts=('vte3')

	DESTDIR="${pkgdir}" meson install -C build

	mv "$pkgdir/etc/profile.d/vte.sh" "$srcdir"
	mv "$pkgdir/etc/profile.d/vte.csh" "$srcdir"
	mv "$pkgdir/usr/lib/vte-urlencode-cwd" "$srcdir"
}

package_vte-notification-common() {
	depends=('sh')
	pkgdesc='Common files used by vte and vte3'
	arch=('any')
	provides=("vte-common=${pkgver}")
	conflicts=('vte-common')

	install -Dt "$pkgdir/etc/profile.d" -m644 vte.sh
	install -Dt "$pkgdir/etc/profile.d" -m644 vte.csh
	install -Dt "$pkgdir/usr/lib" -m755 vte-urlencode-cwd
}
