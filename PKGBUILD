# Maintainer: drakkan <nicola.murino at gmail dot com>
# Contributor: drakkan <nicola.murino at gmail dot com>
pkgname=sftpgo-bin
_pkgname=sftpgo
pkgver=0.9.4
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
  "etc/${_pkgname}/sftpgo.db"
)

source=("https://github.com/drakkan/sftpgo/releases/download/${pkgver}/sftpgo_${pkgver}_linux_x86_64.tar.xz")
sha256sums=('b47068499173eb13dcd4779f4e6d63817bad758cbcd030f487f7138e2c750c04')

package() {
  install -Dm755 sftpgo "$pkgdir/usr/bin/${_pkgname}"
  install -Dm 644 init/${_pkgname}.service -t "${pkgdir}/usr/lib/systemd/system"
  install -Dm 644 sftpgo.json -t "${pkgdir}/etc/${_pkgname}"
  install -Dm 644 sql/sqlite/sftpgo.db -t "${pkgdir}/etc/${_pkgname}"
  cp -r templates "${pkgdir}/etc/${_pkgname}/"
  cp -r static "${pkgdir}/etc/${_pkgname}/"
  install -d "${pkgdir}/usr/share/doc/${_pkgname}"
  cp -r sql "${pkgdir}/usr/share/doc/${_pkgname}/"
  install -Dm 644 README.pdf "${pkgdir}"/usr/share/doc/${_pkgname}/README.pdf
  install -Dm 755 scripts/sftpgo_api_cli.py "${pkgdir}"/usr/share/doc/${_pkgname}/scripts/sftpgo_api_cli.py
  install -Dm 644 scripts/README.pdf "${pkgdir}"/usr/share/doc/${_pkgname}/scripts/README.pdf
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/${_pkgname}/LICENSE
}

# vim:set ts=2 sw=2 et:
