# Maintainer: Jean Lucas <jean@4ray.co>
# Contributor: Robert Booster <boosterdev@linuxmail.org>
# Contributor: Marco Pompili <aur@emarcs.org>
# Contributor: Paulo Alexandre <paulequilibrio at gmail dot com>
# Contributor: morning_star<themorningstar@riseup.net>
# Contributor: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>
# Contributor: Parth Buch <parthbuch115 at gmail dot com>
# Contributor: Tom Vincent <http://tlvince.com/contact/>
# Contributor: Valentin Haloiu <vially.ichb+aur@gmail.com>
# Contributor: Cluxter <contact@cluxter.email>
# Contributor: Kamil Śliwak <cameel2 gmail>

pkgname=meteor
pkgver=1.10.1
pkgrel=1
pkgdesc='Full-stack JavaScript platform for developing modern web and mobile applications'
# arch=(i686 x86_64)
arch=(x86_64)
url=https://www.meteor.com
license=(MIT)
depends=(nodejs mongodb)
options=(!strip)
install=meteor.install
source=(meteor.sh)
# source_i686=(meteor-$pkgver-i686.tar.gz::https://static-meteor.netdna-ssl.com/packages-bootstrap/$pkgver/meteor-bootstrap-os.linux.x86_32.tar.gz)
source_x86_64=(meteor-$pkgver-x86_64.tar.gz::https://static-meteor.netdna-ssl.com/packages-bootstrap/$pkgver/meteor-bootstrap-os.linux.x86_64.tar.gz)
sha512sums=('b81f2da94d2732eacd4499be2b68e8410c334aa874907ce985fe59508a030371a37addc74f583dfdbef30c394385d2c941e565991dbbc4074908b9e4a8cb7036')
# sha512sums_i686=('e7b7f814e94b247afcb7cabdaec6a3f830fc3a421e056a0ce2118871e027f3fc2325000bf303a20c79ead47160a96b111a7708d508f9e9a72ac8d8930092c42a')
sha512sums_x86_64=('f3f069892f3a151594fbfacfdb578d27a8a97164f99c5b48c0704b75083f99aa41dcbf03a61e385a01b0a412dde7f62174189a2c5ec14c9f41909c854c4061a9')

package() {
  # Copy base Meteor tree to universally-accessible location
  mkdir -p "$pkgdir"/usr/share
  cp -a .meteor "$pkgdir"/usr/share/meteor

  install -D meteor.sh "$pkgdir"/usr/bin/meteor
}
