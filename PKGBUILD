# Maintainer: Mantas Mikulėnas <grawity@gmail.com>
# Maintainer: Cedric Staub <cs+aur@cssx.cc>

pkgname=dnssec-trigger
pkgver=0.12
pkgrel=1
pkgdesc="Reconfigures the local unbound DNS server to use DNSSEC enabled forwarders"
arch=('i686' 'x86_64')
url="http://www.nlnetlabs.nl/projects/dnssec-trigger/"
license=('BSD')
depends=('gtk2' 'ldns' 'unbound')
backup=('etc/dnssec.conf'
        'etc/dnssec-trigger/dnssec-trigger.conf')
source=(http://www.nlnetlabs.nl/downloads/dnssec-trigger/$pkgname-$pkgver.tar.gz
        dnssec-triggerd.service
        dnssec-triggerd-keygen.service)
sha256sums=('1cafd9ec296edc1d17b9ed2a98e06c7057c80ef1dbd6d45dbfa11991d3703535'
            'c8ed3ef4ec9cba0bd00f47bfbf0e59c318130615aca4370bc597d98365445be9'
            '831f2cf40687325d50fcc11a74050198d9a24f230749e3570cf9153abf3db12e')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  ./configure \
    --prefix=/usr \
    --sysconfdir=/etc \
    --sbindir=/usr/bin \
    --libexecdir=/usr/bin/$pkgname \
    --with-keydir=/etc/dnssec-trigger ;
  make
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  make DESTDIR="$pkgdir/" install
  mkdir -p "$pkgdir/usr/lib/systemd/system"
  cp "$srcdir/dnssec-triggerd.service" "$pkgdir/usr/lib/systemd/system/"
  cp "$srcdir/dnssec-triggerd-keygen.service" "$pkgdir/usr/lib/systemd/system/"
  rm -f "$pkgdir/etc/xdg/autostart/dnssec-trigger-panel.desktop"
  rm -rf "$pkgdir/var"
}

# vim: ts=2:sw=2:et
