
pkgname=osiris
pkgver=0.15
pkgrel=0
pkgdesc='Serverless Portal System'
arch=('x86_64')
url='http://www.osiris-sps.org'
license=('Custom:Osiris')
options=('!strip')
provides=($pkgname osiris-sps)

sha512sums=('d3e88ac82a0cd52d393d6c6378a6d1c641d78c8959799d39d23f213ba88d87f75fe5cd0ab6d1bf2b00601641fc19a563616811d67447f3918b3c33033c415860'
'255824a8f71ceec630d404c184cdcb77497e23bfb57d4b08562c01527faf6eced8572c821ce49f2175fd76908d261671ed2a1dba8de46091bfa1e7684973ee06')

validpgpkeys=('DDE43DEA10CA4EED5D7F881E76CE3619A00292AF')

source=("http://www.osiris-sps.org/repository/osiris_0.15_linux_x86_64.deb" "osiris_0.15_linux_x86_64.deb.sig")

prepare() {
  mkdir -p data
  cd data
	tar -xf ../data.tar.gz
}

package() {
        cp -dr --no-preserve=ownership ./data/usr "${pkgdir}"/
}
