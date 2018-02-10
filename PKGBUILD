# Maintainer: Jeremy MountainJohnson <jskier[at]gmail[dot]com>
# Maintainer: Levente Polyak <anthraxx[at]archlinux[dot]org>
# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>
# Contributor: Spider.007 <archlinux AT spider007 DOT net>

_pkgname=kibana
pkgname=kibana5
pkgver=5.6.7
pkgrel=1
pkgdesc='Browser based analytics and search dashboard for Elasticsearch5 series'
url='https://www.elastic.co/products/kibana'
arch=('any')
license=('Apache')
depends=('nodejs')
optdepends=('elasticsearch5')
conflicts=('kibana' 'kibana4')
provides=("kibana=$pkgver")
backup=('etc/kibana/kibana.yml')
options=('!strip' 'emptydirs')
source=(https://artifacts.elastic.co/downloads/${_pkgname}/${_pkgname}-${pkgver}-linux-x86_64.tar.gz
        kibana.service
        tmpfile.conf
        user.conf)
sha512sums=('92c3a8e912d98835c66b3de95821150d184d04bbfd0e9b60d1dcce627158fa361476b9ac8c47ac436dd3973992efab806072a5d306becfa12f382c556ee2bf89'
            '3216c2864cf184cea0883677a05bf83cf396fda52dbd3d9a187de22f0c45d13db58f8fb4dc926694ba7d7a24000cf6d5f6218805f74fb5d729fc85c643ca8f2f'
            '8571f0b0ec8a55dfcba8298c6f1b1895be3c6e3dad524633411615dd3ad2f73af11a94e0a74fd296a784d6c779df8e9ce0a9f7b3e0182adde221a67293f4adeb'
            '9085884430c656cc68b855c3d6740e5fd0854a8785930341b29e15e201deacc1870d8223255d9ebe096cb111319bea9bf4faa03d0760d5819976ebf912221c7d')

prepare() {
  cd ${_pkgname}-${pkgver}-linux-x86_64
  # set default quiet mode for systemd, cli option forces specified values
  sed -r 's|#(logging.quiet:) false|\1 true|' -i config/kibana.yml
}

package() {
  cd ${_pkgname}-${pkgver}-linux-x86_64

  install -dm 755 "${pkgdir}/usr/share/kibana"
  cp -a * "${pkgdir}/usr/share/kibana"

  install -dm 750 "${pkgdir}/etc/kibana"
  install -Dm 640 config/kibana.yml -t "${pkgdir}/etc/kibana"
  install -Dm 644 "${srcdir}/kibana.service" -t "${pkgdir}/usr/lib/systemd/system"
  install -Dm 644 "${srcdir}/user.conf" "${pkgdir}/usr/lib/sysusers.d/kibana.conf"
  install -Dm 644 "${srcdir}/tmpfile.conf" "${pkgdir}/usr/lib/tmpfiles.d/kibana.conf"

  rm -r "${pkgdir}/usr/share/kibana/node"
}
