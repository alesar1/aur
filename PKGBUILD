# Maintainer: Davi da Silva Böger <dsboger@gmail.com>
# Contributor: Manuel Hüsers <manuel.huesers@uni-ol.de>
# Contributor: Fernando Fernandez <fernando@softwareperonista.com.ar>
# Contributor: Jan de Groot <jgc@archlinux.org>
# Contributor: Jason Edson <jaysonedson@gmail.com>

_pkgname='gnome-terminal'
pkgname="${_pkgname}-fedora"
pkgver=3.44.0
pkgrel=2
pkgdesc='The GNOME Terminal Emulator with Fedora patches'
url='https://wiki.gnome.org/Apps/Terminal'
license=('GPL')
arch=('i686'
      'x86_64')
depends=('vte3-notification>=0.68.0'
         'gsettings-desktop-schemas')
makedepends=('git'
             'docbook-xsl'
             'libnautilus-extension'
             'gnome-shell'
             'meson'
             'yelp-tools')
optdepends=('gconf: for gnome-terminal-migration'
            'libnautilus-extension: for "Open Terminal Here" in GNOME Files')
provides=("${_pkgname}=${pkgver}")
conflicts=("${_pkgname}")
options=('!emptydirs')
groups=('gnome')

# Fedora patches: https://src.fedoraproject.org/cgit/rpms/gnome-terminal.git/tree/
_frepourl='https://src.fedoraproject.org/rpms/gnome-terminal'
_frepobranch='rawhide'
_fcommit='4b33c6569babe10424a7a05bded9cced81b07031'
_fpatchfile100='gnome-terminal-cntr-ntfy-autottl-ts.patch'
_fgsoverridefile='org.gnome.Terminal.gschema.override'

source=("https://download.gnome.org/sources/${_pkgname}/${pkgver::4}/${_pkgname}-${pkgver}.tar.xz"
	"${_fpatchfile100}-${_fcommit}::${_frepourl}/raw/${_fcommit}/f/${_fpatchfile100}"
	"${_fgsoverridefile}-${_fcommit}::${_frepourl}/raw/${_fcommit}/f/${_fgsoverridefile}"
)
sha256sums=('aa967189eeb609459e6c0a468a01ea70cb8c4530da1d500b2d3f4fc438b8fe2a'
            'cf8c1ccc822e7198bf9a9598b7e0cc3c958c542ba138a5874302b730f0d76eec'
            'a4a22834d6524fb697a8edf91c9489617d5ab2e513413fc84c6b8575320938f9')

prepare () {
    cd "${_pkgname}-${pkgver}"

    # Apply patches
    patch -p1 -i "../${_fpatchfile100}-${_fcommit}"
}

build() {
    arch-meson build gnome-terminal-${pkgver} \
        -D b_lto=false \
        -D docs=true \
        -Dnautilus_extension=true \
        -Dsearch_provider=true
    meson compile -C build
}

package() {
    meson install -C build --destdir "$pkgdir"

    install -Dm644 "$srcdir/${_fgsoverridefile}-${_fcommit}" \
    "${pkgdir}/usr/share/glib-2.0/schemas/${_fgsoverridefile}"
}
