# Maintainer: Behnam Momeni <sbmomeni [at the] gmail [dot] com>
# Contributor: Alexander F. Rødseth <xyproto@archlinux.org>
# Contributor: Ionut Biru <ibiru@archlinux.org>

pkgname=lib32-libgexiv2
_pkgbase=gexiv2
pkgver=0.14.0
pkgrel=1
pkgdesc="GObject-based wrapper around the Exiv2 library (32-bit)"
url="https://wiki.gnome.org/Projects/gexiv2"
arch=('x86_64')
license=('GPL2')
depends=('lib32-exiv2' 'lib32-glib2' 'libgexiv2')
makedepends=('gobject-introspection' 'meson' 'python-gobject' 'python2-gobject' 'vala')
source=("https://gitlab.gnome.org/GNOME/${_pkgbase}/-/archive/${_pkgbase}-${pkgver}/${_pkgbase}-${_pkgbase}-${pkgver}.tar.gz"
        "x86-linux-gnu")
sha512sums=('876cc4a8a48aa35d0840ae6bc4ce267602eb5148ca6942d371adef01c44ec84c91e9ccb0f7c38d97baa0d6cf37c0e14cc932afa18cba95feab52e54762bdac24'
            '23afdfc444563455a7a7ebccbc5e92e39bb2726d7785cd33ddbe856ea479a139778e5b816267025d5e183094fae040b0aaf6be5a166693879a102d5e6e859c3c')

build() {
  mkdir -p "build"
  arch-meson "${_pkgbase}-${_pkgbase}-${pkgver}" "build" --cross-file x86-linux-gnu
  meson compile -C "build"
}

package() {
  DESTDIR="$pkgdir" ninja -C "build" install
  rm -r "$pkgdir/usr/"{share,include,lib}
}

