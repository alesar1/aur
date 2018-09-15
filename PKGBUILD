# Maintainer: Jochen Jägers <aur@diezonks.de>
# Contributor: Malte Rabenseifner <mail@malte-rabenseifner.de>
# Contributor: Patrick Burroughs (Celti) <celti@celti.name>

pkgname=networkmanager-libreswan-git
pkgver=1.2.7.dev.r78.g94bc845
pkgrel=1
pkgdesc="NetworkManager IPSec VPN plugin for Libreswan"
arch=('i686' 'x86_64')
license=('GPL')
url='http://wiki.gnome.org/Projects/NetworkManager/VPN'
provides=('networkmanager-libreswan')
conflicts=('networkmanager-libreswan')
depends=('libnm-gtk' 'libsecret' 'libreswan' 'libnl')
makedepends=('intltool' 'python' 'git')
source=(git+https://gitlab.gnome.org/GNOME/NetworkManager-libreswan.git#branch=master)
sha256sums=('SKIP')

build() {
  cd $srcdir/NetworkManager-libreswan
  patch -p1 < /home/jochen/Downloads/NetworkManager-libreswan/pfs.patch
  
  ./autogen.sh --prefix=/usr --sysconfdir=/etc --localstatedir=/var \
    --libexecdir=/usr/lib/networkmanager \
    --enable-more-warnings=yes \
    --disable-static
  make
}

package() {
  cd $srcdir/NetworkManager-libreswan
  make DESTDIR="$pkgdir" install
}

pkgver() {
  cd $srcdir/NetworkManager-libreswan
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}
