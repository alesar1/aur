# Maintainer: Alexey D. <lq07829icatm@rambler.ru>
# Contributor: Dave Reisner <dreisner@archlinux.org>
# Contributor: Eric Bélanger <eric@archlinux.org>
# Contributor: Aaron Griffin <aaron@archlinux.org>

pkgname=syslog-ng-nosystemd
pkgver=3.20.1
pkgrel=2
pkgdesc="Next-generation syslogd with advanced networking and filtering capabilities"
arch=('i686' 'x86_64')
license=('GPL2' 'LGPL2.1')
groups=('eudev-base')
url="https://www.syslog-ng.com/products/open-source-log-management/"
depends=('awk' 'glib2' 'libcap' 'libdbi' 'libnsl' 'udev')
makedepends=('flex' 'pkg-config' 'libxslt' 'json-c' 'mongo-c-driver'
             'librabbitmq-c' 'python' 'libesmtp' 'hiredis')
optdepends=('logrotate: for rotating log files'
            'json-c: for json-plugin'
            'curl: for the HTTP module'
            'librabbitmq-c: for the AMQP plugin'
            'mongo-c-driver: for the MongoDB plugin'
            'python: for the Python plugin'
            'libesmtp: for the SMTP plugin'
            'hiredis: fir the redis plugin'
            'syslog-ng-openrc: syslog-ng openrc initscript')
provides=("syslog-ng=${pkgver}")
replaces=('syslog-ng' 'syslog-ng-eudev' 'eventlog')
conflicts=('syslog-ng' 'syslog-ng-eudev' 'eventlog')
backup=('etc/syslog-ng/scl.conf'
        'etc/syslog-ng/syslog-ng.conf'
        'etc/conf.d/initscripts/syslog-ng'
        'etc/logrotate.d/syslog-ng')
source=(https://github.com/balabit/syslog-ng/releases/download/syslog-ng-$pkgver/syslog-ng-$pkgver.tar.gz
        syslog-ng.conf
        syslog-ng.conf.d
        syslog-ng.logrotate
        syslog-ng.rc)
sha256sums=('a65858afe9c649119a23ff61669945cab8692a045ee8259e8ee666445c8fbda0'
            '52c8d7bfbc6a360b6cdc03dcb15d43c08b8940f672cdaa584b5d05c0a0bf3d74'
            'fe6ebe5c281b34bad201d9206e607857db9a5a78f03bb4dc4440584dca610f61'
            '93c935eca56854011ea9e353b7a1da662ad40b2e8452954c5b4b5a1d5b2d5317'
            'db643d69e840dfd5d7849e857291f15fd60913527402fde806ce3911e3523063')

build() {
  cd "syslog-ng-$pkgver"

  ./configure \
    --prefix=/usr \
    --sysconfdir=/etc/syslog-ng \
    --libexecdir=/usr/lib \
    --sbindir=/usr/bin \
    --localstatedir=/var/lib/syslog-ng \
    --datadir=/usr/share \
    --with-pidfile-dir=/run \
    --disable-spoof-source \
    --enable-ipv6 \
    --enable-sql \
    --enable-smtp \
    --enable-manpages \
    --with-jsonc=system \
    --with-mongoc=system \
    --with-librabbitmq-client=system \
    --disable-systemd

  make
}

package() {
  make -C "syslog-ng-$pkgver" DESTDIR="$pkgdir" install

  install -dm755 "$pkgdir/var/lib/syslog-ng" "$pkgdir/etc/syslog-ng/patterndb.d"
  install -Dm644 "$srcdir/syslog-ng.conf" "$pkgdir/etc/syslog-ng/syslog-ng.conf"
  install -Dm644 "$srcdir/syslog-ng.logrotate" "$pkgdir/etc/logrotate.d/syslog-ng"
  install -Dm755 "$srcdir/syslog-ng.rc" "$pkgdir/etc/rc.d/syslog-ng"
  install -Dm644 "$srcdir/syslog-ng.conf.d" "$pkgdir/etc/conf.d/initscripts/syslog-ng"

  # See http://lists.balabit.hu/pipermail/syslog-ng/2016-February/022667.html
  rm -r "$pkgdir/usr/share/syslog-ng/include/scl/cim"
}
