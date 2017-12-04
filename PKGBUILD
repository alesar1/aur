# Maintainer: WorMzy Tykashi <wormzy.tykashi@gmail.com>
# Contributor: Nerdy Espeon <nerdyespeon@gmail.com>
# Contributor: Kirill A. Shutemov <kirill+arch@shutemov.name>

pkgname=dwarftherapist-git
epoch=2
pkgver=39.0.0_r4_g5efed5d
pkgrel=2
pkgdesc="Heavily modified version of the original Dwarf Therapist."
url="https://github.com/Dwarf-Therapist/Dwarf-Therapist"
arch=('x86_64' 'i686')
license=('MIT')
depends=('qt5-declarative' 'hicolor-icon-theme' 'libcap')
makedepends=('git' 'cmake')
install="dwarftherapist.install"
source=(git+"${url}.git")
md5sums=('SKIP')

pkgver() {
  cd Dwarf-Therapist
  git describe --long --tags | sed -e 's:^v::' -e 's:\([^-]*-g\):r\1:' -e 's:-:_:g'
}

build() {
  cd Dwarf-Therapist
  cmake -DCMAKE_INSTALL_PREFIX="/usr" -DCMAKE_BUILD_TYPE="Release" .
  make
}

package() {
  cd Dwarf-Therapist
  make DESTDIR="$pkgdir" install
  
  # Rename binary
  mv "$pkgdir/usr/bin/DwarfTherapist" "$pkgdir/usr/bin/dwarftherapist"
  # Fix .desktop
  sed -i 's:DwarfTherapist:dwarftherapist:g' "$pkgdir/usr/share/applications/dwarftherapist.desktop"

  # Link license to expected location
  install -dm755 "$pkgdir/usr/share/licenses/$pkgname"
  ln -s /usr/share/doc/dwarftherapist/LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim:set ts=2 sw=2 et:
