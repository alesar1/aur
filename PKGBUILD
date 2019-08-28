# Maintainer: François Guerraz <kubrick@fgv6.net>
pkgname=payetools-rti
pkgver=19.1.19116.1393
pkgrel=1
pkgdesc="UK HMRC Basic PAYE Tools for Linux"
arch=('x86_64')
url="https://www.gov.uk/basic-paye-tools"
license=('custom')
groups=()
depends=('lib32-fontconfig' 'lib32-krb5' 'lib32-libxext' 'lib32-libxrender' 'lib32-libpng12' 'lib32-sqlite' 'lib32-libxml2')
makedepends=('unzip' 'lib32-fakeroot' 'chrpath')
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=(!strip)
install=payetools-rti.install
changelog=
source=( "https://www.gov.uk/government/uploads/uploaded/hmrc/$pkgname-$pkgver-linux.zip" )
noextract=( "$pkgname-$pkgver-linux.zip" )
sha256sums=('c4060a5c310fe899d7e873be879850db995e2fcf2c858ad3b2e741ca38575a41')

prepare() {
  unzip "$pkgname-$pkgver-linux.zip"
}

build() {
  true
}

package() {
  export HOME=${pkgdir}/tmp
  mv $pkgname-$pkgver-linux ${pkgdir}
  cd ${pkgdir}
  ./$pkgname-$pkgver-linux --prefix ${pkgdir}/opt/HMRC/basic-paye-tools --check_for_updates 0 --mode unattended --debuglevel 4
  rm $pkgname-$pkgver-linux
  chrpath -d opt/HMRC/basic-paye-tools/libQt* 
  chrpath -d opt/HMRC/basic-paye-tools/PyQt4.Qt* 
  chrpath -d opt/HMRC/basic-paye-tools/imageformats/* 
  install -D -t ${pkgdir}/usr/share/licenses/payetools-rti/ ${pkgdir}/opt/HMRC/basic-paye-tools/license.txt
  sed -i "s#${pkgdir}##g" ${pkgdir}/tmp/.local/share/applications/*.desktop
  install -D -t ${pkgdir}/usr/share/applications/ ${pkgdir}/tmp/.local/share/applications/*.desktop
  rm -fr ${pkgdir}/tmp
  mv opt/HMRC/basic-paye-tools/rti.cfg opt/HMRC/basic-paye-tools/rti.cfg.template
# Remove shipped glibc libraries
  rm opt/HMRC/basic-paye-tools/libm.so.6
  rm opt/HMRC/basic-paye-tools/libutil.so.1
}
