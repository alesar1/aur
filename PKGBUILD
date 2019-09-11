# Maintainer: William Turner <willtur.will@gmail.com>
pkgname=azuredatastudio
pkgver=1.11.0
pkgrel=1
pkgdesc="Azure Data Studio is a data management tool that enables you to work with SQL Server, Azure SQL DB and SQL DW (formerly SQL Operations Studio)."
arch=('x86_64')
url="https://github.com/Microsoft/azuredatastudio"
license=('custom: microsoft')
depends=('fontconfig' 'libxtst' 'gtk2' 'python' 'cairo' 'alsa-lib' 'nss' 'gcc-libs' 'glibc' 'libxss' 'gconf' 'libxkbfile' 'libunwind' 'libsecret' 'curl')
makedepends=('sed')
optdepends=('krb5: Windows authentication support')
provides=('sqlops')
conflicts=('sqlops')
options=('staticlibs')
source=("https://github.com/Microsoft/azuredatastudio/releases/download/${pkgver}/azuredatastudio-linux-${pkgver}.tar.gz"
        "https://raw.githubusercontent.com/microsoft/azuredatastudio/${pkgver}/resources/linux/code.desktop")
sha256sums=('d61ab3e9372112eccf63b80c00d5028dc70917c3c7eb90db9235fb96b8cc6d44'
            'fdf6f3a119e06d91bcbef2babc3b8b1730ae7e69756cac0dc40af8920bbeb194')

prepare() {
  sed -i "s|/usr/share/@@NAME@@/@@NAME@@|@@NAME@@|g
          s|@@NAME_SHORT@@|${pkgname}|g
          s|@@NAME_LONG@@|Azure Data Studio|g
          s|@@NAME@@|${pkgname}|g
          s|@@ICON@@|${pkgname}|g
          s|inode/directory;||" code.desktop
}

package() {
  install -d "${pkgdir}/opt/${pkgname}"
  cp -a "azuredatastudio-linux-x64/"* "${pkgdir}/opt/${pkgname}"

  # Symlink the startup script in /usr/bin
  install -d "${pkgdir}/usr/bin"
  ln -s "/opt/${pkgname}/bin/azuredatastudio" "${pkgdir}/usr/bin/${pkgname}"
  # Also add an alias for the previous name to hopefully not break things too much
  ln -s "/opt/${pkgname}/bin/azuredatastudio" "${pkgdir}/usr/bin/sqlops"

  # Add the icon and desktop file
  install -D -m644 "azuredatastudio-linux-x64/resources/app/resources/linux/code.png" "${pkgdir}/usr/share/icons/${pkgname}.png"
  install -D -m644 code.desktop "${pkgdir}/usr/share/applications/${pkgname}.desktop"

  # Install the license file
  install -D -m644 "azuredatastudio-linux-x64/resources/app/LICENSE.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
