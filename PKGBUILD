# Maintainer: su226 <thesu226 at outlook dot com>
# Contributor: alphRomeo323 <alpharomeo323dev at protonmail dot com>
# Contributor: William Brown <glowinthedarkcia at horsefucker dot org>
pkgname=ftba
pkgver=202211021238_4322c4d8d1_release
pkgrel=1
url="https://feed-the-beast.com/app"
arch=(x86_64)
pkgdesc="Offers many different styles of Minecraft modpacks to the community."
source=("https://apps.modpacks.ch/FTBApp/release/${pkgver//_/-}/FTBA_linux_${pkgver//_/-}.deb"
        "ftb-app.desktop")
sha256sums=("b16db71147ed0502baf503b58ac7af4be893a165f510cbf9ec8adc735f4b2d90"
            "2b50da4dc2811b175e5602e91dfe18e981cba3e2e80deccb8f12b59776d8c530")
license=("LGPL2.1")
depends=("java-runtime=17" "alsa-lib" "nss" "gtk3")
# FTBA will download Adoptium for Minecraft, although system Java can be used too.
optdepends=("java-runtime=11: For playing some version of Minecraft with system Java."
            "java-runtime=8: For playing some version of Minecraft with system Java.")

package() {
  cd "$pkgdir"
  tar -xzf "$srcdir/data.tar.gz"

  mkdir -p usr/{bin,lib,share/applications,share/icons/hicolor/512x512/apps}
  cp "$srcdir/ftb-app.desktop" usr/share/applications

  # remove windows and apple specific files
  rm -R opt/FTBA/bin/{ftbapp.app,{,**/}*.{exe,dll}}

  # remove bundled jre, java-runtime=17 is dependency.
  rm -R opt/FTBA/jre

  # Do not install to /opt
  mv opt/FTBA usr/lib/ftb-app
  rmdir opt
  chmod +x usr/lib/ftb-app/bin/ftb-app
  mv usr/lib/ftb-app/FTBApp usr/lib/ftb-app/ftb-app
  cp usr/lib/ftb-app/.install4j/FTBApp.png usr/share/icons/hicolor/512x512/apps/ftb-app.png
  ln -s /usr/lib/ftb-app/ftb-app usr/bin/ftb-app
}
