# Maintainer: noobping <hello (at) noobping _dot_ dev>
# Contributor: k8ieone <rostik.medved (at) gmail _dot_ com>
# Contributor: satcom886 <rostik.medved (at) gmail _dot_ com>
#
# PKGBUILD based on bobpaul's ${pkgname}-git package

pkgname=maubot
pkgver=0.3.1
pkgrel=3
pkgdesc="A plugin-based Matrix bot system"
arch=(any)
license=(AGPLv3)
url="https://github.com/maubot/maubot"
depends=('sudo' 'python-sqlalchemy' 'python-aiohttp' 'python-aiosqlite' 'python-asyncpg' 'python-attrs' 'python-bcrypt' 'python-click' 'python-colorama' 'python-commonmark' 'python-jinja' 'python-mautrix' 'python-packaging' 'python-questionary' 'python-ruamel-yaml' 'python-yarl')
makedepends=('python-pre-commit>=2.10.1' 'python-isort>=5.10.1' 'python-black>=22.3' 'yarn')
optdepends=(
  "python-olm: e2be"
  "python-pycryptodome: e2be"
  "python-unpaddedbase64: e2be"
)
backup=(etc/${pkgname}/config.yaml)
install=${pkgname}.install
source=("${pkgname}-${pkgver/_rc/-rc}.tar.gz"::"${url}/archive/v${pkgver/_rc/-rc}.tar.gz"
    "sysusers-${pkgname}.conf"
    "tmpfiles-${pkgname}.conf"
    "${pkgname}.service")
sha256sums=('f3189ab1846274efe20649ecd31943a1c7b12ecb52d845e62d8e7a0fdf3db933'
            'e2f01fd60338dd576bb72dee2f536210cb54540ace4a40aa94b5aebe6944ba0f'
            '3fda190e5e5a2dff7c6192c27427a902c286069fac6b56e9abf61b021d49bf9a'
            '8dfbed8ad630cc5ab0e111a7e5da3245ddf82881a00ed6b540bfdcb7ece33083')

prepare() {
  cd "${pkgname}-${pkgver/_rc/-rc}"
  msg2 'Applying patch to permit use of newest mautrix version'
  sed -i 's/^mautrix==/mautrix>=/' requirements.txt
  # I don't think we need ^^^^ this
  # (actually we need that...)
  msg2 'Build static files for management frontend'
  cd "${pkgname}/management/frontend"
  yarn -s
  yarn build -s
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver/_rc/-rc}"
  python setup.py install --root="${pkgdir}/" --optimize=1
  install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE

  cd "${pkgname}"
  install -Dm600 example-config.yaml ${pkgdir}/etc/${pkgname}/config.yaml
  install -Dm600 example-config.yaml ${pkgdir}/usr/share/${pkgname}/example-config.yaml

  cd "${srcdir}/"
  install -Dm644 ${pkgname}.service -t  ${pkgdir}/usr/lib/systemd/system/
  install -Dm644 sysusers-${pkgname}.conf ${pkgdir}/usr/lib/sysusers.d/${pkgname}.conf
  install -Dm644 tmpfiles-${pkgname}.conf ${pkgdir}/usr/lib/tmpfiles.d/${pkgname}.conf

  rm ${pkgdir}/usr/example-config.yaml
}
