# Maintainer: Jonathan Steel <jsteel at archlinux.org>

pkgname=thruk
_pkgver=2.14-2
pkgver=${_pkgver/-/.}
pkgrel=3
pkgdesc="Multibackend monitoring webinterface for Naemon, Nagios, Icinga and Shinken"
arch=('any')
url="http://thruk.org"
license=('GPL2')
depends=('perl' 'apache' 'mod_fcgid' 'perl-plack' 'perl-json-xs'
         'perl-date-calc' 'perl-file-slurp' 'perl-log-log4perl'
         'perl-log-dispatch' 'perl-fcgi' 'perl-uri' 'perl-html-parser'
         'perl-template-toolkit' 'perl-mime-lite' 'perl-gd')
conflicts=('naemon-thruk')
replaces=('naemon-thruk')
backup=('etc/thruk/cgi.cfg' 'etc/thruk/htpasswd'
        'etc/thruk/log4perl.conf' 'etc/thruk/menu_local.conf'
        'etc/thruk/naglint.conf' 'etc/httpd/conf/extra/thruk.conf'
        'etc/thruk/thruk_local.conf')
source=(http://download.thruk.org/pkg/v$_pkgver/src/$pkgname-$_pkgver.tar.gz)
md5sums=('d15292905a702e9819467e94c22b505a')

build() {
  cd $pkgname-$_pkgver

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
  cd $pkgname-$_pkgver

  make DESTDIR="$pkgdir"/ install

  install -Dm644 support/apache_fcgid.conf "$pkgdir"/etc/httpd/conf/extra/$pkgname.conf
  install -dm755 "$pkgdir"/etc/thruk/panorama

  chown -R 33:33 "$pkgdir"/var/{lib,log}/thruk/ "$pkgdir"/etc/thruk/panorama/
  chmod 770 "$pkgdir"/var/lib/thruk/

  # Exclude /var/lib/thruk as logrotate doesn't like the permissions there
  # and there are no logs
  sed -i 's_^/.* _/var/log/thruk/*.log _' "$pkgdir"/etc/logrotate.d/thruk-base
}
