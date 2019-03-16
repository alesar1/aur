# Maintainer: László Várady <laszlo.varady93@gmail.com>
# Contributor: Eric Bélanger <eric@archlinux.org>

pkgname=syslog-ng-git
_pkgname=syslog-ng
pkgver=3.20.1.r173.gb21d85690
pkgrel=1
pkgdesc="Enhanced system logging daemon"
arch=('x86_64')
url="https://www.syslog-ng.com/products/open-source-log-management/"
license=('GPL2' 'LGPL2.1')
depends=('systemd-libs' 'awk' 'glib2' 'ivykis' 'json-c' 'curl' 'libnet')
makedepends=('git' 'autoconf-archive' 'libxslt' 'docbook-xsl' 'json-c' 'curl' 'libdbi' 'libesmtp'
             'hiredis' 'librabbitmq-c' 'riemann-c-client' 'geoip' 'libmaxminddb' 'mongo-c-driver'
             'java-environment=8' 'gradle' 'python')
checkdepends=('criterion' 'python-nose' 'python-pylint' 'python-ply' 'python-pep8')
optdepends=('logrotate: for rotating log files'
            'json-c: for the JSON plugin'
            'curl: for the HTTP plugin'
            'libdbi: for the SQL plugin'
            'libesmtp: for the SMTP plugin'
            'hiredis: for the Redis plugin'
            'librabbitmq-c: for the AMQP plugin'
            'riemann-c-client: for the Riemann plugin'
            'geoip: for the GeoIP plugin'
            'libmaxminddb: for the GeoIP2 plugin'
            'mongo-c-driver: for the MongoDB plugin'
            'java-runtime-headless: for Java-based plugins'
            'python: for Python-based plugins')
provides=("$_pkgname")
conflicts=("$_pkgname" 'eventlog')
replaces=('eventlog')
backup=('etc/syslog-ng/scl.conf'
        'etc/syslog-ng/syslog-ng.conf'
        'etc/logrotate.d/syslog-ng'
        'etc/default/syslog-ng@default')
source=("$_pkgname::git+https://github.com/balabit/syslog-ng.git"
        'syslog-ng.logrotate')
sha256sums=('SKIP' 'SKIP')

pkgver() {
  cd "$_pkgname"
  printf "%s" "$(git describe --long --tags --match "syslog-ng-*" \
                 | sed 's/^syslog-ng-//; s/\([^-]*-g\)/r\1/; s/-/./g')"
}

prepare() {
  cd "$_pkgname"
  sed -i -e 's,/bin/,/usr/bin/,' -e 's,/sbin/,/bin/,' contrib/systemd/syslog-ng@.service
  sed -i -e 's|etc|etc/syslog-ng|g' -e 's|/var/run|/run|g' contrib/systemd/syslog-ng@default
}

build() {
  cd "$_pkgname"
  skip_submodules=1 ./autogen.sh
  ./configure --prefix=/usr --sysconfdir=/etc/syslog-ng --libexecdir=/usr/lib \
    --sbindir=/usr/bin --localstatedir=/var/lib/syslog-ng --datadir=/usr/share \
    --with-pidfile-dir=/run --with-jsonc=system --with-ivykis=system \
    --enable-all-modules --enable-ipv6 --enable-pacct --enable-manpages \
    --enable-systemd --with-systemdsystemunitdir=/usr/lib/systemd/system
  make
}

check() {
  cd "$_pkgname"
  make --keep-going check || /usr/bin/true
}

package() {
  make -C $_pkgname DESTDIR="$pkgdir/" install
  install -dm755 "$pkgdir/var/lib/syslog-ng" "$pkgdir/etc/syslog-ng/patterndb.d"
  install -Dm644 "$srcdir/syslog-ng.logrotate" "$pkgdir/etc/logrotate.d/syslog-ng"
  install -Dm644 "$srcdir/$_pkgname/contrib/systemd/syslog-ng@default" -t "$pkgdir/etc/default"
}
