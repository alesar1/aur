# Maintainer: Aaron Coach <aur at ezpz dot cz>
# Contributor: Nikolay Bryskin <devel.niks at gmail dot com>
# Contributor: Carlos Galindo <carlos.s.galindo (at) gmail.com>

_npmname=meshcentral
_npmver=1.0.52
pkgname=meshcentral
pkgver=1.0.52
pkgrel=1
pkgdesc="The open source, multi-platform, self-hosted, feature packed web site for remote device management"
arch=(any)
url="https://meshcentral.com/info/"
license=(Apache)
makedepends=('npm')
depends=('nodejs<18.1.0')
optdepends=('nodejs-modern-syslog: syslog support'
            'nodejs-nodemailer: SMTP support'
            'nodejs-passport-saml: SAML authentication support')
backup=('etc/meshcentral/config.json' 'var/lib/meshcentral')
source=("https://registry.npmjs.org/$_npmname/-/$_npmname-$_npmver.tgz"
        "$_npmname.service"
        "$_npmname.sysusers"
        "$_npmname.tmpfiles")
noextract=("$_npmname-$_npmver.tgz")
sha256sums=('2d1bf709ab320ff81f3ab9a0351c21b9db0251505eb6176e094dae8268424f77'
            'd53889dc58f968fa63cdbd8b245f154fc8170262908a832de674962ff2fa8b85'
            'd907415d1be94568c92d3a05e70dd855f004ebed2c4170f5c2d2f36c0dfd5199'
            '9968e59627f098fc5e2cbf0a0f1e11054e01ccd793d9098b5ff101c4e14f278b')

package() {
  cd "$srcdir"
  local _npmdir="$pkgdir/usr/lib/node_modules/"
  mkdir -p "$_npmdir"
  cd "$_npmdir"
  npm install -g --prefix "$pkgdir/usr" $_npmname@$_npmver archiver@4.0.2 otplib@10.2.3

  # Non-deterministic race in npm gives 777 permissions to random directories.
  # See https://github.com/npm/npm/issues/9359 for details.
  find "${pkgdir}/usr" -type d -exec chmod 755 {} +

  # npm gives ownership of ALL FILES to build user
  # https://bugs.archlinux.org/task/63396
  chown -R root:root "${pkgdir}"

  # Remove references to package and source directories
  find "$pkgdir" -name package.json -print0 | xargs -r -0 sed -i '/_where/d'

  # Our additional files
  install -D "${srcdir}/$_npmname.service" -t "${pkgdir}/usr/lib/systemd/system"
  install -D "${srcdir}/$_npmname.sysusers" "${pkgdir}/usr/lib/sysusers.d/$_npmname.conf"
  install -D "${srcdir}/$_npmname.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/$_npmname.conf"

  # Default configuration
  install -D "${pkgdir}/usr/lib/node_modules/$_npmname/sample-config-advanced.json" "${pkgdir}/etc/$_npmname/config.json"

  # Data directories
  install -m 750 -d "${pkgdir}/var/lib/${_npmname}"
  install -m 750 -d "${pkgdir}/var/lib/${_npmname}/{data,files}"
}

# vim:set ts=2 sw=2 et:
