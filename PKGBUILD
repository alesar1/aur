# Maintainer: Jonathan Steel <jsteel at archlinux.org>

pkgname=naemon
pkgver=1.0.6
pkgrel=1
pkgdesc="System and network monitoring application"
arch=('i686' 'x86_64')
url="http://naemon.org"
license=('GPL2')
depends=('bash' 'icu')
optdepends=('logrotate'
            'thruk: Web interface for Naemon'
            'monitoring-plugins')
makedepends=('gperf' 'help2man')
provides=('naemon-core' 'naemon-livestatus')
conflicts=('naemon-core' 'naemon-livestatus')
replaces=('naemon-core' 'naemon-livestatus')
source=(http://labs.consol.de/naemon/release/v$pkgver/src/$pkgname-$pkgver.tar.gz
        $pkgname.service)
md5sums=('6c9b95a737a8f232e114f4cff200ff92'
         'd6a77534e612e8f65ff3360336faec77')
backup=('etc/logrotate.d/naemon' 'etc/naemon/conf.d/commands.cfg'
  'etc/naemon/conf.d/contacts.cfg' 'etc/naemon/conf.d/localhost.cfg'
  'etc/naemon/conf.d/printer.cfg' 'etc/naemon/conf.d/switch.cfg'
  'etc/naemon/conf.d/templates/contacts.cfg'
  'etc/naemon/conf.d/templates/hosts.cfg'
  'etc/naemon/conf.d/templates/services.cfg'
  'etc/naemon/conf.d/timeperiods.cfg' 'etc/naemon/conf.d/windows.cfg'
  'etc/naemon/naemon.cfg' 'etc/naemon/resource.cfg')
install=$pkgname.install

build() {
  cd $pkgname-$pkgver

  ./configure --prefix=/usr \
              --bindir=/usr/bin \
              --datadir="/usr/share/naemon" \
              --libdir="/usr/lib/naemon" \
              --localstatedir="/var/lib/naemon" \
              --sysconfdir="/etc/naemon" \
              --with-pkgconfdir="/etc/naemon" \
              --mandir="/usr/share/man" \
              --enable-event-broker \
              --with-pluginsdir="/usr/lib/monitoring-plugins" \
              --with-tempdir="/var/cache/naemon" \
              --with-checkresultdir="/var/cache/naemon/checkresults" \
              --with-logdir="/var/log/naemon" \
              --with-initdir="/etc/init.d" \
              --with-logrotatedir="/etc/logrotate.d" \
              --with-naemon-user="naemon" \
              --with-naemon-group="naemon" \
              --with-lockfile="/run/naemon.pid" \
              --with-thruk-user="http" \
              --with-thruk-group="naemon" \
              --with-thruk-libs="/usr/lib/naemon/perl5" \
              --with-thruk-tempdir="/var/cache/naemon/thruk" \
              --with-thruk-vardir="/var/lib/naemon/thruk" \
              --with-httpd-conf="/etc/httpd/conf/extra/" \
              --with-htmlurl="/naemon"

  make
}

check() {
  cd $pkgname-$pkgver/naemon-core

  make check
}

package() {
  cd $pkgname-$pkgver

  make DESTDIR="$pkgdir" install

  install -d "$pkgdir"/etc/naemon/module-conf.d
  install -d "$pkgdir"/var/lib/naemon

  chown -R 44:44 "$pkgdir"/var/{cache,lib,log}/$pkgname
  chmod -R 770 "$pkgdir"/var/{cache,lib,log}/$pkgname

  install -Dm644 "$srcdir"/$pkgname.service \
    "$pkgdir"/usr/lib/systemd/system/$pkgname.service

  # Remove non-Arch directories
  rm -rf "$pkgdir"/etc/init.d
  rm -rf "$pkgdir"/etc/apache2
}
