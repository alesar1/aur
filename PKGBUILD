# Maintainer: Chih-Hsuan Yen <yan12125@gmail.com>
# Forked from community/pcsclite. Original contribution block:
# Maintainer: Alad Wenter <alad@archlinux.org>
# Maintainer: Christian Hesse <mail@eworm.de>
# Contributor: Giovanni Scafora <giovanni@archlinux.org>
# Contributor: Daniel Plaza <daniel.plaza.espi@gmail.com>

_pkgname=pcsclite
pkgname=lib32-$_pkgname
pkgver=1.9.2
pkgrel=3
pkgdesc="PC/SC Architecture smartcard middleware library (for proprietary 32-bit drivers)"
arch=('x86_64')
url='https://pcsclite.apdu.fr/'
license=('BSD')
depends=('lib32-systemd' $_pkgname)
makedepends=('pkg-config' 'lib32-gcc-libs' 'autoconf-archive')
options=('!docs')
validpgpkeys=('F5E11B9FFE911146F41D953D78A1B4DFE8F9C57E') # Ludovic Rousseau <rousseau@debian.org>
source=("https://pcsclite.apdu.fr/files/pcsc-lite-${pkgver}.tar.bz2"{,.asc}
        "FS-71752.patch::https://salsa.debian.org/rousseau/PCSC/-/commit/9330cd7c8a7d07ab082e684575973b6f0602fe70.patch")
sha256sums=('b267098e6d822903fba23b6183c17fd3678018b8544d1510bb7f2be802906b42'
            'SKIP'
            'f318e17c1104f97edcc04f4dd0311e4b2745752e00d9556ce9952d6fa4353447')

prepare() {
  cd "pcsc-lite-$pkgver"
  # Seems pcscd-32 needs exclusive access to devices
  sed -i -e 's#pcscd#pcscd-32#' -e '/^Requires=/a Conflicts=pcscd.service' etc/pcscd.service.in
  # This package has the same issue as https://bugs.archlinux.org/task/71752. Fix it.
  patch -Np1 -i ../FS-71752.patch
  autoreconf -ifv
}

build() {
  export CFLAGS+=" -m32"
  export CXXFLAGS+=" -m32"
  export LDFLAGS+=" -m32"
  export PKG_CONFIG_PATH="/usr/lib32/pkgconfig"

  cd "pcsc-lite-$pkgver"

  ./configure \
    --prefix=/usr \
    --libdir=/usr/lib32 \
    --sbindir=/usr/bin \
    --program-suffix="-32" \
    --sysconfdir=/etc \
    --enable-filter \
    --enable-ipcdir=/run/pcscd \
    --enable-libudev \
    --enable-usbdropdir=/usr/lib32/pcsc/drivers \
    --with-systemdsystemunitdir=/usr/lib/systemd/system

  make
}

package() {
  cd "pcsc-lite-$pkgver"
  make DESTDIR="$pkgdir" install

  install -D -m644 "$srcdir/pcsc-lite-$pkgver/COPYING" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -d "$pkgdir/usr/lib32/pcsc/drivers"

  rm -rv "$pkgdir"/usr/include
  mv "$pkgdir"/usr/lib/systemd/system/pcscd{,-32}.service
  mv "$pkgdir"/usr/lib/systemd/system/pcscd{,-32}.socket
}
