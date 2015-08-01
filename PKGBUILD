# Maintainer: Felix Yan <felixonmars@archlinux.org>
# Contributor: Preston <pentie [at] gmail.com>

pkgname=newrelic-sysmond
pkgver=2.1.0.124
pkgrel=1
pkgdesc="system monitor services provided by newrelic"
arch=('i686' 'x86_64')
url="http://newrelic.com/"
license=('non-free')
depends=('glibc' 'bash')
makedepends=('binutils')
backup=('etc/newrelic/nrsysmond.cfg')
install=newrelic-sysmond.install
source=("http://download.newrelic.com/server_monitor/archive/${pkgver}/${pkgname}"-"${pkgver}"-"linux.tar.gz"
        "newrelic-sysmond.service"
        "newrelic-sysmond.install")

build() {
  cd "$srcdir/$pkgname-$pkgver-linux"
}

package() {
  cd "$srcdir/$pkgname-$pkgver-linux" 
  mkdir -p "$pkgdir"/usr/bin/ \
           "$pkgdir"/etc/newrelic/ \
           "$pkgdir"/etc/default/ \
           "$pkgdir"/usr/share/doc/newrelic/ \
           "$pkgdir"/usr/lib/systemd/system/;

  if [ $CARCH == i686 ]; then
     install -v -Dm755 ./daemon/nrsysmond.x86 "$pkgdir"/usr/bin/nrsysmond
  else
     install -v -Dm755 ./daemon/nrsysmond.x64 "$pkgdir"/usr/bin/nrsysmond
  fi

  install -v -Dm644 ./nrsysmond.cfg "$pkgdir"/etc/newrelic/
  install -v -Dm755 ./scripts/nrsysmond-config "$pkgdir"/usr/bin/
  install -v -Dm644 ./scripts/newrelic-sysmond.default.debian "$pkgdir"/etc/default/newrelic-sysmond
  install -v -Dm644 INSTALL.txt LICENSE.txt "$pkgdir"/usr/share/doc/newrelic/
  install -v -Dm644 ../newrelic-sysmond.service "$pkgdir"/usr/lib/systemd/system/
}

md5sums=('b18f27bec4c9e5a5cf524225e41a7d15'
         'f4ebc44c550896309d6121455a8669f3'
         'aa0022b03b291c97f5f4b3cb2d24104d')
