# Maintainer: Thomas Andrejak <thomas.andrejak@gmail.com>

pkgname=prelude-lml
pkgver=4.0.0
pkgrel=1
pkgdesc="The prelude log analyzer"
arch=('i686' 'x86_64')
url="https://www.prelude-siem.org"
license=('GPLv2')
depends=('gamin' 'pcre' 'gtk-doc' 'libprelude')
optdepends=('syslog-ng: store logs in syslog files to let prelude-lml read it'
            'rsyslog: store logs in syslog files to let prelude-lml read it')
source=("https://www.prelude-siem.org/pkg/src/4.0.0/$pkgname-$pkgver.tar.gz"
        "prelude-lml.run"
        "prelude-lml.service"
        "prelude-lml-conf.patch")
install="$pkgname.install"
backup=('etc/prelude-lml/prelude-lml.conf'
        'etc/prelude-lml/plugins.rules')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  CPP="cpp -P" ./configure --prefix=/usr --sysconfdir=/etc --localstatedir=/var
  make
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  make DESTDIR="$pkgdir" install
  rm -rf $pkgdir/var/run
  install -d -m 0700 "$pkgdir/etc/prelude-lml/ruleset"
  install -D -m 0644 "$srcdir/$pkgname.run" "$pkgdir/usr/lib/tmpfiles.d/$pkgname.conf"
  install -D -m 0644 "$srcdir/$pkgname.service" "$pkgdir/usr/lib/systemd/system/$pkgname.service"
}

prepare() {
  patch -p0 <prelude-lml-conf.patch
}

md5sums=('67d4bbdc8679c2a3db6bf9deb45c8700' '826320a9f19db7e179d7cccb0828eb36' '6418c224e5053f6383bdb625bb5ab03f' '8e7cffb467e5556a816252cef4a8abd4')
