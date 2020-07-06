# Maintainer: drakkan <nicola.murino at gmail dot com>
# Contributor: drakkan <nicola.murino at gmail dot com>
pkgname=sftpgo-bin
_pkgname=sftpgo
pkgver=1.0.0
pkgrel=1
pkgdesc='Full featured and highly configurable SFTP server'
arch=('x86_64')
url="https://github.com/drakkan/${_pkgname}"
license=('GPL3')
depends=('glibc')
optdepends=(
  "sqlite: to use SQLite provider"
  "postgresql: to use PostgreSQL provider"
  "mariadb: to use MySQL provider"
  "python-requests: REST API CLI"
  "python-pygments: REST API CLI colors highlight"
)
conflicts=('sftpgo')
provides=('sftpgo')
backup=(
  "etc/${_pkgname}/sftpgo.json"
  "var/lib/${_pkgname}/sftpgo.db"
)

source=("https://github.com/drakkan/sftpgo/releases/download/v${pkgver}/sftpgo_v${pkgver}_linux_x86_64.tar.xz"
  "sftpgo.json")
sha256sums=('25d7d84e6a97d2cb70891ab542ed92eb6991291c029075513e3fd3e187f6a55c'
  'd4bc2ddb3104e2e1be40103e7653f2d7802658576ba8e80bebfad7901a8b46a4')

package() {
  install -Dm 755 sftpgo "$pkgdir/usr/bin/${_pkgname}"
  install -Dm 755 examples/rest-api-cli/sftpgo_api_cli.py "${pkgdir}"/usr/bin/sftpgo_api_cli
  install -Dm 644 init/${_pkgname}.service -t "${pkgdir}/usr/lib/systemd/system"
  install -Dm 644 "$srcdir/sftpgo.json" -t "${pkgdir}/etc/${_pkgname}"
  install -d "${pkgdir}/var/lib/${_pkgname}"
  install -Dm 644 sqlite/sftpgo.db -t "${pkgdir}/var/lib/${_pkgname}"
  cp -r templates "${pkgdir}/var/lib/${_pkgname}/"
  cp -r static "${pkgdir}/var/lib/${_pkgname}/"
  install -d "${pkgdir}/usr/share/doc/${_pkgname}"
  install -Dm 644 README.txt "${pkgdir}"/usr/share/doc/${_pkgname}/README
  install -Dm 644 LICENSE "$pkgdir"/usr/share/licenses/${_pkgname}/LICENSE
}

# vim:set ts=2 sw=2 et:
