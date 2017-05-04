# Maintainer: Jonathan Steel <jsteel at aur.archlinux.org>

pkgname=thruk
pkgver=2.14
pkgrel=1
pkgdesc="Multibackend monitoring webinterface for Naemon, Nagios, Icinga and Shinken"
arch=('any')
url="http://thruk.org"
license=('GPL2')
depends=('perl' 'apache' 'mod_fcgid' 'perl-plack' 'perl-json-xs'
         'perl-date-calc' 'perl-file-slurp' 'perl-log-log4perl'
         'perl-log-dispatch' 'perl-fcgi' 'perl-uri' 'perl-html-parser'
         'perl-template-toolkit')
conflicts=('naemon-thruk')
replaces=('naemon-thruk')
backup=('etc/thruk/cgi.cfg' 'etc/thruk/htpasswd'
        'etc/thruk/log4perl.conf' 'etc/thruk/menu_local.conf'
        'etc/thruk/naglint.conf' 'etc/httpd/conf/extra/thruk.conf'
        'etc/thruk/thruk_local.conf' 'etc/thruk/thruk.conf')
install=$pkgname.install
source=(http://download.thruk.org/pkg/v$pkgver/src/$pkgname-$pkgver.tar.gz)
md5sums=('ac36a64794e6f44fe34d03473b616875')

build() {
  cd $pkgname-$pkgver

  ./configure --prefix=/usr \
    --exec-prefix=/bin \
    --bindir=/usr/bin \
    --sysconfdir=/etc/thruk \
    --localstatedir=/var/lib/thruk \
    --libdir=/var/lib \
    --datadir=/usr/share/thruk \
    --mandir=/usr/share/man \
    --with-initdir=/etc/thruk \
    --with-logdir=/var/log/thruk \
    --with-checkresultdir=/var/cache/naemon/checkresults \
    --with-tempdir=/var/lib/thruk \
    --with-logrotatedir=/etc/logrotate.d

  make
}

package() {
  cd $pkgname-$pkgver

  make DESTDIR="$pkgdir"/ install

  install -Dm644 support/apache_fcgid.conf "$pkgdir"/etc/httpd/conf/extra/$pkgname.conf
}
