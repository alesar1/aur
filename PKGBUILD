# Maintainer: KawaiDesu <zmey1992@ya.ru>
pkgname=victoriametrics-bin
pkgver=1.32.0
pkgrel=1
pkgdesc="Fast, cost-effective and scalable time series database"
arch=('x86_64')
url="https://victoriametrics.github.io"
license=('Apache')
backup=('etc/default/victoriametrics')
install=victoriametrics.install
source=("https://github.com/VictoriaMetrics/VictoriaMetrics/releases/download/v${pkgver}/victoria-metrics-v${pkgver}.tar.gz"
        "victoriametrics.service"
        "default_victoriametrics")
sha256sums=('2eaba4464a02e3b84a39ebb99b690eb19d3f040cb3d420119e3a2c244e169af4'
            'bb545722332137af4e2acae300b519d54af28348f5beca984e2c0aee462e90af'
            'f538747c1384e6842561e1d13519c2118b8e74c6eb5132b9f2e8730f7d08cc26')

package(){
  install -Dm755 "${srcdir}/victoria-metrics-prod" "${pkgdir}/usr/bin/victoriametrics"
  mkdir -pm755 "${pkgdir}/var/lib/victoriametrics"
  install -Dm640 "${srcdir}/victoriametrics.service" "${pkgdir}/usr/lib/systemd/system/victoriametrics.service"
  install -Dm640 "${srcdir}/default_victoriametrics" "${pkgdir}/etc/default/victoriametrics"
}
