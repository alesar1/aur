# Maintainer: William Turner <willtur.will@gmail.com>
pkgname=azuredatastudio
pkgver=1.18.0
pkgrel=1
pkgdesc="Azure Data Studio is a data management tool that enables you to work with SQL Server, Azure SQL DB and SQL DW (formerly SQL Operations Studio)."
arch=('x86_64')
url="https://github.com/Microsoft/azuredatastudio"
license=('custom: microsoft')
depends=('fontconfig' 'libxtst' 'gtk2' 'python' 'cairo' 'alsa-lib' 'nss' 'gcc-libs' 'glibc' 'libxss' 'libxkbfile' 'libunwind' 'libsecret' 'curl')
makedepends=('sed')
optdepends=('krb5: Windows authentication support')
provides=('sqlops')
conflicts=('sqlops')
options=('staticlibs')
source=("https://azuredatastudiobuilds.blob.core.windows.net/releases/${pkgver}/azuredatastudio-linux-${pkgver}.tar.gz"
        "https://raw.githubusercontent.com/microsoft/azuredatastudio/${pkgver}/resources/linux/code.desktop")
sha256sums=('8a02dfc5e6aebb0a7f3158bc1b6e65c1630a8eee446c1f99cc2bccceb0f8904b'
            'ff4696bdbe8047e0222597831564b78a741dc9597b10a5eca6f901d751c1553e')

prepare() {
  sed -i "s|/usr/share/@@NAME@@/@@NAME@@|@@NAME@@|g
          s|@@NAME_SHORT@@|${pkgname}|g
          s|@@NAME_LONG@@|Azure Data Studio|g
          s|@@NAME@@|${pkgname}|g
          s|@@EXEC@@|/opt/${pkgname}/bin/azuredatastudio|g
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
