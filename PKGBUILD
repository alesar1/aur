# Maintainer: robertfoster

pkgname=namecoin-core
pkgver=0.18.1
pkgrel=1
pkgdesc="Namecoin Core headless P2P node"
arch=('i686' 'x86_64' 'armv7h')
url="https://namecoin.org"
depends=('boost'
         'libevent'
         'zeromq'
         'miniupnpc')
makedepends=('autoconf'
             'automake'
             'binutils'
             'gcc'
             'libtool'
             'm4'
             'make'
             'pkg-config')
license=('MIT')
source=(${pkgname%-core}-$pkgver.tar.gz::https://github.com/namecoin/namecoin-core/archive/nc$pkgver.tar.gz
        namecoin.conf
        namecoin.logrotate
        namecoin.service
        namecoin-reindex.service)
backup=('etc/namecoin/namecoin.conf'
        'etc/logrotate.d/namecoin')
provides=('namecoin-cli' 'namecoin-daemon' 'namecoin-tx')
conflicts=('namecoin-cli' 'namecoin-daemon' 'namecoin-qt' 'namecoin-tx')
install=namecoin.install

build() {
  cd "$srcdir/${pkgname}-nc$pkgver"

  msg2 'Building...'
  ./autogen.sh
  ./configure \
    --prefix=/usr \
    --sbindir=/usr/bin \
    --libexecdir=/usr/lib/namecoin \
    --sysconfdir=/etc \
    --sharedstatedir=/usr/share/namecoin \
    --localstatedir=/var/lib/namecoin \
    --enable-hardening \
    --with-gui=no \
    --disable-wallet \
    --with-gnu-ld
  make
}

package() {
  cd "$srcdir/${pkgname}-nc$pkgver"

  msg2 'Installing license...'
  install -Dm 644 COPYING -t "$pkgdir/usr/share/licenses/${pkgname%-core}"

  msg2 'Installing documentation...'
  install -dm 755 "$pkgdir/usr/share/doc/namecoin"
  for _doc in \
    $(find doc -maxdepth 1 -type f -name "*.md" -printf '%f\n') \
    release-notes; do
      cp -dpr --no-preserve=ownership doc/$_doc \
        "$pkgdir/usr/share/doc/namecoin/$_doc"
  done

  msg2 'Installing namecoin...'
  make DESTDIR="$pkgdir" install

  # Rename files left over from forking, because conflict with btc packages
  mv $pkgdir/usr/share/man/man1/{bitcoind,namecoind}.1
  mv $pkgdir/usr/share/man/man1/{bitcoin,namecoin}-cli.1

  msg2 'Installing namecoin.conf...'
  install -Dm 600 "$srcdir/namecoin.conf" -t "$pkgdir/etc/namecoin"

  msg2 'Installing namecoin.service...'
  install -Dm 644 "$srcdir/namecoin.service" -t "$pkgdir/usr/lib/systemd/system"
  install -Dm 644 "$srcdir/namecoin-reindex.service" \
    -t "$pkgdir/usr/lib/systemd/system"

  msg2 'Installing namecoin.logrotate...'
  install -Dm 644 "$srcdir/namecoin.logrotate" "$pkgdir/etc/logrotate.d/namecoin"

  msg2 'Cleaning up pkgdir...'
  find "$pkgdir" -type f -name .gitignore -exec rm -r '{}' +
}

sha256sums=('7117a0a0b8f48d49e4abf3577660f8a4eb9a4dea753281d19d9470725fc75d8e'
            '97e7b8e5d402eef231e20b62436d830a955c87f389b20ea663bf5a6b8f7b0ff7'
            'ea48c1dda89c153ea526f07ffa2c46a6813f5075003d5a4098c3675aacb55673'
            'fefaa5a9c31392d9bb9d0bb6fa06a1dc11852b695ab2092a1e259f27a025560c'
            '98ac6d450e2c35e9ed4923c26a013c24165719c61f54d056511dd92061a4da5c')
