# Maintainer: Lukas Jirkovsky <l.jirkovsky@gmail.com>
# Contributor: BlackEagle < ike DOT devolder AT gmail DOT com >
# Contributor: Dany Martineau <dany.luc.martineau at gmail.com>
# Contributor: Dylon Edwards <deltaecho@archlinux.us>
pkgname=kcm-wacomtablet
pkgver=2.1.0
pkgrel=1
pkgdesc="KDE GUI for the Wacom Linux Drivers"
arch=('i686' 'x86_64')
url="http://kde-apps.org/content/show.php/wacom+tablet?content=114856"
license=('GPL2')
depends=('kdebase-workspace' 'xf86-input-wacom')
makedepends=('cmake' 'automoc4')
source=("http://kde-apps.org/CONTENT/content-files/114856-wacomtablet-${pkgver}.tar.xz")
md5sums=('fb2f3eefa6ac7e3c7b07a42ea4f6624c')

build() {
  cd "$srcdir/wacomtablet-$pkgver"

  cmake . \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release
  make
}

package() {
  cd "$srcdir/wacomtablet-$pkgver"

  make DESTDIR="$pkgdir" install
}

