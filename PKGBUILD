# Maintainer: Alexey D. <lq07829icatm@rambler.ru>
# Contributor: Felix Yan <felixonmars@archlinux.org>
# Contributor: Ionut Biru <ibiru@archlinux.org>

pkgname=udisks2-nosystemd
pkgver=2.8.2
pkgrel=1
pkgdesc="Disk Management Service, version 2"
arch=('i686' 'x86_64')
url="http://www.freedesktop.org/wiki/Software/udisks"
license=('GPL2')
groups=('eudev-base')
depends=('polkit-consolekit' 'libatasmart' 'libgudev' 'libblockdev>=2.19')
makedepends=('docbook-xsl' 'gobject-introspection' 'parted' 'libiscsi' 'gtk-doc')
optdepends=('gptfdisk: GUID partition table support'
            'parted: partition management'
            'gptfdisk: GUID partition table support'
            'ntfs-3g: NTFS filesystem management support'
            'dosfstools: VFAT filesystem management support'
            'libiscsi: iSCSI support')
provides=("udisks2=${pkgver}")
conflicts=('udisks2' 'udisks2-eudev')
replaces=('udisks2' 'udisks2-eudev')
options=(!libtool)
source=(https://github.com/storaged-project/udisks/archive/udisks-$pkgver.tar.gz
        disable_logind_support.patch)
sha512sums=('6a87c2f0273a51fc6bbee876f08ff6331183b9b27da62b1f934e1a8e1154a3b5dc309ba298c30b54c09b3ac851fcfed91e51f331cdfa53db4de7136314a750c4'
            '379c9600d06a1a6d1a59cc93b2b15fbafc6c756a4dcbcf1b6b7995e991c0758e19db6f08511351b1a764b747d183373423e1bc396147eb8da5b2d85c420c25b4')

prepare() {
  cd "udisks-udisks-$pkgver"

  # It should fix an issue when udisks is asking to enter an user password on
  # every (un)mount operation if installed together with systemd package and any
  # initsystem which supports tmpfiles.d configs.
  patch -p1 -i "$srcdir"/disable_logind_support.patch

  NOCONFIGURE=1 ./autogen.sh
}

build() {
  cd "udisks-udisks-$pkgver"
  ./configure \
      --prefix=/usr \
      --sysconfdir=/etc \
      --localstatedir=/var \
      --disable-static \
      --sbindir=/usr/bin \
      --libexecdir=/usr/lib \
      --enable-gtk-doc enable_available_modules=yes
  make
}

package() {
  cd "udisks-udisks-$pkgver"
  make DESTDIR="$pkgdir" install
}
