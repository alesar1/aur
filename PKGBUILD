# Contributor: Elis Hughes <elishughes@googlemail.com>
# Contributor: djerome <jerome _at_ j2ze dot org>
# Maintainer: dncrash <dncrash@gmail.com>

pkgname=ocsinventory-agent
pkgver=2.4.2
pkgrel=1
pkgdesc="Hardware and software inventory tool (client)"
arch=('any')
url="http://www.ocsinventory-ng.org"
license=('GPL')
depends=('dmidecode' 'pciutils' 'perl-crypt-ssleay' 'perl-xml-sax'
     'perl-libwww' 'perl-net-ip' 'perl-xml-namespacesupport' 'perl-xml-simple'
     'perl-proc-daemon' 'perl-proc-pid-file' 'perl-net-ssleay' 'perl-net-snmp')
optdepends=('smartmontools')
makedepends=('perl-module-install')
install=${pkgname}.install
backup=('etc/ocsinventory/ocsinventory-agent.cfg')
source=("https://github.com/OCSInventory-NG/UnixAgent/archive/v2.4.2.tar.gz"
    "modules.conf" "ocsinventory-agent" "ocsinventory-agent.cfg")
md5sums=('e13746676e0c8355b874f3d93d4414b3'
     '3c1235643decce6f1a29c5644d2b527b'
     '9419012794e5e134bc152cfd388d63e7'
     '3be05b06c7a6e269d9a4c74dcf239d19')

build() {
  cd "$srcdir/UnixAgent-$pkgver"

  sed -i "s/require 'lib\/Ocsinventory\/Agent\/Config.pm';/require '.\/lib\/Ocsinventory\/Agent\/Config.pm';/g" Makefile.PL

  perl Makefile.PL
  make || return 1
  rm run-postinst
}

package() {
  mkdir -p ${pkgdir}/var/lib/ocsinventory-agent
  mkdir -p ${pkgdir}/var/log/ocsinventory-agent

  cd "$srcdir/UnixAgent-$pkgver"

  make DESTDIR=${pkgdir} install

  /usr/bin/find ${pkgdir} -name '.packlist' -delete
  /usr/bin/find ${pkgdir} -name '*.pod' -delete

  cd "$srcdir"
  install -D -m644 ocsinventory-agent.cfg "${pkgdir}/etc/ocsinventory/ocsinventory-agent.cfg"
  install -D -m644 modules.conf "${pkgdir}/etc/ocsinventory/modules.conf"
  install -D -m744 -D ocsinventory-agent "${pkgdir}/etc/cron.d/ocsinventory-agent"

  cd "$srcdir/UnixAgent-$pkgver"
  install -D -m755 ocsinventory-agent "${pkgdir}"/usr/bin/ocsinventory-agent
}
