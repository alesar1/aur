# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Co-Maintainer: George Rawlinson <george@rawlinson.net.nz>
# Contributor: Phillip Smith <pkgbuild@phs.id.au>
# Contributor: Nathan Owe <ndowens04 at gmail>

pkgname=freeipmi
pkgver=1.6.7
pkgrel=2
pkgdesc="IPMI remote console and system management software"
arch=('x86_64' 'aarch64')
url="https://www.gnu.org/software/freeipmi"
license=('GPL')
depends=('libgcrypt')
provides=('libipmimonitoring.so=6'
          'libipmidetect.so=0'
          'libipmiconsole.so=2'
          'libfreeipmi.so=17')
backup=("etc/$pkgname/$pkgname.conf"
        "etc/$pkgname/${pkgname}_interpret_sel.conf"
        "etc/$pkgname/${pkgname}_interpret_sensor.conf"
        "etc/$pkgname/ipmidetect.conf"
        "etc/$pkgname/ipmidetectd.conf"
        "etc/$pkgname/ipmiseld.conf"
        "etc/$pkgname/libipmiconsole.conf")
options=('!libtool')
source=("https://ftp.gnu.org/gnu/$pkgname/$pkgname-$pkgver.tar.gz"{,.sig}
        "tmpfiles.conf")
b2sums=('6e07afb7e93ec41c18c82725e781177d8a5fef78054ffca784cb951e360be9132ee35805014cd1ee92e1c167b2ec7dcfd07152b43f09a53eefff3e05c6f73789'
        'SKIP'
        '5354e0b716b0806ac6f82dbbae533cb86f302d1952b948df6b5ab5bd41bf194ec927c9c39fd4d5969c2f4de8cfdbf3b66a4a1c1faaee4e5768201eaef83ca991')
validpgpkeys=('A865A9FB6F0387624468543A3EFB7C4BE8303927') # Albert Chu <chu11@llnl.gov>

prepare() {
  cd "$pkgname-$pkgver"

  # replace /usr/sbin with /usr/bin
  sed -i "s/sbin/bin/" etc/*.service

  # use arch-specific config dir
  sed -i "s/sysconfig/conf.d/" etc/bmc-watchdog.service
}

build() {
  cd "$pkgname-$pkgver"

  if [[ "$CARCH" == "x86_64" ]]; then
  ./configure \
    --prefix=/usr \
    --exec-prefix=/usr \
    --sysconfdir=/etc \
    --localstatedir=/var \
    --mandir=/usr/share/man \
    --sbindir=/usr/bin \
    --disable-init-scripts \
    --with-systemdsystemunitdir=/usr/lib/systemd/system
  else
  ./configure \
    --prefix=/usr \
    --exec-prefix=/usr \
    --sysconfdir=/etc \
    --localstatedir=/var \
    --mandir=/usr/share/man \
    --sbindir=/usr/bin \
    --disable-init-scripts \
    --with-systemdsystemunitdir=/usr/lib/systemd/system \
    --build-arm

  fi

  make
}

package() {
  cd "$pkgname-$pkgver"
  make DESTDIR="$pkgdir" install

  # move config to Arch paths
  mv "$pkgdir"/etc/sysconfig "$pkgdir"/etc/conf.d

  # systemd-tmpfiles integration
  install -Dm644 "$srcdir/tmpfiles.conf" "$pkgdir/usr/lib/tmpfiles.d/$pkgname.conf"
  rm -rf "$pkgdir/var/cache"
}
