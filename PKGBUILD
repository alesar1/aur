# Maintainer: J. Kerr <disconsented[at]disconsented[dot]com

pkgname=pufferpanel-bin
_pkgname=pufferpanel
pkgver=2.3.2
pkgrel=1
pkgdesc="PufferPanel: A web-base game management system (binary version)."
arch=('x86_64')
url="https://github.com/PufferPanel/PufferPanel"
license=('Apache')
provides=('pufferpanel')
conflicts=('pufferpanel')
optdepends=('nginx: TLS support'
			'postgresql: Dedicated database'
			'docker: Container support'
                        'sqlite: Database support')
depends=()
source=(https://github.com/PufferPanel/PufferPanel/releases/download/v${pkgver//_/-}/pufferpanel_${pkgver//_/-}_linux_amd64.zip
		https://raw.githubusercontent.com/PufferPanel/PufferPanel/v${pkgver//_/-}/systemd/servicefiles/pufferpanel.service
               https://raw.githubusercontent.com/PufferPanel/PufferPanel/v${pkgver//_/-}/config.linux.json)
b2sums=('791fbb9656129bb2b3cf7e45f2ecf8588d2f7944e78e39c72087961227c09c3fe82f28e64d3a139b2f6598b3303c143b8e74089a8590d6f2cd0f38898ed43d01'
        'ed744c35200b918c3107ea6191e3c6c38b3a731183b5cf7ed8b066550a6038fd712429b24264b0b00c52f9533b8503462962d2bfdb45c49724be49a2b9b39141'
        '8e71e40eab92d6d49d7c71998256a849aa1027142cc3d8a9d8e418b6a7f66cac5eeff4f6e8d73ff8389746513ef7d74b2b0ef6b42b4e857c1906ce21a4d14f81')
package() {
  export pkg=pufferpanel
  install -D "${srcdir}/pufferpanel" "${pkgdir}/usr/bin/pufferpanel" 
  install -D "${srcdir}/config.linux.json" "${pkgdir}/etc/pufferpanel/config.json" 
  mkdir -p ${pkgdir}/var/www/${pkg}/
  cp -R ${srcdir}/www/* "${pkgdir}/var/www/${pkg}"
  cp -R "${srcdir}/email/" "${pkgdir}/etc/${pkg}/"
  install -D "${srcdir}/pufferpanel.service" "${pkgdir}/etc/systemd/system/pufferpanel.service" 
  install -D -m 644 "${srcdir}/../pufferpanel.sysusers" "${pkgdir}/usr/lib/sysusers.d/pufferpanel.conf"
  install -D -m 644 "${srcdir}/../pufferpanel.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/pufferpanel.conf"
}
