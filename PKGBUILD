# Maintainer: Davi da Silva Böger <dsboger@gmail.com>
# Contributor: Manuel Hüsers <manuel.huesers@uni-ol.de>
# Contributor: Fernando Fernandez <fernando@softwareperonista.com.ar>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Jason Edson <jaysonedson@gmail.com>

pkgbase='vte3-notification'
pkgname=("${pkgbase}" 'vte-notification-common')
pkgver=0.64.1
pkgrel=1
pkgdesc='Virtual Terminal Emulator widget for use with GTK3 with Fedora patches'
arch=('i686' 'x86_64')
url='https://wiki.gnome.org/Apps/Terminal/VTE'
license=('LGPL')
depends=('fribidi'
         'gnutls'
         'gtk3'
         'intltool'
         'pcre2'
         'systemd-libs')
makedepends=('git'
             'gobject-introspection'
             'gtk-doc'
             'meson'
             'vala'
             'gperf')
options=('!emptydirs')

# Fedora patches: https://pkgs.fedoraproject.org/cgit/rpms/vte291.git/tree/
_frepourl='https://src.fedoraproject.org/rpms/vte291'
_frepobranch='rawhide'
_fpatchfile100='vte291-cntnr-precmd-preexec-scroll.patch'
_fcommit='fb1f5bcce09805acc7e3b4a1361d6952d117c7dc'

# VTE source ref
_vtetag=${pkgver}

source=(
    "git+https://git.gnome.org/browse/vte#tag=$_vtetag"
    "${_fpatchfile100}-${_fcommit}::${_frepourl}/raw/${_fcommit}/f/${_fpatchfile100}"
)
sha256sums=('SKIP'
            '59b89a9d83d05231d0ecd8269f91da68f07df019392bca32559b6bd3ef460e96')

prepare () {
    cd "vte"

    patch -p1 -i "../${_fpatchfile100}-${_fcommit}"
}

build() {
    arch-meson vte build \
        -D b_lto=false \
        -D docs=true
    meson compile -C build
}

_pick() {
  local p="$1" f d; shift
  for f; do
    d="$srcdir/$p/${f#$pkgdir/}"
    mkdir -p "$(dirname "$d")"
    mv "$f" "$d"
    rmdir -p --ignore-fail-on-non-empty "$(dirname "$f")"
  done
}

package_vte3-notification(){
    depends+=('vte-notification-common')
    provides=("vte3=${pkgver}")
    conflicts=('vte3')

    DESTDIR="${pkgdir}" meson install -C build

    _pick vte-common "$pkgdir"/etc/profile.d
    _pick vte-common "$pkgdir"/usr/lib/{systemd,vte-urlencode-cwd}
}

package_vte-notification-common() {
    depends=('sh')
    pkgdesc='Common files used by vte and vte3'
    arch=('any')
    provides=("vte-common=${pkgver}")
    conflicts=('vte-common')

    mv vte-common/* "$pkgdir"
}
