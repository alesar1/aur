# Maintainer: William Turner <willtur.will@gmail.com>
pkgname=sqlops
pkgver=0.32.1
pkgrel=1
pkgdesc="SQL Operations Studio is a data management tool that enables you to work with SQL Server, Azure SQL DB and SQL DW from Windows, macOS and Linux."
arch=('x86_64')
url="https://github.com/Microsoft/sqlopsstudio"
license=('custom: microsoft')
depends=('fontconfig' 'libxtst' 'gtk2' 'python' 'cairo' 'alsa-lib' 'nss' 'gcc-libs' 'glibc' 'libxss' 'gconf' 'libxkbfile' 'libunwind' 'libsecret' 'curl')
optdepends=('krb5: Windows authentication support')
options=('staticlibs')
source=("https://github.com/Microsoft/sqlopsstudio/releases/download/${pkgver}/sqlops-linux-${pkgver}.tar.gz"
	'sqlops.desktop')
sha256sums=('878407416d6c6d5b4e796ef8d2b6f05bb25da43f0b3474f29074b25c044c8361'
            'b5ad95bef9b56aba179c642e0edac04c32aa8cb3c4c0428cf0257119995e1dc2')

package() {
  install -d "${pkgdir}/usr/share/${pkgname}"
  cp -r "${srcdir}/sqlops-linux-x64/"* "${pkgdir}/usr/share/${pkgname}"

  # Symlink the SQL Service package as Unknown to workaround distro detection issues
  ln -s "./Linux" "${pkgdir}/usr/share/${pkgname}/resources/app/extensions/mssql/sqltoolsservice/Unknown"

  # Symlink the startup script in /usr/bin
  install -d "${pkgdir}/usr/bin"
  ln -s "/usr/share/${pkgname}/bin/sqlops" "${pkgdir}/usr/bin/sqlops"

  # Add the .desktop file
  install -D -m644 "${srcdir}/sqlops.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"

  # Install the license file
  install -D -m644 "${srcdir}/sqlops-linux-x64/resources/app/LICENSE.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
