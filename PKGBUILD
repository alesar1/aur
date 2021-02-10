# Maintainer: Behnam Momeni <sbmomeni [at the] gmail [dot] com>
# Contributor: Alexander F. Rødseth <xyproto@archlinux.org>
# Contributor: Ionut Biru <ibiru@archlinux.org>

pkgname=lib32-libgexiv2
_pkgbase=gexiv2
pkgver=0.12.1
pkgrel=1
pkgdesc="GObject-based wrapper around the Exiv2 library (32-bit)"
url="https://wiki.gnome.org/Projects/gexiv2"
arch=('x86_64')
license=('GPL2')
depends=('lib32-exiv2' 'lib32-glib2' 'libgexiv2')
makedepends=('gobject-introspection' 'meson' 'python-gobject' 'python2-gobject' 'vala')
source=("https://gitlab.gnome.org/GNOME/${_pkgbase}/-/archive/${_pkgbase}-${pkgver}/${_pkgbase}-${_pkgbase}-${pkgver}.tar.gz"
        "x86-linux-gnu"
        "pkgconf32")
sha512sums=('6910b0642e02670e75e1a5e23f859f5af303f6e1ec10dd03d79b8722d7a188f8b4b44e29ff51e018e12a0aec0dbd743823807ac55976fac9cb8de28863e216ed'
            'c90a2e8d8753d4474afbaa5f1def579b4fe9580904b25125e2f942fa722a6ed54340e467d2ddf60ab9d3aeeeb93f5f740502cafe9a1f52d55da3bd78baa3b5c5'
            'f21dd90f4f9caf67854f68baddbfbfecda295cb53f0444a1c0bfb98246390ae5d48ba5a0892fecf8a7faa937ef88884743a8e4282ca98d54c0da80c5457ef066')

build() {
  mkdir -p "build"
  arch-meson "${_pkgbase}-${_pkgbase}-${pkgver}" "build" --cross-file x86-linux-gnu --libdir=/usr/lib32
  ninja -C "build"
}

package() {
  DESTDIR="$pkgdir" ninja -C "build" install
  rm -r "$pkgdir/usr/"{share,include,lib}
}

